import fs from "fs";
import path from "path";

//   Handles POST requests for /api/webhook.

export default function handler(req, res) {
  if (req.method === "POST") {
    const { eventType, data } = req.body;

    // Define the path to the db.json file
    const filePath = path.join(process.cwd(), "db.json");
    console.log({ filePath });
    // Read existing data or initialize an empty array
    const fileData = fs.existsSync(filePath)
      ? JSON.parse(fs.readFileSync(filePath))
      : [];

    // Append new data with a timestamp
    fileData.push({ eventType, data, timestamp: new Date() });
    console.log({ fileData });
    // Write the updated data back to db.json
    fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2));

    res.status(200).json({ success: true, message: "Received" });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
