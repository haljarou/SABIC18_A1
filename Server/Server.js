const express = require('express');
// a db with mongo
const mongoose = require('mongoose');
const app = express ();

const port = process.env.PORT || 5001;

// To display values of variables to display we use back ticks (ES6)
app.get('/', (req,res)=>res.send('hello'));
app.listen(port, () => console.log (`server running port ${port}`));


