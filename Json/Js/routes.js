var controllercalculadora=require('./calculadoracontroller.js');

module.exports=function(app){
  app.post('/Asumar' , controllercalculadora.Sumar);  //Entre comillas esta en la URL y luego va al metodo a realizar la operacion
    app.post('/Arestar' , controllercalculadora.Restar); //Entre comillas esta en la URL y luego va al metodo a realizar la operacion
      app.post('/Amultiplicar' , controllercalculadora.Multiplicar); //Entre comillas esta en la URL y luego va al metodo a realizar la operacion
        app.post('/Adivision' , controllercalculadora.Dividir); //Entre comillas esta en la URL y luego va al metodo a realizar la operacion

  app.get('*' , function(req,res){ //localhost:8080
    res.sendile('./login.html'); // Carga unica de la vista
});
};
