/**
 * Created by Rafael on 27/02/2015.
 */

var ManejoEmpleado = function ManejandoEmpleados(Nombre,Codigo,Email,Telefono,Identidad,Salario){
    return{
        ENombre: Nombre,
        ECodigo: Codigo,
        EEmail: Email,
        ETelefono: Telefono,
        EIdentidad: Identidad,
        ESalario: Salario
    };
};

exports.Empleado = ManejoEmpleado;