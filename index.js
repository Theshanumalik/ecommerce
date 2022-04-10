const express = require("express");
const dbCon = require("./dbCon");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

dbCon();

app.use("/api/product", require("./routes/productRoute"));

app.listen(5000, () => {
  console.log("Listening at http://127.0.0.1:5000/");
});
