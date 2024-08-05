require('dotenv').config();
const express = require('express');
const adRoutes = require('./routes/adRoutes');
const errorHandler = require('./utils/errorHandler');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', adRoutes);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
