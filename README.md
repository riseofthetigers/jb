# jb

```bash
$ npm install
$ bower install
```

### Development

#### React

```bash
$ ./node_modules/.bin/webpack --watch
```

#### Migrate DB

http://sequelize.readthedocs.org/en/latest/docs/migrations/

```bash
$ ./node_modules/.bin/sequelize help
$ ./node_modules/.bin/sequelize help:migration:create
$ ./node_modules/.bin/sequelize help:db:migrate
```

#### Start Server

```bash
$ npm run devstart
```

#### PM2

```bash
$ pm2 logs
$ pm2 monit
```

### Test

```bash
$ npm test
```
