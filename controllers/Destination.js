const Destination = require('../models/Destination');

exports.getDestinations = async (req, res) => {
  try {
    const data = await Destination.find();
    res.status(200).json(data);
  } catch {
    res.status(500).json({ message: 'Failed to fetch destinations' });
  }
};
