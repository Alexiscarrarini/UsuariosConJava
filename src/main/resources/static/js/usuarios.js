// Call the dataTables jQuery plugin
$(document).ready(function() {
    cargarUsuarios();
  $('#usuarios').DataTable();
  actualizarEmailDelUsuario();
});

function actualizarEmailDelUsuario(){
    document.getElementBy('txt-email-usuario').outerHTML = localStorage.email;
}

async function cargarUsuarios(){

      const request = await fetch('api/usuarios', { //aca se espera que se cargue el recurso usuarios y despues se termina de cargar el documento
        method: 'GET',
        headers: getHeaders()
      });
      const usuarios = await request.json();


      let listadoHTML = '';
      for (let usuario of usuarios) {
        let botonEliminar = '<a href="#" onclick="eliminarUsuario(' + usuario.id + ')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';

        let telefono = usuario.telefono == null ? '-' : usuario.telefono;
        let usuarioHtml = '<tr><td>' + usuario.id + '</td><td>' + usuario.nombre + ' ' + usuario.apellido + '</td><td>' + usuario.email + '</td><td>' + telefono + '</td><td>' + botonEliminar + '</td></tr>';
        listadoHTML += usuarioHtml; //Se concatena todos los usuarios

     }

      console.log(usuarios);
document.querySelector('#usuarios tbody').outerHTML = listadoHTML;

}

function getHeaders(){
    return {
             'Accept': 'application/json',
             'Content-Type': 'application/json',
             'Authorization': localStorage.token
           };
}


async function eliminarUsuario(id){

    if(!confirm('¿Desea eleiminar este usuario?')){
        return;
    }

    const request = await fetch('api/usuarios/' + id, { //aca se espera que se cargue el recurso usuarios y despues se termina de cargar el documento
        method: 'DELETE',
        headers: getHeaders()
      });

      location.reload();

}