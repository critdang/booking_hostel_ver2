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

// Get all images' URLs from a folder
const getFolderImages = async (folderName) => {
  const options = { type: 'upload', prefix: folderName };
  const { resources } = await cloudinary.search.expression(`${folderName}/*`).execute();

  const imageUrls = resources.map((resource) => cloudinary.url(resource.public_id));
  return imageUrls;
};

const test = async () => {
  // Usage
  await getFolderImages('hotel_service').then((urls) => {
    console.log(urls);
  }).catch((error) => {
    console.log(error);
  });
};

module.exports = { cloudinary, imageProcess, test };
