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
      const productIndex = await cart.products.findIndex(
        (product) => product.productId === productId
      );
      // if product exists or not
      if (productIndex > -1) {
        const cartProduct = cart.products[productIndex];
        cartProduct.quantity += quantity;
        cart.products[productIndex] = cartProduct;
      } else {
        cart.products.push({
          productId,
          name,
          quantity,
          price,
        });
        cart.bill += quantity * price;
        cart = await cart.save();
        return res.send(cart);
      }
    } else {
      // no cart exists, create one
      const newCart = await Cart.create({
        userId,
        products: [
          {
            productId,
            name,
            quantity,
            price,
          },
        ],
        bill: quantity * price,
      });
      return res.send(newCart);
    }
  } catch (error) {
    console.log(err);
    res.send("Something went wrong");
  }
};
export const deleteCartProduct = async (req, res) => {
  const userId = req.params.userId;
  const productId = req.params.productId;
  try {
    const cart = await Cart.findOne({ userId });
    const productIndex = cart.products.findIndex(
      (product) => product.productId === productId
    );
    if (productIndex > -1) {
      const cartProduct = cart.products[productIndex];
      cart.bill -= cartProduct.quantity * cartProduct.price;
      cart.products.splice(productIndex, 1);
    }
    cart = await cart.save();
    return res.send(cart);
  } catch (error) {
    console.log(err);
    res.send("Something went wrong");
  }
};
