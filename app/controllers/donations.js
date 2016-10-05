'use strict';
const Donation = require('../models/donation');

exports.home = {

  handler: (request, reply) => {
    reply.view('home', { title: 'Make a Donation' });
  },

};

exports.report = {

  handler: function (request, reply) {
    Donation.find({}).exec().then(allDonations => {
      reply.view('report', {
        title: 'Donations to Date',
        donations: allDonations,
      });
    }).catch(err => {
      reply.redirect('/');
    });
  },

};

exports.donate = {

  handler: function (request, reply) {
    let data = request.payload;
    data.donor = request.auth.credentials.loggedInUser;
    const donation = new Donation(data);
    donation.save().then(newDonation => {
      reply.redirect('/report');
    }).catch(err => {
      reply.redirect('/');
    });
  },

};
