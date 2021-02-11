fetch("https://gateway.marvel.com/v1/public/comics?apikey=0b77a943b27f841e71a40bb1c01f879d&orderBy=title")
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