import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
  barcode: string;
  category: string;
  stock: number;
}

interface InventoryContextType {
  products: Product[];
  addProduct: (product: Omit<Product, 'id'>) => void;
  updateProduct: (id: string, product: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  updateStock: (id: string, quantity: number) => void;
}

const InventoryContext = createContext<InventoryContextType | undefined>(undefined);

export const useInventory = () => {
  const context = useContext(InventoryContext);
  if (!context) {
    throw new Error('useInventory must be used within an InventoryProvider');
  }
  return context;
};

interface InventoryProviderProps {
  children: ReactNode;
}

export const InventoryProvider: React.FC<InventoryProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: '1',
      name: 'Premium Coffee Beans',
      price: 24.99,
      barcode: '1234567890123',
      category: 'Beverages',
      stock: 45
    },
    {
      id: '2',
      name: 'Organic Whole Milk',
      price: 4.99,
      barcode: '2345678901234',
      category: 'Dairy',
      stock: 23
    },
    {
      id: '3',
      name: 'Artisan Bread Loaf',
      price: 6.49,
      barcode: '3456789012345',
      category: 'Bakery',
      stock: 12
    },
    {
      id: '4',
      name: 'Fresh Banana Bundle',
      price: 3.99,
      barcode: '4567890123456',
      category: 'Produce',
      stock: 67
    },
    {
      id: '5',
      name: 'Greek Yogurt',
      price: 5.99,
      barcode: '5678901234567',
      category: 'Dairy',
      stock: 8
    },
    {
      id: '6',
      name: 'Dark Chocolate Bar',
      price: 7.99,
      barcode: '6789012345678',
      category: 'Snacks',
      stock: 34
    },
    {
      id: '7',
      name: 'Orange Juice',
      price: 4.49,
      barcode: '7890123456789',
      category: 'Beverages',
      stock: 19
    },
    {
      id: '8',
      name: 'Pasta Sauce',
      price: 3.79,
      barcode: '8901234567890',
      category: 'Pantry',
      stock: 7
    }
  ]);

  const addProduct = (product: Omit<Product, 'id'>) => {
    const newProduct = {
      ...product,
      id: Date.now().toString()
    };
    setProducts(prev => [...prev, newProduct]);
  };

  const updateProduct = (id: string, updatedProduct: Partial<Product>) => {
    setProducts(prev =>
      prev.map(product =>
        product.id === id ? { ...product, ...updatedProduct } : product
      )
    );
  };

  const deleteProduct = (id: string) => {
    setProducts(prev => prev.filter(product => product.id !== id));
  };

  const updateStock = (id: string, quantity: number) => {
    setProducts(prev =>
      prev.map(product =>
        product.id === id ? { ...product, stock: quantity } : product
      )
    );
  };

  const value = {
    products,
    addProduct,
    updateProduct,
    deleteProduct,
    updateStock
  };

  return (
    <InventoryContext.Provider value={value}>
      {children}
    </InventoryContext.Provider>
  );
};