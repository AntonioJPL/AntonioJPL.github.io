// Obtener todos los elementos TD de la página
var tds = document.getElementsByTagName("td");

// Ocultar todas las imágenes de las butacas
var images = document.querySelectorAll("td img");
for (var i = 0; i < images.length; i++) {
  images[i].style.display = "none";
}

// Agregar evento click a cada TD
for (var i = 0; i < tds.length; i++) {
  tds[i].addEventListener("click", function() {
    // Obtener la imagen dentro del TD actual
    var img = this.querySelector("img");
    // Verificar si la imagen está oculta o visible
    if (img.style.display === "none") {
      // Hacer visible la imagen
      img.style.display = "block";
    } else {
      // Ocultar la imagen
      img.style.display = "none";
    }
  });
}
/* // Obtener todos los elementos TD de la página
var tds = document.getElementsByTagName("td");

// Agregar evento click a cada TD
for (var i = 0; i < tds.length; i++) {
  tds[i].addEventListener("click", function() {
    // Obtener la imagen dentro del TD actual
    var img = this.querySelector("img");
    // Verificar si la imagen está oculta o visible
    if (img.style.display === "none") {
      // Hacer visible la imagen
      img.style.display = "block";
    } else {
      // Ocultar la imagen
      img.style.display = "none";
    }
  });
} */
/* // Obterner todos los TDs
const tds = document.querySelectorAll('.display td');
tds.forEach(td => {
  td.addEventListener('click', cambiarEstadoButaca);
});

// Funcion para cambiar el estado de cada butaca
function cambiarEstadoButaca(event) {
    const td = event.target;
    if (td.tagName === '.display td') {
      const imagen = td.querySelector('img');
      if (imagen.style.display === 'none') {
        // Mostrar la imagen
        imagen.style.display = 'block';
      } else {
        // Ocultar la imagen
        imagen.style.display = 'none';
      }
    }
  } */
/* // Obtener todas las butacas
const butacas = document.querySelectorAll('.display td');

// Agregar un event listener a cada butaca
butacas.forEach(butaca => {
  butaca.addEventListener('click', () => {
    // Obtener la imagen de la butaca
    const imagen = butaca.querySelector('img');
    
    // Verificar si la imagen está oculta
    if (imagen.style.display === 'none') {
      // Mostrar la imagen
      imagen.style.display = 'block';
    } else {
      // Ocultar la imagen
      imagen.style.display = 'none';
    }
  });
}); */
/* // Obtener todas las butacas
const butacas = document.querySelectorAll('.display td');

// Agregar un event listener a cada butaca
butacas.forEach(butaca => {
  butaca.addEventListener('click', e => {
    // Obtener la imagen de la butaca
    const imagen = butaca.querySelector('img');
    
    // Verificar si el evento se originó en la imagen o el span
    if (e.target === imagen || e.target.tagName === 'SPAN') {
      // Mostrar u ocultar la imagen
      if (imagen.style.display === 'none') {
        imagen.style.display = 'block';
      } else {
        imagen.style.display = 'none';
      }
    }
  });
}); */
/* // Obtener todas las butacas
const butacas = document.querySelectorAll('.display td');

// Agregar un event listener a cada butaca
butacas.forEach(butaca => {
  butaca.addEventListener('click', (event) => {
    // Obtener la imagen de la butaca
    const imagen = butaca.querySelector('img');
    
    // Verificar si el click ocurrió dentro de la imagen
    if (event.target.nodeName !== 'IMG') {
      // Verificar si la imagen está oculta
      if (imagen.style.display === 'none') {
        // Mostrar la imagen
        imagen.style.display = 'block';
      } else {
        // Ocultar la imagen
        imagen.style.display = 'none';
      }
    }
  });
}); */