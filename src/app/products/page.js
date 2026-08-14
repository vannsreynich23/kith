"use client";

import { useMemo, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/productcard";
import { products as fallbackProducts } from "@/data/products";

const CATEGORIES = ["All", "Shirts", "Skirts", "Dresses", "Pants", "Shorts", "Jeans", "Outerwears"];

function ProductsContent() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("Featured");
  const catalog = fallbackProducts;

  const visible = useMemo(() => {
    let list = [...catalog];

    // ប្រសិនបើមាន Search Query ពី Header គឺតម្រងតាមហ្នឹង
    if (searchQuery) {
      list = list.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else if (category !== "All") {
      // បើគ្មាន Search ទេ ទើបត្រងតាម Category
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

  return (
    <div style={{ maxWidth: "1200px", margin: "40px auto", padding: "0 20px" }}>
      <div className="page-title" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h1>{searchQuery ? `Search Results for "${searchQuery}"` : "All Products"}</h1>
        <span className="count">{`${visible.length} items found`}</span>
      </div>

      {/* Toolbar សម្រាប់ Sort និង Filter Categories (លុប Search input ចេញ ព្រោះយើងប្រើ Header Search រួចហើយ) */}
      <div className="page-toolbar" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px", flexWrap: "wrap", gap: "15px" }}>
        <div className="filters-row" style={{ display: "flex", gap: "10px", flexWrap: "wrap", padding: 0, margin: 0 }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`pill ${category === cat && !searchQuery ? "active" : ""}`}
              onClick={() => setCategory(cat)}
              style={{
                padding: "8px 16px",
                borderRadius: "20px",
                border: "1px solid #ddd",
                backgroundColor: category === cat && !searchQuery ? "#000" : "#fff",
                color: category === cat && !searchQuery ? "#fff" : "#333",
                cursor: "pointer"
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <select
          className="select-box"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
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