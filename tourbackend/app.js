const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload'); 
const cors = require('cors');
app.use(cors({credentials: true, origin:`http://localhost:3000`}))
const compression = require('compression');

const tourRoute = require('./routes/tourRoutes');
const blogRoute = require('./routes/blogRoute')
const userRoute = require('./routes/userRoutes');
const orderRoute = require('./routes/orderRoute')
const errorMiddleware = require('./middleware/error');

// Configuration
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});


app.use(cookieParser());

// app.use(bodyParser.json({limit: "50mb"}));
// app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

app.use(fileUpload())

app.get('/api/v1/', (req, res)=>{
    res.send('Home')
})

app.use('/api/v1/', tourRoute);
app.use('/api/v1/', blogRoute)
app.use('/api/v1/', userRoute);
app.use('/api/v1/', orderRoute);

app.use(errorMiddleware)
module.exports = app;