function validar_form() {
    var nombre, correo, mensaje;
    nombre = document.getElementById("nombre").value;
    correo = document.getElementById("correo").value;
    mensaje = document.getElementById("mensaje").value;

    expresion = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    expnom = /^([A-Z\a-zñáéíóú]+[\s]*)+$/;




    $('#nombre').click(function(){
        $('#nombre').css({
            "border-color": "rgba(198, 255, 0, 1)" , "border-style":"solid",
            "border-width":"1px"
        }),$('#nombre').attr('placeholder','Nombre');
    });

    $('#correo').click(function(){
        $('#correo').css({
            "border-color": "rgba(198, 255, 0, 1)" , "border-style":"solid",
            "border-width":"1px"
        }),$('#correo').attr('placeholder','Correo');
    });



    if (nombre == "" || correo === "" || mensaje === "") {
        swal("Upps!", "Completa todos los campos!", "error");

        return false;

    }

    // VALIDAR NUMERO MAXIMO DE CARACTERES PARA CADA CAMPO
 else if (nombre.length > 50) {


    $('#nombre').val("");
    $('#nombre').attr('placeholder','Nombre Demasiado largo');
    $('#nombre').css({
        "border-color": "red" , "border-style":"solid",
        "border-width":"2px"
    });
        return false;
    } else if (correo.length > 50) {

        swal("Upps!", "Correo demasiado largo!", "warning");
        return false;

    }

    else if (!expresion.test(correo)) {

        $('#correo').val("");
        $('#correo').attr('placeholder','El correo parece no valido');
        $('#correo').css({
            "border-color": "red" , "border-style":"solid",
            "border-width":"2px"
        });

        return false;
    }

    //VALIDAR CAMPOS DE SOLO LETRAS
    else if (!expnom.test(nombre)) {

        $('#nombre').val("");
        $('#nombre').attr('placeholder','No Incluyas caracteres o numeros');
        $('#nombre').css({
            "border-color": "red" , "border-style":"solid",
            "border-width":"2px"
        });

        return false;
    }
}


