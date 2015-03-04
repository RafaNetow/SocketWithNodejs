var method = Me.prototype
var ModulCliente = require('./Cliente');
var prompt = require('prompt');
var Empleado = require('./Empleado');
var Main = require('./Main');
var MEmpleado ;

var HandleCliente= new ModulCliente.HandleClient




function Me (){ }



method. AddEmployed = function(){
   var Client = HandleCliente.SartClient();
      var properties = [

        {
            name:'Cod',
            validator: /^[a-zA-Z]{2}[0-9]{1,}$/,
            warning: 'Username must be only letters, spaces, or dashes'

        },

        {
            name:'Nombre',
            validator: /^.{1,}$/,
            warning: 'Username must be only letters, spaces, or dashes'

        },

        {
            name:'email',
            validator: /[a-zA-Z0-9._]+\@[a-zA-Z0-9._]+\.[a-zA-Z]{3,}$/,
            warning: 'Email is not allow'

        },

        {   name: 'cel',
            validator: /^[0-9]{4}\-[0-9]{4}$/,
            warning: 'Telefono is not allow'

        },
        {    name: 'Identi',
             validator: /^[0-9]{13}$/,
             warning: 'Ident is not allow'


        }
    ];
    prompt.start();


    prompt.get(properties, function (err, result) {
        if (err) { return onErr(err); }
        console.log('Empleado Creado Exitosamente');
        console.log('Codigoo: '+result.Cod);
        console.log('Nombre: ' + result.Nombre);
        console.log('Email: '+result.email);
        console.log('Telefono:'+result.cel);
        console.log('Identidad: '+result.Identi);
       ObjectEmpleado = new Empleado.Empleado(result.Nombre,result.Cod,result.email,result.cel,result.Identi,0);
       JasonEmpleado =JSON.stringify(ObjectEmpleado);
         var data = [];
        data.push("1");
        data.push(JasonEmpleado);
        dataToJason = JSON.stringify(data)
        Client.write(dataToJason);
    console.log("Empleado se ha mandado al server");
    });

    function onErr(err) {
        console.log(err);
        return 1;
    }


};

module.exports = Me