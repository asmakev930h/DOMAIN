const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/', createProxyMiddleware({
  target: 'http://165.227.176.133:2137/',
  changeOrigin: true,
  secure: false
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy running on port ${PORT}`);
});
