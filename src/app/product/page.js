'use client'
// src/app/product/page.js  —  Product Catalog Page (Next.js App Router)

import { useState, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { products, categories } from '@/lib/products'
import { products } from '@/data/products'

export default function ProductPage() {
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get('q') || ''

  const [activeCategory, setActiveCategory] = useState('All')
  const [sortBy, setSortBy] = useState('default')

  const filtered = useMemo(() => {
    let list = products

    if (activeCategory !== 'All') {
      list = list.filter((p) => p.category === activeCategory)
    }

    if (initialQuery.trim()) {
      const q = initialQuery.toLowerCase()
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      )
    }

    if (sortBy === 'price-asc') list = [...list].sort((a, b) => a.price - b.price)
    if (sortBy === 'price-desc') list = [...list].sort((a, b) => b.price - a.price)

    return list
  }, [activeCategory, initialQuery, sortBy])

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1
          className="text-3xl mb-1"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            color: '#3D2B2E',
            fontStyle: 'italic',
          }}
        >
          {initialQuery ? `Results for "${initialQuery}"` : 'All Products'}
        </h1>
        <p className="text-xs" style={{ color: '#8B6B6F' }}>
          {filtered.length} items found
        </p>
      </div>

      {/* Filters row */}
      <div className="flex flex-wrap items-center gap-3 mb-8">
        <div className="flex gap-2 flex-wrap flex-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="text-xs font-semibold px-4 py-1.5 rounded-full border transition-all"
              style={
                activeCategory === cat
                  ? { backgroundColor: '#D4808A', borderColor: '#D4808A', color: '#fff' }
                  : { borderColor: '#E8D5D7', color: '#8B6B6F' }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="text-xs font-semibold px-3 py-1.5 rounded-full border cursor-pointer"
          style={{
            borderColor: '#E8D5D7',
            color: '#8B6B6F',
            backgroundColor: '#FFFAF9',
          }}
        >
          <option value="default">Sort: Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-4xl mb-3">🌸</p>
          <p
            className="text-base font-semibold"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#3D2B2E' }}
          >
            No items found
          </p>
          <p className="text-xs mt-1" style={{ color: '#8B6B6F' }}>
            Try a different search or category
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </main>
  )
}
