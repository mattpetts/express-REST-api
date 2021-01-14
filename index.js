const express = require('express');


//Initialise express
const app = express()

// Set a port for the server to run on - 5000 for dev
const PORT = 5000;
app.listen(5000, () => console.log(`Server Running on ${PORT}`))
