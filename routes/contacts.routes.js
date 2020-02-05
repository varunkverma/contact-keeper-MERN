const express = require("express");
const { check, validationResult } = require("express-validator");
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
router.post(
  "/",
  [
    authMiddleware,
    [
      check("name", "Please enter a name")
        .not()
        .isEmpty(),
      check("email", "Please provide a valid email").isEmail()
    ]
  ],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).send({ error: error.array() });
    }

    try {
      const { name, email, phone, type } = req.body;
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id
      });

      const contact = await newContact.save();
      res.status(201).json(contact);
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route   PUT api/contacts/:id
// @desc    Update a contect
// @access  Private
router.put("/:id", authMiddleware, async (req, res) => {});

// @route   DELETE api/contacts/:id
// @desc    delete a contect
// @access  Private
router.delete("/:id", (req, res) => {
  res.send("Delete contact");
});

module.exports = router;
