const express = require('express');
const path = require('path');
const compression = require('compression');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../dist');

// Configure Helmet with Custom Content Security Policy (CSP) to allow streaming video and external assets
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
        styleSrc: ["'self'", "'unsafe-inline'", "fonts.googleapis.com"],
        fontSrc: ["'self'", "fonts.gstatic.com"],
        imgSrc: ["'self'", "data:", "blob:"],
        mediaSrc: ["'self'", "blob:", "data:", "vjs.zencdn.net", "commondatastorage.googleapis.com"],
        frameSrc: ["'self'", "www.google.com"],
        connectSrc: ["'self'", "vjs.zencdn.net", "commondatastorage.googleapis.com"],
      },
    },
  })
);

app.use(compression());
app.use(express.static(publicPath, { maxAge: '1d' }));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`HARSH INFOTECH server is running on http://localhost:${PORT}`);
});