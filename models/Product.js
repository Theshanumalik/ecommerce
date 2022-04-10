const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter name of product"],
    },
    description: {
      type: String,
    },
    images: {
      type: Array,
    },
    price: {
      type: Number,
      required: [true, "Please enter price of product"],
    },
    rating: {
      type: Number,
      default: 0,
    },
    stock: {
      type: Number,
      required: [true, "Please enter stock of product"],
      default: 1,
    },
    catagory: {
      type: String,
      required: [true, "Please enter name of product"],
    },
    numberOfReviews: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        uid: {
          type: String,
          required: true,
        },
        rate: {
          type: Number,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("product", ProductSchema);
