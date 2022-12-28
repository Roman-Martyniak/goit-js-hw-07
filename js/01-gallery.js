import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const divGallery = document.querySelector(".gallery");

function createGallery(items) {
  return items
    .map(
      (item) =>
        `<div class="gallery__item">
    <a class="gallery__link" href="${item.riginal}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </div>`
    )
    .join("");
}

const addGallery = createGallery(galleryItems);

divGallery.innerHTML = addGallery;

divGallery.addEventListener("click", onImageClick);

function onImageClick(evt) {
  blockAction(evt);

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);
  instance.show();

  divGallery.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });
}

function blockAction(evt) {
  evt.preventDefault();
}
