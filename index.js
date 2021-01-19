const express = require('express');
const logger = require('./middleware/logger')
const notFound = require('./middleware/404')


//Initialise express
const app = express();

// Initialise the logger
app.use(logger);

// Allow the API to parse json
app.use(express.json());

// Set a port for the server to run on - 5000 for dev
app.use('/api/v1', require('./routes/api/v1'));

// Handle 404s
app.use(notFound);

const PORT = process.env.PORT || 5000;

// Run the server
app.listen(PORT, () => {
    console.log('server running on port ' + PORT)
});
