'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function ProductDetailPage() {
  const params = useParams();
  const { id } = params;
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:5000/api/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error('Error fetching product detail:', err);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) return <div style={{ padding: '40px', textAlign: 'center' }}>Loading...</div>;
  if (!product) return <div style={{ padding: '40px', textAlign: 'center' }}>Product not found!</div>;

  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '28px', color: '#333' }}>{product.name}</h1>
      <p style={{ fontSize: '22px', color: '#e44d26', fontWeight: 'bold', margin: '15px 0' }}>
        ${product.price}
      </p>
      <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px', border: '1px solid #ddd' }}>
        <h3>Description</h3>
        <p style={{ color: '#666', lineHeight: '1.6' }}>{product.description}</p>
      </div>
      <br />
      <a href="/product" style={{ color: '#0070f3', textDecoration: 'none' }}>← Back to Products</a>
    </div>
  );
}