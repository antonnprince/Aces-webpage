const Details=[
    {
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      "Title": "LOREM IPSUM",
    },
    {
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        "Title": "LOREM IPSUM",
    },
    {
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        "Title": "LOREM IPSUM",
    },
    {
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        "Title": "LOREM IPSUM",
    },
    {
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        "Title": "LOREM IPSUM",
    },
  

  ]


  let PROJECT_ID = "2zh64mid";
  let DATASET = "production";
  let QUERY = encodeURIComponent('*[_type == "events"]{name,"imageUrl": image.asset->url, venue, date, register}');

  // Compose the URL for your project's endpoint and add the query
  let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

  // fetch the content
  fetch(URL)
    .then((res) => res.json())
    .then(({ result }) => {
      if (result.length > 0) {
        var latest = document.getElementById("latest")
        var cardContent = document.getElementById('eventcards');
        result.forEach((pet) => {

          console.log(pet)
          var latesthtml = `
            <img class="rounded-t-lg" src="${pet.imageUrl}" alt="" />
            <div class="p-5 downbar mb-2 mt-2" style="display: flex;background:white;border-radius:10px;width: 80%;justify-content: space-around;align-items: center;height: 8vh;margin-top:-3vh">
            <a href="#">
                <h5 class="text-2xl font-bold tracking-tight txtt text-gray-900 dark:text-black">${pet.date}</h5>
            </a>
            <div class="name">
            <div class="font-normal text-xl text-gray-700 txtt dark:text-gray-400">${pet.name}</div>
            <div class=" font-normal text-xl text-gray-700 txtt dark:text-gray-400">Venue: ${pet.venue}</div>
            </div>
            <a href="${pet.register}" class=" reg inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Register
                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
            `
            latest.innerHTML = latesthtml

            var cardHtml = `

            <div class="mx-auto w-85 my-8 flex max-w-screen-sm items-center justify-center" style="flex-direction:column;border-radius: 10px;background:white;">
            <a href="#">
            <img class="rounded-t-lg" src="${pet.imageUrl}" width="100%" height:"100%" alt="" />
            </a>
            <div class="p-5 downbar mb-2 mt-2" style="display: flex;width: -webkit-fill-available;justify-content: space-around;align-items: center;height: 6vh;">
            <a href="#">
            <h5 class="text-2xl font-bold tracking-tight txtt text-gray-900 dark:text-black">${pet.date}</h5>
            </a>
            <div class="name">
            <div class="font-normal text-xl text-gray-700 txtt dark:text-gray-400">${pet.name}</div>
            <div class=" font-normal text-xl text-gray-700 txtt dark:text-gray-400">Venue: ${pet.venue}</div>
            </div>
            <a href="${pet.register}" class=" reg inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Register
            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
            </a>
            </div>
            </div>

            `;

            cardContent.innerHTML += cardHtml;
        });
      }
    })
    .catch((err) => console.error(err));

const visitors=40;
const visitors1=50;
const visitors2=60;


