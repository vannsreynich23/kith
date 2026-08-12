"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

const PAYMENT_METHODS = [
  {
    id: "acleda",
    title: "ACLEDA Bank",
    sub: "Scan QR via ACLEDA Mobile",
  },
  {
    id: "wing",
    title: "Wing Money",
    sub: "Pay via Wing account",
  },
  {
    id: "cod",
    title: "Cash on Delivery",
    sub: "Pay when your order arrives",
  },
];

const DELIVERY_SERVICES = [
  {
    id: "jt",
    title: "J&T Express",
    sub: "Fast local delivery",
    price: 1.50,
  },
  {
    id: "vireakbunthan",
    title: "Vireak Buntham (វីរៈប៊ុនថាំ)",
    sub: "Provincial & city van delivery",
    price: 2.00,
  },
  {
    id: "standard",
    title: "Standard Delivery",
    sub: "Regular door-to-door delivery",
    price: 0,
  }
];

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const router = useRouter();
  const [payment, setPayment] = useState("acleda");
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    street: "",
    city: "",
    deliveryService: "jt",
    note: "",
  });

  const selectedDeliveryObj = DELIVERY_SERVICES.find(d => d.id === form.deliveryService);
  const baseDeliveryFee = selectedDeliveryObj ? selectedDeliveryObj.price : 0;
  const delivery = subtotal >= 50 || subtotal === 0 ? 0 : baseDeliveryFee;
  const total = subtotal + delivery;

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleBuyNow(e) {
    e.preventDefault();
    if (items.length === 0) return;
    
    alert(`Order placed successfully via ${form.deliveryService.toUpperCase()}! Total: $${total.toFixed(2)} using ${payment.toUpperCase()}.`);
    clearCart();
    router.push("/");
  }

  return (
    <>
      <div className="page-title">
        <h1>Checkout</h1>
      </div>

      <form onSubmit={handleBuyNow} className="checkout-layout">
        <div className="checkout-steps">
          <div className="card-block">
            <h2>Delivery Information</h2>
            <div className="grid-2">
              <div className="field">
                <label>Full Name *</label>
                <input
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Vann Sreynich"
                  required
                />
              </div>
              <div className="field">
                <label>Phone Number *</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="096 442 1964"
                  required
                />
              </div>
            </div>

            <div className="field">
              <label>Street Address *</label>
              <input
                name="street"
                value={form.street}
                onChange={handleChange}
                placeholder="Street 271, BKK1"
                required
              />
            </div>

            <div className="field">
              <label>City / Province *</label>
              <input
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder=" Phnom Penh"
                required
              />
            </div>

            {/* Delivery Service Selection */}
            <div className="field" style={{ marginTop: "20px" }}>
              <label style={{ display: "block", marginBottom: "10px", fontWeight: "600", color: "var(--heading)" }}>
                Delivery Service *
              </label>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {DELIVERY_SERVICES.map((d) => (
                  <div
                    key={d.id}
                    onClick={() => setForm({ ...form, deliveryService: d.id })}
                    className={`pay-option ${form.deliveryService === d.id ? "selected" : ""}`}
                    style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px" }}
                  >
                    <div>
                      <div className="title" style={{ fontWeight: "600" }}>{d.title}</div>
                      <div className="sub" style={{ fontSize: "12px", color: "var(--ink-soft)" }}>{d.sub} (${d.price.toFixed(2)})</div>
                    </div>
                    <span className="radio" />
                  </div>
                ))}
              </div>
            </div>

            <div className="field" style={{ marginTop: "20px" }}>
              <label>Delivery Note</label>
              <textarea
                name="note"
                value={form.note}
                onChange={handleChange}
                placeholder="Landmark, building name, time preferences..."
                rows={3}
              />
            </div>
          </div>

          <div className="card-block">
            <h2>Payment Method</h2>
            {PAYMENT_METHODS.map((m) => (
              <div
                key={m.id}
                className={`pay-option ${payment === m.id ? "selected" : ""}`}
                onClick={() => setPayment(m.id)}
              >
                <div>
                  <div className="title">{m.title}</div>
                  <div className="sub">{m.sub}</div>
                </div>
                <span className="radio" />
              </div>
            ))}

            {/* ACLEDA QR Code Display */}
            {payment === "acleda" && (
              <div style={{
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                padding: "24px", background: "#fdf2f2", border: "1px solid #f5d0d0",
                borderRadius: "16px", gap: "16px", textAlign: "center", marginTop: "16px"
              }}>
                <div style={{ background: "#fff", padding: "12px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.06)", display: "inline-block" }}>
                  <img 
                    src="/acleda-qr.png" 
                    alt="ACLEDA QR Code" 
                    style={{ width: "140px", height: "140px", objectFit: "contain", display: "block" }} 
                  />           
                </div>
                <p style={{ fontSize: "13px", color: "var(--ink-soft, #666)", fontWeight: "500", margin: 0 }}>
                  Scan with ACLEDA Mobile to pay ${total.toFixed(2)}
                </p>
              </div>
            )}

            {/* Pay by Wing */}
            {payment === "wing" && (
              <div style={{
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                padding: "24px", background: "#fdf2f2", border: "1px solid #f5d0d0",
                borderRadius: "16px", gap: "12px", textAlign: "center", marginTop: "16px"
              }}>
                <div style={{ fontSize: "15px", fontWeight: "600", color: "var(--heading)" }}>
                  Wing Account Details
                </div>
                <p style={{ fontSize: "14px", color: "var(--ink-soft, #666)", margin: 0 }}>
                  Transfer to Wing Account: <strong style={{ color: "var(--heading)" }}>096 442 1964</strong> (KITH Store)
                </p>
                <p style={{ fontSize: "13px", color: "var(--ink-soft, #666)", margin: 0 }}>
                  Amount to pay: <strong style={{ color: "var(--heading)" }}>${total.toFixed(2)}</strong>
                </p>
                <span style={{ fontSize: "12px", color: "#888", fontStyle: "italic" }}>
                  (Please transfer using your Wing App and keep the receipt)
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="summary-card">
          <h3>Order Summary</h3>
          {items.map((item) => (
            <div className="summary-line-item" key={item.lineId}>
              <span>
                {item.name}
                {item.color ? ` (${item.color.name})` : ""} ×{item.qty}
              </span>
              <span>${(item.price * item.qty).toFixed(2)}</span>
            </div>
          ))}
          <div className="summary-row" style={{ marginTop: 14 }}>
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Delivery ({selectedDeliveryObj?.title})</span>
            <span className={delivery === 0 ? "free" : ""}>
              {delivery === 0 ? "Free" : `$${delivery.toFixed(2)}`}
            </span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Buy Now — ${total.toFixed(2)}
          </button>
        </div>
      </form>
    </>
  );
}