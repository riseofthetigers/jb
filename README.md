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

1. Create the `jobletics-test` database, see `config/config.js`

2. Run

```bash
$ npm test
```
