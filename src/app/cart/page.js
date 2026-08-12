"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

const FREE_DELIVERY_THRESHOLD = 50;

export default function CartPage() {
  const { items, updateQty, removeItem, subtotal } = useCart();
  const delivery = subtotal >= FREE_DELIVERY_THRESHOLD || subtotal === 0 ? 0 : 2;
  const total = subtotal + delivery;

  if (items.length === 0) {
    return (
      <div className="empty-state">
        <p>Your cart is feeling a little empty.</p>
        <Link href="/products" className="btn btn-primary" style={{ marginTop: 16 }}>
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="page-title">
        <h1>Your Cart ({items.reduce((n, i) => n + i.qty, 0)} items)</h1>
      </div>

      <div className="cart-layout">
        <div>
          {items.map((item) => (
            <div className="cart-item" key={item.lineId}>
              <div className="thumb">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image} alt={item.name} />
              </div>
              <div className="body">
                <span className="cat">{item.category?.toUpperCase()}</span>
                <div className="name">{item.name}</div>
                {item.color && (
                  <div className="item-color">
                    <span
                      className="swatch-dot"
                      style={{ backgroundColor: item.color.hex }}
                    />
                    {item.color.name}
                  </div>
                )}
                <div className="unit-price">${item.price.toFixed(2)}</div>
                <div className="qty-row">
                  <button
                    className="qty-btn"
                    onClick={() => updateQty(item.lineId, item.qty - 1)}
                  >
                    −
                  </button>
                  <span>{item.qty}</span>
                  <button
                    className="qty-btn"
                    onClick={() => updateQty(item.lineId, item.qty + 1)}
                  >
                    +
                  </button>
                  <a className="remove-link" onClick={() => removeItem(item.lineId)}>
                    Remove
                  </a>
                </div>
              </div>
              <div className="line-total">${(item.price * item.qty).toFixed(2)}</div>
            </div>
          ))}
        </div>

        <div className="summary-card">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Delivery</span>
            <span className={delivery === 0 ? "free" : ""}>
              {delivery === 0 ? "Free" : `$${delivery.toFixed(2)}`}
            </span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <Link href="/checkout" className="btn btn-primary btn-block">
            Proceed to Checkout →
          </Link>
          <Link href="/products" className="continue-link">
            ← Continue Shopping
          </Link>
        </div>
      </div>
    </>
  );
}
