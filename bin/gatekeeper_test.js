#!/usr/bin/env node

var express = require('express'),
    NGINXRatelimiter = require('../lib/nginxratelimiter');

var gk = new NGINXRatelimiter.Gatekeeper({
    domain: "default",
    server: "localhost",
    identifierCB: NGINXRatelimiter.Gatekeeper.REMOTE_ADDR
});

var app = express();

app.use(express.logger());

app.get('/', gk.middleware(), function(req, res) {
  res.send("OK\n");
});

app.listen(8000);
