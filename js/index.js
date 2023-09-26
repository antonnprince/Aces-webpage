const Details=[
    {
      "description": "Explore our community's impressive placement records in the tech industry, a testament to their talent, dedication, and potential",
      "Title": "PLACEMENT STATISTICS",
        "Link":"./placements.html",
    },
    {
        "description": "Discover the remarkable achievements of our Computer Science students, highlighting their outstanding talent and accomplishments in the field",
        "Title": "ACHIEVEMENTS",
        "Link":"./achieve.html",
    },
    {
        "description": "Get to know about the  Head of CS Department, Prof.Dr.M.Sudheep Elayidom, showcasing his outstanding leadership and contributions to our institution",
        "Title": "MEET THE HEAD OF OUR DEPARTMENT",
        "Link":"./hod.html",
    },
    {
        "description": "Get to know the diverse and vibrant community of ACES ",
        "Title": "MEET THE CORE TEAM",
        "Link":"./coreteam.html",
    },
  

  ]

const visitors=40;
const visitors1=50;
const visitors2=60;



var cardContent = document.getElementById('cards');
var visitorCard = document.getElementById('visitors');


for (var prop in Details) {
    var cardHtml = `
    <div class="mx-auto h-full w-80 my-4 sm:my-8 flex max-w-screen-sm items-center justify-center">
        <div class="h-80 w-full rounded-2xl bg-gradient-to-r from-[#0085FF] to-[#00F0FF] p-[0.15rem]">
            <div class=" h-full w-full rounded-2xl bg-gray-800">
                <h2 class="text-xl md:text-2xl p-6 pt-6 pb-3 md:pb-6 text-white font-semibold hover:text-[#0085FF] duration-500 text-center w-full">
                <a href="${Details[prop].Link}">
                ${Details[prop].Title}
                </a>
                </h2>
                <p class="text-white px-4 py-6 text-center text-md md:text-lg">${Details[prop].description}</p>
            </div>
        </div>
    </div>
    `;
    cardContent.innerHTML += cardHtml;
}

    /*visitorCard.innerHTML = `
<div class="mx-auto w-full flex items-center justify-center py-4 px-10 md:px-20 ">
    <div class="w-full rounded-2xl bg-gradient-to-r from-[#0085FF] to-[#00F0FF] p-[0.2rem] ">
        <div class="h-full w-full rounded-2xl bg-gray-800 ">
            <div class="flex flex-row justify-between py-2">
                <div class="flex flex-col align-center flex-1">
                    <h2 class="text-3xl py-2 text-white font-bold text-center">${visitors}+</h2>
                    <h2 class="text-lg py-2 text-white font-medium text-center">VISITORS</h2>
                </div>
                <div class=" my-3 border-l-2 border-buttonCol "></div>
                <div class="flex flex-col align-center flex-1">
                    <h2 class="text-3xl py-2 text-white font-medium text-center">${visitors1}+</h2>
                    <h2 class="text-lg py-2 text-white font-medium text-center">EVENTS CONDUCTED</h2>
                </div>
                <div class=" my-3 border-l-2 border-buttonCol "></div>
                <div class="flex flex-col align-center flex-1">
                    <h2 class="text-3xl py-2 text-white font-medium text-center">${visitors2}+</h2>
                    <h2 class="text-lg py-2 text-white font-medium text-center">STUDENTS PLACED</h2>
                </div>
            </div>
        </div>
    </div>
</div>
    `;*/

