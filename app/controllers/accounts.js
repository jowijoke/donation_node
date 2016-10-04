'use strict';

exports.main = {
  auth: false,
  handler: function (request, reply) {
    reply.view('main', {title: 'Welcome to Donations' });
  },

};

exports.signup = {
  auth: false,
  handler: function (request, reply) {
    reply.view('signup', {title: 'Sign up for Donations' });
  },

};

exports.register = {
  auth: false,
  handler: function (request, reply) {
    const user = request.payload;
    this.users[user.email] = user;
    reply.redirect('/login');
  },

};

exports.login = {
  auth: false,
  handler: function (request, reply) {
    reply.view('login', { title: 'Login to Donations' });
  },

};

exports.authenticate = {
  auth: false,
  handler: function (request, reply) {
    const user = request.payload;
    if ((user.email in this.users) && (user.password === this.users[user.email].password)) {
      request.cookieAuth.set({
        loggedIn: true,
        loggedInUser: user.email,
      });
      reply.redirect('/home');
    } else {
      reply.redirect('/signup');
    }
  },

};

exports.viewSettings = {
  auth: false,
  handler: function (request, reply) {
    reply.view('settings', { title: 'Settings Page' });
  },

};

exports.updateSettings = {
  auth: false,
  handler: function (request, reply) {
    const user = request.payload;
    this.users[user.email] = user;
    reply.redirect('/home');
  },

};

exports.logout = {
  auth: false,
  handler: function (request, reply) {
    request.cookieAuth.clear();
    reply.redirect('/');
  },

};
