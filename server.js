const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) =>
  res.json({ msg: "welocme to the contact-keeper API..." })
);

// Define Routes
app.use("/api/users", require("./routes/users.route"));
app.use("/api/auth", require("./routes/auth.route"));
app.use("/api/contacts", require("./routes/contacts.routes"));

const PORT = process.env.PORT || 5000;

app.listen(5000, () => console.log(`Server is listening at port: ${PORT}`));
