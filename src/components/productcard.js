'use client'
// src/components/ProductCard.js  —  Shared product card (Next.js compatible)

import { useCart } from '@/lib/CartContext'

const TAG_COLORS = {
  'New': '#C4A2B8',
  'Sale': '#D4808A',
  'Best Seller': '#A05A6A',
}

export default function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <div
      className="group rounded-2xl overflow-hidden flex flex-col transition-shadow hover:shadow-md"
      style={{ backgroundColor: '#FFFAF9', border: '1px solid #E8D5D7' }}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/5]" style={{ backgroundColor: '#F2D7DC' }}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.tag && (
          <span
            className="absolute top-2.5 left-2.5 text-[10px] font-bold uppercase tracking-widest text-white px-2 py-0.5 rounded-full"
            style={{ backgroundColor: TAG_COLORS[product.tag] ?? '#D4808A' }}
          >
            {product.tag}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-3 flex flex-col gap-1.5 flex-1">
        <span
          className="text-[10px] uppercase tracking-widest"
          style={{ color: '#C4A2B8' }}
        >
          {product.category}
        </span>
        <h3
          className="text-sm font-semibold leading-snug"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#3D2B2E' }}
        >
          {product.name}
        </h3>
        <div className="flex items-center justify-between mt-auto pt-2">
          <span className="font-bold text-base" style={{ color: '#A05A6A' }}>
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => addToCart(product)}
            className="text-xs font-semibold px-3 py-1.5 rounded-full text-white transition-opacity hover:opacity-80 active:scale-95"
            style={{ backgroundColor: '#D4808A' }}
          >
            + Add
          </button>
        </div>
      </div>
    </div>
  )
}
