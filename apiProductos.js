//const apiUrl = "https://fakestoreapi.com/products";
const apiUrl = "https://dummyjson.com/products?limit=100";

const catalogo = {};

const categoriasProductos = [
  {
    titulo: "Smartphones",
    categoria: "smartphones",
  },
  {
    titulo: "Laptops",
    categoria: "laptops",
  },
  {
    titulo: "Mens Watches",
    categoria: "mens-watches",
  },
  {
    titulo: "Womens Watches",
    categoria: "womens-watches",
  },
  {
    titulo: "Automotive",
    categoria: "automotive",
  },
]
 //se crean los elementos necesarios para mostrar el producto
 const page = document.querySelector("#productos");          // id de la seccion productos


async function obtenerProductos() {
    const response = await fetch(apiUrl);           //se obtienen los datos de la api y se guardan en la variable data
    const data = await response.json();
    /* console.log(data); */
    filtarProductos(data)                            //se llama al metodo que desgloza la info para armar el catalogo
}

obtenerProductos();


function filtarProductos(data){
    
    //console.log(data);
    datos = data.products;   
    categoriasProductos.forEach(categoria => {      //por cada categoria llama a la funcion para filtrar esa categoria
      //console.log(categoria.categoria);
      let productosPorCategoria = datos.filter(producto => producto.category === categoria.categoria);  //genera un array por cada categoria      
      //console.log(productosPorCategoria);
      armarProductos(productosPorCategoria, categoria);           //envia el array de productos filtrados y el objeto categoria con los datos
    })
}

function armarProductos(productosPorCategoria, categoria){

   //esta funcion recorre el array de datos que recibe y por cada uno de los elementos del array llama a la funcion insertarProducto
  //y le pasa como parametro el elemento del array que esta iterando y la seccion donde insertarlo

  const seccionCategoria = document.createElement("div");          // crea un div para cada categoria
  const tituloCategoria = document.createElement ("h2");          // crea un titulo
  const seccionProductos = document.createElement("div");         // crea una seccion donde ubicar los productos
  //console.log(productosPorCategoria);
  //console.log(categoria);

  tituloCategoria.textContent = (`${categoria.titulo}`);           //asigna el nombre de la categoria al elemento h2
  seccionCategoria.className = "categoria";   
  seccionCategoria.id = (`${categoria.categoria}`);         
  seccionProductos.className = "seccionProductos";
 
  seccionCategoria.appendChild(tituloCategoria);                  //inserta el titulo en la seccion categoria
  seccionCategoria.appendChild(seccionProductos);                 //inserta la seccion productos en la seccion categoria

  page.appendChild(seccionCategoria);                             //inserta la seccion categoria en el html
  
  productosPorCategoria.forEach(producto => {
    //console.log(producto);
    insertarProducto(producto, seccionProductos, categoria.titulo);
  })

}

function insertarProducto(data, seccionProductos){
    
    //esta funcion recibe UN elemento (un objeto) y una seccion donde insertar dicho elemento

    //console.log(data);
    //se guarda la informacion del producto en sus respectivas variables
    const productoTitulo = data.title
    const imagenProducto = data.thumbnail
    const precioProducto = data.price;

    //se crean los elementos necesarios para mostrar el producto
    const article = document.createElement("article");          // contenedor que va a alvergar el producto    
    const imagen = document.createElement("img");               
    const boton = document.createElement("button");
    const ancla = document.createElement("a")
    const precio = document.createElement("p")
    const div = document.createElement("div");                  //div para contener el precio y el boton de comprar
    //console.log(productoTitulo);
    //console.log(imagenProducto);
    //console.log(precioProducto);

    //se empiezan a unir y montar los elementos
    article.className = "producto";                             //se le agrega la clase "producto" a la seccion "article"            
    article.innerHTML = `<h2>${productoTitulo}</h2>`;           //se inserta un titulo h3 que tiene como contenido el valor de la variable "productoTitulo"

    imagen.src = `${imagenProducto}`;                           //se le agrega el atributo src a la imagen
    imagen.alt = "producto";                                    //se le agrega el atributo alt a la imagen 

    div.className = "footerProducto"; 
    ancla.href = "pag-error/pag-error.html";  
    ancla.target = "_blank"                            
    boton.textContent = "Comprar";  
    boton.className = "btn-comprar"                            //se le agrega el texto al boton
    precio.textContent = `$${precioProducto}`;                  //se pone el valor de la variable "precioProducto" como contenido del "p"
    
    //se insentan el precio y el boton en el div
    ancla.appendChild(boton);
    div.appendChild(precio);
    div.appendChild(ancla);

    //se insertan la imagen y el div dentro del article
    article.appendChild(imagen)
    article.appendChild(div)

    //se inserta en el articulo dentro de la seccion productos
    seccionProductos.appendChild(article)


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

var li_items = document.querySelectorAll(".sidebar ul li");
var hamburger = document.querySelector(".hamburger");
var wrapper = document.querySelector(".wrapper");

/* 
li_items.forEach((li_item)=>{
	li_item.addEventListener("mouseenter", ()=>{

			li_item.closest(".wrapper").classList.remove("hover_collapse");
	})
})

li_items.forEach((li_item)=>{
	li_item.addEventListener("mouseleave", ()=>{

			li_item.closest(".wrapper").classList.add("hover_collapse");

	})
})  */

hamburger.addEventListener("click", () => {
	hamburger.closest(".wrapper").classList.toggle("hover_collapse");
})




