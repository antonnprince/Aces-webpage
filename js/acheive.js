
let PROJECT_ID = "2zh64mid";
let DATASET = "production";
let QUERY = encodeURIComponent('*[_type == "gallery"]{description, "imageUrl": image.asset->url}');

// Compose the URL for your project's endpoint and add the query
let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

// fetch the content
fetch(URL)
  .then((res) => res.json())
  .then(({ result }) => {
    if (result.length > 0) {

      puppies = document.getElementById("puppies")
      result.forEach((pet) => {
        elem = `<img src="${pet.imageUrl}" alt="" class="zoomable"/>`
        puppies.innerHTML += elem
      })
    }
})



const zoomableImages = document.querySelectorAll('.zoomable');

zoomableImages.forEach(image => {
    image.addEventListener('click', () => {
        const zoomableContainer  = document.createElement('div');
        zoomableContainer.classList.add('zoomed');

        const zoomableImage = document.createElement('img');
        zoomableImage.src = image.src;

        zoomableContainer.appendChild(zoomableImage);
        document.body.appendChild(zoomableContainer);

        zoomableContainer.addEventListener('click', () => {
            zoomableContainer.remove();
        })
    })
})