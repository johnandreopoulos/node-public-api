const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
let port = process.env.PORT || 0; // Use the specified port or let the system choose an available one

// Dynamically load all API routes from the ./apis folder
const apiRoutesPath = path.join(__dirname, 'apis');
const apiRoutes = fs.readdirSync(apiRoutesPath).filter(file => file.endsWith('.js'));

apiRoutes.map(routeFile => {
    const routePath = `./apis/${routeFile}`;
    const route = require(routePath);
    app.use('/api', route);
});

// Display a list of all available API paths in JSON format
app.get('/', (req, res) => {
    const apiPaths = apiRoutes.map(routeFile => `/api/${routeFile.replace('.js', '')}`);
    res.json({
        paths: apiPaths.map(path => `http://localhost:${port}${path}`),
        GitHub: 'https://github.com/johnandreopoulos/Public-APIs',
        Description: `This is a collection of public APIs that I have created. Each API is a separate route and can be accessed by appending the route to the base URL. For example, to access the Google News API, you would use the URL http://localhost:${port}/api/googlenews.`
    });
});

// Start the server and listen on the dynamically assigned port
const server = app.listen(port, () => {
    const actualPort = server.address().port;
    port = actualPort;
    console.log(`Server is running at http://localhost:${actualPort}`);
});