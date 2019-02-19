class _Operacion {
  constructor (_numero1 , _numero2) { //  Define los numeros que recibe
    this.numero1 = parseInt(_numero1);
    this.numero2 = parseInt(_numero2);
  }

  Sumar() {
    return this.numero1 + this.numero2; //  Devuelve el resultado a la peticion de la funcion de abajo
  }

  Restar() {
    return this.numero1 - this.numero2; //  Devuelve el resultado a la peticion de la funcion de abajo
  }

  Multi() {
    return this.numero1 * this.numero2; //  Devuelve el resultado a la peticion de la funcion de abajo
  }

  Div() {
    return this.numero1 / this.numero2; //  Devuelve el resultado a la peticion de la funcion de abajo
  }
}

exports.Sumar = function(req , res) { //  Realiza las operaciones con parametros de otra funcion
  let claseinstanciada = new _Operacion(req.body.Numero1 , req.body.Numero2);
  res.json(claseinstanciada.Sumar());
}

exports.Restar = function(req , res) {  //  Realiza las operaciones con parametros de otra funcion
  let claseinstanciada = new _Operacion(req.body.Numero1 , req.body.Numero2);
  res.json(claseinstanciada.Restar());
}

exports.Multiplicar = function(req , res) { //  Realiza las operaciones con parametros de otra funcion
  let claseinstanciada = new _Operacion(req.body.Numero1 , req.body.Numero2);
  res.json(claseinstanciada.Multi());
}

exports.Dividir = function(req , res) { //  Realiza las operaciones con parametros de otra funcion
  let claseinstanciada = new _Operacion(req.body.Numero1 , req.body.Numero2);
  res.json(claseinstanciada.Div());
}
