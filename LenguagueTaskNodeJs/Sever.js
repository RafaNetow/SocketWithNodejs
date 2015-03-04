/**
 * Created by Rafael on 27/02/2015.
 */
var Empleado = require("./Empleado");
var fs = require('fs');





require('net').createServer(function (socket) {
    console.log("connected");

    socket.on('data', function ( jason) {

        var database = JSON.parse(jason);
         if(database[1]) {
             console.log("Archivo ya existe");
           var File =  fs.readFile('NodeJs.txt', 'utf8', function(err, data) {
                 if( err ){
                     console.log(err)
                 }
                 else{
                     console.log(data);
                 }
             });
             WriteData = JSON.stringify(database[1]);
             ArrFile = JSON.stringify(File);
             ArrFile.push(WriteData);
             fs.appendFile('NodeJs.txt', ArrFile);
         }
            //if (exists) {
               // console.log("Archivo ya existe");
               /// var stats = fs.statSync('NodeJs.txt');


            //} else {

               /* fs.write('NodeJs.txt', jason, function (err) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('File was created!');
                    }*/
           //     });
            //}
            //});

        });



    process.on('uncaughtException', function (err) {
        console.log(err);
    });
})
    .listen(8888);
console.log("Conectado correctamente");

