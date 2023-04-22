const formulario = document.querySelector('form');
const lista = document.querySelector('#lista');
const botonBorrarTodo = document.querySelector('#borrar-todo');

formulario.addEventListener('submit', agregarProducto);
lista.addEventListener('click', borrarProducto);
botonBorrarTodo.addEventListener('click', borrarTodo);

function agregarProducto(event) {
  event.preventDefault();

  const producto = document.querySelector('#producto');
  const cantidad = document.querySelector('#cantidad');

  if (!producto.value.trim() || !cantidad.value.trim()) {
    alert('Por favor ingresa un producto y una cantidad');
    return;
  }

  const nuevoProducto = document.createElement('li');
  nuevoProducto.innerHTML = `<span>${producto.value}</span> - <span>${cantidad.value}</span> <button class="borrar">X</button>`;

  lista.appendChild(nuevoProducto);

  producto.value = '';
  cantidad.value = '';
}

function borrarProducto(event) {
  if (event.target.classList.contains('borrar')) {
    event.target.parentElement.remove();
  }
}

function borrarTodo() {
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }
}
