
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

// Variables y funciones para la sección del Portafolio

const videos = document.getElementById("videos");
const ver_videos = document.getElementById("ver_videos");
const cerrar = document.getElementById("cerrar");

ver_videos.addEventListener("click", () => {
    videos.classList.add("mostrar");
})

cerrar.addEventListener("click", () => {
    videos.classList.remove("mostrar");
})