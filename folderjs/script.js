/**
 * autor Jorge Jauregui
 * 29/09/2021
 * Uiversidad Sergio Arboleda
 */

/**
 * endpoint api audience oracle cloud
 */

const etp = document.getElementById("resultado")
/**
 * peticion GET de la api audience
 */

function obtenerInformacion() {
    $.ajax({
        url: "http://144.22.228.0:8080/api/Audience/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            mostrarRespuesta(respuesta)
        }
    });

}
/**
 * Funcion mostrar
 */
function mostrarRespuesta(respuesta) {
    let myTable = "<table border='1'><tr><th>Owner<th>Capacity<th>Name<th>Description</th>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].owner + "</td>";
        myTable += "<td>" + respuesta[i].capacity + "</td>";
        myTable += "<td>" + respuesta[i].name + "</td>";
        myTable += "<td>" + respuesta[i].description + "</td>";
        myTable += "<td> <button onclick='editarInformacion(" + respuesta[i].id + ")'>Actualizar</button>";
        myTable += "<td> <button onclick='borrarElemento(" + respuesta[i].id + ")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado").html(myTable);
}
/**
 * peticion POST de la api audience
 */
function guardarInformacion() {
    let myData = {
        owner: $("#owner").val(),
        capacity: $("#capacity").val(),
        name: $("#name").val(),
        description: $("#description").val(),
    };
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        datatype: "JSON",
        data: JSON.stringify(myData),
        url: "http://144.22.228.0:8080/api/Audience/save",
        success: function (response) {
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()

        },

        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");



        }
    });
}
/**
 * peticion PUT de la api audience
 */
function editarInformacion(idElemento) {
    let myData = {
        id: idElemento, 
        owner: $("#owner").val(),
        capacity: $("#capacity").val(),
        name: $("#name").val(),
        description: $("#description").val(),
    }
    console.log(myData);
    $.ajax({
        type: "PUT",
        contentType: "application/json; charset=utf-8",
        datatype: "JSON",
        data: JSON.stringify(myData),
        url: "http://144.22.228.0:8080/api/Audience/update",
        success: function (response) {
            console.log(response);
            console.log("Se actualizo correctamente");
            alert("Se actualizo correctamente");
            window.location.reload()

        },

        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se actualizo correctamente");
        }
    });
}
/**
 * peticion DELETE de la api audience
 */
function borrarElemento(idElemento) {
    let myData = {
        id: idElemento
    };
    $.ajax({
        type: "DELETE",
        contentType: "application/json; charset=utf-8",
        datatype: "JSON",
        data: JSON.stringify(myData),
        url: "http://144.22.228.0:8080/api/Audience/delete",
        success: function (response) {
            console.log(response);
            console.log("Se elimino correctamente");
            alert("Se elimino correctamente");
            window.location.reload()
        },
        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se elimino correctamente");
        }
    });
}
/**
 * endpoint api client oracle cloud
 */


/**
 * peticion GET de la api client
 */
function obtenerInformacionCliente() {
    $.ajax({
        url: "http://144.22.228.0:8080/api/Client/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            mostrarRespuestaCliente(respuesta)
        }
    });
}
/**
 * funcion mostrar cliente
 */
function mostrarRespuestaCliente(respuesta) {
    let myTable = "<table border='1'><tr><th>Name<th>Email<th>Password<th>Age</th>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].name + "</td>";
        myTable += "<td>" + respuesta[i].email + "</td>";
        myTable += "<td>" + respuesta[i].password + "</td>";
        myTable += "<td>" + respuesta[i].age + "</td>";
        myTable += "<td> <button onclick='editarInformacionCliente(" + respuesta[i].idClient + ")'>Actualizar</button>";
        myTable += "<td> <button onclick='borrarElementoCliente(" + respuesta[i].idClient + ")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultadoC").html(myTable);

}
/**
 * peticion POST de la api client
 */
function guardarInformacionCliente() {
    let myData = {
        name: $("#name").val(),
        email: $("#email").val(),
        password: $("#password").val(),
        age: $("#age").val(),
    };
    console.log(myData)
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        datatype: "JSON",
        data: JSON.stringify(myData),
        url: "http://144.22.228.0:8080/api/Client/save",
        success: function (response) {
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
        },    
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");
        }
    });
}
/**
 * peticion PUT de la api client
 */
