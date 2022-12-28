import { galleryItems } from "./gallery-items.js";


const ulGallery = document.querySelector(".gallery");
const addGallery = createGallery(galleryItems);

ulGallery.insertAdjacentHTML("beforeend", addGallery);

function createGallery(items) {
  return items
    .map(
      ({ preview, original, description }) => {
        return `<li>
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
      </li>`
      }).join('');
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});


function blockAction(evt) {
  evt.preventDefault();
}