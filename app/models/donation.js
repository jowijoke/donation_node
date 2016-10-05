const mongoose = require('mongoose');

const donationSchema = mongoose.Schema({
  donor: String,
  amount: Number,
  method: String,
});

const Donation = mongoose.model('Donation', donationSchema);
module.exports = Donation;
