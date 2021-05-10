var NGINXRatelimiter = {
  Master: require('./master'),
  Gatekeeper: require('./gatekeeper')
};

module.exports = NGINXRatelimiter;
