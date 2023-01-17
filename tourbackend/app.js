const express = require('express');
const app = express();
const tourRoute = require('./routes/tourRoutes');
const blogRoute = require('./routes/blogRoute')
const userRoute = require('./routes/userRoutes');

app.use(express.json());

app.get('/api/v1/', (req, res)=>{
    res.send('Home')
})

app.use('/api/v1/tour', tourRoute);
app.use('/api/v1/blog', blogRoute)
app.use('/api/v1/user', userRoute);

module.exports = app;