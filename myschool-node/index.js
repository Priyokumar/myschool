const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'dist/myschool-site')));
app.use(express.static(path.join(__dirname, 'dist/myschool-client')));

app.get("/admin*", (req, res) => res.sendFile(path.join(__dirname, 'dist/myschool-client/index.html')));

app.get("*", (req, res) => res.sendFile(path.join(__dirname, 'dist/myschool-site/index.html')));


const port = process.env.PORT || 80;
app.listen(port, '0.0.0.0', () => console.log(`\nApp is running on ${port}!`));