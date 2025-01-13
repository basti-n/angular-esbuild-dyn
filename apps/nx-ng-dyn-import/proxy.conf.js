const PROXY_CONFIG = {
  '/api/*': {
    target: 'test',
    secure: false,
  },
};

module.exports = PROXY_CONFIG;
