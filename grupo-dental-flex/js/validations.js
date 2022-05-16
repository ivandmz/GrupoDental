document.getElementById("form").addEventListener("submit", validarFormulario); //OJO en el ejemplo usa 'submit'

function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById("nombre").value;
    if (nombre.length == 0) {
        alert("Debes ingresar un nombre.");
        return;
    }
    var apellido = document.getElementById("apellido").value;
    if (apellido.length == 0) {
        alert("Debes ingresar un apellido.");
        return;
    }
    var telefono = document.getElementById("telefono").value;
    if (telefono.length == 0) {
        alert("Debes ingresar un teléfono.");
        return;
    } else {
        telefono = parseInt(telefono);
        if (Number.isNaN(telefono) == true) {
            alert("Ingrese solo números sin espacios, guiones, puntos ni comas.")
            return;
        }
    }
    var correo = document.getElementById("correo").value;
    if (correo.length == 0) {
        alert("Debes ingresar un email.");
        return;
    }
    var obraSocial = document.getElementById("obraSocial").checked;
    if (obraSocial) {
        var numAsociado = document.getElementById("num-asociado").value;
        if (numAsociado.length == 0) {
            alert("Debes ingresar un numero de asociado.");
            return;
        }
    }
    var validarRadio = document.getElementsByName("tipo-consulta");
    if (validarRadio[0].checked == true ||
        validarRadio[1].checked == true) {
    } else {
        alert("Debes informar si quieres un turno o realizar una consulta online.");
        return;
    }

    var fecha = Date.parse(document.getElementById("fecha").value);
    if (isNaN(fecha)) {
        alert("Debes ingresar una fecha en formato mm/dd/aaaa.");
        return;
    }
    this.submit();
}