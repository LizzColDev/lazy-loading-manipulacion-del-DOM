import { registerImage } from "./lazy.js"

const maximun = 122;
const minimum = 1;
const random = () => Math.floor( Math.random() * (maximun - minimum)) + minimum;

const createImageNode = () =>{
    const container = document.createElement('div');
    container.className = 'm-1 flex-justify-center flex items-center';
    const image = document.createElement('img');
    image.className = 'mx-auto bg-gray-300 rounded-md';
    image.width = '320';
    image.dataset.src = `https://randomfox.ca/images/${random()}.jpg`; 
    container.appendChild(image);

    return container;
}

const mountNode = document.querySelector('#images');

const addButton = document.querySelector('#addButton');
const deleteButton = document.querySelector('#deleteButton');

// agregar imágenes

const addImage = () => {
    const newImage = createImageNode();
    mountNode.append(newImage);
    registerImage(newImage);
};

const deleteImages =() => {

    const allContainer = document.querySelectorAll(".m-1");

    for (let i = 0; i < allContainer.length; i++) {
        mountNode.removeChild(allContainer[i]);
    }
      
}
addButton.addEventListener('click', addImage);
deleteButton.addEventListener('click', deleteImages);