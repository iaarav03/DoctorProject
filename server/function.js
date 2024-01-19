const express = require("express");
const usermodel = require("./usermodel");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { use } = require("./routes");
const Auth = require("./middleAuth");
const otpGenerator = require("otp-generator");
const localvariables = require("./localvariable");
const patientSchema=require("./patientSchema")

const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, password, email, address, profile } = req.body;
    console.log(username, password, email, profile);
    const existingUsername = await usermodel.findOne({ username });
    const existingEmail = await usermodel.findOne({ email });

    if (existingUsername) {
      return res.send("username already exist");
    }

    if (existingEmail) {
      return res.send("Email already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new usermodel({
      username,
      password: hashedPassword,
      email,
      profile: profile || "",
    });

    await newUser.save();

    res.status(200).send("register successful");
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);

  try {
    const existingUsername = await usermodel.findOne({ username });

    if (!existingUsername) {
      throw new Error("Username not already exists");
    }

    const user = await usermodel.findOne({ username });
    console.log(user);

    if (!user) {
      throw new Error("User not found");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Incorrect password");
    }
    const userId = user._id.toString();
    const token = jwt.sign(
      {
        username: user.username,
        userid: user._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "24hr" }
    );
    res.send({ username: user.username, token });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const getuser = async (req, res) => {
  try {
    const { username } = req.params; // Access the 'username' parameter

    const user = await usermodel.findOne({ username });
    if (!user) {
      res.status(400).send("User not available");
    }
    const { password, ...userr } = user.toObject();

    res.status(200).send(userr);
  } catch (error) {
    res.status(400).send(error.message); // Sending the error message instead of the entire error object
  }
};
const updateuser = async (req, res) => {
  try {
    const { userid } = req.user;
    if (!userid) {
      res.send("id dont provide");
    }
    const body = req.body;

    const updateduser = await usermodel.updateOne({ _id: userid }, body);

    if (!updateduser) {
      throw new Error("Not able to update");
    }

    res.send(updateduser);
  } catch (error) {
    res.send("Error in updating");
  }
};

const getotp = async (req, res) => {
  req.app.locals.Otp = otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    specialChars: false,
    lowerCaseAlphabets: false,
  });
  res.status(201).send({ code: req.app.locals.Otp }); // Use "Otp" instead of "otp"
};
const verifyotp = async (req, res) => {
  const { code } = req.query;


  if (parseInt(req.app.locals.Otp) === parseInt(code)) {
    req.app.locals.Otp = null;
    req.app.locals.resetSession = true;
    console.log("OTP verified successfully");
    return res.status(201).send({ msg: "otp verified successfully" });
  } else {
    console.log("Invalid OTP");
    return res.status(400).send({ error: "invalid otp" });
  }
};

const resetSession = async (req, res) => {
  if (req.app.locals.resetSession) {
    req.app.locals.resetSession = false;
    return res.send({ msg: "Acess granted" });
  }
  return res.status(400).send({ error: "Session expired" });
};

const resetpass = async (req, res) => {
  try {
    if (!req.app.locals.resetSession) {
      throw new Error("Session expired");
    }
    const { username, password } = req.body;

    // Check if the user exists
    const user = await usermodel.findOne({ username });
    if (!user) {
      throw new Error("Username not valid");
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update the user's password
    const updatedUser = await usermodel.updateOne(
      { username },
      { password: hashedPassword }
    );

    res.status(200).send({ message: "Password reset successful" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const verifyuser = async (req, res, next) => {
  try {
    const { username } = req.method == "GET" ? req.query : req.body;
    console.log("hello");

    const user = await usermodel.findOne({ username });
    if (!user) {
      throw new Error("User not found");
    }

    next();
  } catch (error) {
    return res.status(401).send({ error: "Verification failed" });
  }
};

const pregister = async (req, res) => {
  try {
    const { name, email, number, note } = req.body;
    const newPatient = new patientSchema({ name, email, number, note });
    await newPatient.save();
    res.status(201).json({ message: 'Patient added successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }



};

const pdata = async (req, res) => {
  try {
    const patients = await patientSchema.find({});
    res.status(200).json(patients);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }


};




module.exports = {
  register,
  login,
  getuser,
  updateuser,
  getotp,
  verifyotp,
  resetpass,
  resetSession,
  verifyuser,
  pregister,
  pdata,
};
