import express from "express";

const app = express();
// lisnting to the port
const PORT = 3000;

//define the route
app.get("/",(req, res) =>{
    res.send("i am running 5th time")
});
// Start the server
app.listen(PORT, () => {
    console.log(`server in running on http:localhost:${PORT}`)
});