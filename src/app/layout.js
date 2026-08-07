import { ClerkProvider } from '@clerk/nextjs'
import { CartProvider } from '@/lib/CartContext'
import Header from '@/components/header'
import './globals.css'

export const metadata = {
  title: 'Kith — Soft & Sweet',
  description: 'Coquette, Soft Girl & Vintage women\'s clothing for Cambodian youth',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: '#D4808A',
          colorText: '#3D2B2E',
          colorTextSecondary: '#8B6B6F',
          colorBackground: '#FFFAF9',
          colorInputBackground: '#FDF8F5',
          colorInputText: '#3D2B2E',
          fontFamily: "'Nunito', system-ui, sans-serif",
          borderRadius: '0.75rem',
        },
        elements: {
          card: { boxShadow: 'none', border: '1px solid #E8D5D7' },
        },
      }}
    >
      <html lang="en">
        <head>
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Nunito:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </head>
        <body style={{ backgroundColor: '#FDF8F5', color: '#3D2B2E', fontFamily: "'Nunito', system-ui, sans-serif", margin: 0 }}>
          <CartProvider>
            <Header />
            {children}
          </CartProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
