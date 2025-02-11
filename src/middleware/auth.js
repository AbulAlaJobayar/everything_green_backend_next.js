import { verifyToken } from "../lib/auth";

export const authenticate = (handler) => async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1]; // Extract token from "Bearer <token>"

  if (!token) {
    return res.status(401).json({ error: "Unauthorized: No token provided" });
  }

  try {
    // Verify the token
    const decoded = verifyToken(token);
    // Attach the user ID to the request object
    req.userId = decoded.userId;
    // Proceed to the next handler
    return handler(req, res);
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized: Invalid token" });
  }
};
