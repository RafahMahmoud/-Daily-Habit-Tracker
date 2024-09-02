const express = require('express');
const connectDB = require('./config/db');
const habitRoutes = require('./routes/habitRoutes');
// require('dotenv').config();
const cors = require("cors");
const app = express();
connectDB();
app.use(cors());
app.use(express.json());
app.use('/api/habits', habitRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
