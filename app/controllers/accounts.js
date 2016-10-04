'use strict';

exports.main = {

  handler: function (request, reply) {
    reply.view('main', {title: 'Welcome to Donations'});
  },

};

exports.signup = {

  handler: function (request, reply) {
    reply.view('signup', {title: 'Sign up for Donations'});
  },

};

exports.register = {

  handler: function (request, reply) {
    const data = request.payload;
    this.users.push(data);
    reply.redirect('/login');
  },

};

exports.login = {

  handler: function (request, reply) {
    reply.view('login', {title: 'Login to Donations'});
  },

};

exports.authenticate = {

  handler: function (request, reply) {
    const user = request.payload;

    for (let i = 0; i < this.users.length; i++) {
      if (user.email === this.users[i].email) {
        this.currentUser = user;
        reply.redirect('/home');
      } else {
        reply.view('login', {title: 'Login to Donations'});
      }
    }
  },

};

exports.logout = {

  handler: function (request, reply) {
    reply.redirect('/');
  },

};
