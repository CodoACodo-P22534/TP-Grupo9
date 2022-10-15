const apiUrl = "https://fakestoreapi.com/products";

async function obtenerProductos() {
    const response = await fetch(apiUrl);           //se obtienen los datos de la api y se guardan en la variable data
    const data = await response.json();
    /* console.log(data); */
    armarProductos(data)                            //se llama al metodo que desgloza la info para armar el catalogo
}

obtenerProductos();


function armarProductos(data){

    //esta funcion recorre el array de datos que recibe y por cada uno de los elementos del array llama a la funcion insertarProducto
    //y le pasa como parametro el elemento del array que esta iterando.

    const datos = data;
    //console.log(datos);
    data.forEach(element => {                      
        insertarProducto(element);
    });

}

function insertarProducto(data){

    //esta funcion recibe UN elemento (un objeto) y lo inserta en el HTML

    //console.log(data);
    //se guarda la informacion del producto en sus respectivas variables
    const productoTitulo = data.title
    const imagenProducto = data.image
    const precioProducto = data.price;

    //se crean los elementos necesarios para mostrar el producto
    const page = document.querySelector("#productos");          // id de la seccion productos
    const article = document.createElement("article");          // contenedor que va a alvergar el producto    
    const imagen = document.createElement("img");               
    const boton = document.createElement("button");
    const precio = document.createElement("p")
    const div = document.createElement("div");                  //div para contener el precio y el boton de comprar

    //se empiezan a unir y montar los elementos
    article.className = "producto";                             //se le agrega la clase "producto" a la seccion "article"            
    article.innerHTML = `<h3>${productoTitulo}</h3>`;           //se inserta un titulo h3 que tiene como contenido el valor de la variable "productoTitulo"

    imagen.src = `${imagenProducto}`;                           //se le agrega el atributo src a la imagen
    imagen.alt = "producto";                                    //se le agrega el atributo alt a la imagen 

    div.className = "footerProducto";                           
    boton.textContent = "Comprar";                              //se le agrega el texto al boton
    precio.textContent = `$${precioProducto}`;                  //se pone el valor de la variable "precioProducto" como contenido del "p"
    
    //se insentan el precio y el boton en el div
    div.appendChild(precio);                                    
    div.appendChild(boton);

    //se insertan la imagen y el div dentro del article
    article.appendChild(imagen)
    article.appendChild(div)

    //se inserta en el articulo dentro de la seccion #productos
    page.appendChild(article)

        


}

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}