function editarInformacionCliente(idElemento) {
    let myData = {
        idClient: idElemento, 
        name: $("#name").val(),
        email: $("#email").val(),
        password: $("#password").val(),
        age: $("#age").val(),
    }
    console.log(myData);
    $.ajax({
        type: "PUT",
        contentType: "application/json; charset=utf-8",
        datatype: "JSON",
        data: JSON.stringify(myData),
        url: "http://144.22.228.0:8080/api/Client/update",
        success: function (response) {
            console.log(response);
            console.log("Se actualizo correctamente");
            alert("Se actualizo correctamente");
            window.location.reload()

        },

        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se actualizo correctamente");
        }
    });
}
/**
 * peticion DELETE de la api client
 */
function borrarElementoCliente(idElemento) {
    let myData = {
        idClient: idElemento
    };
    $.ajax({
        type: "DELETE",
        contentType: "application/json; charset=utf-8",
        datatype: "JSON",
        data: JSON.stringify(myData),
        url: "http://144.22.228.0:8080/api/Client/delete",
        success: function (response) {
            console.log(response);
            console.log("Se elimino correctamente");
            alert("Se elimino correctamente");
            window.location.reload()
        },
        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se elimino correctamente");
        }
    });
}
/**
 * endpoint api message oracle cloud
 */


/**
 * peticion GET de la api message
 */
function obtenerInformacionMensaje() {
    $.ajax({
        url: "http://144.22.228.0:8080/api/Message/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            mostrarRespuestaMensaje(respuesta)
        }
    });
}
/**
 * funcion mostrar message
 */
function mostrarRespuestaMensaje(respuesta) {
    let myTable = "<table border='1'><tr><th>Messagetext</th>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].messageText + "</td>";
        myTable += "<td> <button onclick='editarInformacionMensaje(" + respuesta[i].idMessage + ")'>Actualizar</button>";
        myTable += "<td> <button onclick='borrarElementoMensaje(" + respuesta[i].idMessage + ")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultadoM").html(myTable);
}
/**
 * peticion POST de la api message
 */
function guardarInformacionMensaje() {
    let myData = {
        messageText: $("#messageText").val(),
    };
    console.log(myData)
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        datatype: "JSON",
        data: JSON.stringify(myData),
        url: "http://144.22.228.0:8080/api/Message/save",
        success: function (response) {
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");
    
        }
    });
}
/**
 * peticion PUT de la api message
 */
function editarInformacionMensaje(idElemento) {
    let myData = {
        idMessage: idElemento, 
        messageText: $("#messageText").val(),
    }
    console.log(myData);
    $.ajax({
        type: "PUT",
        contentType: "application/json; charset=utf-8",
        datatype: "JSON",
        data: JSON.stringify(myData),
        url: "http://144.22.228.0:8080/api/Message/update",
        success: function (response) {
            console.log(response);
            console.log("Se actualizo correctamente");
            alert("Se actualizo correctamente");
            window.location.reload()
        },
        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se actualizo correctamente");
        }
    });
}
/**
 * peticion DELETE de la api message
 */
function borrarElementoMensaje(idElemento) {
    let myData = {
        idMessage: idElemento
    };
    $.ajax({
        type: "DELETE",
        contentType: "application/json; charset=utf-8",
        datatype: "JSON",
        data: JSON.stringify(myData),
        url: "http://144.22.228.0:8080/api/Message/delete",
        success: function (response) {
            console.log(response);
            console.log("Se elimino correctamente");
            alert("Se elimino correctamente");
            window.location.reload()
        },
        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se elimino correctamente");        }
    });
}

/**
 * peticion GET de la api category
 */
function obtenerInformacionCategoria() {
    $.ajax({
        url: "http://144.22.228.0:8080/api/Category/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            mostrarRespuestaCategoria(respuesta);
        }
    });
}
/**
 * funcion mostrar category
 */
function mostrarRespuestaCategoria(respuesta) {
    let myTable = "<table border='1'><tr><th>Name<th>Description</th>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].name + "</td>";
        myTable += "<td>" + respuesta[i].description + "</td>";
        myTable += "<td> <button onclick='editarInformacionCategoria(" + respuesta[i].id + ")'>Actualizar</button>";
        myTable += "<td> <button onclick='borrarElementoCategoria(" + respuesta[i].id + ")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultadoC").html(myTable);
}
/**
 * peticion POST de la api category
 */
function guardarInformacionCategoria() {
    let myData = {
        name: $("#name").val(),
        description: $("#description").val(),
    };
    console.log(myData)
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        datatype: "JSON",
        data: JSON.stringify(myData),
        url: "http://144.22.228.0:8080/api/Category/save",
        success: function (response) {
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()

        },

        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");
        }
    });
}
/**
 * peticion PUT de la api category
 */
