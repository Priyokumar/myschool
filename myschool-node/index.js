const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'dist/myschool-site')));
app.use("/admin", express.static(path.join(__dirname, 'dist/myschool-client')));

const port = process.env.PORT || 80;
app.listen(port, '0.0.0.0', () => console.log(`\nApp is running on ${port}!`));