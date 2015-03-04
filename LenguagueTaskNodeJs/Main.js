var Menu = require('./Menu');
var prompt = require('prompt');
var readline = require('readline');


var M = new Menu;



var op = true;







            console.log("1.Agregar Nuevo Empleado");
            console.log("2.Modificar Un Empleado");
            console.log("3.Buscar un Empleado");
            console.log("4.Listar todos los Empleados");
            console.log("5.Salir")
            var rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });
            var readline = require('readline'),
                rl = readline.createInterface(process.stdin, process.stdout);

            rl.setPrompt('Elige una opcion ');
            rl.prompt();

            rl.on('line', function (line) {
                switch (line.trim()) {
                    case '1':
                        M.AddEmployed()
                        break
                    case '2':
                        console.log("holis")
                }
            }).on('close', function () {
                console.log('Have a great day!');
                process.exit(0);
            });








