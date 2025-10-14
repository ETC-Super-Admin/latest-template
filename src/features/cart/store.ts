import { create } from "zustand";
import { Product } from "@/features/products/types";

// Define the interface for a single item in the cart
export interface CartItem extends Product {
  quantity: number;
}

// Define the interface for the cart's state
export interface CartState {
  items: CartItem[];
  addItem: (item: Product) => void;
  removeItem: (itemId: number) => void;
  updateItemQuantity: (itemId: number, quantity: number) => void;
  clearCart: () => void;
}

const useCartStore = create<CartState>((set) => ({
  items: [],

  // Add an item to the cart or update its quantity if it already exists
  addItem: (product) =>
    set((state) => {
      const existingItem = state.items.find((item) => item.id === product.id);
      if (existingItem) {
        // If item exists, update its quantity
        const updatedItems = state.items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
        return { items: updatedItems };
      } else {
        // If item does not exist, add it to the cart
        const newItem: CartItem = { ...product, quantity: 1 };
        return { items: [...state.items, newItem] };
      }
    }),

  // Remove an item from the cart
  removeItem: (itemId) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== itemId),
    })),

  // Update the quantity of a specific item
  updateItemQuantity: (itemId, quantity) =>
    set((state) => {
      if (quantity <= 0) {
        // If quantity is 0 or less, remove the item
        return { items: state.items.filter((item) => item.id !== itemId) };
      } else {
        const updatedItems = state.items.map((item) =>
          item.id === itemId ? { ...item, quantity } : item,
        );
        return { items: updatedItems };
      }
    }),

  // Clear all items from the cart
  clearCart: () => set({ items: [] }),
}));

export default useCartStore;
