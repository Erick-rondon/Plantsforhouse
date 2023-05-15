console.log("Proyecto Plantsforhouse")

const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 3000; 

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname,'../public')));

app.get('/', (req, res)=>{
    res.render('./pages/Home');
})

app.get('/Contacts', (req, res)=>{
    res.render('./pages/Contacts');
})

app.listen(port, ()=>{
    console.log(`Servidor corriendo en el http:localhost:${port}`);
})