import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET; // Secret key for signing JWT tokens

//  Generates a JWT token for a given user ID.

export const generateToken = (userId) => {
  return jwt.sign({ userId }, SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRE_IN,
  }); // Token expires in 1 hour
};

//  Verifies a JWT token and returns the decoded payload.

export const verifyToken = (token) => {
  return jwt.verify(token, SECRET_KEY);
};
