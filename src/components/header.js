"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import SearchBar from "./searchbar";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
];

export default function Header() {
  const pathname = usePathname();
  const { count } = useCart();

  return (
    <header className="site-header">
      <Link href="/" className="logo-block">
        <span className="logo-name">Kith</span>
        <span className="logo-tag">SOFT &amp; SWEET</span>
      </Link>

      <nav className="main-nav">
        {NAV_LINKS.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${isActive ? "active" : ""}`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
      <div className="header-search">
          <SearchBar />
        </div>
      <div className="header-actions" style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        
        {/* Cart Icon */}
        <Link href="/cart" className="cart-icon-link" style={{ position: "relative", display: "flex", alignItems: "center" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          {count > 0 && (
            <span style={{
              position: "absolute",
              top: "-8px",
              right: "-8px",
              backgroundColor: "var(--accent)",
              color: "#fff",
              fontSize: "11px",
              borderRadius: "50%",
              padding: "2px 6px",
              fontWeight: "bold"
            }}>
              {count}
            </span>
          )}
        </Link>

        {/* Account Icon (User Icon) */}
        <Link href="/account" className={`account-icon-link ${pathname === "/account" ? "active" : ""}`} style={{ display: "flex", alignItems: "center" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </Link>

      </div>
    </header>
  );
}