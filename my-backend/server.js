// In your server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let orders = []; // This will hold all orders

app.post('/api/place-order', (req, res) => {
  const order = req.body; // Get order data from the request
  orders.push(order); // Save order to the array
  res.status(201).send(order); // Respond with the created order
});

app.get('/api/orders', (req, res) => {
  res.json(orders); // Send all orders when requested
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});





