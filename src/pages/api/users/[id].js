import connectDB from "@/lib/connectDB";
import User from "@/models/User";

export default async function handler(req, res) {
  await connectDB();

  const { id } = req.query;
  try {
    if (req.method === "GET") {
      // Find the user by ID
      const user = await User.findById(id).select("-password");

      // If the user is not found, return a 404 error
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      // Return the user data
      res.status(200).json({ success: true, data: user });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: "Failed to fetch user" });
  }
}
