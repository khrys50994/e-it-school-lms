const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});


const authRoutes = require('./routes/auth');
const resourceRoutes = require('./routes/resources');

app.use('/api/auth', authRoutes);
app.use('/api/resources', resourceRoutes);

const express = require('express');
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
