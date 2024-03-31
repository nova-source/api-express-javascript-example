var express = require('express');
var app =express();
var port = 3000;

app.get('/', function(req, res) {
    res.json({ mensaje: '¡Hola Mundo! api rest by nova.source' })
  })

  console.log('API escuchando en el puerto ' + port);

  app.listen(port);