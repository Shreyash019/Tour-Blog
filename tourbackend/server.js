const app = require('./app');

// Handling uncaught Exception
process.on('uncaughtException', (err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to uncaught Exception`);
    process.exit(1);
})

const connectDatabase = require('./databaseConnection');
connectDatabase

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