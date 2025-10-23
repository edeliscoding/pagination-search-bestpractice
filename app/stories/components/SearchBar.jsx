"use client";
import { useState, useEffect } from "react";

export default function SearchBar({ value, onSearch }) {
  const [term, setTerm] = useState(value);

  // Debounce search
  useEffect(() => {
    const delay = setTimeout(() => {
      onSearch(term);
    }, 500);
    return () => clearTimeout(delay);
  }, [term]);

  return (
    <input
      type="text"
      placeholder="Search stories..."
      value={term}
      onChange={(e) => setTerm(e.target.value)}
      className="w-full border border-gray-300 p-2 rounded-md"
    />
  );
}
