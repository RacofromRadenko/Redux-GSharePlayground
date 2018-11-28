const rewireSass = require('react-app-rewire-scss');

module.exports = function override(config, env) {
    config = rewireSass(config, env);
    // with loaderOptions
    // config = rewireSass.withLoaderOptions(someLoaderOptions)(config, env);
    return config;
  }