function editarInformacionCategoria(idElemento) {
    let myData = {
        id: idElemento, 
        name: $("#name").val(),
        description: $("#description").val(),
    }
    console.log(myData);
    $.ajax({
        type: "PUT",
        contentType: "application/json; charset=utf-8",
        datatype: "JSON",
        data: JSON.stringify(myData),
        url: "http://144.22.228.0:8080/api/Category/update",
        success: function (response) {
            console.log(response);
            console.log("Se actualizo correctamente");
            alert("Se actualizo correctamente");
            window.location.reload()
        },
        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se actualizo correctamente");
        }
    });
}
/**
 * peticion DELETE de la api category
 */
function borrarElementoCategoria(idElemento) {
    let myData = {
        id: idElemento
    };
    $.ajax({
        type: "DELETE",
        contentType: "application/json; charset=utf-8",
        datatype: "JSON",
        data: JSON.stringify(myData),
        url: "http://144.22.228.0:8080/api/Category/delete",
        success: function (response) {
            console.log(response);
            console.log("Se elimino correctamente");
            alert("Se elimino correctamente");
            window.location.reload()
        },
        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se elimino correctamente");
        }
    });
}
/**
 * peticion GET de la api reservation
 */
function obtenerInformacionReservacion() {
    $.ajax({
        url: "http://144.22.228.0:8080/api/Reservation/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            mostrarRespuestaReservacion(respuesta)
        }
    });
}
/**
 * funcion mostrar reservaction
 */
function mostrarRespuestaReservacion(respuesta) {
    let myTable = "<table border='1'><tr><th>startDate<th>DevolutionDate<th>Status</th>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].startDate + "</td>";
        myTable += "<td>" + respuesta[i].devolutionDate + "</td>";
        myTable += "<td>" + respuesta[i].status + "</td>";
        myTable += "<td> <button onclick='editarInformacionReservacion(" + respuesta[i].idReservation + ")'>Actualizar</button>";
        myTable += "<td> <button onclick='borrarElementoReservacion(" + respuesta[i].idReservation + ")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultadoR").html(myTable);
}
/**
 * peticion POST de la api reservation
 */
function guardarInformacionReservacion() {
    let myData = {
        startDate: $("#startDate").val(),
        devolutionDate: $("#devolutionDate").val(),
        status: $("#status").val(),
    };
    console.log(myData)
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        datatype: "JSON",
        data: JSON.stringify(myData),
        url: "http://144.22.228.0:8080/api/Reservation/save",
        success: function (response) {
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
        },
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");
    
    
        }
    });
}
/**
 * peticion PUT de la api reservation
 */
function editarInformacionReservacion(idElemento) {
    let myData = {
        idReservation: idElemento, 
        startDate: $("#startDate").val(),
        devolutionDate: $("#devolutionDate").val(),
        status: $("#status").val(),
    }
    console.log(myData);
    $.ajax({
        type: "PUT",
        contentType: "application/json; charset=utf-8",
        datatype: "JSON",
        data: JSON.stringify(myData),
        url: "http://144.22.228.0:8080/api/Reservation/update",
        success: function (response) {
            console.log(response);
            console.log("Se actualizo correctamente");
            alert("Se actualizo correctamente");
            window.location.reload()
        },
        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se actualizo correctamente");
        }
    });
}
/**
 * peticion DELETE de la api Reservation
 */
function borrarElementoReservacion(idElemento) {
    let myData = {
        idReservation: idElemento
    };
    $.ajax({
        type: "DELETE",
        contentType: "application/json; charset=utf-8",
        datatype: "JSON",
        data: JSON.stringify(myData),
        url: "http://144.22.228.0:8080/api/Reservation/delete",
        success: function (response) {
            console.log(response);
            console.log("Se elimino correctamente");
            alert("Se elimino correctamente");
            window.location.reload()
        },
        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se elimino correctamente");
        }
    });
}
/**
 * peticion GET de la api administrador
 */
 function obtenerInformacionAdmin() {
    $.ajax({
        url: "http://144.22.228.0:8080/api/Admin/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            mostrarRespuestaAdmin(respuesta)
        }
    });
}
/**
 * funcion mostrar administrador
 */
 function mostrarRespuestaAdmin(respuesta) {
    let myTable = "<table border='1'><tr><th>Name<th>Email<th>Password</th>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].name + "</td>";
        myTable += "<td>" + respuesta[i].email + "</td>";
        myTable += "<td>" + respuesta[i].password + "</td>";
        myTable += "<td> <button onclick='editarInformacionAdmin(" + respuesta[i].id + ")'>Actualizar</button>";
        myTable += "<td> <button onclick='borrarElementoAdmin(" + respuesta[i].id + ")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultadoA").html(myTable);
}
/**
 * peticion POST de la api administrador
 */
