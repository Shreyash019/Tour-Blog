const app = require('./app');
const cloudinary = require('cloudinary');

// Handling uncaught Exception
process.on('uncaughtException', (err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to uncaught Exception`);
    process.exit(1);
})

const connectDatabase = require('./databaseConnection');
connectDatabase

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const PORT = process.env.PORT || 5000
app.listen(PORT, (err)=>{
    if(err) console.log(err)
    else console.log(`Server running at port:: ${PORT}`)
});

// Unhandled promises Rejection
process.on('unhandledRejection', (err=>{
    console.log(`Error ${err.message}`);
    console.log(`Sutting down the server due to handled promise rejection`);

    server.close(()=>{
        process.exit(1);
    })
}))