"use client";

import { use, useState } from "react";
import { getProductById } from "@/data/products";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function ProductDetailPage({ params }) {
  const resolvedParams = use(params);
  const product = getProductById(resolvedParams.id);

  const { addItem } = useCart();
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0]?.name ?? null);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div style={{ padding: "60px", textAlign: "center" }}>
        <h2>Product not found</h2>
        <p style={{ margin: "20px 0" }}>The piece you are looking for does not exist.</p>
        <Link href="/products" style={{ color: "blue", textDecoration: "underline" }}>Back to Products</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, quantity, { color: selectedColor });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="product-detail-container" style={{ maxWidth: "1100px", margin: "40px auto", padding: "0 20px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
      <div className="product-image-large">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={product.image} alt={product.name} style={{ width: "100%", borderRadius: "12px", objectFit: "cover" }} />
      </div>

      <div className="product-details-info">
        <span className="cat" style={{ fontSize: "13px", color: "#888", textTransform: "uppercase", letterSpacing: "1px" }}>
          {product.category}
        </span>
        <h1 style={{ fontSize: "28px", margin: "10px 0 15px" }}>{product.name}</h1>
        
        <div className="price-row" style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "20px", color: "var(--accent)" }}>
          ${product.price.toFixed(2)}
        </div>

        <p style={{ color: "#666", lineHeight: "1.6", marginBottom: "25px" }}>
          {product.description}
        </p>

        {/* ផ្នែកជ្រើសរើសពណ៌ */}
        {product.colors && product.colors.length > 0 && (
          <div style={{ marginBottom: "25px" }}>
            <label style={{ display: "block", fontWeight: "600", marginBottom: "8px" }}>
              Color: <span style={{ fontWeight: "normal" }}>{selectedColor}</span>
            </label>
            <div style={{ display: "flex", gap: "10px" }}>
              {product.colors.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setSelectedColor(c.name)}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    backgroundColor: c.hex,
                    border: selectedColor === c.name ? "3px solid #000" : "1px solid #ddd",
                    cursor: "pointer",
                    outline: "none"
                  }}
                  title={c.name}
                />
              ))}
            </div>
          </div>
        )}

        {/* ប៊ូតុង Add to Cart និង ប៊ូតុងត្រឡប់ក្រោយ */}
        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
          <button
            onClick={handleAddToCart}
            style={{ 
              flex: 1, 
              padding: "14px", 
              fontSize: "16px", 
              fontWeight: "600", 
              cursor: "pointer", 
              backgroundColor: "#000", 
              color: "#fff", 
              border: "none", 
              borderRadius: "8px" 
            }}
          >
            {added ? "Added to Cart! ✓" : "Add to Cart"}
          </button>

          <Link 
            href="/products" 
            style={{ 
              padding: "14px 20px", 
              backgroundColor: "#f0f0f0", 
              color: "#333", 
              borderRadius: "8px", 
              textDecoration: "none", 
              textAlign: "center",
              fontWeight: "500"
            }}
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}