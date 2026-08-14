import { getProductById } from "@/data/products";
import Link from "next/link";

export default async function ProductDetailPage({ params }) {
  const resolvedParams = await params;
  const product = getProductById(resolvedParams.id);

  if (!product) {
    return (
      <div style={{ padding: "60px", textAlign: "center" }}>
        <h2>Product not found</h2>
        <p style={{ margin: "20px 0" }}>The piece you are looking for does not exist.</p>
        <Link href="/products" style={{ color: "blue", textDecoration: "underline" }}>Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="product-detail-container" style={{ maxWidth: "1100px", margin: "40px auto", padding: "0 20px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
      <div className="product-image-large">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={product.image} alt={product.name} style={{ width: "100%", borderRadius: "12px", objectFit: "cover" }} />
      </div>

      <div className="product-details-info">
        <span className="cat" style={{ fontSize: "13px", color: "#888", textTransform: "uppercase", letterSpacing: "1px" }}>
          {product.category}
        </span>
        <h1 style={{ fontSize: "28px", margin: "10px 0 15px" }}>{product.name}</h1>
        
        <div className="price-row" style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "20px", color: "var(--accent)" }}>
          ${product.price.toFixed(2)}
        </div>

        <p style={{ color: "#666", lineHeight: "1.6", marginBottom: "25px" }}>
          {product.description}
        </p>

        {product.colors && product.colors.length > 0 && (
          <div style={{ marginBottom: "25px" }}>
            <label style={{ display: "block", fontWeight: "600", marginBottom: "8px" }}>Available Colors</label>
            <div style={{ display: "flex", gap: "10px" }}>
              {product.colors.map((c) => (
                <div
                  key={c.name}
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    backgroundColor: c.hex,
                    border: "1px solid #ddd"
                  }}
                  title={c.name}
                />
              ))}
            </div>
          </div>
        )}

        <Link 
          href="/products" 
          style={{ display: "inline-block", padding: "12px 24px", backgroundColor: "#000", color: "#fff", borderRadius: "8px", textDecoration: "none", textAlign: "center" }}
        >
          Back to Catalog
        </Link>
      </div>
    </div>
  );
}