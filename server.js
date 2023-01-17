const express = require('express');
const app = express();

app.get('/',(req,res)=>res.send("hello"))



const PORT = process.env.PORT || 5500 // {port.env.port --> look for an environment variable called port}

app.listen(PORT , ()=>console.log(`server starteed on ${PORT}`));