'use client'
// src/app/checkout/page.js  —  Checkout & Payment Page (Next.js App Router)

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useCart } from '@/lib/CartContext'

const CITIES = ['Phnom Penh', 'Siem Reap', 'Battambang', 'Kampong Cham', 'Sihanoukville', 'Other']

const PAYMENT_METHODS = [
  { id: 'aba', label: 'ABA PayWay', desc: 'Scan QR via ABA Mobile', icon: '🏦' },
  { id: 'wing', label: 'Wing Money', desc: 'Pay via Wing account', icon: '🦅' },
  { id: 'cod', label: 'Cash on Delivery', desc: 'Pay when your order arrives', icon: '💵' },
]

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart()
  const router = useRouter()

  const [payment, setPayment] = useState('aba')
  const [form, setForm] = useState({ name: '', phone: '', address: '', city: 'Phnom Penh', note: '' })
  const [submitted, setSubmitted] = useState(false)

  const deliveryFee = totalPrice >= 25 ? 0 : 2
  const total = totalPrice + deliveryFee

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    clearCart()
  }

  if (submitted) {
    return (
      <main className="max-w-lg mx-auto px-4 py-24 text-center">
        <div className="text-5xl mb-4">🎀</div>
        <h2
          className="text-2xl mb-2"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#3D2B2E', fontStyle: 'italic' }}
        >
          Order Placed!
        </h2>
        <p className="text-sm mb-2" style={{ color: '#8B6B6F' }}>
          Thank you, {form.name || 'sweetie'}! Your order is confirmed.
        </p>
        <p className="text-xs mb-8" style={{ color: '#C4A2B8' }}>
          We&apos;ll send updates to {form.phone || 'your phone'}.
        </p>
        <Link
          href="/"
          className="px-6 py-2.5 rounded-full text-sm font-bold text-white no-underline hover:opacity-80 transition-opacity"
          style={{ backgroundColor: '#D4808A' }}
        >
          Back to Home
        </Link>
      </main>
    )
  }

  if (items.length === 0) {
    router.push('/cart')
    return null
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <Link
        href="/cart"
        className="text-xs font-semibold mb-6 inline-flex items-center gap-1 no-underline hover:opacity-70 transition-opacity"
        style={{ color: '#8B6B6F' }}
      >
        ← Back to Cart
      </Link>

      <h1
        className="text-3xl mb-8"
        style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#3D2B2E', fontStyle: 'italic' }}
      >
        Checkout
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-3 gap-8">
          {/* ── Left: Delivery + Payment ── */}
          <div className="md:col-span-2 space-y-6">

            {/* Delivery */}
            <div
              className="rounded-2xl p-5 space-y-4"
              style={{ backgroundColor: '#FFFAF9', border: '1px solid #E8D5D7' }}
            >
              <h2
                className="text-base font-semibold"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#3D2B2E' }}
              >
                📦 Delivery Information
              </h2>

              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { label: 'Full Name', field: 'name', type: 'text', placeholder: 'Sophea Chan' },
                  { label: 'Phone Number', field: 'phone', type: 'tel', placeholder: '012 345 678' },
                ].map(({ label, field, type, placeholder }) => (
                  <div key={field} className="flex flex-col gap-1">
                    <label className="text-[11px] font-semibold uppercase tracking-wide" style={{ color: '#8B6B6F' }}>
                      {label} *
                    </label>
                    <input
                      type={type}
                      required
                      placeholder={placeholder}
                      value={form[field]}
                      onChange={(e) => setForm((p) => ({ ...p, [field]: e.target.value }))}
                      className="text-sm px-3 py-2 rounded-xl border"
                      style={{ borderColor: '#E8D5D7', backgroundColor: '#FDF8F5', color: '#3D2B2E' }}
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-semibold uppercase tracking-wide" style={{ color: '#8B6B6F' }}>
                  Street Address *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Street 271, BKK1"
                  value={form.address}
                  onChange={(e) => setForm((p) => ({ ...p, address: e.target.value }))}
                  className="text-sm px-3 py-2 rounded-xl border"
                  style={{ borderColor: '#E8D5D7', backgroundColor: '#FDF8F5', color: '#3D2B2E' }}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-semibold uppercase tracking-wide" style={{ color: '#8B6B6F' }}>
                  City / Province
                </label>
                <select
                  value={form.city}
                  onChange={(e) => setForm((p) => ({ ...p, city: e.target.value }))}
                  className="text-sm px-3 py-2 rounded-xl border cursor-pointer"
                  style={{ borderColor: '#E8D5D7', backgroundColor: '#FDF8F5', color: '#3D2B2E' }}
                >
                  {CITIES.map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-semibold uppercase tracking-wide" style={{ color: '#8B6B6F' }}>
                  Delivery Note
                </label>
                <textarea
                  rows={2}
                  placeholder="Landmark, building name, time preferences…"
                  value={form.note}
                  onChange={(e) => setForm((p) => ({ ...p, note: e.target.value }))}
                  className="text-sm px-3 py-2 rounded-xl border resize-none"
                  style={{ borderColor: '#E8D5D7', backgroundColor: '#FDF8F5', color: '#3D2B2E' }}
                />
              </div>
            </div>

            {/* Payment */}
            <div
              className="rounded-2xl p-5 space-y-3"
              style={{ backgroundColor: '#FFFAF9', border: '1px solid #E8D5D7' }}
            >
              <h2
                className="text-base font-semibold"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#3D2B2E' }}
              >
                💳 Payment Method
              </h2>

              {PAYMENT_METHODS.map((m) => (
                <label
                  key={m.id}
                  className="flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all"
                  style={{
                    border: `1px solid ${payment === m.id ? '#D4808A' : '#E8D5D7'}`,
                    backgroundColor: payment === m.id ? '#FDF0F2' : '#FDF8F5',
                  }}
                >
                  <input
                    type="radio"
                    name="payment"
                    value={m.id}
                    checked={payment === m.id}
                    onChange={() => setPayment(m.id)}
                    className="sr-only"
                  />
                  <span className="text-xl">{m.icon}</span>
                  <div className="flex-1">
                    <p className="text-sm font-semibold" style={{ color: '#3D2B2E' }}>{m.label}</p>
                    <p className="text-xs" style={{ color: '#8B6B6F' }}>{m.desc}</p>
                  </div>
                  <div
                    className="w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                    style={{ borderColor: payment === m.id ? '#D4808A' : '#E8D5D7' }}
                  >
                    {payment === m.id && (
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#D4808A' }} />
                    )}
                  </div>
                </label>
              ))}

              {payment === 'aba' && (
                <div className="text-center py-4 rounded-xl" style={{ backgroundColor: '#F2D7DC' }}>
                  <div
                    className="w-28 h-28 mx-auto rounded-lg mb-2 flex items-center justify-center text-xs font-mono"
                    style={{ backgroundColor: '#fff', color: '#8B6B6F', border: '1px solid #E8D5D7' }}
                  >
                    [ABA QR]
                  </div>
                  <p className="text-xs" style={{ color: '#A05A6A' }}>
                    Scan with ABA Mobile to pay ${total.toFixed(2)}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* ── Right: Order Summary ── */}
          <div>
            <div
              className="rounded-2xl p-5 space-y-4 sticky top-20"
              style={{ backgroundColor: '#FFFAF9', border: '1px solid #E8D5D7' }}
            >
              <h2
                className="text-base font-semibold"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#3D2B2E' }}
              >
                Order Summary
              </h2>

              <div className="space-y-2">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-xs" style={{ color: '#8B6B6F' }}>
                    <span className="truncate pr-2">{item.name} ×{item.qty}</span>
                    <span className="flex-shrink-0">${(item.price * item.qty).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-1.5 pt-3 border-t text-sm" style={{ borderColor: '#E8D5D7' }}>
                <div className="flex justify-between" style={{ color: '#8B6B6F' }}>
                  <span>Subtotal</span><span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between" style={{ color: '#8B6B6F' }}>
                  <span>Delivery</span>
                  <span>
                    {deliveryFee === 0
                      ? <span style={{ color: '#A05A6A' }}>Free</span>
                      : `$${deliveryFee.toFixed(2)}`}
                  </span>
                </div>
                <div
                  className="flex justify-between font-bold text-base pt-2 border-t"
                  style={{ borderColor: '#E8D5D7', color: '#3D2B2E' }}
                >
                  <span>Total</span>
                  <span style={{ color: '#A05A6A' }}>${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full font-bold text-sm text-white transition-opacity hover:opacity-80 active:scale-95"
                style={{ backgroundColor: '#A05A6A' }}
              >
                🛍️ Buy Now — ${total.toFixed(2)}
              </button>
            </div>
          </div>
        </div>
      </form>
    </main>
  )
}
