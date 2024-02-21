const express = require('express'); // This package is used to create the server
const fs = require('fs'); // This package is used to work with the file system
const path = require('path'); // This package is used to work with file and directory paths
const listEndpoints = require('express-list-endpoints'); // This package is used to list all the available API routes

const app = express(); // Create the server
let port = process.env.PORT || 0; // Use the specified port or let the system choose an available one

// Dynamically import all the API routes
const apiRoutesPath = path.join(__dirname, 'apis'); // The path to the APIs directory
const apiRoutes = fs.readdirSync(apiRoutesPath).filter(file => file.endsWith('.js')); // Get all the files in the APIs directory

// For each API route, import the route and use it in the server
apiRoutes.map(routeFile => {
    const routePath = `./apis/${routeFile}`;
    const route = require(routePath);
    app.use('/api', route);
});

// Displaying the available API routes
app.get('/', (req, res) => {
    let routes = listEndpoints(app).filter((route) => route.path.startsWith('/api'));
    routes.forEach((route) => {
        delete route.middlewares;
    });
    routes.sort((a, b) => {
        if (a.path === '/') return -1;
        if (b.path === '/api') return 1;
        return a.path.localeCompare(b.path);
    });

    const apiPaths = {
        paths: routes.map((route) => route.path),
    };

    // Sorting the paths by length to make it easier to find the desired API (shorter paths first)
    apiPaths.paths.sort((a, b) => a.length - b.length);
    apiPaths.GitHub = 'https://github.com/johnandreopoulos/Public-APIs';
    apiPaths.Description = 'This is a collection of public APIs that I have created. Each API is a separate route and can be accessed by appending the route to the base URL. For example, to access the Google News API, you would use the URL http://localhost:${port}/api/googlenews.';

    res.json(apiPaths);
});

// Start the server and listen on the dynamically assigned port
const server = app.listen(port, () => {
    const actualPort = server.address().port; // Get the actual port that the server is listening on
    port = actualPort; // Save the actual port to the port variable
    console.log(`Server is running at http://localhost:${actualPort}`);

    // Automatically open the default browser to the server's URL
    // const { exec } = require('child_process');
    // exec(`start http://localhost:${actualPort}`);
});