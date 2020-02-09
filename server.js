const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use("/api/users", require("./routes/users.route"));
app.use("/api/auth", require("./routes/auth.route"));
app.use("/api/contacts", require("./routes/contacts.routes"));

// Serve static assests in production
if (process.env.NODE_ENV === "production") {
  // set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(5000, () => console.log(`Server is listening at port: ${PORT}`));
