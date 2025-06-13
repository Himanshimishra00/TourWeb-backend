const Package = require('../models/Package');

exports.getTopSellingPackages = async (req, res) => {
  try {
    const data = await Package.find(); 
    res.status(200).json(data);
  } catch {
    res.status(500).json({ message: 'Failed to fetch packages' });
  }
};
