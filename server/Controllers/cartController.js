import Cart from "../Models/Cart.js";
import Product from "../Models/Product.js";

export const getCartProducts = async (req, res) => {
  const userId = req.params.id;
  try {
    const cart = await Cart.findOne({ userId });
    if (cart && cart.products.length > 0) {
      res.send(cart);
    } else {
      res.send(null);
    }
  } catch (error) {
    console.log(err);
    res.send("Something went wrong");
  }
};
export const addCartProduct = async (req, res) => {
  const userId = req.params.id;
  const { productId, quantity } = req.body;
  try {
    const cart = await Cart.findOne({ userId });
    const product = await Product.findOne({ _id: productId });
    if (!product) {
      res.send("Item not found");
    }
    const price = product.price;
    const name = product.title;
    if (cart) {
      // if cart exists for the user
      const productIndex = cart.products.findIndex(
        (product) => product.productId === productId
      );
      // Check if product exists or not
      if (productIndex > -1) {
      const 
      }
    }
  } catch (error) {}
};
export const deleteCartProduct = async (req, res) => {};
