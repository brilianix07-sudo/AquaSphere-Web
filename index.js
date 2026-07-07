const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Menginstruksikan Express untuk melayani file statis dari folder 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server AquaSphere berjalan lancar di http://localhost:${PORT}`);
});