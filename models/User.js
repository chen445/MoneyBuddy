const mongoose = require('mongoose');
const model_constants = require('./Constants');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    icons: {
      type: Array,
      default: model_constants.DEFAULT_ICONS,
    },
    point: {
      type: Number,
      default: model_constants.DEFAULT_POINT,
    },
    rewarddate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('users', UserSchema);
module.exports = User;