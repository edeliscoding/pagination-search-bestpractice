import { connectDB } from "@/lib/mongodb";
import Story from "@/models/Story";

export async function GET(request) {
  await connectDB();

  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1");
  const search = searchParams.get("search") || "";

  const limit = 5;
  const query = search
    ? { title: { $regex: search, $options: "i" } }
    : {};

  const total = await Story.countDocuments(query);
  const stories = await Story.find(query)
    .sort({ createdAt: -1 })
    .skip((page - 1) * limit)
    .limit(limit)
    .lean();

  return Response.json({
    stories,
    totalPages: Math.ceil(total / limit),
    currentPage: page,
  });
}
