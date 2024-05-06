const { createServer } = require('http');
const url = require('url');
const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  const { pathname } = url.parse(req.url, true);

  if (pathname === '/order') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const orderData = JSON.parse(body);
      const totalPrice = calcTotal(orderData);

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(`Order Received!\nTotal: $${totalPrice.toFixed(2)}`);
    });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Error');
  }
});

function calcTotal(orderData) {
  let totalPrice = 0;
  const menuItems = [
    { name: 'Quinoa Stuffed Bell Peppers', price: 8.99 },
    { name: 'Chickpea Curry Bowl', price: 7.99 },
    { name: 'Eggplant Parmesan', price: 5.99 },
    { name: 'Roasted Vegetable Tart', price: 5.99 }
  ];

  Object.keys(orderData).forEach(item => {
    const quantity = orderData[item];
    const menuItem = menuItems.find(menuItem => menuItem.name === item);
    if (menuItem) {
      totalPrice += menuItem.price * quantity;
    }
  });

  return totalPrice;
}

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
