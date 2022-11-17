
// crearemos una función donde le pasamos como parámetro la nueva entrada, o el elemento, que nos retornará true si la imagen se ve en pantalla, false si no
const isIntersecting =(entry) =>{
    return entry.isIntersecting; // "isIntersercting", propiedad del entry, que nos devuelve true si está dentro de la pantalla, false si no
}

// función acción, cargar imagen 
const loadImage = (entry) => {

    const container = entry.target // div donde se encuentra la imagen
    const image = container.firstChild;
    const url = image.dataset.src

    // ahora le decimos al navegador que nos cargue la imagen
    image.src = url;

    // des registra la imagen (unlisten)
    observer.unobserve(container); // para que deje de registrar si la imagen ya ha salido en pantalla
}


// el intersection observer es una API, que recibe una función que le dice qué hacer por cada imagen


// entries es todos los elementos(imágenes), lo filtraremos para que nos muestre los elementos que están interceptados(mostrados en pantalla)
const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(loadImage);
})

// método que recibirá imagen, le dirá al observador // intersectaction observer, para que observe la imagen
export const registerImage = (imagen) => {
    observer.observe(imagen);
}
