import jwt from "jsonwebtoken";
const auth = async (req, res, next) => {
  try {
    const token = req.headers.authrozation.split(" ")[1];
    if (!token) {
      return res.send({ message: "no token found" });
    } else {
      const decodedData = jwt.verify(token, "SECRET");
      req.user = decodedData;
      next();
    }
  } catch (error) {
    res.send({ message: "Token is not valid" });
    console.log(error);
  }
};

export default auth;
