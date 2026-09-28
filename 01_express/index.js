// import express
import express from "express";
//develop application
const app = express();
// lisnting to the port
const PORT = 3000;
npm
//define the route
app.get("/",(req, res) =>{
    res.send("Hello World")
});
// Start the server
app.listen(PORT, () => {
    console.log(`server in running on http:localhost:${PORT}`)
});


