module.exports = {
    production: {
      dbURL: '',
      jwtSecret: '',
      saltRound: '',
    },
    development: {
      dbURL: 'mongodb+srv://dido:bravoure0804@aspiccluster.gkxq9.mongodb.net/wenzeshop?retryWrites=true&w=majority',
      jwtSecret: 'devjwtsecret',
      saltRound: '',
    },
    test: {
      dbURL: '',
      jwtSecret: '',
      saltRound: '',
    },
  };
  