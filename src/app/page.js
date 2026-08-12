import Link from "next/link";
import ProductCard from "@/components/productcard";
import { fetchProducts } from "@/lib/api";

const CATEGORIES = ["All Styles", "Shirts", "Skirts", "Dresses", "Shorts", "Pants", "Jeans"];

export default async function HomePage() {
  const products = await fetchProducts();
  const featured = products.slice(0, 4);

  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div>
            <span className="eyebrow-pill">NEW ARRIVALS</span>
            <h1>
              Dress softly,
              <br />
              <em>live sweetly.</em>
            </h1>
            <p>
              Coquette blouses, vintage pleated skirts, and everyday soft-girl
              staples — all priced for real life.
            </p>
            <div className="hero-actions">
              <Link href="/products" className="btn btn-primary">
                Shop Now
              </Link>
              <Link href="/products" className="btn btn-secondary">
                Browse All
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://i.pinimg.com/1200x/0b/95/b4/0b95b4a10c095b8787996558650e0c55.jpg"
              alt="Models wearing coquette style outfits"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://i.pinimg.com/1200x/fe/fb/ec/fefbec0ee7f66c0b0c4658cf56f228c6.jpg"
              alt="Flat lay collection"
            />
            <div className="price-float">
              <div className="label">Starting from</div>
              <div className="value">$6.99</div>
            </div>
          </div>
        </div>
      </section>

      <div className="filters-row">
        {CATEGORIES.map((cat, i) => (
          <button key={cat} className={`pill ${i === 0 ? "active" : ""}`}>
            {cat}
          </button>
        ))}
      </div>

      <section className="section">
        <div className="section-header">
          <h2>Featured Picks</h2>
          <Link href="/products" className="view-all">
            View All →
          </Link>
        </div>
        <div className="product-grid">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}