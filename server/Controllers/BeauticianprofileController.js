// controllers/profileController.js
const Profile = require('../Models/Beauticianprofile.model');

exports.createProfile = async (req, res) => {
  try {
    const profile = new Profile(req.body);
    await profile.save();
    res.status(201).json(profile);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.status(200).json(profiles);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const profile = await Profile.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(profile);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteProfile = async (req, res) => {
  try {
    await Profile.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Profile deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.showProfile = async (req, res) => {
  try {
    const beautician = await Profile.findById(req.params.id);
    res.status(200).json(beautician);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.toggleVerification = async (req, res) => { 
  const { id } = req.params; 
  try { const beautician = await Profile.findById(id); 
    if (!beautician) { return res.status(404).json({ error: 'Beautician not found' }); }
     beautician.isVerified = !beautician.isVerified; 
     await beautician.save(); res.status(200).json(beautician);
     }
      catch (error) { 
        res.status(500).json({ error: 'Failed to update verification status' });
       } };