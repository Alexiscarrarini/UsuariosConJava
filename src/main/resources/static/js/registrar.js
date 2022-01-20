// Call the dataTables jQuery plugin
$(document).ready(function() {
  //Listo
});


async function registrarUsuario(){
      let datos = {};
      datos.nombre = document.getElementById('txtNombre').value;
      datos.apellido = document.getElementById('txtApellido').value;
      datos.email = document.getElementById('txtEmail').value;
      datos.password = document.getElementById('txtPassword').value;

      let repetirPassword = document.getElementById('txtRepetirPassword').value

      if(repetirPassword != datos.password){
        alert('Los password que escribiste, no coinciden');
        return;
      }

      const request = await fetch('api/usuarios', { //aca se espera que se cargue el recurso usuarios y despues se termina de cargar el documento
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)//Se convierte a String de JSON
      });

      alert("La cuenta fue creada con éxito!");
      window.location.href = 'login.html';
}


