'use strict';

exports.home = {

  handler: (request, reply) => {
    reply.view('home', {title: 'Make a Donation'});
  },

};

exports.report = {

  handler: function (request, reply) {
    reply.view('report', {title: 'Donations to Date',});
  },

};

exports.donate = {

  handler: function (request, reply) {
    reply.redirect('/report');
  },

};

exports.signup = {

  handler: (request, reply) => {
    reply.view('signup', {title: 'Sign up for Donations'});
  },

};

exports.login = {

  handler: (request, reply) => {
    reply.view('login', {title: 'Login to Donations'});
  },

};
