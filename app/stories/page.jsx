"use client";
import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import Pagination from "./components/Pagination";

export default function StoriesPage() {
  const [stories, setStories] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchStories = async () => {
      const res = await fetch(`/api/stories?page=${page}&search=${search}`);
      const data = await res.json();
      setStories(data.stories);
      setTotalPages(data.totalPages);
    };
    fetchStories();
  }, [page, search]);

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Stories</h1>

      <SearchBar value={search} onSearch={setSearch} />

      <ul className="divide-y divide-gray-200 mt-6">
        {stories.map((story) => (
          <li key={story._id} className="py-4">
            <h2 className="font-semibold text-lg">{story.title}</h2>
            <p className="text-gray-600">{story.content}</p>
          </li>
        ))}
      </ul>

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
}
