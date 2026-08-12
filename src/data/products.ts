export interface Product {
  id: number
  name: string
  category: string
  price: number
  image: string
  tag?: string
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Floral Tie-Front Blouse',
    category: 'Blouses',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=480&h=600&fit=crop&auto=format',
    tag: 'Best Seller',
  },
  {
    id: 2,
    name: 'Pleated Pastel Mini Skirt',
    category: 'Skirts',
    price: 12.50,
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a773e6?w=480&h=600&fit=crop&auto=format',
    tag: 'New',
  },
  {
    id: 3,
    name: 'Vintage Puff Sleeve Top',
    category: 'Tops',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=480&h=600&fit=crop&auto=format',
  },
  {
    id: 4,
    name: 'Bow Detail Crop Top',
    category: 'Tops',
    price: 7.50,
    image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=480&h=600&fit=crop&auto=format',
    tag: 'Sale',
  },
  {
    id: 5,
    name: 'Cottagecore Ruffle Dress',
    category: 'Dresses',
    price: 18.00,
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=480&h=600&fit=crop&auto=format',
    tag: 'New',
  },
  {
    id: 6,
    name: 'Lace Trim Camisole',
    category: 'Tops',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=480&h=600&fit=crop&auto=format',
  },
  {
    id: 7,
    name: 'A-Line Floral Midi Skirt',
    category: 'Skirts',
    price: 13.50,
    image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=480&h=600&fit=crop&auto=format',
  },
  {
    id: 8,
    name: 'Gingham Check Blouse',
    category: 'Blouses',
    price: 10.50,
    image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=480&h=600&fit=crop&auto=format',
    tag: 'Sale',
  },
  {
    id: 9,
    name: 'Satin Slip Midi Skirt',
    category: 'Skirts',
    price: 14.00,
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?w=480&h=600&fit=crop&auto=format',
  },
  {
    id: 10,
    name: 'Soft Knit Vest (Cream)',
    category: 'Tops',
    price: 9.00,
    image: 'https://images.unsplash.com/photo-1562572159-4efd90232b69?w=480&h=600&fit=crop&auto=format',
  },
  {
    id: 11,
    name: 'Ditsy Print Sundress',
    category: 'Dresses',
    price: 16.00,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4b4545?w=480&h=600&fit=crop&auto=format',
    tag: 'Best Seller',
  },
  {
    id: 12,
    name: 'Vintage Cardigan (Pink)',
    category: 'Outerwear',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=480&h=600&fit=crop&auto=format',
    tag: 'New',
  },
]

export const categories = ['All', 'Blouses', 'Tops', 'Skirts', 'Dresses', 'Outerwear']
