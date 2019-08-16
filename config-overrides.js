// eslint-disable-next-line @typescript-eslint/no-var-requires
const hotLodaer = require('react-app-rewire-hot-loader');

module.exports = function override(config, env) {
  return hotLodaer(config, env);
};
