const express = require("express");

const mongoose = required("mongoose");
const routes = require("./routes");
const app = express();
const port = process.env.PORT || 3001;

// MiddleWare includes...
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, API//view
app.use(routes);

// Connect to Mongo
mongoose.connect(proces.env.MONGODB_URI || "mongod://localhost/box_meals");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎 ==> API server running on ${PORT}`);
});
