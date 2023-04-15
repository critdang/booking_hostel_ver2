# import fabric third-party
from fabric.api import local, run, env
from fabric.colors import green, red
from fabric.contrib.files import exists

# local env config
PATH_INSTALL_FILE = './bash/install_environment.sh'

SERVERS = dict(
    devel = dict(
        host = '178.128.104.185',
        user = 'hitb',
        branch = 'develop',
        src = '../',
        dest = '/home/hitb/backend',
        excludeFile = '\'../rsync_exclude.txt\'',
        adminSrc = '../../admin/',
        adminDest = '/home/hitb/admin',
        sshKey = './dev_hitb'
    )
)


def prepare_env(server_name='devel'):
    env.host_string = SERVERS[server_name]['host']
    env.user = SERVERS[server_name]['user']
    env['name'] = server_name
    if SERVERS[server_name]['sshKey']:
        env.key_filename = SERVERS[server_name]['sshKey']


def connect_server(server_name='devel'):
    """
    Script to connect to server
    """
    prepare_env(server_name)

    if exists('/etc'):
        print(green('Connected to %s server.....' % server_name))
        return True
    else:
        print(red('Can\'t connect to %s server. Please double check your list of IPs in hosts' % server_name))
        return False

def install_server(server_name='devel'):
    """
    Script to install environment
    """

    # read install environment file
    install_file = open(PATH_INSTALL_FILE, 'r')

    if install_file:
        if connect_server(server_name):

            # iterator all line of install file
            for line in install_file:
                if line[0] == '#':
                    run('echo "%s"' % line.strip())
                else:
                    run(line.strip())
    else:
        print(red('the install file is not existed!'))
    
    install_file.close()


def deploy(server_name='devel'):
    """
    Script to deploy special server
    """
    print(green('Start deploy %s.....' % server_name))

    sync_code_to_server(server_name)
    restart_server(server_name)

def deploy_admin(server_name='devel'):
    """
    Script to deploy admin panel
    """
    print(green('Start deploy %s.....' % server_name))

    # run build frontend
    local('cd ../../admin/ && ng build')

    local('echo ')
    local('rsync -avHPe ssh %s -e ssh %s@%s:%s --exclude-from %s' % (SERVERS[server_name]['adminSrc'], SERVERS[server_name]['user'], SERVERS[server_name]['host'], SERVERS[server_name]['adminDest'], SERVERS[server_name]['excludeFile']))


def pull(branch='devel'):
    """
    Script to pull code from special branch on github to local
    """
    print(green('Start pushing code.....'))

    local('git stash')
    local('git checkout %s' % branch)
    local('git pull origin %s' % branch)
    print(green('All code has been pulled to githup.....'))


def sync_code_to_server(server_name='devel'):
    """
    Script to sync built code from local to server
    """
    if connect_server(server_name):
        if not exists(SERVERS[server_name]['dest']):
            run('mkdir -p %s' % SERVERS[server_name]['dest'])

    print(green('Start sync code to %s server.....' % server_name))
    local('echo Build app...')
    local('gulp build')

    if SERVERS[server_name]['sshKey']:
        local('rsync -avHPe ssh %s -e "ssh -i %s" %s@%s:%s --exclude-from %s' % (SERVERS[server_name]['src'], SERVERS[server_name]['sshKey'], SERVERS[server_name]['user'], SERVERS[server_name]['host'], SERVERS[server_name]['dest'], SERVERS[server_name]['excludeFile']))
    else:
        local('rsync -avHPe ssh %s -e ssh %s@%s:%s --exclude-from %s' % (SERVERS[server_name]['src'], SERVERS[server_name]['user'], SERVERS[server_name]['host'], SERVERS[server_name]['dest'], SERVERS[server_name]['excludeFile']))

def restart_server(server_name='devel'):
    """
    Script to restart special server
    """
    print(green('Restart hitb on %s server.....' % server_name))
    if connect_server(server_name):
        # run('sudo service hitb restart')
        run('[ -s "/home/ubuntu/.nvm/nvm.sh" ] && \. "/home/ubuntu/.nvm/nvm.sh" && pm2 reload all')
