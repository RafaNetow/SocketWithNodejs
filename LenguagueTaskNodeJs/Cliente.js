/**
 * Created by Rafael on 27/02/2015.
 */


function StartClient() {
   console.log("Cliente Iniciado");
    var s = require('net').Socket();
    s.connect(8888);
    return s;

}
function HandleClient (){
    this.SartClient = StartClient

}

exports.HandleClient = HandleClient


