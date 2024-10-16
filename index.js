const proxy = require('html2canvas-proxy');
const express = require('express');

const app = express();
app.use('/', proxy());

// Set the port from an environment constiable, or default to 8080
const port = process.env.PORT || 8080;

// Start the server
app.listen(port, function() {
    console.log(`Server is running on port ${port}`);
});
