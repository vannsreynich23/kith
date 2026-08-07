"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/productcard";
import { products } from "@/data/products";

const CATEGORIES = ["All", "Blouses", "Tops", "Skirts", "Dresses", "Outerwear","Pants", "Shorts", "Jeans"];

export default function ProductsPage() {
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("Featured");

  const visible = useMemo(() => {
    let list =
      category === "All"
        ? [...products]
        : products.filter((p) => p.category === category);

    if (sort === "Price: Low to High") {
      list.sort((a, b) => a.price - b.price);
    } else if (sort === "Price: High to Low") {
      list.sort((a, b) => b.price - a.price);
    } else if (sort === "Name: A-Z") {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }
    return list;
  }, [category, sort]);

  return (
    <>
      <div className="page-title">
        <h1>All Products</h1>
        <span className="count">{visible.length} items found</span>
      </div>

      <div className="page-toolbar">
        <div className="filters-row" style={{ padding: 0, margin: 0 }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`pill ${category === cat ? "active" : ""}`}
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
          <p className="empty-state">No pieces in this category yet — check back soon!</p>
        )}
      </section>
    </>
  );
}
