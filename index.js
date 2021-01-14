const express = require('express');
const logger = require('./middleware/logger')


//Initialise express
const app = express();

// Initialise the logger
app.use(logger) 

// Set a port for the server to run on - 5000 for dev
app.use('/api/v1', require('./routes/api/v1'));

const PORT = process.env.PORT || 5000;

// Run the server
app.listen(PORT, () => {
    console.log('server running on port ' + PORT)
});
