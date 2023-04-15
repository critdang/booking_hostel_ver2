1. Create user: `adduser hitb`
2. Assign sudo permission: `usermod -aG sudo hitb`
3. Add ssh key for user:
```
	mkdir -p /home/hitb/.ssh
	touch /home/hitb/.ssh/authorized_keys # add ssh pub key into this file
	chmod 700 /home/hitb/.ssh
	chmod 644 /home/hitb/.ssh/authorized_keys
    chown -R hitb:hitb /home/hitb/.ssh/
```
4. Ignore password for sudo command: `sudo echo "hitb ALL=(ALL:ALL) NOPASSWD: ALL" > /etc/sudoers.d/hitb`
5. Using hitb account to ssh to server
6. Create Backend folder `mkdir backend`
7. Install environment on server `fab install_server:SERVER_NAME`
8. Install mysql from VM server
```
sudo apt update
sudo apt install mysql-server
sudo mysql_secure_installation
```
9. Create mysql account 
```
CREATE SCHEMA `hitb` DEFAULT CHARACTER SET utf8 ;
CREATE USER 'hitb'@'localhost' IDENTIFIED BY 'Q{Qh<KR9DScPXx`5';
GRANT ALL PRIVILEGES ON *.* TO 'hitb'@'localhost' WITH GRANT OPTION;

GRANT ALL ON *.* TO 'hitb'@'%' IDENTIFIED BY 'Q{Qh<KR9DScPXx`5' WITH GRANT OPTION;
FLUSH PRIVILEGES;
```
