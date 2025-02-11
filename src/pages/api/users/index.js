import User from "../../../models/User";
import connectDB from "../../../lib/connectDB";
import bcrypt from "bcryptjs";
import { generateToken } from "../../../lib/auth";

export default async function handler(req, res) {
  await connectDB(); // Ensure database connection

  switch (req.method) {
    case "GET":
      try {
        const { name, email, sort, page = 1, limit = 10 } = req.query;

        // Build the filter object
        const filter = {};
        if (name) filter.name = { $regex: name, $options: "i" }; // Case-insensitive name search
        if (email) filter.email = { $regex: email, $options: "i" }; // Case-insensitive email search

        // Build the sort object
        const sortOptions = {};
        if (sort) {
          const [field, order] = sort.split(":");
          sortOptions[field] = order === "desc" ? -1 : 1;
        }

        // Calculate pagination values
        const skip = (page - 1) * limit;

        // Fetch users with filtering, sorting, and pagination
        const users = await User.find(filter)
          .sort(sortOptions)
          .skip(skip)
          .limit(Number(limit));

        // Get the total count of users (for pagination)
        const totalUsers = await User.countDocuments(filter);

        // Return the response
        res.status(200).json({
          success: true,
          data: users,
          pagination: {
            page: Number(page),
            limit: Number(limit),
            total: totalUsers,
            totalPages: Math.ceil(totalUsers / limit),
          },
        });
      } catch (error) {
        res.status(500).json({ error: "Failed to fetch users" });
      }
      break;

    case "POST":
      const { name, email, password } = req.body;

      try {
        const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
        const user = new User({ name, email, password: hashedPassword }); // Create a new user
        await user.save(); // Save the user to the database

        const token = generateToken(user._id); // Generate a JWT token
        res.status(201).json({ user, token });
      } catch (error) {
        res.status(500).json({ error: "Failed to create user" });
      }
      break;

    default:
      res.status(405).json({ error: "Method not allowed" });
  }
}
