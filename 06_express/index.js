const express = require("express");

const app = express();

const PORT = 3000;

app.get("/Khadija",(req, res) =>{
    res.send("Khadija")
});

app.get("/Mano",(req, res) =>{
    res.send("Mano Billi")
});

// Start the server
app.listen(PORT, () => {
    console.log(`server in running on http:localhost:${PORT}`)
});
