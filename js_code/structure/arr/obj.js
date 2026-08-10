const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    price: 14.99,
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    price: 89.99,
  },
  {
    id: 3,
    name: "USB-C Hub",
    price: 39.5,
  },
  {
    id: 9,
    name: "27-inch Monitor",
    price: 249.99,
  },
  {
    id: 5,
    name: "Laptop Stand",
    price: 34.99,
  },
  {
    id: 6,
    name: "Noise-Canceling Headphones",
    price: 199.99,
  },
  {
    id: 7,
    name: "Portable SSD 1TB",
    price: 119.99,
  },
  {
    id: 8,
    name: "Webcam HD",
    price: 59.99,
  },
];

console.log(products.find(product => product.id == 4));
