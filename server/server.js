const express = require('express');
require('./config/config')
const app = express();
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/usuario', (req, res) => {
    res.json('get Usuario');
});


app.post('/usuario', (req, res) => {
    let body = req.body;
    if (body.nombre == null) {
        res.status(400).json({
            ok: false,
            message: "Bad request is necesary prop : nombre"
        })
    } else {
        res.json({
            body
        });
    }
});

app.put('/usuario/:id', (req, res) => {
    let idUser = req.params.id;
    res.json({
        id: idUser,
        name: "Diego Guerrero"
    });

});
app.delete('/usuario', (req, res) => {
    res.json('delete Usuario');
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto:', process.env.PORT);
});