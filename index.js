const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config()

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DBConnection successful!"))
  .catch((error) => console.log(error));

app.get("/api/test", () => {
    console.log("test is successful")
})

app.listen(process.env.PORT || 3000, () => {
  console.log("Backend server is running!");
});
