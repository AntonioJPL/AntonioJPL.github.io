// Obtener el enlace y el iframe
const links = document.querySelectorAll("a[target='iframe']");
const iframe = document.getElementById("iframe");
const closeBtn = document.getElementById("close-btn");
const popupContainer = document.getElementById("popup-container");

// Agregar el eventListener a todos los enlaces
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function(event) {
    // Prevenir la acción predeterminada del enlace
    event.preventDefault();
    
    // Obtener la URL del enlace
    const url = links[i].getAttribute("href");
    
    // Establecer la URL del iframe
    iframe.setAttribute("src", url);
    
    // Mostrar el popup
    popupContainer.classList.add("visible");
  }); 
}

// Agregar el eventListener al botón de cerrar
closeBtn.addEventListener("click", function() {
  // Ocultar el popup
  popupContainer.classList.remove("visible");
  
  // Detener la reproducción del iframe al cerrar
  iframe.src = "";
});
/* // Obtener el enlace y el iframe
var link = document.querySelector("a[target='#iframe']");
var iframe = document.getElementById("iframe");

// Agregar el eventListener al enlace
link.addEventListener("click", function(event) {
  // Prevenir la acción predeterminada del enlace
  event.preventDefault();
  
  // Obtener la URL del enlace
  var url = link.getAttribute("href");
  
  // Establecer la URL del iframe
  iframe.setAttribute("src", url);
  
  // Mostrar el popup
  document.getElementById("popup-container").classList.add("visible");
}); */