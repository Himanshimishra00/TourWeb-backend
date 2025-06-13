require('dotenv').config()
const express = require('express');

const cors = require('cors');
const destinationRoutes = require('./routes/destination');
const packageRoutes = require('./routes/package');
const db=require('./dbConnection/db')

const app = express();

db()
app.use(cors());
app.use(express.json());

app.use('/api/destinations', destinationRoutes);
app.use('/api/packages', packageRoutes);

app.listen(5000, () => console.log('Server running on http://localhost:5000'));