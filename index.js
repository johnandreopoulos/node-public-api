const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Dynamically load all API routes from the ./apis folder
const apiRoutesPath = path.join(__dirname, 'apis');
const apiRoutes = fs.readdirSync(apiRoutesPath).filter(file => file.endsWith('.js'));

apiRoutes.forEach(routeFile => {
    const routePath = `./apis/${routeFile}`;
    const route = require(routePath);
    app.use('/api', route);
});

// Display a list of all available API paths in JSON format
app.get('/', (req, res) => {
    const apiPaths = apiRoutes.map(routeFile => `/api/${routeFile.replace('.js', '')}`);
    res.json({ availableApiPaths: apiPaths });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
