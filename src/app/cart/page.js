'use client'
// src/app/cart/page.js  —  Cart Page (Next.js App Router)

import Link from 'next/link'
import { useCart } from '@/lib/CartContext'

export default function CartPage() {
  const { items, removeFromCart, updateQty, totalPrice, totalCount } = useCart()
  const deliveryFee = totalPrice >= 25 ? 0 : 2
  const total = totalPrice + deliveryFee

  if (items.length === 0) {
    return (
      <main className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="text-5xl mb-4">🛍️</div>
        <h2
          className="text-2xl mb-2"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            color: '#3D2B2E',
            fontStyle: 'italic',
          }}
        >
          Your cart is empty
        </h2>
        <p className="text-sm mb-6" style={{ color: '#8B6B6F' }}>
          Add some cute pieces and come back!
        </p>
        <Link
          href="/product"
          className="px-6 py-2.5 rounded-full text-sm font-bold text-white no-underline hover:opacity-80 transition-opacity"
          style={{ backgroundColor: '#D4808A' }}
        >
          Shop Now
        </Link>
      </main>
    )
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1
        className="text-3xl mb-8"
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          color: '#3D2B2E',
          fontStyle: 'italic',
        }}
      >
        Your Cart ({totalCount} {totalCount === 1 ? 'item' : 'items'})
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {/* ── Cart items ── */}
        <div className="md:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 p-4 rounded-2xl"
              style={{ backgroundColor: '#FFFAF9', border: '1px solid #E8D5D7' }}
            >
              <div
                className="w-20 h-24 rounded-xl overflow-hidden flex-shrink-0"
                style={{ backgroundColor: '#F2D7DC' }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest" style={{ color: '#C4A2B8' }}>
                  {item.category}
                </span>
                <h3
                  className="text-sm font-semibold leading-snug"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#3D2B2E' }}
                >
                  {item.name}
                </h3>
                <p className="font-bold text-sm" style={{ color: '#A05A6A' }}>
                  ${item.price.toFixed(2)}
                </p>

                <div className="flex items-center gap-3 mt-auto">
                  <div
                    className="flex items-center gap-1 rounded-full px-2 py-0.5"
                    style={{ border: '1px solid #E8D5D7' }}
                  >
                    <button
                      onClick={() => updateQty(item.id, item.qty - 1)}
                      className="w-6 h-6 flex items-center justify-center text-lg font-light"
                      style={{ color: '#8B6B6F' }}
                    >
                      −
                    </button>
                    <span className="w-6 text-center text-sm font-semibold" style={{ color: '#3D2B2E' }}>
                      {item.qty}
                    </span>
                    <button
                      onClick={() => updateQty(item.id, item.qty + 1)}
                      className="w-6 h-6 flex items-center justify-center text-lg font-light"
                      style={{ color: '#8B6B6F' }}
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-[11px] underline underline-offset-2"
                    style={{ color: '#C4A2B8' }}
                  >
                    Remove
                  </button>
                </div>
              </div>

              <div className="flex-shrink-0 font-bold text-sm" style={{ color: '#A05A6A' }}>
                ${(item.price * item.qty).toFixed(2)}
              </div>
            </div>
          ))}
        </div>

        {/* ── Order summary ── */}
        <div>
          <div
            className="rounded-2xl p-5 space-y-4 sticky top-20"
            style={{ backgroundColor: '#FFFAF9', border: '1px solid #E8D5D7' }}
          >
            <h2
              className="text-lg"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#3D2B2E' }}
            >
              Order Summary
            </h2>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between" style={{ color: '#8B6B6F' }}>
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between" style={{ color: '#8B6B6F' }}>
                <span>Delivery</span>
                <span>
                  {deliveryFee === 0
                    ? <span style={{ color: '#A05A6A' }}>Free 🎉</span>
                    : `$${deliveryFee.toFixed(2)}`}
                </span>
              </div>
              {totalPrice < 25 && (
                <p
                  className="text-[11px] rounded-lg px-3 py-2"
                  style={{ backgroundColor: '#F2D7DC', color: '#A05A6A' }}
                >
                  Add ${(25 - totalPrice).toFixed(2)} more for free delivery!
                </p>
              )}
              <div
                className="flex justify-between font-bold text-base pt-3 border-t"
                style={{ borderColor: '#E8D5D7', color: '#3D2B2E' }}
              >
                <span>Total</span>
                <span style={{ color: '#A05A6A' }}>${total.toFixed(2)}</span>
              </div>
            </div>

            <Link
              href="/checkout"
              className="block w-full py-3 rounded-full font-bold text-sm text-white text-center no-underline transition-opacity hover:opacity-80"
              style={{ backgroundColor: '#A05A6A' }}
            >
              Proceed to Checkout →
            </Link>
            <Link
              href="/product"
              className="block w-full py-2 text-center text-xs font-semibold no-underline"
              style={{ color: '#8B6B6F' }}
            >
              ← Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
