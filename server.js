const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the "Guinzo" directory
app.use('/Guinzo', express.static(path.join(__dirname, 'Guinzo')));

app.get('/', (req, res) => {
  res.redirect('/Guinzo');
});

app.listen(8080, () => {
  console.log('Server is running on http://127.0.0.1:8080');
});
