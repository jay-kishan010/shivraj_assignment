const express = require('express');
const multer = require('multer');
const Image = require('../models/Image');
const jwt = require('jsonwebtoken');
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

// const verifyToken = (req, res, next) => {
//   const token = req.header('Authorization');
//   if (!token) {
//     return res.status(401).json({ message: 'No token, authorization denied' });
//   }
//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded.id;
//     next();
//   } catch (err) {
//     res.status(401).json({ message: 'Token is not valid' });
//   }
// };

router.post('/img', upload.single('image'), async (req, res) => {
  const { caption } = req.body;
  const imagePath = req.file.path;

  try {
    const image = new Image({
      
      caption,
      imagePath,
    });

    await image.save();
    res.status(201).json({ message: 'Image uploaded successfully', image });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


router.get('/gallery', async (req, res) => {
  try {
    const images = await Image.find().sort({ createdAt: -1 }); 
    res.json({ success: true, images });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
