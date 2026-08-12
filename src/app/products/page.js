"use client";

import { useEffect, useMemo, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/productcard";
import { products as fallbackProducts } from "@/data/products";

const CATEGORIES = ["All", "Shirts", "Skirts", "Dresses", "Pants", "Shorts", "Jeans", "Outerwears"];

function ProductsContent() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("Featured");
  const [catalog, setCatalog] = useState(fallbackProducts);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await fetch("/api/products");
        if (!response.ok) {
          throw new Error("Unable to fetch products");
        }
        const payload = await response.json();
        const list = Array.isArray(payload) ? payload : fallbackProducts;
        setCatalog(list);
      } catch (error) {
        console.warn("Falling back to static product catalog", error);
        setCatalog(fallbackProducts);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  const visible = useMemo(() => {
    let list = [...catalog];

    if (searchQuery) {
      list = list.filter((p) =>
        p.name.toLowerCase().includes(searchQuery) ||
        p.category.toLowerCase().includes(searchQuery)
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
  }, [category, sort, searchQuery]);

  return (
    <>
      <div className="page-title">
        <h1>{searchQuery ? `Search Results for "${searchQuery}"` : "All Products"}</h1>
        <span className="count">{loading ? "Loading..." : `${visible.length} items found`}</span>
      </div>

      <div className="page-toolbar">
        <div className="filters-row" style={{ padding: 0, margin: 0 }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`pill ${category === cat && !searchQuery ? "active" : ""}`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <select
          className="select-box"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option>Featured</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Name: A-Z</option>
        </select>
      </div>

      <section className="section">
        <div className="product-grid">
          {visible.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        {visible.length === 0 && (
          <p className="empty-state">
            {searchQuery
              ? `No products found matching "${searchQuery}".`
              : "No pieces in this category yet — check back soon!"}
          </p>
        )}
      </section>
    </>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div style={{ padding: "40px", textAlign: "center" }}>Loading products...</div>}>
      <ProductsContent />
    </Suspense>
  );
}