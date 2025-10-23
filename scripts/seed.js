import "dotenv/config";
import { connectDB } from "../lib/mongodb.js";
import Story from "../models/Story.js";

async function seed() {
  await connectDB();

  await Story.deleteMany({});
  await Story.insertMany([
    { title: "The Little Dragon", content: "Once upon a time..." },
    { title: "Moonlight Magic", content: "Under the silver moon..." },
    { title: "The Hidden Garden", content: "A secret door appeared..." },
    { title: "Adventure in the Sky", content: "Flying through clouds..." },
    { title: "The Ocean’s Secret", content: "Beneath the waves..." },
    { title: "The Forest Whisper", content: "The trees could talk..." },
    { title: "Starry Night Quest", content: "A boy with a telescope..." },
  ]);

  console.log("✅ Stories seeded successfully!");
  process.exit();
}

seed().catch((err) => console.error("❌ Seeding error:", err));
