const express = require('express');
const path = require('path');
const compression = require('compression');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '..');

app.use(helmet());
app.use(compression());
app.use(express.static(publicPath, { maxAge: '1d' }));

app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`HARSH INFOTECH server is running on http://localhost:${PORT}`);
});