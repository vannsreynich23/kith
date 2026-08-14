import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: "Kith — Soft & Sweet",
  description: "Coquette blouses, vintage pleated skirts, and everyday soft-girl staples.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className="flex flex-col min-h-screen bg-white text-gray-900 antialiased">
          <CartProvider>
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </CartProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}