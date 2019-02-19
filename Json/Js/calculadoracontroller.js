class _Operacion{
  constructor (_numero1 , _numero2) {
    this.numero1= _numero1;
    this.numero2= _numero2;
  }

  Sumar()  { Devuelve el resultado a la peticion de la funcion de abajo
    return this.numero1 + this.numero2;
 }
  Restar()Devuelve el resultado a la peticion de la funcion de abajo
    {
      return this.numero1 - this.numero2;
    }
    Multi()
    {Devuelve el resultado a la peticion de la funcion de abajo
      return this.numero1 * this.numero2;
    }
    Div()Devuelve el resultado a la peticion de la funcion de abajo
    {
      return this.numero1 / this.numero2;
    }
  }
  exports.Sumar= function(req, res){ // Operaciones con parametros de otra funcion
    let claseinstanciada= new _Operacion(req.body.Numero1, req.body.Numero2);
    res.json(claseinstanciada.Sumar());
  }

  exports.Restar= function(req, res){ // Operaciones con parametros de otra funcion
    let claseinstanciada= new _Operacion(req.body.Numero1, req.Numero2);
    res.json(claseinstanciada.Restar());
  }
  exports.Multiplicar= function(req, res){ // Operaciones con parametros de otra funcion
    let claseinstanciada= new _Operacion(req.body.Numero1, req.body.Numero2);
    res.json(claseinstanciada.Multi());
  }
  exports.Dividir= function(req, res){ // Operaciones con parametros de otra funcion
    let claseinstanciada= new _Operacion(req.body.Numero1, req.body.Numero2);
    res.json(claseinstanciada.Div());
  }
