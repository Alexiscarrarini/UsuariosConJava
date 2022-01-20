// Call the dataTables jQuery plugin
$(document).ready(function() {
  //Listo
});


async function iniciarSesion(){
      let datos = {};
      datos.email = document.getElementById('txtEmail').value;
      datos.password = document.getElementById('txtPassword').value;

      const request = await fetch('api/login', { //aca se espera que se cargue el recurso usuarios y despues se termina de cargar el documento
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
      });
      const respuesta = await request.text();
      if (respuesta != 'FAIL'){
        localStorage.token = respuesta;  //Se guarda el token que nos devuelve el controller
        localStorage.email = datos.email;
        window.location.href = 'usuarios.html';
      } else{
        alert("Las credenciales son incorrectas.Por favor, intente nuevamente");
      }

}


