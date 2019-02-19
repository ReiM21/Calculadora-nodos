var controllercalculadora = require('./calculadoracontroller.js');

module.exports = function(app) {
  app.post('/Asumar' , controllercalculadora.Sumar);  //  Lo que esta entre comillas se encuentra en el URL y luego se dirige al metodo para realizar la operacion
  app.post('/Arestar' , controllercalculadora.Restar);  //  Lo que esta entre comillas se encuentra en el URL y luego se dirige al metodo para realizar la operacion
  app.post('/Amultiplicar' , controllercalculadora.Multiplicar);  //  Lo que esta entre comillas se encuentra en el URL y luego se dirige al metodo para realizar la operacion
  app.post('/Adividir' , controllercalculadora.Dividir);  //  Lo que esta entre comillas se encuentra en el URL y luego se dirige al metodo para realizar la operacion

  app.get('*' , function(req, res) {  //  localhost:8080
    res.sendfile('./login.html'); //  Carga unica de la vista
  });
};
