echo 'Install curl for installation tool'
sudo apt-get update
sudo apt-get install -y curl
sudo apt-get install -y redis-server

# echo 'Install mysql'
# curl -OL https://dev.mysql.com/get/mysql-apt-config_0.8.3-1_all.deb
# sudo dpkg -i mysql-apt-config*
# sudo apt-get install -y mysql-server
# mysql_secure_installation

echo 'Install python'
sudo apt-get install -y python2.7

echo 'Install nvm'
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
source ~/.bashrc

echo 'Install nodejs'
. $HOME/.nvm/nvm.sh && nvm install 11.0.0
. $HOME/.nvm/nvm.sh && npm install bower -g
. $HOME/.nvm/nvm.sh && npm install pm2 -g

echo 'Install nginx'
sudo apt-get install -y nginx

