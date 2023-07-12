
// Variables y funciones para la sección de Experiencia
const año1 = document.getElementById("año-1");
const job1 = document.getElementById("job-1");

const año2 = document.getElementById("año-2");
const job2 = document.getElementById("job-2");

const año3 = document.getElementById("año-3");
const job3 = document.getElementById("job-3");

año1.addEventListener("click", () => {
    job1.classList.add("active");
    job2.classList.remove("active");
    job3.classList.remove("active");
})

año2.addEventListener("click", () => {
        job2.classList.add("active");
        job1.classList.remove("active");
        job3.classList.remove("active");
    })

año3.addEventListener("click",  () => {
    job3.classList.add("active");
    job1.classList.remove("active");
    job2.classList.remove("active");
})


// Constantes para el PORTAFOLIO

const boton1 = document.querySelector('#boton1')
const boton2 = document.querySelector('#boton2')
const boton3 = document.querySelector('#boton3')
const boton4 = document.querySelector('#boton4')
const enlace1 = document.querySelector('#enlaceaweb')
const enlace2 = document.querySelector('#enlaceagit')
const titulo = document.querySelector('#tituloproyecto')
const imagenDelProyecto = document.querySelector('#imagendelproyecto')

boton1.addEventListener('click',() => {
    //cambiar:
    // imagen, enlaces y texto
    enlace1.href = "https://deslizador-de-imagenes.netlify.app/"
    enlace2.href = "https://github.com/CHBerri/Image-slider"
    titulo.textContent = "Deslizador de imagenes"
    imagenDelProyecto.style.background = "url('deslizador de imagenes.jpg')"
    imagenDelProyecto.style.backgroundSize = 'cover' 
    imagenDelProyecto.style.backgroundPosition = 'center'
    imagenDelProyecto.style.backgroundRepeat = 'no-repeat'
})

boton2.addEventListener('click',() => {
    //cambiar:
    // imagen, enlaces y texto
    enlace1.href = "https://cuantos-clicks.netlify.app/"
    enlace2.href = "https://github.com/CHBerri/contador-de-clicks"
    titulo.textContent = "Contador de clicks"
    imagenDelProyecto.style.background = "url('contador de clicks.png')"
    imagenDelProyecto.style.backgroundSize = 'cover' 
    imagenDelProyecto.style.backgroundPosition = 'center'
    imagenDelProyecto.style.backgroundRepeat = 'no-repeat'
})

boton3.addEventListener('click',() => {
    //cambiar:
    // imagen, enlaces y texto
    enlace1.href = "https://guarda-tus-notas.netlify.app/"
    enlace2.href = "https://github.com/CHBerri/Aplicacion-de-notas"
    titulo.textContent = "Aplicación de notas"
    imagenDelProyecto.style.background = "url('aplicacion de notas.jpg')"
    imagenDelProyecto.style.backgroundSize = 'cover' 
    imagenDelProyecto.style.backgroundPosition = 'center'
    imagenDelProyecto.style.backgroundRepeat = 'no-repeat'
})

boton4.addEventListener('click',() => {
    //cambiar:
    // imagen, enlaces y texto
    enlace1.href = "https://elahorcadojuego.netlify.app/"
    enlace2.href = "https://github.com/CHBerri/ahorcado"
    titulo.textContent = "Juego del ahorcado"
    imagenDelProyecto.style.background = "url('juego del ahorcado.jpg')"
    imagenDelProyecto.style.backgroundSize = 'cover' 
    imagenDelProyecto.style.backgroundPosition = 'center'
    imagenDelProyecto.style.backgroundRepeat = 'no-repeat'
})


// Variables y funciones para la sección de experiencia

const videos = document.getElementById("videos");
const ver_videos = document.getElementById("ver_videos");
const cerrar = document.getElementById("cerrar");

ver_videos.addEventListener("click", () => {
    videos.classList.add("mostrar");
})

cerrar.addEventListener("click", () => {
    videos.classList.remove("mostrar");
})