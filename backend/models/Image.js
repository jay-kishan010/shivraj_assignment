const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({

  caption: {
    type: String,
    required: true,
  },
  imagePath: {
    type: String,
    required: true,
  },
 
}

, { timestamps: true });

module.exports = mongoose.model('Image', ImageSchema);
