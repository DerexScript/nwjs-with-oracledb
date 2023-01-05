# install oracle db with docker
```
docker pull oracleinanutshell/oracle-xe-11g
docker run -d -p 1521:1521 -e ORACLE_DISABLE_ASYNCH_IO=true -e ORACLE_ALLOW_REMOTE=true oracleinanutshell/oracle-xe-11g
```
# credentials
```
hostname: localhost
port: 1521
sid: xe
username: system
password: oracle

Password for SYS & SYSTEM
oracle
```

# useful commands
```
-- create a new user
create user derex identified by 123123;

-- grant privileges
grant ALL PRIVILEGES to derex;
```

# client db
```
with this client you can create tables and much more
```
[Oracle Sql Developer](https://www.oracle.com/database/sqldeveloper/technologies/download/)


## ☕ Instructions

```
need to have Oracle Instant Client basic or Basic Light installed
and set its path in system environment variables
```
[Oracle Instant Client basic or Basic Light](https://www.oracle.com/database/technologies/instant-client/winx64-64-downloads.html)

[Installation Instructions](https://node-oracledb.readthedocs.io/en/latest/user_guide/installation.html#instwin)
```
* npm install
* npm run start
```
