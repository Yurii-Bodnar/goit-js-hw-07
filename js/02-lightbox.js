import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");



const galleryItem = galleryItems.map(gallery => 
    `<div class="gallery__item">
        <a class="gallery__item" href="${gallery.original}">
        <img
         class="gallery__image"
         src="${gallery.preview}"
         data-source="${gallery.original}" 
         alt="${gallery.description}"
         />
        </a>
     </div>`).join("")

galleryRef.insertAdjacentHTML("afterbegin", galleryItem);

const lightbox = new SimpleLightbox('.gallery div a' , { captionsData: "alt",captionDelay: 250});
    
