#!/usr/bin/env node

var NGINXRatelimiter = require('../lib/nginxratelimiter'),
    config = require('config');

var master = new NGINXRatelimiter.Master(config);

master.listen();
