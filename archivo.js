var productos = [{
    nombre: "Esmaltes",
    marca: "Melne",
    imagen:"./imgenes/esmalte.jpeg",
    precio: 750
},
 {
     nombre:"Cabina 58w",
     marca:" Meline",
     imagen:"./imgenes/cabina.jpeg",
     precio: 4500
},
 {
     nombre:"Decoracion caviar para nail art",
     marca:"Nails art",
     imagen:"./imgenes/caviar.jpeg",
     precio: 600
 },
 {
    nombre:"Esmaltes para stamping",
    marca:"Nails art",
    imagen:"./imgenes/esmaltes3.jpg",
    precio: 450
},
{
    nombre:"Sanitizante",
    marca:"Nails art",
    imagen:"./imgenes/sanitizante.jpg",
    precio: 600
},
{
    nombre:"Muestrarios",
    marca:"Nails art",
    imagen:"./imgenes/muestrarios.jpg",
    precio: 600
},
{
    nombre:"Cabina 108w",
    marca:"Nails art",
    imagen:"./imgenes/cabina buena.jpg",
    precio: 5600
},
{
    nombre:"Extractor de polvillo",
    marca:"Nails art",
    imagen:"./imgenes/extractor.jpg",
    precio: 10600
},

];



for (let i = 0; i < productos.length; i++) {
     var objetos = productos[i];

     var tarjetas = document.querySelector(".productos");
     
    tarjetas.innerHTML += '<div class="card" style="width: 18rem;"><h2>'+ objetos.nombre+'</h2><h2>'+ objetos.marca+'</h2><img src="'+ objetos.imagen+'"alt=""><h4 class="precio">$'+objetos.precio+'</h4></div>';
     
     
    
}

var botonM = document.querySelector('#botonazo')
botonM.addEventListener("click", clicked)

var fondo = document.querySelector('.contenedor')


function clicked() {
    fondo.classList.toggle("contenedor-nocturno")
    console.log("activado")
}


