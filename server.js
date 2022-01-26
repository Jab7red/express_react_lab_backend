// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express');
const cors = require('cors');
// =======================================
//           IMPORT JSON FILES
// =======================================
const projects = require('./projects.json');
const about = require('./about.json');
// =======================================
//           CREATE APP OBJECT
// =======================================
const app = express();
// =======================================
//         CONFIGURE SERVER SETTINGS
// =======================================
require('dotenv').config();
// =======================================
//              MIDDLEWARE
// =======================================
app.use(cors());
// =======================================
//              TEST ROUTE
// =======================================
app.get('/', (req, res) => {
    res.send('Hello World')
});
// =======================================
//            ROUTE FOR PROJECTS
// =======================================
app.get('/projects', (req, res) => {
    // send projects via JSON
    res.json(projects);
});
// =======================================
//             ROUTE FOR ABOUT
// =======================================
app.get('/about', (req, res) => {
    // send about via JSON
    res.json(about);
});
// =======================================
//          DECLARE PORT VARIABLE
// =======================================
const PORT = process.env.PORT || 4000;
// =======================================
//              APP LISTENER
// =======================================
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));