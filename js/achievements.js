let QUERY = encodeURIComponent('*[_type == "achievements"]{name, description, "imageUrl": image.asset->url}');
let DATASET = "production";
let PROJECT_ID = "2zh64mid";
// Compose the URL for your project's endpoint and add the query
URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

// fetch the content
fetch(URL)
  .then((res) => res.json())
  .then(({ result }) => {
    if (result.length > 0) {

      achievegrid = document.getElementById("achievegrid")
      result.forEach((pet) => {
        elem = `<div class="bg-opacity-13 bg-[#071017] rounded-lg shadow-lg shadow-blue-900">
        <img src="${pet.imageUrl}" alt="image1" class="w-full h-64 object-cover zoomable rounded-lg">
        <div class="p-4">
            <h2 class="text-xl font-bold mb-2 text-white ">${pet.name}</h2>
            <p class="text-white">${pet.description}</p>
        </div>
        </div>`
        achievegrid.innerHTML += elem
      })
    }
})