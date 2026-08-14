"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation"; // បន្ថែម Router ដើម្បីបញ្ជូនទៅកាន់ទំព័រ Checkout ភ្លាមៗ
import Link from "next/link";

export default function ProductDetailClient({ product }) {
  const { addItem } = useCart();
  const router = useRouter();
  
  const initialColor = product?.colors?.[0] 
    ? (typeof product.colors[0] === 'object' ? product.colors[0].name : product.colors[0])
    : null;

  const [selectedColor, setSelectedColor] = useState(initialColor);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addItem(product, 1, { color: selectedColor });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    addItem(product, 1, { color: selectedColor });
    router.push("/checkout"); // ទៅកាន់ទំព័រ Checkout ភ្លាមៗតែម្ដង
  };

  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "40px auto",
        padding: "0 20px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "40px",
      }}
    >
      <div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          style={{ width: "100%", borderRadius: "12px", objectFit: "cover" }}
        />
      </div>

      <div>
        <span style={{ fontSize: "13px", color: "#888", textTransform: "uppercase" }}>
          {product.category}
        </span>
        <h1 style={{ fontSize: "28px", margin: "10px 0 15px" }}>{product.name}</h1>

        <div style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "20px" }}>
          ${product.price.toFixed(2)}
        </div>

        <p style={{ color: "#666", lineHeight: "1.6", marginBottom: "25px" }}>
          {product.description}
        </p>

        {product.colors && product.colors.length > 0 && (
          <div style={{ marginBottom: "25px" }}>
            <label style={{ display: "block", fontWeight: "600", marginBottom: "8px" }}>
              Color: <span style={{ fontWeight: "normal" }}>{selectedColor}</span>
            </label>
            <div style={{ display: "flex", gap: "10px" }}>
              {product.colors.map((c) => {
                const colorName = typeof c === 'object' ? c.name : c;
                const colorHex = typeof c === 'object' ? c.hex : c;
                return (
                  <button
                    key={colorName}
                    onClick={() => setSelectedColor(colorName)}
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      backgroundColor: colorHex,
                      border: selectedColor === colorName ? "3px solid #000" : "1px solid #ddd",
                      cursor: "pointer",
                    }}
                    title={colorName}
                  />
                );
              })}
            </div>
          </div>
        )}

        {/* ប៊ូតុងបញ្ជាទិញ */}
        <div style={{ display: "flex", gap: "12px", flexDirection: "column" }}>
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              onClick={handleAddToCart}
              style={{
                flex: 1,
                padding: "14px",
                fontSize: "15px",
                fontWeight: "600",
                cursor: "pointer",
                backgroundColor: "#fff",
                color: "#000",
                border: "2px solid #000",
                borderRadius: "8px",
              }}
            >
              {added ? "Added to Cart! ✓" : "Add to Cart"}
            </button>

            <button
              onClick={handleBuyNow}
              style={{
                flex: 1,
                padding: "14px",
                fontSize: "15px",
                fontWeight: "600",
                cursor: "pointer",
                backgroundColor: "#000",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
              }}
            >
              Buy Now
            </button>
          </div>

          <Link
            href="/products"
            style={{
              padding: "10px",
              backgroundColor: "#f0f0f0",
              color: "#333",
              borderRadius: "8px",
              textDecoration: "none",
              textAlign: "center",
              fontSize: "14px",
            }}
          >
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}