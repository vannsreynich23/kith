import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer" style={{ backgroundColor: "#fdf8f5", borderTop: "1px solid #f3e7e2", marginTop: "60px", color: "#5c4d47" }}>
      {/* Top Banner Section */}
      <div style={{ backgroundColor: "#d98282", color: "#fff", padding: "20px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
        <div>
          <h3 style={{ margin: 0, fontSize: "18px", fontFamily: "serif" }}>Need Help with Your Order?</h3>
          <p style={{ margin: "5px 0 0 0", fontSize: "14px", opacity: 0.95 }}>Get quick support by reaching out to our customer service team.</p>
        </div>
        <div style={{ display: "flex", gap: "30px", alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span>[T]</span>
            <div>
              <div style={{ fontSize: "12px", opacity: 0.9 }}>Customer Support</div>
              <div style={{ fontWeight: "bold" }}>0964421964</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span>[L]</span>
            <div>
              <div style={{ fontSize: "12px", opacity: 0.9 }}>Find Us</div>
              <div style={{ fontWeight: "bold", cursor: "pointer" }}>View Map</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span>[@]</span>
            <div>
              <div style={{ fontSize: "12px", opacity: 0.9 }}>Telegram</div>
              <a href="https://t.me/kith" target="_blank" rel="noreferrer" style={{ color: "#fff", fontWeight: "bold", textDecoration: "none" }}>t.me/kith</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links Section */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "50px 20px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px" }}>
        {/* Brand Info */}
        <div>
          <div className="logo-name" style={{ color: "#b55252", fontSize: "24px", fontWeight: "bold", marginBottom: "15px", fontFamily: "serif" }}>Kith</div>
          <p style={{ fontSize: "14px", color: "#7a6b65", lineHeight: "1.6", margin: 0 }}>
            Soft & sweet clothing for women. Bringing you the latest coquette styles, everyday comfort, and elegant looks.
          </p>
        </div>

        {/* Categories */}
        <div>
          <h4 style={{ marginBottom: "15px", fontSize: "16px", color: "#4a3c36" }}>Categories</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px", fontSize: "14px", color: "#7a6b65" }}>
            <li><Link href="/products?category=Shirts" style={{ color: "inherit", textDecoration: "none" }}>Shirts & Blouses</Link></li>
            <li><Link href="/products?category=Skirts" style={{ color: "inherit", textDecoration: "none" }}>Skirts</Link></li>
            <li><Link href="/products?category=Dresses" style={{ color: "inherit", textDecoration: "none" }}>Dresses</Link></li>
            <li><Link href="/products?category=Outerwears" style={{ color: "inherit", textDecoration: "none" }}>Outerwears & Hoodies</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ marginBottom: "15px", fontSize: "16px", color: "#4a3c36" }}>Quick Links</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px", fontSize: "14px", color: "#7a6b65" }}>
            <li><Link href="/products" style={{ color: "inherit", textDecoration: "none" }}>All Products</Link></li>
            <li><Link href="/cart" style={{ color: "inherit", textDecoration: "none" }}>My Cart</Link></li>
            <li><Link href="/checkout" style={{ color: "inherit", textDecoration: "none" }}>Checkout</Link></li>
          </ul>
        </div>

       {/* Customer Service */}
        <div>
          <h4 style={{ marginBottom: "15px", fontSize: "16px", color: "#4a3c36" }}>Customer Care</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px", fontSize: "14px", color: "#7a6b65" }}>
            <li><Link href="/privacy" style={{ color: "inherit", textDecoration: "none" }}>Privacy Policy</Link></li>
            <li><Link href="/terms" style={{ color: "inherit", textDecoration: "none" }}>Terms & Conditions</Link></li>
            <li><Link href="/delivery" style={{ color: "inherit", textDecoration: "none" }}>Delivery Information</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 style={{ marginBottom: "15px", fontSize: "16px", color: "#4a3c36" }}>Follow Us</h4>
          <div style={{ display: "flex", gap: "10px" }}>
            <span style={{ width: "35px", height: "35px", backgroundColor: "#f3e7e2", color: "#b55252", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: "12px", fontWeight: "bold" }}>fb</span>
            <span style={{ width: "35px", height: "35px", backgroundColor: "#f3e7e2", color: "#b55252", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: "12px", fontWeight: "bold" }}>ig</span>
            <span style={{ width: "35px", height: "35px", backgroundColor: "#f3e7e2", color: "#b55252", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: "12px", fontWeight: "bold" }}>tt</span>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div style={{ borderTop: "1px solid #f3e7e2", padding: "20px 0", textAlign: "center", fontSize: "13px", color: "#8c7a73" }}>
        © 2026 Kith · Phnom Penh, Cambodia · Soft &amp; Sweet Always
      </div>
    </footer>
  );
}