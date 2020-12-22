// module.exports = {
//   development: {
//     "username": "tcfpvjzhcjetln",
//     "password": "bf333f2fde7f34504b7eb24748e628c48fedccd61959c1649e7381cc48aecca1",
//     "database": "d9jl2u5gmj17gq",
//     "host": "ec2-3-211-167-220.compute-1.amazonaws.com",
//     "dialect": "postgres"
//   },
//   production: {
//     "use_env_variable": "postgres://tcfpvjzhcjetln:bf333f2fde7f34504b7eb24748e628c48fedccd61959c1649e7381cc48aecca1@ec2-3-211-167-220.compute-1.amazonaws.com:5432/d9jl2u5gmj17gq",
//     "dialect": "postgres"
//   }
// };

module.exports = {
  development: {
    "username": "yuriy",
    "password": "Test1234!",
    // "username": "root",
    // "password": "root",
    "database": "antey",
    "host": "127.0.0.1",
    "port": "3306",
    "dialect": "mysql"
  },
  production: {
    "use_env_variable": "DATABASE_URL",
    "dialect": "mysql"
  }
};
