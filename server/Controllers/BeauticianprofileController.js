const multer = require('multer');
const Profile = require('../Models/Beauticianprofile.model');
const { uploaded } = require('../middleware/multer'); 
exports.createProfile = async (req, res) => {
  uploaded(req, res, async (err) => {
    if (err) {
        console.error(err);
        return res.status(500).send('An error occurred while uploading the image.');
    }
    
    const {
        name,
        title,
        experience,
        location,
        services,
        email,
        instagram,
        businessHours,
        works,
        isVerified
    } = req.body;

    try {
        let imageUrl = null;
        if (req.file) {
            // Assuming CloudinaryStorage returns the path of the uploaded image
            imageUrl = req.file.path;
        }

        // Parse JSON strings if they are strings
        const parsedServices = typeof services === 'string' ? JSON.parse(services) : services;
        const parsedBusinessHours = typeof businessHours === 'string' ? JSON.parse(businessHours) : businessHours;
        const parsedWorks = typeof works === 'string' ? JSON.parse(works) : works;

        const profile = new Profile({
            name,
            title,
            experience,
            location,
            imageUrl,
            services: parsedServices,
            email,
            instagram,
            businessHours: parsedBusinessHours,
            works: parsedWorks,
            isVerified
        });

        await profile.save();
        res.json({ profile });
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while saving the profile.');
    }
});
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
  try {
    const beautician = await Profile.findById(id);
    if (!beautician) {
      return res.status(404).json({ error: 'Beautician not found' });
    }
    beautician.isVerified = !beautician.isVerified;
    await beautician.save();
    res.status(200).json(beautician);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update verification status' });
  }
};