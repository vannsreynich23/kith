"use client";

import { use, useState } from "react";
import { products, getProductById } from "@/data/products";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function ProductDetailPage({ params }) {
  // แกะ lấy id จาก URL ໂດຍໃຊ້ React.use(params) សម្រាប់ Next.js ជំនាន់ថ្មី
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
        <Link href="/products" className="btn btn-primary">Back to Products</Link>
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
      {/* Hình ảnhផលិតផល */}
      <div className="product-image-large">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={product.image} alt={product.name} style={{ width: "100%", borderRadius: "12px", objectFit: "cover" }} />
      </div>

      {/* ព័ត៌មាន និងប៊ូតុងបញ្ជាទិញ */}
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

        {/* 1. ရွေးချယ်ពណ៌ (Colors) */}
        {product.colors && product.colors.length > 0 && (
          <div style={{ marginBottom: "25px" }}>
            <label style={{ display: "block", fontWeight: "600", marginBottom: "8px" }}>Color: {selectedColor}</label>
            <div style={{ display: "flex", gap: "10px" }}>
              {product.colors.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setSelectedColor(c.name)}
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    backgroundColor: c.hex,
                    border: selectedColor === c.name ? "2px solid #000" : "1px solid #ddd",
                    cursor: "pointer"
                  }}
                  title={c.name}
                />
              ))}
            </div>
          </div>
        )}

        {/* 2. ប៊ូតុង Add to Cart */}
        <button
          onClick={handleAddToCart}
          className="btn btn-primary"
          style={{ width: "100%", padding: "14px", fontSize: "16px", cursor: "pointer", backgroundColor: "var(--accent)", color: "#fff", border: "none", borderRadius: "8px" }}
        >
          {added ? "Added to Cart! ✓" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}