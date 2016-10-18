const mongoose = require('mongoose');

const donationSchema = mongoose.Schema({
  donor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  candidate: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Candidate',
  },
  amount: Number,
  method: String,
});

const Donation = mongoose.model('Donation', donationSchema);
module.exports = Donation;
