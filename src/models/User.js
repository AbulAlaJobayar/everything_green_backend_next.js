import mongoose from "mongoose";

//  Defines the User schema for MongoDB.

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Export the User model, or reuse the existing model if it's already defined
export default mongoose.models.User || mongoose.model("User", userSchema);
