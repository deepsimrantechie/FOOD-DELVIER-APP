import UserModel from "../models/userModel.js";

//add items to users cart

const addToCart = async (req, res) => {
  try {
    let userData = await UserModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }
    await UserModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ success: true, message: "added to cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "not added in cart" });
  }
};

//remove items from user cart

const removeFromCart = async (req, res) => {
  try {
    let userData = await UserModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    if (cartData[req.body.itemId]) {
      cartData[req.body.itemId] -= 1;
    }
    await UserModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ success: true, message: "Removed from Cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "not removed from cart" });
  }
};

//fetch user cart data

const getCart = async (req, res) => {
  try {
    let userData = await UserModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { addToCart, removeFromCart, getCart };
