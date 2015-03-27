// export database config
module.exports = {

  // "postgres://rahul:jobletics@localhost:5432/jobletics"
  "development": {
    //"username": "fundon",
    //"password": "fdc",
    "username": "rahul",
    "password": "jobletics",
    "database": "jobletics",
    //"host": "192.168.59.103",
    "host": "localhost",
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
    "username": "mjfvucmilnanhg",
    "password": "nOwA73r5O0GbFPtIP0mX16JEYD",
    "database": "d3hgqfoask25fo",
    "host": "ec2-23-21-183-70.compute-1.amazonaws.com",
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
