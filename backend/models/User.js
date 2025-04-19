const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    collection: 'user', // Ensure it uses 'users' collection in the 'delta' database
  }
);

module.exports = mongoose.model("User", userSchema);
