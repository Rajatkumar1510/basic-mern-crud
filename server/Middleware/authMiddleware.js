import jwt from "jsonwebtoken";
const auth = async (req, res, next) => {
  try {
    const token = req.headers.authrozation.split(" ")[1];
    const decodedData = jwt.verify(token, "SECRET");
    req.user = decodedData;
    next();
  } catch (error) {
    res.send({ message: "TOken is not valid" });
  }
};
