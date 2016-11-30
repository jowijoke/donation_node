'use strict';

const Candidate = require('../models/candidate');
const Boom = require('boom');

exports.create = {

  auth: 'jwt',

  handler: function (request, reply) {
    const candidate = new Candidate(request.payload);
    candidate.save().then(newCandidate => {
      reply(newCandidate).code(201);
    }).catch(err => {
      reply(Boom.badImplementation('error creating candidate'));
    });
  },

};

exports.deleteAll = {

  auth: 'jwt',

  handler: function (request, reply) {
    Candidate.remove({}).then(err => {
      reply().code(204);
    }).catch(err => {
      reply(Boom.badImplementation('error removing candidates'));
    });
  },

};

exports.deleteOne = {

  auth: 'jwt',

  handler: function (request, reply) {
    Candidate.remove({ _id: request.params.id }).then(candidate => {
      reply(candidate).code(204);
    }).catch(err => {
      reply(Boom.notFound('id not found'));
    });
  },

};

exports.find = {

  auth: 'jwt',

  handler: function (request, reply) {
    Candidate.find({}).exec().then(candidates => {
      reply(candidates);
    }).catch(err => {
      reply(Boom.badImplementation('error accessing db'));
    });
  },

};

exports.findOne = {

  auth: 'jwt',

  handler: function (request, reply) {
    Candidate.findOne({ _id: request.params.id }).then(candidate => {
      if (candidate != null) {
        reply(candidate);
      }

      reply(Boom.notFound('id not found'));
    }).catch(err => {
      reply(Boom.notFound('id not found'));
    });
  },

};
