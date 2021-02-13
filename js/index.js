const urlBase = "https://gateway.marvel.com/v1/public/";
const apiKey = "0b77a943b27f841e71a40bb1c01f879d";

const creaTarjetasComics=()=>{
fetch(`${urlBase}/comics?apikey=${apiKey}&orderBy=title`)
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    console.log(data)
    comics = data.data.results

    const seccionTarjetas = document.querySelector(".contenedor-tarjetas");

    comics.map((comic) => {

      seccionTarjetas.innerHTML += `
      <article>
      <div class="image-comic"><img src="${comic.thumbnail.path}.jpg" alt=""></div>
      <div class="comic-title">${comic.title}</div>
      </article> 
      `;

    })
  })
}

creaTarjetasComics()

const creaTarjetasPersonajes=()=>{
  fetch(`${urlBase}/characters?apikey=${apiKey}&orderBy=name`)
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      console.log(data)
      personajes = data.data.results
  
      const seccionTarjetas = document.querySelector(".contenedor-tarjetas");
  
      personajes.map((personaje) => {
  
        seccionTarjetas.innerHTML += `
        <article>
        <div class="image-character"><img src="${personaje.thumbnail.path}.jpg" alt=""></div>
        <div class="character-name">${personaje.name}</div>
        </article> 
        `;
  
      })
    })
  }

  // creaTarjetasPersonajes()




// const comicsPorPagina = 20;
// let paginaActual = 0;

// const buscarComics = (url, paginaActual, identificacion, orden) =>{

//     fetch(`${urlBase + url}?apikey=${apiKey}&offset=${paginaActual * comicsPorPagina}&orderBy=${orden}`)
//     .then((res)=>{
//         return res.json()
//     })
//     .then((data)=>{
//         console.log(data)
//         comics = data.data.results
//         const seccion = document.querySelector('section')
//         seccion.innerHTML = ''
//        comics.map((comic)=>{
//             seccion.innerHTML += `<p>${comic[identificacion]}</p>`
//         })
//     })
// }

// // buscarComics("comics" , paginaActual , "title")

const seleccionTipo = document.getElementById('buscar-por-tipo')
console.log(seleccionTipo)
const seleccionOrden = document.getElementById('buscar-por-orden')
console.log(seleccionOrden)

console.log(seleccionTipo.value)
console.log(seleccionOrden.value)

const botonBuscar = document.getElementById('boton-buscar')
console.log(botonBuscar)




// seleccionTipo.onclick=()=>{
//     if (seleccionTipo.value === "comics"){
//         buscarComics("comics", paginaActual, "title" , "title")
//         seleccionOrden.onclick=()=>{
//             if(seleccionOrden.value === "a-z"){
//                 buscarComics("comics", paginaActual, "title" , "title")
              
 //             }
//             if(seleccionOrden.value=== "z-a"){
//                 buscarComics("comics", paginaActual, "title" , "-title")
                
//             }
//         }
//     }
//     if (seleccionTipo.value === "personajes"){
//         buscarComics("characters", paginaActual, "name", "name")
//         seleccionOrden.onclick=()=>{
//             if(seleccionOrden.value === "a-z"){
//                 buscarComics("characters", paginaActual, "name" , "name")
              
//             }
//             if(seleccionOrden.value=== "z-a"){
//                 buscarComics("characters", paginaActual, "name" , "-name")
                
//             }
//         }
//     }
// }

