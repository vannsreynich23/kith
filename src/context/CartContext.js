"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);
const STORAGE_KEY = "kith-cart";

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [hydrated, setHydrated] = useState(false);

  // Load saved cart on mount
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch (e) {
      console.error("Could not read cart from storage", e);
    } finally {
      setHydrated(true);
    }
  }, []);

  // Persist on every change
  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.error("Could not save cart to storage", e);
    }
  }, [items, hydrated]);

  function addItem(product, qty = 1, options = {}) {
    const color = options.color ?? null;
    const lineId = color ? `${product.id}::${color.name}` : product.id;

    setItems((prev) => {
      const existing = prev.find((i) => i.lineId === lineId);
      if (existing) {
        return prev.map((i) =>
          i.lineId === lineId ? { ...i, qty: i.qty + qty } : i
        );
      }
      return [
        ...prev,
        {
          lineId,
          id: product.id,
          name: product.name,
          category: product.category,
          price: product.price,
          image: product.image,
          color,
          qty,
        },
      ];
    });
  }

  function removeItem(lineId) {
    setItems((prev) => prev.filter((i) => i.lineId !== lineId));
  }

  function updateQty(lineId, qty) {
    if (qty < 1) return removeItem(lineId);
    setItems((prev) => prev.map((i) => (i.lineId === lineId ? { ...i, qty } : i)));
  }

  function clearCart() {
    setItems([]);
  }

  const { subtotal, count } = useMemo(() => {
    return items.reduce(
      (acc, i) => ({
        subtotal: acc.subtotal + i.price * i.qty,
        count: acc.count + i.qty,
      }),
      { subtotal: 0, count: 0 }
    );
  }, [items]);

  const value = {
    items,
    addItem,
    removeItem,
    updateQty,
    clearCart,
    subtotal,
    count,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
