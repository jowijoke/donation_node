const Accounts = require('./app/controllers/accounts');
const Donations = require('./app/controllers/donations');
const Assets = require('./app/controllers/assets');

module.exports = [

  {method: 'GET', path: '/', config: Accounts.main},
  { method: 'GET', path: '/signup', config: Donations.signup },
  {method: 'POST', path: '/register', config: Accounts.register},
  { method: 'GET', path: '/login', config: Donations.login },
  {method: 'POST', path: '/login', config: Accounts.authenticate},
  {method: 'POST', path: '/donate', config: Donations.donate},
  {method: 'GET', path: '/logout', config: Accounts.logout},

  {method: 'GET', path: '/home', config: Donations.home},
  {method: 'GET', path: '/report', config: Donations.report},

  {
    method: 'GET',
    path: '/{param*}',
    config: { auth: false },
    handler: Assets.servePublicDirectory,
  },

];
