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

const visitors=40;
const visitors1=50;
const visitors2=60;



var cardContent = document.getElementById('eventcards');
var visitorCard = document.getElementById('visitors');


var latest = document.getElementById("latest")

var latesthtml = `
    <img class="rounded-t-lg" src="../images/image13.png" alt="" />
    <div class="p-5 downbar mb-2 mt-2" style="display: flex;background:white;border-radius:10px;width: 80%;justify-content: space-around;align-items: center;height: 8vh;margin-top:-3vh">
    <a href="#">
        <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Jun 17</h5>
    </a>
    <div class="name">
    <div class="font-normal text-xl text-gray-700 dark:text-gray-400">Name</div>
    <div class=" font-normal text-xl text-gray-700 dark:text-gray-400">Venue: Online</div>
    </div>
    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Register
         <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>
</div>
    `

latest.innerHTML = latesthtml


for (var prop in Details) {
    var cardHtml = `
    
<div class="mx-auto w-85 my-8 flex max-w-screen-sm items-center justify-center" style="flex-direction:column;border-radius: 10px;background:white;">
<a href="#">
    <img class="rounded-t-lg" src="../images/image13.png" alt="" />
</a>
<div class="p-5 downbar mb-2 mt-2" style="display: flex;width: -webkit-fill-available;justify-content: space-around;align-items: center;height: 6vh;">
    <a href="#">
        <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Jun 17</h5>
    </a>
    <div class="name">
    <div class="font-normal text-xl text-gray-700 dark:text-gray-400">Name</div>
    <div class=" font-normal text-xl text-gray-700 dark:text-gray-400">Venue: Online</div>
    </div>
    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Register
         <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>
</div>
</div>

    `;
    cardContent.innerHTML += cardHtml;
}
