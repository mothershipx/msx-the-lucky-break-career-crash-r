// The 'Lucky Break' Career Crash Recovery — Entry point
// TODO: Build the core product logic

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ product: 'The 'Lucky Break' Career Crash Recovery', status: 'pre-mvp' });
});

app.get('/health', (req, res) => {
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`The 'Lucky Break' Career Crash Recovery running on port ${PORT}`);
});
