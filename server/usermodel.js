const { default: mongoose } = require("mongoose");

const userschema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "please provide name"],
    unique: [true, "username exist"],
  },
  password: {
    type: String,
    required: [true, "please provide name"],
    unique: false,
  },

  email: {
    type: String,
    required: [true, "please provide email"],
    unique: true,
  },

  firstname: { type: String },
  lastname: { type: String },
  mobile: { type:Number },
  address: { type: String },
  profile: { type: String },

});

module.exports=mongoose.model('usermodel',userschema)

