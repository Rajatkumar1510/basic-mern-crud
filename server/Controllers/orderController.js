import Cart from "../Models/Cart.js";
import Order from "../Models/Order.js";
import User from "../Models/User.js";
import stripe from "stripe";

const stripeApiKey =
  "pk_test_51JB0kmSE6vBwlR7ewomGg0YOSIt89hPPFIKbEA51AMUbbnPOB3qNSxn4w9VhBEmnHduFUSHmGACaweRqCntFeoWJ00l7Sep0LO";

export const getOrders = async (req, res) => {
  const userId = req.params.id;
  const orders = await Order.find({ userId }).sort({ createdAt: -1 });
  return res.send(orders);
};

export const checkOut = async (req, res) => {
  try {
    const userId = req.params.id;
    const { source } = req.body;
    const cart = await Cart.findOne({ userId });
    const user = await User.findOne({ _id: userId });
    const email = user.email;
    if (cart) {
      const charge = await stripe.ChargesResource.create({
        amount: cart.bill,
        currency: "inr",
        source: source,
        receipt_email: email,
      });
      if (!charge) throw Error("Payment failed");
      if (charge) {
        const order = await Order.create({
          userId,
          items: cart.items,
          bill: cart.bill,
        });
        const data = await Cart.findByIdAndDelete({ _id: cart.id });
        return res.send(order);
      }
    } else {
      res.send("You do not have items in cart");
    }
  } catch (error) {
    console.log(err);
    res.send("Something went wrong");
  }
};
