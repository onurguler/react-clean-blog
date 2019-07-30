const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

// Init middleware - body-parser
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running...'));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/blogs', require('./routes/api/blogs'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
