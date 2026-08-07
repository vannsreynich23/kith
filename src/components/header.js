'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { useCart } from '@/lib/CartContext'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export default function Header() {
  const { totalCount } = useCart()
  const [query, setQuery] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const handleSearch = (e) => {
    const val = e.target.value
    setQuery(val)
    if (val.trim()) {
      router.push(`/product?q=${encodeURIComponent(val.trim())}`)
    }
  }

  const isActive = (href) => pathname === href

  return (
    <header className="sticky top-0 z-50 border-b" style={{ backgroundColor: '#FFFAF9', borderColor: '#E8D5D7' }}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">

        {/* Logo */}
        <Link href="/" className="flex-shrink-0 no-underline">
          <span className="text-2xl tracking-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#A05A6A', fontStyle: 'italic', fontWeight: 700 }}>
            Kith
          </span>
          <span className="block text-[9px] tracking-[0.2em] uppercase" style={{ color: '#C4A2B8', marginTop: '-4px' }}>
            soft &amp; sweet
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 ml-4">
          {[
            { label: 'Home', href: '/' },
            { label: 'Products', href: '/product' },
            { label: 'Account', href: '/account' },
          ].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-semibold tracking-wide no-underline transition-colors"
              style={{ color: isActive(href) ? '#D4808A' : '#8B6B6F' }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Search bar */}
        <div className="flex-1 max-w-xs ml-auto md:ml-4 relative">
          <input
            type="text"
            placeholder="Search cute finds…"
            value={query}
            onChange={handleSearch}
            className="w-full text-sm px-3 py-1.5 rounded-full border transition-shadow"
            style={{
              borderColor: '#E8D5D7',
              backgroundColor: '#FDF8F5',
              color: '#3D2B2E',
              fontFamily: 'inherit',
            }}
          />
          <svg
            className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none"
            style={{ color: '#C4A2B8' }}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
          </svg>
        </div>

        {/* Cart icon */}
        <Link
          href="/cart"
          className="relative flex-shrink-0 p-2 rounded-full transition-colors hover:bg-pink-50 no-underline"
          style={{ color: '#A05A6A' }}
          aria-label="View cart"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 2 3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
          </svg>
          {totalCount > 0 && (
            <span
              className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] rounded-full text-[10px] font-bold flex items-center justify-center text-white"
              style={{ backgroundColor: '#D4808A' }}
            >
              {totalCount}
            </span>
          )}
        </Link>

        {/* Account */}
        <SignedIn>
          <div className="hidden md:flex flex-shrink-0">
            <UserButton afterSignOutUrl="/" />
          </div>
        </SignedIn>
        <SignedOut>
          <Link
            href="/sign-in"
            className="hidden md:flex flex-shrink-0 p-2 rounded-full transition-colors hover:bg-pink-50 no-underline"
            style={{ color: '#A05A6A' }}
            aria-label="Sign in"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" />
            </svg>
          </Link>
        </SignedOut>

        {/* Mobile menu */}
        <button
          className="md:hidden p-2"
          style={{ color: '#A05A6A' }}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t px-4 py-3 flex flex-col gap-3" style={{ borderColor: '#E8D5D7', backgroundColor: '#FFFAF9' }}>
          {[
            { label: 'Home', href: '/' },
            { label: 'Products', href: '/product' },
            { label: 'Account', href: '/account' },
          ].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-semibold no-underline"
              style={{ color: isActive(href) ? '#D4808A' : '#8B6B6F' }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
