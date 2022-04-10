const router = require("express").Router();
const Product = require("../models/Product");
const { Failure, Success } = require("../utils/formatOutput");

router.post("/create", async (req, res) => {
  const { name, stock, images, price, description, catagory } = req.body;

  try {
    const product = await Product.create({
      name,
      stock,
      images,
      price,
      description,
      catagory,
    });
    res.json(new Success(product));
  } catch (error) {
    res.status(500).json(new Failure("Faild to create."));
  }
});

router.get("/", async (req, res) => {
  const { cat, keyword, gte, lte, rate } = req.query;
  let resultLimit = 5;
  let currentPage = req.query.page || 1;
  let skipProducts = resultLimit * (currentPage - 1);
  let filter = {
    $and: [],
  };
  if (cat) {
    filter.$and.push({ catagory: cat });
  }
  if (keyword) {
    filter.$and.push({ name: { $regex: keyword, $options: "i" } });
  }
  if (keyword) {
    filter.$and.push({ name: { $regex: keyword, $options: "i" } });
  }
  if (gte) {
    filter.$and.push({ price: { $gte: gte } });
  }
  if (lte) {
    filter.$and.push({ price: { $lte: lte } });
  }
  if (rate) {
    filter.$and.push({ rating: { $gte: rate } });
  }
  try {
    const products = await Product.find(filter)
      .limit(resultLimit)
      .skip(skipProducts);
    res.json(new Success(products));
  } catch (error) {
    res.status(500).json(new Failure("Faild to create."));
    console.log(error);
  }
});

module.exports = router;
