const urlBaseComics = "https://gateway.marvel.com/v1/public/comics";
const urlBasePersonajes = "https://gateway.marvel.com/v1/public/characters";
const apiKey = "0b77a943b27f841e71a40bb1c01f879d";

const inputBuscador = document.getElementById('busqueda-textual');
const seleccionTipo = document.getElementById('buscar-por-tipo');
const seleccionOrden = document.getElementById('buscar-por-orden');

const botonBuscar = document.getElementById('boton-buscar');

const comicsPorPagina = 20;
let paginaActual = 0;
let total = 0;

const creaTarjetasComics = (paginaActual, orden) => {
  // if (inputBuscador.value) { queda mejor 
  if (inputBuscador.value != '') {
    fetch(`${urlBaseComics}?apikey=${apiKey}&offset=${paginaActual * comicsPorPagina}&orderBy=${orden}&titleStartsWith=${inputBuscador.value}`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        // console.log(data)
        // no dejes ni comentarios ni console log en una entrega!
        console.log('busco comics por texto')
        comics = data.data.results

        total = data.data.total
        const seccionTarjetas = document.querySelector(".contenedor-tarjetas");

        seccionTarjetas.innerHTML = ''
        comics.map((comic) => {

          // el alt de una imagen solo se deja vacio cuando la imagen es 
          // decorativa. aqui debe tener el titulo del comic
          seccionTarjetas.innerHTML += `
      <article id="comic-card" data-id=${comic.id} class="card">
      <div class="image-comic"><img src="${comic.thumbnail.path}.jpg" alt=""></div>
      <div class="comic-title">${comic.title}</div>
      </article> 
      `;

          //*************************************REVIEW TARJETAS COMICS***********************************************************************
        // esta funcion deberia estar afuera de este fetch
          const reviewTarjetasComics = () => {
            const tarjetas = document.querySelectorAll('.card')
            // console.log(tarjetas)
            tarjetas.forEach((tarjeta) => {
              tarjeta.onclick = () => {
                seccionTarjetas.innerHTML = '';

                fetch(`${urlBaseComics}/${tarjeta.dataset.id}?apikey=${apiKey}`)
                  .then((res) => { return res.json() })
                  .then((info) => {
                    let comicSeleccionado = info.data.results[0];
                    // seria mejor haber usado new Date aqui
                    let fecha = comicSeleccionado.dates[0].date;
                    let fechaCortada = fecha.slice(0, 10);
                    // console.log('muestro fecha', fecha);
                    // console.log('muestro info', info);

                    // aca estas asumiendo que la api siempre te va a traer la data que necesitas, 
                    // y no es asi. a veces la descripcion viene vacia, a veces la fecha no esta, 
                    // y mas importante, a veces no hay array items dentro de creadores. 
                    // en los dos primeros casos, vemos un null en tu pagina. en el caso de los creadores, 
                    // directamente se rompe la vista de detalle
                    // Nunca asumas que la api va a funcionar: siempre es recomendable dejar 
                    // un campo default en caso de que falle. Por ejemplo
                    // <h3>Descripción:</h3> <p>${comicSeleccionado.description || "Descripcion no encontrada"}</p>
                    seccionTarjetas.innerHTML = `<div class='review' >
               
                <div id="contenedor-review">
                <div class="imagen-review"><img src="${comicSeleccionado.thumbnail.path}.${comicSeleccionado.thumbnail.extension}" alt=""></div>
                <div id='info-principal'>
                <h2>${comicSeleccionado.title}</h2>
                  <h3>Publicado:</h3><p>${fechaCortada}</p>
                  <h3>Guionistas:</h3> <p>${comicSeleccionado.creators.items[0].name}</p>
                  <h3>Descripción:</h3> <p>${comicSeleccionado.description}</p>
                </div>
                </div> 
                <h3>Personajes</h3> 
                <div class="personajes-review"> 
                </div>
                </div>`;

                    fetch(`${urlBaseComics}/${tarjeta.dataset.id}/characters?apikey=${apiKey}`)
                      .then((res) => { return res.json() })
                      .then((info) => {

                        // console.log('muestro info dentro de personajes', info)
                        let listaDePersonajes = info.data.results;
                        // console.log('lista de personajes', listaDePersonajes)
                        const seccionPersonajes = document.querySelector('.personajes-review');
                        listaDePersonajes.map((personaje) => {

                          seccionPersonajes.innerHTML += `
                 
                    <article>
                  <div class="image-character"><img src="${personaje.thumbnail.path}.jpg" alt=""></div>
                  <div class="character-name">${personaje.name}</div>
                  </article> 
                  
                  `;

                  // muuy desprolijo el identado aca 
                        })

                      })
                  })
              }
            })
          }
          reviewTarjetasComics();
        })

      })
  }
  else {

    // estas repitiendo muchisimo codigo entre el if y el else. 
    // Fijate si hay manera de hacer esta funcion mas breve y clara
    fetch(`${urlBaseComics}?apikey=${apiKey}&offset=${paginaActual * comicsPorPagina}&orderBy=${orden}`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        // console.log(data)
        comics = data.data.results

        total = data.data.total
        const seccionTarjetas = document.querySelector(".contenedor-tarjetas");

        seccionTarjetas.innerHTML = ''
        comics.map((comic) => {

          seccionTarjetas.innerHTML += `
      <article id="comic-card" data-id=${comic.id} class="card">
      <div class="image-comic"><img src="${comic.thumbnail.path}.jpg" alt=""></div>
      <div class="comic-title">${comic.title}</div>
      </article> 
      `;

          const reviewTarjetasComics = () => {
            // estas declarando la misma funcion dos veces, en el if y en el else!!
            const tarjetas = document.querySelectorAll('.card')
            // console.log(tarjetas)
            tarjetas.forEach((tarjeta) => {
              tarjeta.onclick = () => {
                seccionTarjetas.innerHTML = '';

                fetch(`${urlBaseComics}/${tarjeta.dataset.id}?apikey=${apiKey}`)
                  .then((res) => { return res.json() })
                  .then((info) => {
                    let comicSeleccionado = info.data.results[0];
                    let fecha = comicSeleccionado.dates[0].date;
                    let fechaCortada = fecha.slice(0, 10);
                    // console.log('muestro fecha', fecha);
                    // console.log('muestro info', info);

                    seccionTarjetas.innerHTML = `<div class='review' >
               
              <div id="contenedor-review">
              <div class="imagen-review"><img src="${comicSeleccionado.thumbnail.path}.${comicSeleccionado.thumbnail.extension}" alt=""></div>
              <div id='info-principal'>
              <h2>${comicSeleccionado.title}</h2>
                <h3>Publicado:</h3><p>${fechaCortada}</p>
                <h3>Guionistas:</h3> <p>${comicSeleccionado.creators.items[0].name}</p>
                <h3>Descripción:</h3> <p>${comicSeleccionado.description}</p>
              </div>
              </div>  
              <h3>Personajes</h3>
              <div class="personajes-review"> 
              
              </div>
              </div>`;

                    fetch(`${urlBaseComics}/${tarjeta.dataset.id}/characters?apikey=${apiKey}`)
                      .then((res) => { return res.json() })
                      .then((info) => {

                        // console.log('muestro info dentro de personajes', info)
                        let listaDePersonajes = info.data.results;
                        // console.log('lista de personajes', listaDePersonajes)
                        const seccionPersonajes = document.querySelector('.personajes-review');
                        listaDePersonajes.map((personaje) => {

                          seccionPersonajes.innerHTML += `
                <article>
                <div class="image-character"><img src="${personaje.thumbnail.path}.jpg" alt=""></div>
                <div class="character-name">${personaje.name}</div>
                </article> 
                `;
                        })

                      })
                  })
              }
            })
          }
          reviewTarjetasComics();

        })

      })
  }
}

