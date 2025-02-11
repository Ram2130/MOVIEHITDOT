import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    gener: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    actors: {
      type: String,
      required: true,
    },
    size480p: {
      type: String,
      required: true,
    },
    size720p: {
      type: String,
      required: true,
    },
    size1080p: {
      type: String,
      required: true,
    },
    size1080pa: {
      type: String,
      required: true,
    },
    size720p: {
      type: String,
      required: true,
    },
    trailer: {
      type: String,
      required: true,
    },
    onlineStream: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: mongoose.ObjectId,
      ref: "Category",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
    shipping: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Products", productSchema);