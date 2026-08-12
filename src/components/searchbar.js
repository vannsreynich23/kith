"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSearch(e) {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/products?search=${encodeURIComponent(query)}`);
    }
  }

  return (
    <form onSubmit={handleSearch} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: "8px 12px",
          borderRadius: "8px",
          border: "1px solid #ddd",
          outline: "none",
          fontSize: "14px",
          fontFamily: "'Poppins', sans-serif"
        }}
      />
      <button
        type="submit"
        style={{
          padding: "8px 16px",
          borderRadius: "8px",
          border: "none",
          background: "var(--primary, #b76e79)",
          color: "#fff",
          cursor: "pointer",
          fontWeight: "500",
          fontFamily: "'Poppins', sans-serif"
        }}
      >
        Search
      </button>
    </form>
  );
}