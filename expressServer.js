const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'dist')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
const server = app.listen(8081, function() {
  const host = server.address().address;
  const { port } = server.address();

  console.log('应用实例，访问地址为 http://%s:%s', host, port);
});
