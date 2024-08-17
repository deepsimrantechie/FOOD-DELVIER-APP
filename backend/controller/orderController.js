/*import orderModel from "../models/orderModel.js";
import UserModel from "../models/userModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

//placing user order for frontend
const placeOrder = async (req, res) => {
  const frontend_url = "http://localhost:5173";
  try {
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });
    await newOrder.save();
    await UserModel.findByIdAndUpdate(req.body.userId, { cartData: {} });
    const line_items = req.body.items.map(() => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100 * 80,
      },
      quantity: item.quantity,
    }));
    line_items.push({
      price_data: {
        currency: "inr",
        produc_data: {
          name: "Delivery charge",
        },
        unit_amount: 2 * 100 * 80,
      },
      quantity: 1,
    });
    const session = await stripe.checkout.sessions.create({
      line_items: line_items,
      mode: "payments",
      success_url: `${frontend_url}/verify?success=true&orderiD=${newOrder._id}`,
      cancel_url: `${frontend_url}/verify?success=false&orderiD=${newOrder._id}`,
    });
    res.json({ success: true, session_url: session.url });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
  const verifyOrder = async (req, res) => {
    const { orderId, success } = req.body;
    try {
      if (success == "true") {
        await orderModel.findByIdAndUpdate(orderId, { payment: true });
        res.json({ success: true, message: "paid" });
      } else {
        await orderModel.findByIdAndDelete(orderId);
        res.json({ success: false, message: "not paid" });
      }
    } catch (error) {
      console.log(error);
      res.json({ success: false, message: "Error" });
    }
  };
};

//listing orders for admin panel 
const listOrder = async(req,res)=>{
  try{
  const orders = await orderModel.find({});
  res.json({success:true,data:orders})
  }catch(error){
  console.log(error);
  res.json({success:false,message:"Error"})
  }
  }
export { placeOrder,verifyOrder,listorder };
*/
