import { getProductById } from "@/data/products";
import Link from "next/link";
import ProductDetailClient from "./ProductDetailClient";

export default async function ProductDetailPage({ params }) {
  // ប្រើប្រាស់ await params តាមស្តង់ដារ Next.js 14/15
  const resolvedParams = await params;
  const product = getProductById(resolvedParams.id);

  if (!product) {
    return (
      <div style={{ padding: "60px", textAlign: "center" }}>
        <h2>Product not found</h2>
        <p style={{ margin: "20px 0" }}>The piece you are looking for does not exist.</p>
        <Link href="/products" style={{ color: "blue", textDecoration: "underline" }}>
          Back to Products
        </Link>
      </div>
    );
  }

  return <ProductDetailClient product={product} />;
}