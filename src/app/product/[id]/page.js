"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { getProductById } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function ProductDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const { addItem } = useCart();

  const [product, setProduct] = useState(() => getProductById(id));
  const [loading, setLoading] = useState(true);
  const [qty, setQty] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const [colorError, setColorError] = useState(false);

  useEffect(() => {
    async function loadProduct() {
      try {
        const response = await fetch(`/api/products/${id}`);
        if (!response.ok) {
          throw new Error("Product not found");
        }
        const payload = await response.json();
        setProduct(payload?.data ?? getProductById(id));
      } catch (error) {
        console.warn("Falling back to static detail lookup", error);
        setProduct(getProductById(id));
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [id]);

  useEffect(() => {
    setSelectedColor(product?.colors?.[0] ?? null);
  }, [product]);

  if (!loading && !product) {
    return (
      <div className="empty-state">
        <p>We couldn&apos;t find that piece.</p>
        <Link href="/products" className="btn btn-primary" style={{ marginTop: 16 }}>
          Back to Products
        </Link>
      </div>
    );
  }

  if (loading && !product) {
    return <div className="empty-state"><p>Loading product...</p></div>;
  }

  const hasColors = product.colors && product.colors.length > 0;

  function validateColor() {
    if (hasColors && !selectedColor) {
      setColorError(true);
      return false;
    }
    return true;
  }

  function handleAddToBag() {
    if (!validateColor()) return;
    addItem(product, qty, { color: selectedColor });
  }

  function handleBuyNow() {
    if (!validateColor()) return;
    addItem(product, qty, { color: selectedColor });
    router.push("/cart");
  }

  return (
    <section className="section" style={{ paddingBottom: 80 }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 48,
          alignItems: "flex-start",
        }}
      >
        <div className="thumb" style={{ borderRadius: 20 }}>
          {product.badge && (
            <span
              className={
                product.badge === "NEW"
                  ? "badge badge-new"
                  : product.badge === "SALE"
                  ? "badge badge-sale"
                  : "badge"
              }
            >
              {product.badge}
            </span>
          )}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={product.image} alt={product.name} />
        </div>

        <div>
          <span className="cat">{product.category.toUpperCase()}</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: 30, margin: "8px 0 12px" }}>
            {product.name}
          </h1>
          <div className="price" style={{ fontSize: 24, marginBottom: 20 }}>
            {product.originalPrice && (
              <span className="strike">${product.originalPrice.toFixed(2)}</span>
            )}
            ${product.price.toFixed(2)}
          </div>
          <p style={{ color: "var(--ink-soft)", lineHeight: 1.7, marginBottom: 28 }}>
            {product.description}
          </p>

          {hasColors && (
            <div className="color-picker" style={{ marginBottom: 24 }}>
              <label className="color-picker-label">
                Color{selectedColor ? `: ${selectedColor.name}` : ""}
              </label>
              <div className="swatch-row">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    type="button"
                    className={`swatch ${
                      selectedColor?.name === color.name ? "selected" : ""
                    }`}
                    style={{ backgroundColor: color.hex }}
                    aria-label={color.name}
                    title={color.name}
                    onClick={() => {
                      setSelectedColor(color);
                      setColorError(false);
                    }}
                  />
                ))}
              </div>
              {colorError && (
                <p className="color-error">Please select a color before continuing.</p>
              )}
            </div>
          )}

          <div className="qty-row" style={{ marginBottom: 24 }}>
            <button className="qty-btn" onClick={() => setQty((q) => Math.max(1, q - 1))}>
              −
            </button>
            <span>{qty}</span>
            <button className="qty-btn" onClick={() => setQty((q) => q + 1)}>
              +
            </button>
          </div>

          <div style={{ display: "flex", gap: 12 }}>
            <button className="btn btn-primary" onClick={handleAddToBag}>
              Add to Bag — ${(product.price * qty).toFixed(2)}
            </button>
            <button className="btn btn-secondary" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

