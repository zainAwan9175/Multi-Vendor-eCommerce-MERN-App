const express = require("express");
const { isSeller, isAuthenticated } = require("../middleware/auth");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const router = express.Router();
const Product = require("../model/productModel");
// const Order = require("../model/orderModel");
const Shop = require("../model/shopModel");
const cloudinary = require("cloudinary");
const ErrorHandler = require("../utils/ErrorHandler");

// create product
// create product
router.post(
    "/create-product",
    catchAsyncErrors(async (req, res, next) => {
      try {

        const shopId = req.body.shopId;
        const shop = await Shop.findById(shopId);
        if (!shop) {
          return next(new ErrorHandler("Shop Id is invalid!", 400));
        } else {
          let images = [];
  
          // Check if images[] exists and is not a string
          if (Array.isArray(req.body.images)) {
            images = req.body.images; // directly assign if it's already an array
          } else if (req.body.images) {
            // If images[] is a string (Base64), convert it into an array
            images = [req.body.images];
          }
  
          const imagesLinks = [];
  
          // Upload images to Cloudinary
          for (let i = 0; i < images.length; i++) {
            const result = await cloudinary.v2.uploader.upload(images[i], {
              folder: "avatar",
              width: 150,
              crop: "scale",
            });
  
            imagesLinks.push({
              public_id: result.public_id,
              url: result.secure_url,
            });
          }
  
          const productData = req.body;
          productData.images = imagesLinks;
          productData.shop = shop;
  

  
          const product = await Product.create(productData);
  
          res.status(201).json({
            success: true,
            product,
          });
        }
      } catch (error) {
        return next(new ErrorHandler(error.message || error, 400));
      }
    })
  );
  

  // get all products of a shop
router.get(
    "/get-all-products-shop/:id",
    catchAsyncErrors(async (req, res, next) => {
      try {
        const products = await Product.find({ shopId: req.params.id });
  
        res.status(201).json({
          success: true,
          products,
        });
      } catch (error) {
        return next(new ErrorHandler(error, 400));
      }
    })
  );

module.exports = router;