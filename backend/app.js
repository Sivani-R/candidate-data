const express = require('express');
const mongoose = require('mongoose');
const candidateRoutes = require('./routes/candidateRoutes');

const app = express();
const cors = require('cors');


app.use(cors());

app.use(express.json());
app.use('/api/candidates', candidateRoutes);

mongoose.connect('mongodb://localhost:27017/candidatesDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
