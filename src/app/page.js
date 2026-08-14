import Link from "next/link";
import ProductCard from "@/components/productcard";
import { products } from "@/data/products";

export default function HomePage() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
      {/* Hero Section */}
      <section style={{ textAlign: "center", padding: "60px 20px", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "42px", fontWeight: "700", marginBottom: "15px" }}>
          Soft & Sweet Style
        </h1>
        <p style={{ fontSize: "18px", color: "#666", maxWidth: "600px", margin: "0 auto 30px" }}>
          Coquette blouses, vintage pleated skirts, and everyday soft-girl staples.
        </p>
        <Link
          href="/products"
          style={{
            backgroundColor: "#000",
            color: "#fff",
            padding: "12px 28px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          Shop All Products
        </Link>
      </section>

      {/* Featured Picks Section */}
      <section style={{ marginBottom: "60px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "25px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "600" }}>Featured Picks</h2>
          <Link href="/products" style={{ color: "#666", textDecoration: "none", fontSize: "14px", fontWeight: "600" }}>
            View All →
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "25px",
          }}
        >
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}