import jwt from "jsonwebtoken";

export const add_id = async (req, res, next) => {
  try {
    const { title, category, is_done } = req.body;

    if (!title) {
      throw new Error("title is required");
    }

    if (!category) {
      throw new Error("category is required");
    }

    if (is_done === undefined) {
      throw new Error("is_done is required");
    }

    const token = req.cookies.token;
    if (!token) return res.status(404).json({ message: "token not found" });
    const user = await jwt.verify(token, process.env.JWT_SECRET);
    req.body.user_id = user.id;

    next();
  } catch (error) {
    throw new Error(error);
  }
};
