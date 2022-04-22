const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
      text: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    description: { type: String, required: true, maxlength: 2000, text: true },
    price: { type: Number, trim: true, required: true, maxlength: 32 },
    category: { type: ObjectId, ref: "Category" },
    subs: [{ type: ObjectId, ref: "Sub" }],
    quantity: Number,
    sold: { type: Number, default: 0 },
    images: { type: Array },
    shipping: { type: String, enum: ["Yes", "No"] },
    // Changes these to be in the Subs portions subs will be colors
    // existing will be the type of Fabric its made of
    color: {
      type: String,
      enum: [
        "White",
        "Black",
        "Gray",
        "Red",
        "Blue",
        "Green",
        "Orange",
        "Purple",
        "Yellow",
        "Pink",
      ],
    },
    article: {
      type: String,
      enum: [
        "Hat",
        "Tie",
        "Jacket",
        "Coat",
        "Short Sleeve",
        "Long Sleeve",
        "Hoodie",
        "Sweater",
        "Joggers",
        "Shorts",
        "Tracksuit",
        "Vest",
        "Pajamas",
        "Socks",
      ],
    },
    ratings: [{ star: Number, postedBy: { type: ObjectId, ref: "User" } }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
