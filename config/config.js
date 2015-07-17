// export database config
module.exports = {

  // "postgres://rahul:jobletics@localhost:5432/jobletics"
  "development": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.DB_HOST || "localhost",
    "dialect": "postgres",
    "port": "5432",

    "define": {
      "timestamps": true,
      // tablename, filedname, keys will be underscored
      "underscored": true,
      "charset": "utf8"
    },
    "logging": console.log

  },

  "production": {
    "username": "cdhdbvfqpapsdz",
    "password": "9rjwwXEMbd6nLvr3gSbsVlWiEn",
    "database": "d2494roicfq5mg",
    "host": "ec2-54-235-145-226.compute-1.amazonaws.com",
    "dialect": "postgres",
    "port": "5432"
  },

  "test": {
    "username": "jobletics",
    "password": "jobletics",
    "database": "jobletics-test",
    "host": "192.168.59.103",
    "dialect": "postgres",
    "port": "5432",

    "define": {
      "timestamps": true,
      "underscored": true,
      "charset": "utf8"
    },
    "logging": console.log
  }
};