creaTarjetasComics(0, 'title')

const creaTarjetasPersonajes = (paginaActual, orden) => {

  // preferible escribir if (inputBuscador.value) {
  if (inputBuscador.value != '') {
    fetch(`${urlBasePersonajes}?apikey=${apiKey}&offset=${paginaActual * comicsPorPagina}&orderBy=${orden}&nameStartsWith=${inputBuscador.value}`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data)
        console.log('busco personajes por texto')
        personajes = data.data.results

        const seccionTarjetas = document.querySelector(".contenedor-tarjetas");

        seccionTarjetas.innerHTML = ''
        personajes.map((personaje) => {

          seccionTarjetas.innerHTML += `
        <article id='tarjeta-personaje' data-id=${personaje.id}>
        <div class="image-character"><img src="${personaje.thumbnail.path}.jpg" alt=""></div>
        <div class="character-name">${personaje.name}</div>
        </article> 
        `;


          const reviewTarjetasPersonajes = () => {
            const tarjetasPersonajes = document.querySelectorAll('#tarjeta-personaje')
            tarjetasPersonajes.forEach((tarjeta) => {
              tarjeta.onclick = () => {
                console.log('hola soy un personaje, me hicieron click')
                seccionTarjetas.innerHTML = '';

                fetch(`${urlBasePersonajes}/${tarjeta.dataset.id}?apikey=${apiKey}`)
                  .then((res) => { return res.json() })
                  .then((info) => {
                    let personajeSeleccionado = info.data.results[0];

                    console.log(personajeSeleccionado)
                    seccionTarjetas.innerHTML = `<div class='review' >
               
                    <div id="contenedor-review">
                    <div class="imagen-review"><img src="${personajeSeleccionado.thumbnail.path}.${personajeSeleccionado.thumbnail.extension}" alt=""></div>
                    <div id='info-principal'>
                    <h2>${personajeSeleccionado.name}</h2>
                    <p>${personajeSeleccionado.description}</p>
                    </div>
                    </div>  
                    <h3>Comics</h3>
                    <div class="comics-review"> 
                    
                    </div>
                    </div>`;

                    fetch(`${urlBasePersonajes}/${tarjeta.dataset.id}/comics?apikey=${apiKey}`)
                      .then((res) => { return res.json() })
                      .then((info) => {

                        console.log('muestro info dentro de comics', info)
                        let listaDeComics = info.data.results;
                        console.log('lista de comics', listaDeComics)
                        const seccionComics = document.querySelector('.comics-review');
                        listaDeComics.map((comic) => {

                          seccionComics.innerHTML += `
                          <article id="comic-card" data-id=${comic.id} class="card">
                          <div class="image-comic"><img src="${comic.thumbnail.path}.jpg" alt=""></div>
                          <div class="comic-title">${comic.title}</div>
                          </article> 
                        `;
                        })
                      })
                  })

              }

            })


          }
          reviewTarjetasPersonajes();
        })
      })
  }
  else {
    fetch(`${urlBasePersonajes}?apikey=${apiKey}&offset=${paginaActual * comicsPorPagina}&orderBy=${orden}`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data)
        personajes = data.data.results

        const seccionTarjetas = document.querySelector(".contenedor-tarjetas");

        seccionTarjetas.innerHTML = ''
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
}


