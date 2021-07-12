import Product from "../Models/Product.js";

export const getProducts = async (req, res) => {
  const products = await Product.find().sort({
    createdAt: -1,
  });
  return res.send(products);
};

export const getProduct = async (res, req) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    return res.send(product);
  } catch (error) {
    res.send(error);
  }
};

export const addProduct = async (req, res) => {
  const post = req.body;
  const newProduct = new Product({ ...post });
  try {
    await newProduct.save();
    return res.send(newProduct);
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { title, file, description, price, category } = req.body;

  const updatedProduct = { title, file, description, price, category, _id: id };
  await Product.findByIdAndUpdate(id, updatedProduct);
  res.send(updatedProduct);
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  res.send({ message: "Post deleted Succesfully" });
};
