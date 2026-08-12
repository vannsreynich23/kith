"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

function badgeClass(badge) {
  if (badge === "NEW") return "badge badge-new";
  if (badge === "SALE") return "badge badge-sale";
  return "badge";
}

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="product-card">
      <Link href={`/product/${product.id}`} className="thumb">
        {product.badge && (
          <span className={badgeClass(product.badge)}>{product.badge}</span>
        )}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={product.image} alt={product.name} loading="lazy" />
      </Link>

      <div className="info">
        <span className="cat">{product.category.toUpperCase()}</span>
        <Link href={`/product/${product.id}`}>
          <span className="name">{product.name}</span>
        </Link>

        <div className="price-row">
          <span className="price">
            {product.originalPrice && (
              <span className="strike">${product.originalPrice.toFixed(2)}</span>
            )}
            ${product.price.toFixed(2)}
          </span>
          <button
            className="add-btn"
            onClick={(e) => {
              e.preventDefault();
              const defaultColor = product.colors?.[0] ?? null;
              addItem(product, 1, { color: defaultColor });
            }}
          >
            + Add
          </button>
        </div>
      </div>
    </div>
  );
}
