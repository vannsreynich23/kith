// Central product catalog. Swap the `image` URLs for your own product photos.
export const products = [
  {
    id: "blue-gingham-bow-blouse",
    name: "Blue Gingham Bow Blouse",
    category: "Shirts",
    badge: "BEST SELLER",
    price: 14.99,
    image:
      "https://i.pinimg.com/736x/e7/52/5d/e7525d544c7a9db8cb37d7bb0e818ff2.jpg",
    description:
      "A gingham short-sleeve blouse featuring delicate front bow ties, ruffle hem, and white lace trim.",
    colors: [
      { name: "white", hex: "#fcfbf9" },
      { name: "Blush", hex: "#eeb8c4" },
      { name: "Charcoal", hex: "#4a4a4a" },
    ],
  },
  {
    id: "beige-paperbag-waist-skirt",
    name: "Paperbag Waist Mini Skirt",
    category: "Skirts",
    badge: "NEW",
    price: 12.5,
    image:
      "https://i.pinimg.com/1200x/00/dc/32/00dc3238ef49c076d44ad929e737da89.jpg",
    description:
      "Light beige mini skirt featuring a comfortable paperbag elasticized high waist, front button detail, and a flared A-line silhouette.",
    colors: [
      { name: "Creame", hex: "#fffefe" },
      { name: "Sage", hex: "#b7c4a8" },
      { name: "Chocolate", hex: "#472d02" },
    ],
  },
  {
    id: "doodle-graphic-long-sleeve-tee",
    name: "Doodle Graphic Long-Sleeve Tee",
    category: "Shirts",
    price: 9.99,
    image:
      "https://i.pinimg.com/1200x/18/b8/cb/18b8cb51197af4243eede6d54baea9a9.jpg",
    description:
      "A long-sleeve tee featuring cute doodle graphics, cat print, and a side-cinched drawstring detail.",
    colors: [
      { name: "Light Yellow", hex: "#fcf8d4" },
      { name: "Cream", hex: "#f4ead9" },
      { name: "Grey", hex: "#8c8c8c" }
    ],
  },
  {
    id: "lollipop-zip-up-hoodie",
    name: "Lollipop Zip-Up Hoodie",
    category: "Outerwear",
    badge: "NEW",
    price: 14.7,
    image:
      "https://i.pinimg.com/736x/49/80/93/498093d0b3d3d05539127b55a1bbbcc0.jpg",
    description:
      "Pastel blue zip-up hoodie featuring a cute lollipop chest embroidery, front pockets, and braided drawstring cords with tassels.",
    colors: [
      { name: "Blue", hex: "#b4d3e3" },
      { name: "Grey", hex: "#9e9e9e" },
      { name: "Black", hex: "#2b2b2b" }
    ],
  },
  {
    id: "minimalist-embroidered-fitted-tee",
    name: "Minimalist Embroidered Fitted Tee",
    category: "Shirts",
    badge: "NEW",
    price: 9.99,
    image:
      "https://i.pinimg.com/1200x/20/ba/8e/20ba8e3cbf3b64e9ce64cda96849713b.jpg",
   description:
      "A classic fitted short-sleeve tee featuring a delicate black embroidered chest detail and soft stretch fabric.",
    colors: [
      { name: "White", hex: "#ffffff" },
      { name: "Grey", hex: "#9e9e9e" },
      { name: "Blue", hex: "#b4d3e3" },
      { name: "Black", hex: "#2b2b2b" }
    ],
  },
  {
    id: "layered-off-shoulder-henley",
    name: "Layered Off-Shoulder Henley Top",
    category: "Tops",
    badge: "NEW",
    price: 13.99,
    image:
      "https://i.pinimg.com/736x/7e/7d/44/7e7d4475447a20b2e6df9b2a03a9e644.jpg",
    description:
      "A stylish off-shoulder long-sleeve top featuring a layered built-in white tank cami look with front snap buttons.",
    colors: [
      { name: "Grey", hex: "#9e9e9e" },
      { name: "Blue", hex: "#b4d3e3" },
      { name: "Black", hex: "#2b2b2b" }
    ],
  },
  {
    id: "bow-detail-crop-top",
    name: "Bow Detail Crop Top",
    category: "Tops",
    price: 7.5,
    image:
      "https://images.unsplash.com/photo-1551803091-e20673f15770?q=80&w=800&auto=format&fit=crop",
    description:
      "Ribbed knit crop top with a hand-tied bow at the chest. Layer under overalls or wear solo.",
    colors: [
      { name: "Blush", hex: "#eeb8c4" },
      { name: "Lavender", hex: "#c9b8e0" },
      { name: "White", hex: "#faf7f2" },
    ],
  },
  {
    id: "lace-trim-camisole",
    name: "Lace Trim Camisole",
    category: "Tops",
    price: 6.99,
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop",
    description:
      "Silky slip camisole finished with delicate lace trim along the neckline and hem. A soft-girl closet staple.",
    colors: [
      { name: "Ivory", hex: "#f4ead9" },
      { name: "Dusty Rose", hex: "#c98a96" },
      { name: "Black", hex: "#2b2b2b" },
    ],
  },
  {
    id: "gingham-sundress",
    name: "Gingham Sundress",
    category: "Dresses",
    price: 15.99,
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop",
    description:
      "Fit-and-flare gingham sundress with adjustable straps and side pockets. Warm-weather essential.",
    colors: [
      { name: "Red Gingham", hex: "#c14f4f" },
      { name: "Blue Gingham", hex: "#5b7fa6" },
    ],
  },
  {
    id: "pastel-cardigan",
    name: "Pastel Ribbed Cardigan",
    category: "Outerwear",
    price: 13.99,
    image:
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?q=80&w=800&auto=format&fit=crop",
    description:
      "Cropped ribbed-knit cardigan with pearl buttons. Layers effortlessly over camisoles and slip dresses.",
    colors: [
      { name: "Powder Blue", hex: "#b9d4e0" },
      { name: "Blush", hex: "#eeb8c4" },
      { name: "Butter Yellow", hex: "#eddd9a" },
    ],
  },
  {
    id: "denim-mini-skirt",
    name: "Frayed Hem Denim Mini",
    category: "Skirts",
    price: 11.5,
    image:
      "https://images.unsplash.com/photo-1583496661160-fb5886a5aad4?q=80&w=800&auto=format&fit=crop",
    description:
      "Light-wash denim mini with a raw frayed hem and button-front closure.",
    colors: [
      { name: "Light Wash", hex: "#a9c2d6" },
      { name: "Dark Wash", hex: "#3b5878" },
    ],
  },
  {
    id: "satin-slip-dress",
    name: "Satin Slip Dress",
    category: "Dresses",
    badge: "NEW",
    price: 18.5,
    image:
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=800&auto=format&fit=crop",
    description:
      "Bias-cut satin slip dress with adjustable straps. Dress up with heels or down with sneakers and a cardigan.",
    colors: [
      { name: "Champagne", hex: "#e8d3b0" },
      { name: "Rose", hex: "#c98a96" },
      { name: "Black", hex: "#2b2b2b" },
    ],
  },
];

export function getProductById(id) {
  return products.find((p) => p.id === id);
}