const ordenarComicsPor = () => {
  if (seleccionOrden.value === "z-a") {
    creaTarjetasComics(paginaActual, "-title")
    console.log('soy comics estoy de la z a la a')
  }
  else {
    creaTarjetasComics(paginaActual, "title")
    console.log('soy comics estoy de la a a la z')

  }
}

const ordenarPersonajesPor = () => {
  if (seleccionOrden.value === "z-a") {
    creaTarjetasPersonajes(paginaActual, "-name")
    console.log('soy personaje estoy de la z a la a')
  }
  else {
    creaTarjetasPersonajes(paginaActual, "name")
    console.log('soy personaje estoy de la a a la z')
  }
}


botonBuscar.onclick = () => {
  paginaActual = 0
  console.log('me hicieron click')
  if (seleccionTipo.value === "comics") {
    ordenarComicsPor()
  }
  if (seleccionTipo.value === "personajes") {
    ordenarPersonajesPor()
  }

}

// ******************************************** FUNCIONALIDAD DEL PAGINADO ************************************************

const botonPrimeraPagina = document.getElementById('primera-pagina');
const botonPaginaAnterior = document.getElementById('pagina-anterior');
const botonSiguientePagina = document.getElementById('siguiente-pagina');
const botonUltimaPagina = document.getElementById('ultima-pagina');


// console.log(botonPaginaAnterior)
// console.log(botonPrimeraPagina)
// console.log(botonSiguientePagina)
// console.log(botonUltimaPagina)

botonSiguientePagina.onclick = () => {
  paginaActual++
  // esta logica se repite una y otra vez en cada boton. tendria que estar en una funcion!
  if (seleccionTipo.value === "comics" && seleccionOrden.value === "a-z") {
    creaTarjetasComics(paginaActual, 'title')
  }
  else if (seleccionTipo.value === "comics" && seleccionOrden.value === "z-a") {
    creaTarjetasComics(paginaActual, '-title')
  }
  else if (seleccionTipo.value === "personajes" && seleccionOrden.value === "a-z") {
    creaTarjetasPersonajes(paginaActual, 'name')
  } else {
    creaTarjetasPersonajes(paginaActual, '-name')
  }

}


botonPaginaAnterior.onclick = () => {
  paginaActual--
  if (seleccionTipo.value === "comics" && seleccionOrden.value === "a-z") {
    creaTarjetasComics(paginaActual, 'title')
  }
  else if (seleccionTipo.value === "comics" && seleccionOrden.value === "z-a") {
    creaTarjetasComics(paginaActual, '-title')
  }
  else if (seleccionTipo.value === "personajes" && seleccionOrden.value === "a-z") {
    creaTarjetasPersonajes(paginaActual, 'name')
  } else {
    creaTarjetasPersonajes(paginaActual, '-name')
  }
}


botonPrimeraPagina.onclick = () => {
  paginaActual = 0
  if (seleccionTipo.value === "comics" && seleccionOrden.value === "a-z") {
    creaTarjetasComics(paginaActual, 'title')
  }
  else if (seleccionTipo.value === "comics" && seleccionOrden.value === "z-a") {
    creaTarjetasComics(paginaActual, '-title')
  }
  else if (seleccionTipo.value === "personajes" && seleccionOrden.value === "a-z") {
    creaTarjetasPersonajes(paginaActual, 'name')
  } else {
    creaTarjetasPersonajes(paginaActual, '-name')
  }
}


botonUltimaPagina.onclick = () => {

  paginaActual = (total - (total % 20)) / 20
  if (seleccionTipo.value === "comics" && seleccionOrden.value === "a-z") {
    creaTarjetasComics(paginaActual, 'title')
  }
  else if (seleccionTipo.value === "comics" && seleccionOrden.value === "z-a") {
    creaTarjetasComics(paginaActual, '-title')
  }
  else if (seleccionTipo.value === "personajes" && seleccionOrden.value === "a-z") {
    creaTarjetasPersonajes(paginaActual, 'name')
  } else {
    creaTarjetasPersonajes(paginaActual, '-name')
  }
}

