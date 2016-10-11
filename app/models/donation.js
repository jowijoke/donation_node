const mongoose = require('mongoose');

const donationSchema = mongoose.Schema({
  donor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  amount: Number,
  method: String,
});

const Donation = mongoose.model('Donation', donationSchema);
module.exports = Donation;
