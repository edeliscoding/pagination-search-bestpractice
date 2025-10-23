import mongoose from "mongoose";

const StorySchema = new mongoose.Schema({
  title: String,
  content: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Story || mongoose.model("Story", StorySchema);
