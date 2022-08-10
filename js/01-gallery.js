import { galleryItems } from './gallery-items.js';
// Change code below this line
//import * as basicLightbox from 'basiclightbox';
console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

const onOpenImg = (event)=>{
    event.preventDefault();
    const img = event.target;
    
    const popup = basicLightbox.create(`
		<img height='100%' src="${img.getAttribute("data-source")}">
	`).show()


}


const galleryItem = galleryItems.map(gallery => `<div class="gallery__item">
  <a class="gallery__link" href="${gallery.original}">
    <img
      class="gallery__image"
      src="${gallery.preview}"
      data-source="${gallery.original}"
      alt="${gallery.description}"
    />
  </a>
</div>`).join("");
galleryRef.insertAdjacentHTML("afterbegin", galleryItem);

const galleryImgRef = document.querySelectorAll(".gallery__image");
for (let galleryImg of galleryImgRef) {
    galleryImg.addEventListener("click", onOpenImg);
    
}

;