function guardarInformacionAdmin() {
    let myData = {
        name: $("#name").val(),
        email: $("#email").val(),
        password: $("#password").val(),
    };
    console.log(myData)
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        datatype: "JSON",
        data: JSON.stringify(myData),
        url: "http://144.22.228.0:8080/api/Admin/save",
        success: function (response) {
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
        },
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");
    
    
        }
    });
}
/**
 * peticion PUT de la api adminitrador
 */
function editarInformacionAdmin(idElemento) {
    let myData = {
        id: idElemento, 
        name: $("#name").val(),
        email: $("#email").val(),
        password: $("#password").val(),
    }
    console.log(myData);
    $.ajax({
        type: "PUT",
        contentType: "application/json; charset=utf-8",
        datatype: "JSON",
        data: JSON.stringify(myData),
        url: "http://144.22.228.0:8080/api/Admin/update",
        success: function (response) {
            console.log(response);
            console.log("Se actualizo correctamente");
            alert("Se actualizo correctamente");
            window.location.reload()
        },
        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se actualizo correctamente");
        }
    });
}
/**
 * peticion DELETE de la api administrador
 */
function borrarElementoAdmin(idElemento) {
    let myData = {
        id: idElemento
    };
    $.ajax({
        type: "DELETE",
        contentType: "application/json; charset=utf-8",
        datatype: "JSON",
        data: JSON.stringify(myData),
        url: "http://144.22.228.0:8080/api/Admin/delete",
        success: function (response) {
            console.log(response);
            console.log("Se elimino correctamente");
            alert("Se elimino correctamente");
            window.location.reload()
        },
        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se elimino correctamente");
        }
    });
}
/**
 * peticion GET de la api score
 */
 function obtenerInformacionScore() {
    $.ajax({
        url: "http://144.22.228.0:8080/api/Score/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            mostrarRespuestaScore(respuesta)
        }
    });
}
/**
 * funcion mostrar score
 */
 function mostrarRespuestaScore(respuesta) {
    let myTable = "<table border='1'><tr><th>Score<th>MessageScore</th>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].score + "</td>";
        myTable += "<td>" + respuesta[i].messageScore + "</td>";
        myTable += "<td> <button onclick='editarInformacionScore(" + respuesta[i].idScore + ")'>Actualizar</button>";
        myTable += "<td> <button onclick='borrarElementoScore(" + respuesta[i].idScore + ")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultadoS").html(myTable);
}
/**
 * peticion POST de la api score
 */
function guardarInformacionScore() {
    let myData = {
        score: $("#score").val(),
        messageScore: $("#messageScore").val(),
    };
    console.log(myData)
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        datatype: "JSON",
        data: JSON.stringify(myData),
        url: "http://144.22.228.0:8080/api/Score/save",
        success: function (response) {
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
        },
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");
    
    
        }
    });
}
/**
 * peticion PUT de la api score
 */
function editarInformacionScore(idElemento) {
    let myData = {
        idScore: idElemento, 
        score: $("#score").val(),
        messageScore: $("#messageScore").val(),
    }
    console.log(myData);
    $.ajax({
        type: "PUT",
        contentType: "application/json; charset=utf-8",
        datatype: "JSON",
        data: JSON.stringify(myData),
        url: "http://144.22.228.0:8080/api/Score/update",
        success: function (response) {
            console.log(response);
            console.log("Se actualizo correctamente");
            alert("Se actualizo correctamente");
            window.location.reload()
        },
        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se actualizo correctamente");
        }
    });
}
/**
 * peticion DELETE de la api score
 */
function borrarElementoScore(idElemento) {
    let myData = {
        idScore: idElemento
    };
    $.ajax({
        type: "DELETE",
        contentType: "application/json; charset=utf-8",
        datatype: "JSON",
        data: JSON.stringify(myData),
        url: "http://144.22.228.0:8080/api/Score/delete",
        success: function (response) {
            console.log(response);
            console.log("Se elimino correctamente");
            alert("Se elimino correctamente");
            window.location.reload()
        },
        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se elimino correctamente");
        }
    });
}
function validarCampo(campo) {
    if (campo.val() != "")
        return true
    else
        return false;

}
