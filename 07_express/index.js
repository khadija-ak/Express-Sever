const express = require("express");

const app = express();

const PORT = 5000;

app.use(express.json());

app.post("/user",(req, res) =>{
    console.log(req.body);  // read data and show in body
    res.send("User Recevied Data")
});
// Start the server
app.listen(PORT, () => {
    console.log(`server in running on http:localhost:${PORT}`)
});