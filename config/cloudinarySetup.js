const cloudinary = require('cloudinary').v2;

const cloudinarySetup = async () => {
  cloudinary.config({
    cloud_name: 'yiino-technologies',
    api_key: 198671239235236,
    api_secret: 'qGnBb1lBqHCxW_JLks0vQkWJRm0'
  });
}

module.exports = cloudinarySetup;