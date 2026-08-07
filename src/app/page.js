// src/app/page.js  —  Home Page (Next.js App Router)
import Link from 'next/link'
import { products } from '@/data/products'
import ProductCard from '@/components/productcard'

export default function HomePage() {
  const featured = products.slice(0, 4)

  return (
    <main>
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: '#F2D7DC' }}>
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <span
              className="inline-block text-xs font-bold uppercase tracking-[0.25em] px-3 py-1 rounded-full"
              style={{ backgroundColor: '#FFFAF9', color: '#A05A6A' }}
            >
              ✿ New Arrivals
            </span>
            <h1
              className="text-4xl md:text-5xl leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#3D2B2E', fontStyle: 'italic' }}
            >
              Dress softly,<br />
              <span style={{ color: '#A05A6A' }}>live sweetly.</span>
            </h1>
            <p className="text-sm leading-relaxed" style={{ color: '#5E3D42', maxWidth: '340px' }}>
              Coquette blouses, vintage pleated skirts, and everyday soft-girl staples — all priced for real life.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link
                href="/product"
                className="px-6 py-2.5 rounded-full text-sm font-bold text-white no-underline transition-opacity hover:opacity-80"
                style={{ backgroundColor: '#A05A6A' }}
              >
                Shop Now
              </Link>
              <Link
                href="/product"
                className="px-6 py-2.5 rounded-full text-sm font-semibold border no-underline transition-colors hover:bg-white"
                style={{ borderColor: '#A05A6A', color: '#A05A6A' }}
              >
                Browse All
              </Link>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl overflow-hidden aspect-[3/4]" style={{ backgroundColor: '#E8D5D7' }}>
                <img
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=480&h=600&fit=crop&auto=format"
                  alt="Cute coquette outfit"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[3/4] mt-8" style={{ backgroundColor: '#E8D5D7' }}>
                <img
                  src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=480&h=600&fit=crop&auto=format"
                  alt="Vintage soft girl look"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-center px-5 py-3 rounded-2xl shadow-sm"
              style={{ backgroundColor: '#FFFAF9', border: '1px solid #E8D5D7' }}
            >
              <p className="text-xs" style={{ color: '#8B6B6F' }}>Starting from</p>
              <p
                className="text-xl font-bold"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#A05A6A' }}
              >
                $6.99
              </p>
            </div>
          </div>
        </div>

        <svg viewBox="0 0 1440 40" className="w-full" style={{ marginBottom: '-2px', display: 'block', fill: '#FDF8F5' }}>
          <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" />
        </svg>
      </section>

      {/* ── Category Pills ─────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 pt-10 pb-2">
        <div className="flex gap-2 flex-wrap">
          {['All Styles', 'Blouses', 'Skirts', 'Dresses', 'Soft-Girl Tops', 'Vintage'].map((cat) => (
            <Link
              key={cat}
              href="/product"
              className="text-xs font-semibold px-4 py-1.5 rounded-full border no-underline transition-colors"
              style={{ borderColor: '#E8D5D7', color: '#8B6B6F' }}
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>

      {/* ── Promo Banner ───────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div
          className="rounded-2xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ backgroundColor: '#EDE0EB' }}
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: '#A05A6A' }}>Limited Offer</p>
            <p
              className="text-lg font-semibold mt-0.5"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#3D2B2E' }}
            >
              Free delivery on orders over $25
            </p>
          </div>
          <Link
            href="/product"
            className="text-xs font-bold px-5 py-2 rounded-full text-white no-underline flex-shrink-0 hover:opacity-80 transition-opacity"
            style={{ backgroundColor: '#A05A6A' }}
          >
            Shop &amp; Save
          </Link>
        </div>
      </section>

      {/* ── Featured Products ──────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="flex items-baseline justify-between mb-6">
          <h2
            className="text-2xl"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#3D2B2E', fontStyle: 'italic' }}
          >
            Featured Picks
          </h2>
          <Link
            href="/product"
            className="text-xs font-semibold underline underline-offset-2 no-underline"
            style={{ color: '#A05A6A' }}
          >
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* ── Values Strip ───────────────────────────────────── */}
      <section className="border-t border-b py-8" style={{ borderColor: '#E8D5D7', backgroundColor: '#FFFAF9' }}>
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: '🎀', title: 'Coquette Curated', desc: 'Every piece hand-picked' },
            { icon: '💸', title: 'Budget Friendly', desc: 'Prices from $6.99' },
            { icon: '🚚', title: 'Fast Delivery', desc: 'Phnom Penh & provinces' },
            { icon: '💖', title: 'Easy Returns', desc: '7-day return policy' },
          ].map((v) => (
            <div key={v.title} className="space-y-1">
              <div className="text-2xl">{v.icon}</div>
              <p
                className="text-sm font-bold"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#3D2B2E' }}
              >
                {v.title}
              </p>
              <p className="text-xs" style={{ color: '#8B6B6F' }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="py-8 text-center" style={{ backgroundColor: '#FDF8F5' }}>
        <p
          className="text-lg"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#A05A6A', fontStyle: 'italic' }}
        >
          Kith
        </p>
        <p className="text-xs mt-1" style={{ color: '#C4A2B8' }}>
          © 2024 Kith · Phnom Penh, Cambodia · Soft &amp; Sweet Always
        </p>
      </footer>
    </main>
  )
}
