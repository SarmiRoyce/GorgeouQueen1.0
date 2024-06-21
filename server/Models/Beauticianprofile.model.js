const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  experience: { type: String, required: true },
  location: { type: String, required: true },
  // imageUrl: { type: String,
  //    required: true 
  //   },
  services: {
    HairCutting: { type: Boolean, default: false },
    NailArt: { type: Boolean, default: false },
    Manicure: { type: Boolean, default: false },
    Facial: { type: Boolean, default: false },
    Pedicure: { type: Boolean, default: false },
    EyebrowShape: { type: Boolean, default: false },
    HairColoring: { type: Boolean, default: false },
    NormalMakeup: { type: Boolean, default: false },
    BridalMakeup: { type: Boolean, default: false },
    HairStyle: { type: Boolean, default: false },
    SareeDraping: { type: Boolean, default: false },
    NailEnhancements: { type: Boolean, default: false },
  },
  email: { type: String, required: true },
  instagram: { type: String, required: true },
  businessHours: [
    {
      day: { type: String, required: true },
      time: { type: String, required: true },
    }
  ],
  works: [
    {
      imageUrl: { type: String },
      description: { type: String, required: true },
    }
  ],
  isVerified:{
    type:Boolean,
    default: false
  }
});

 const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile
