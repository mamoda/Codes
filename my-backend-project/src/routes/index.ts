import { Express} from 'express';

// Interfaces for type safety
interface Product {
  id: string;
  name: string;
  price: number;
  barcode: string;
  category: string;
  stock: number;
}

interface CartItem extends Product {
  quantity: number;
}

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  totalPurchases: number;
  visits: number;
}

interface Sale {
  date: string;
  transactions: number;
  amount: number;
  items: number;
}

interface Settings {
  taxRate: number;
  currency: string;
  acceptCards: boolean;
  acceptCash: boolean;
  storeName: string;
  storeAddress: string;
  printReceipt: boolean;
  emailReceipt: boolean;
  lowStock: boolean;
  dailyReport: boolean;
  systemAlerts: boolean;
  sessionTimeout: number;
  requirePassword: boolean;
  logTransactions: boolean;
}

// In-memory mock data
let products: Product[] = [
  { id: '1', name: 'Premium Coffee Beans', price: 24.99, barcode: '1234567890123', category: 'Beverages', stock: 45 },
  { id: '2', name: 'Organic Whole Milk', price: 4.99, barcode: '2345678901234', category: 'Dairy', stock: 23 },
  { id: '3', name: 'Artisan Bread Loaf', price: 6.49, barcode: '3456789012345', category: 'Bakery', stock: 12 },
  { id: '4', name: 'Fresh Banana Bundle', price: 3.99, barcode: '4567890123456', category: 'Produce', stock: 67 },
  { id: '5', name: 'Greek Yogurt', price: 5.99, barcode: '5678901234567', category: 'Dairy', stock: 8 },
  { id: '6', name: 'Dark Chocolate Bar', price: 7.99, barcode: '6789012345678', category: 'Snacks', stock: 34 },
  { id: '7', name: 'Orange Juice', price: 4.49, barcode: '7890123456789', category: 'Beverages', stock: 19 },
  { id: '8', name: 'Pasta Sauce', price: 3.79, barcode: '8901234567890', category: 'Pantry', stock: 7 }
];

let cart: CartItem[] = [];

let customers: Customer[] = [
  { id: '1', name: 'Sarah Johnson', email: 'sarah@email.com', phone: '+1-555-0123', totalPurchases: 847.50, visits: 12 },
  { id: '2', name: 'Mike Chen', email: 'mike@email.com', phone: '+1-555-0124', totalPurchases: 623.75, visits: 8 },
  { id: '3', name: 'Emma Davis', email: 'emma@email.com', phone: '+1-555-0125', totalPurchases: 1250.30, visits: 15 },
  { id: '4', name: 'Alex Wilson', email: 'alex@email.com', phone: '+1-555-0126', totalPurchases: 456.80, visits: 6 },
  { id: '5', name: 'Lisa Brown', email: 'lisa@email.com', phone: '+1-555-0127', totalPurchases: 789.25, visits: 10 }
];

const sales: Sale[] = [
  { date: '2024-01-15', transactions: 23, amount: 1250.75, items: 78 },
  { date: '2024-01-14', transactions: 31, amount: 1875.20, items: 102 },
  { date: '2024-01-13', transactions: 18, amount: 945.30, items: 56 },
  { date: '2024-01-12', transactions: 27, amount: 1680.45, items: 89 },
  { date: '2024-01-11', transactions: 35, amount: 2150.80, items: 124 }
];

let settings: Settings = {
  taxRate: 8.25,
  currency: 'USD',
  acceptCards: true,
  acceptCash: true,
  storeName: 'CashierPro Store',
  storeAddress: '123 Main Street\nAnytown, ST 12345\nPhone: (555) 123-4567',
  printReceipt: true,
  emailReceipt: false,
  lowStock: true,
  dailyReport: true,
  systemAlerts: false,
  sessionTimeout: 30,
  requirePassword: true,
  logTransactions: true
};

export function setRoutes(app: Express) {
  // Products
  app.get('/api/products', (req, res) => res.json(products));
  app.post('/api/products', (req, res) => {
    const { name, price, barcode, category, stock } = req.body;
    if (!name || !price || !barcode || !category || stock === undefined) {
      return res.status(400).json({ error: 'Missing product fields' });
    }
    const newProduct: Product = { id: Date.now().toString(), name, price, barcode, category, stock };
    products.push(newProduct);
    res.status(201).json(newProduct);
  });
  app.put('/api/products/:id', (req, res) => {
    const idx = products.findIndex(p => p.id === req.params.id);
    if (idx === -1) return res.sendStatus(404);
    products[idx] = { ...products[idx], ...req.body };
    res.json(products[idx]);
  });
  app.delete('/api/products/:id', (req, res) => {
    products = products.filter(p => p.id !== req.params.id);
    res.sendStatus(204);
  });

  // Cart
  app.get('/api/cart', (req, res) => res.json(cart));
  app.post('/api/cart', (req, res) => {
    const { id, quantity } = req.body;
    const product = products.find(p => p.id === id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    const existing = cart.find(item => item.id === id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }
    res.json(cart);
  });
  app.put('/api/cart/:id', (req, res) => {
    const item = cart.find(i => i.id === req.params.id);
    if (!item) return res.sendStatus(404);
    item.quantity = Math.max(1, req.body.quantity);
    res.json(cart);
  });
  app.delete('/api/cart/:id', (req, res) => {
    cart = cart.filter(i => i.id !== req.params.id);
    res.sendStatus(204);
  });
  app.post('/api/cart/clear', (req, res) => {
    cart = [];
    res.sendStatus(204);
  });

  // Customers
  app.get('/api/customers', (req, res) => res.json(customers));
  app.post('/api/customers', (req, res) => {
    const { name, email, phone, totalPurchases, visits } = req.body;
    if (!name || !email || !phone || totalPurchases === undefined || visits === undefined) {
      return res.status(400).json({ error: 'Missing customer fields' });
    }
    const newCustomer: Customer = { id: Date.now().toString(), name, email, phone, totalPurchases, visits };
    customers.push(newCustomer);
    res.status(201).json(newCustomer);
  });
  app.put('/api/customers/:id', (req, res) => {
    const idx = customers.findIndex(c => c.id === req.params.id);
    if (idx === -1) return res.sendStatus(404);
    customers[idx] = { ...customers[idx], ...req.body };
    res.json(customers[idx]);
  });
  app.delete('/api/customers/:id', (req, res) => {
    customers = customers.filter(c => c.id !== req.params.id);
    res.sendStatus(204);
  });

  // Sales
  app.get('/api/sales', (req, res) => res.json(sales));
  app.post('/api/sales', (req, res) => {
    const { date, transactions, amount, items } = req.body;
    if (!date || transactions === undefined || amount === undefined || items === undefined) {
      return res.status(400).json({ error: 'Missing sale fields' });
    }
    const newSale: Sale = { date, transactions, amount, items };
    sales.unshift(newSale);
    res.status(201).json(newSale);
  });

  // Settings
  app.get('/api/settings', (req, res) => res.json(settings));
  app.put('/api/settings', (req, res) => {
    settings = { ...settings, ...req.body };
    res.json(settings);
  });

  // Checkout (simulate payment)
  app.post('/api/checkout', (req, res) => {
    cart = [];
    res.json({ success: true, message: 'Checkout complete!' });
  });
}