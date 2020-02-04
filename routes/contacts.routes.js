const express = require("express");

const authMiddleware = require("../middlewares/auth.middleware");
const User = require("../models/User");
const Contact = require("../models/Contact");

const router = express.Router();

// @route   GET api/contacts
// @desc    Get all contacts of logged in user
// @access  Private
router.get("/", authMiddleware, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1
    });
    res.send(contacts);
  } catch (err) {
    console.log(err);
    res.status(500).send("server Error");
  }
});

// @route   POST api/contacts
// @desc    Add a new contact
// @access  Private
router.post("/", (req, res) => {
  res.send("Add contact");
});

// @route   PUT api/contacts/:id
// @desc    Update a contect
// @access  Private
router.put("/:id", (req, res) => {
  res.send("Update contact");
});

// @route   DELETE api/contacts/:id
// @desc    delete a contect
// @access  Private
router.delete("/:id", (req, res) => {
  res.send("Delete contact");
});

module.exports = router;
