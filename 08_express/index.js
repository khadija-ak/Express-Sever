const express = require("express");
const app = express();
const PORT = 5500;
app.use(express.json());
app.post("/user" , (req,res) =>{
    console.log("POST data:", req.body);
    res.send("User Created")
});
//put 
app.put("/user", (req,res) =>{
    const { name,gmail } = req.body;

    res.json({message: "user updated", name, gmail})
});
//404 route
app.use((req,res) =>{
    res.status(404).send("Route not found")
});
//start server
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
}
);