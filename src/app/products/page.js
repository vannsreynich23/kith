"use client";

import { useMemo, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import ProductCard from "@/components/productcard";
import { products as fallbackProducts } from "@/data/products";

const CATEGORIES = ["All", "Shirts", "Skirts", "Dresses", "Pants", "Shorts", "Jeans", "Outerwears"];

function ProductsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const category = searchParams.get("category") || "All";
  const sort = searchParams.get("sort") || "Featured";

  const catalog = fallbackProducts;

  const visible = useMemo(() => {
    let list = [...catalog];

    if (searchQuery) {
      list = list.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else if (category !== "All") {
      list = list.filter((p) => p.category === category);
    }

    if (sort === "Price: Low to High") {
      list.sort((a, b) => a.price - b.price);
    } else if (sort === "Price: High to Low") {
      list.sort((a, b) => b.price - a.price);
    } else if (sort === "Name: A-Z") {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }
    return list;
  }, [catalog, category, sort, searchQuery]);

  const handleCategoryClick = (cat) => {
    if (cat === "All") {
      router.push("/products");
    } else {
      router.push(`/products?category=${encodeURIComponent(cat)}`);
    }
  };

  const handleSortChange = (e) => {
    const newSort = e.target.value;
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", newSort);
    router.push(`/products?${params.toString()}`);
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "40px auto", padding: "0 20px" }}>
      <div className="page-title" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h1>{searchQuery ? `Search Results for "${searchQuery}"` : category !== "All" ? category : "All Products"}</h1>
        <span className="count">{`${visible.length} items found`}</span>
      </div>

      <div className="page-toolbar" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px", flexWrap: "wrap", gap: "15px" }}>
        <div className="filters-row" style={{ display: "flex", gap: "10px", flexWrap: "wrap", padding: 0, margin: 0 }}>
          {CATEGORIES.map((cat) => {
            const isActive = searchQuery ? false : (cat === "All" ? !searchParams.get("category") || searchParams.get("category") === "All" : category === cat);
            return (
              <button
                key={cat}
                className={`pill ${isActive ? "active" : ""}`}
                onClick={() => handleCategoryClick(cat)}
                style={{
                  padding: "8px 16px",
                  borderRadius: "20px",
                  border: "1px solid #ddd",
                  backgroundColor: isActive ? "#000" : "#fff",
                  color: isActive ? "#fff" : "#333",
                  cursor: "pointer"
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <select
          className="select-box"
          value={sort}
          onChange={handleSortChange}
          style={{ padding: "10px 15px", borderRadius: "8px", border: "1px solid #ddd" }}
        >
          <option>Featured</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Name: A-Z</option>
        </select>
      </div>

      <section className="section">
        <div className="product-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "25px" }}>
          {visible.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        {visible.length === 0 && (
          <p className="empty-state" style={{ textAlign: "center", padding: "40px", color: "#666" }}>
            {searchQuery
              ? `No products found matching "${searchQuery}".`
              : "No pieces in this category yet — check back soon!"}
          </p>
        )}
      </section>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div style={{ textAlign: "center", padding: "50px" }}>Loading products...</div>}>
      <ProductsContent />
    </Suspense>
  );
}