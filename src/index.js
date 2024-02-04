const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const mcqRoutes = require('./Routes/McqRoutes');
const serverless = require('serverless-http');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
const MONGODB_URI = 'mongodb+srv://task:1234@cluster0.z35hnr3.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use('/api', mcqRoutes);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


