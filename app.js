const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Simulasi penyimpanan user in-memory
const users = [];

// Endpoint POST /register
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  // Validasi sederhana
  if (!username || !password) {
    return res.status(400).json({ error: 'Username dan password wajib diisi' });
  }
  // Cek duplikasi
  if (users.find(u => u.username === username)) {
    return res.status(409).json({ error: 'Username sudah terdaftar' });
  }
  // Simpan user
  users.push({ username, password });
  return res.status(201).json({ message: 'Registrasi sukses' });
});

// Jalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server berjalan di port ${PORT}`));
