const urlBaseComics = "https://gateway.marvel.com/v1/public/comics";
const urlBasePersonajes = "https://gateway.marvel.com/v1/public/characters";
const apiKey = "0b77a943b27f841e71a40bb1c01f879d";

const creaTarjetasComics = (orden) => {
  fetch(`${urlBaseComics}?apikey=${apiKey}&orderBy=${orden}`)
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

// creaTarjetasComics('title')

const creaTarjetasPersonajes = (orden) => {
  fetch(`${urlBasePersonajes}?apikey=${apiKey}&orderBy=${orden}`)
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

// creaTarjetasPersonajes(urlBase, 'name')




const comicsPorPagina = 20;
let paginaActual = 0;

const buscarComics = (paginaActual, orden) => {

  fetch(`${urlBaseComics}?apikey=${apiKey}&offset=${paginaActual * comicsPorPagina}&orderBy=${orden}`)
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      console.log(data)
      creaTarjetasComics(orden)
    })
}

// buscarComics(paginaActual, "title")

const buscarPersonajes = (paginaActual, orden) => {

  fetch(`${urlBasePersonajes}?apikey=${apiKey}&offset=${paginaActual * comicsPorPagina}&orderBy=${orden}`)
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      console.log(data)
      creaTarjetasPersonajes(orden)
    })
}

// buscarPersonajes( paginaActual , "name")

const seleccionTipo = document.getElementById('buscar-por-tipo')
// console.log(seleccionTipo)
const seleccionOrden = document.getElementById('buscar-por-orden')
// console.log(seleccionOrden)

// console.log(seleccionTipo.value)
// console.log(seleccionOrden.value)

const botonBuscar = document.getElementById('boton-buscar')
// console.log(botonBuscar)




botonBuscar.onclick = () => {
  console.log('me hicieron click')
  if (seleccionTipo.value === "comics") {
    buscarComics(paginaActual, "title")

    if (seleccionOrden.value === "a-z") {
      buscarComics(paginaActual, "title")

    }
    if (seleccionOrden.value === "z-a") {
      buscarComics(paginaActual, "-title")

    }

  }
  if (seleccionTipo.value === "personajes") {
    buscarPersonajes(paginaActual, "name")

    if (seleccionOrden.value === "a-z") {
      buscarPersonajes(paginaActual, "name")

    }
    if (seleccionOrden.value === "z-a") {
      buscarPersonajes(paginaActual, "-name")

    }

  }
}

