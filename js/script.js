function NoEntiendo(){
  const botonAddCarrito = document.querySelector('#lista-articulos')
}

const botonVaciarCarrito = document.querySelector('#vaciar-carrito') 
const botonComprar = document.querySelector('#boton-comprar') 
const contenedorCarrito = document.querySelector('#lista-carrito tbody')
let articulosCarrito = []; 
const dolar = document.querySelector('#dolar');


cargarEventListener()

function cargarEventListener(){
   botonAddCarrito.addEventListener('click',botonAddCarrito1)
   carrito.addEventListener('click', eliminarArticulo);

   botonVaciarCarrito.addEventListener('click',() => {
     const Toast = Swal.mixin({
       toast: true,
       position: 'bottom-right',
        iconColor: 'white',
        customClass: {
          popup: 'colored-toast'
        },
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true
       })
     Toast.fire({
         icon: 'success',
         title: 'Vaciaste tu carrito'
       })
       articulosCarrito = [];
       limpiarHTML();
     })
   botonComprar.addEventListener('click', ()=>{
     limpiarHTML();
     Swal.fire({
       title: '¡Felicitaciones! Tu compra se ha realizado con exito',
       icon: 'success',
       html: ' Tu pedido llegara dentro de los proximos dias',
       position: 'top-end',
       showClass: {
         popup: `
           animate__animated
           animate__fadeInRight
           animate__faster
         `
       },
       hideClass: {
         popup: `
           animate__animated
           animate__fadeOutRight
           animate__faster
         `
       },
        grow: 'column',
        width: 300,
        showConfirmButton: false,
        showCloseButton: true
      })
    })
    document.addEventListener('DOMContentLoaded', () => {
      articulosCarrito = JSON.parse( localStorage.getItem('carrito') ) || []  ;
      carritoHTML();
 });

 dolar.addEventListener('click',function(){
  let url = "https://mindicador.cl/api/dolar";
  const api = new XMLHttpRequest(); 
  api.open('GET', url, true)
  api.send();
  api.onreadystatechange = function (){
    if(this.status == 200 && this.readyState == 4)
    {
      let datos = JSON.parse (this.responseText)
      console.log(datos.serie)
      let resultado = document.querySelector('#resultado');
      resultado.innerHTML = '';
      for(let item of datos.serie ){
        resultado.innerHTML +=  `
          <td>${item.fecha.substr(0,10)}</td>
          <td>${item.valor}</td>
          `
      }

    }
  }
    console.log("diste click")
  })
 
  
}

function botonAddCarrito1(e){
  e.preventDefault();
  if(e.target.classList.contains('agregar-carrito')){
    const articuloSeleccionado = e.target.parentElement.parentElement
    leerDatosArticulo(articuloSeleccionado)

    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-right',
      iconColor: 'white',
      customClass: {
        popup: 'colored-toast'
      },
      showConfirmButton: false,
      timer: 2500,
      timerProgressBar: true
    })
    Toast.fire({
      icon: 'success',
      title: 'Agregaste el articulo'
    })
  }
}

function leerDatosArticulo(articulo){
    const infoArticulo = {
    titulo : articulo.querySelector('h5').textContent,
    precio : articulo.querySelector('p').textContent,
    id: articulo.querySelector('button').getAttribute('data-id'),
    cantidad: 1

    }
    if( articulosCarrito.some( articulo => articulo.id === infoArticulo.id ) ) { 
      const xd = articulosCarrito.map( articulo => {
           if( articulo.id === infoArticulo.id ) {
                articulo.cantidad++;
                 return articulo;
            } else {
                 return articulo;
         }
      })
      articulosCarrito = [...xd];
 }  else {
      articulosCarrito = [...articulosCarrito, infoArticulo];

 }
 carritoHTML()

}
function eliminarArticulo(e) {
  e.preventDefault();
  if(e.target.classList.contains('borrar-curso') ) {

       const curso = e.target.parentElement.parentElement;
       const cursoId = curso.querySelector('a').getAttribute('data-id');       
       articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

       carritoHTML();
  }
}



function carritoHTML(){
  limpiarHTML()
  articulosCarrito.forEach( articulo => {
    const row = document.createElement('tr');
    row.innerHTML = 
      `<td> ${articulo.titulo}</td> 
      <td> ${articulo.precio}</td> 
      <td> ${articulo.cantidad}</td> 
      <td>
        <a href="#" class="borrar-curso" data-id="${articulo.id}">X</a>
      </td>`; 
     
    contenedorCarrito.appendChild(row)
  })
  sincronizarStorage()
}

function sincronizarStorage() {
  localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

function limpiarHTML (){ 
  while(contenedorCarrito.firstChild)
   contenedorCarrito.removeChild(contenedorCarrito.firstChild)
}
















