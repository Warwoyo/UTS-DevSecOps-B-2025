const express = require('express');
const app = express();
app.use(express.json());

const users = [];

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: 'Data tidak boleh kosong' });

  const exists = users.find(u => u.username === username);
  if (exists) return res.status(409).json({ error: 'Username sudah digunakan' });

  users.push({ username, password });
  return res.status(201).json({ message: 'Registrasi sukses' });
});

module.exports = app;
