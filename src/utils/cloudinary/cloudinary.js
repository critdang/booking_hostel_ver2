require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const imageProcess = {
  upload: async (image, userId) => {
    try {
      const fileStr = image.path;
      await cloudinary.uploader.upload(fileStr, {
        public_id: userId,
        upload_preset: 'dev_setups',
      });
    } catch (e) {
      console.log(e);
    }
  },
};

module.exports = { cloudinary, imageProcess };
