const container = document.createElement('div');
container.classList.add('container');


const h1 = document.createElement('h1');
h1.textContent = 'Registro de Usuarios';

const formRegistro = document.createElement('form');
formRegistro.setAttribute('id', 'formRegistro');

const labelNombre = document.createElement('label');
labelNombre.setAttribute('for', 'nombre');
labelNombre.textContent = 'Nombre:';

const inputNombre = document.createElement('input');
inputNombre.setAttribute('type', 'text');
inputNombre.setAttribute('id', 'nombre');
inputNombre.setAttribute('name', 'nombre');

const labelApellido = document.createElement('label');
labelApellido.setAttribute('for', 'apellido');
labelApellido.textContent = 'Apellido:';

const inputApellido = document.createElement('input');
inputApellido.setAttribute('type', 'text');
inputApellido.setAttribute('id', 'apellido');
inputApellido.setAttribute('name', 'apellido');

const btnRegistrar = document.createElement('button');
btnRegistrar.setAttribute('type', 'submit');
btnRegistrar.textContent = 'Registrar';

formRegistro.appendChild(labelNombre);
formRegistro.appendChild(inputNombre);
formRegistro.appendChild(labelApellido);
formRegistro.appendChild(inputApellido);
formRegistro.appendChild(btnRegistrar);


const listaUsuarios = document.createElement('div');
listaUsuarios.setAttribute('id', 'listaUsuarios');


container.appendChild(h1);
container.appendChild(formRegistro);
container.appendChild(listaUsuarios);


document.body.appendChild(container);


function guardarUsuario(nombre, apellido) {

  let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

  usuarios.push({nombre, apellido});
 
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
}


function renderizarUsuarios() {
 
  const listaUsuarios = document.getElementById('listaUsuarios');
 
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  
  let lista = '<h2>Lista de Usuarios</h2><ul>';
  usuarios.forEach(usuario => {
    lista += `<li>${usuario.nombre} ${usuario.apellido}</li>`;
  });
  lista += '</ul>';
  
  listaUsuarios.innerHTML = lista;
}


formRegistro.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
 
  guardarUsuario(nombre, apellido);

  renderizarUsuarios();
 
  formRegistro.reset();
});


renderizarUsuarios();
