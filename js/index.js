const Details=[
    {
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      "Title": "PLACEMENT STATISTICS",
    },
    {
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        "Title": "MEET THE CORE TEAM",
    },
    {
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        "Title": "EVENTS",
    },
    {
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        "Title": "LOREM IPSUM",
    },
  

  ]

const visitors=40;
const visitors1=50;
const visitors2=60;



var cardContent = document.getElementById('cards');
var visitorCard = document.getElementById('visitors');


for (var prop in Details) {
    var cardHtml = `
    <div class="mx-auto w-80 my-8 flex max-w-screen-sm items-center justify-center">
        <div class="h-80 w-full rounded-2xl bg-gradient-to-r from-[#0085FF] to-[#00F0FF] p-[0.2rem]">
            <div class=" h-full w-full rounded-2xl bg-gray-800">
                <h2 class="text-xl p-4 py-6 text-white font-medium text-center w-full">${Details[prop].Title}</h2>
                <p class="text-white px-4 py-6 text-center text-sm">${Details[prop].description}</p>
            </div>
        </div>
    </div>
    `;
    cardContent.innerHTML += cardHtml;
}

    visitorCard.innerHTML = `
<div class="mx-auto w-full flex items-center justify-center py-4 px-10 md:px-20 ">
    <div class="w-full rounded-2xl bg-gradient-to-r from-[#0085FF] to-[#00F0FF] p-[0.2rem] ">
        <div class="h-full w-full rounded-2xl bg-gray-800 ">
            <div class="flex flex-row justify-between py-2">
                <div class="flex flex-col align-center flex-1">
                    <h2 class="text-xl py-2 text-white font-medium text-center">${visitors}</h2>
                    <h2 class="text-xl py-2 text-white font-medium text-center">Visitors</h2>
                </div>
                <div class=" my-3 border-l-2 border-buttonCol "></div>
                <div class="flex flex-col align-center flex-1">
                    <h2 class="text-xl py-2 text-white font-medium text-center">${visitors1}</h2>
                    <h2 class="text-xl py-2 text-white font-medium text-center">Visitors</h2>
                </div>
                <div class=" my-3 border-l-2 border-buttonCol "></div>
                <div class="flex flex-col align-center flex-1">
                    <h2 class="text-xl py-2 text-white font-medium text-center">${visitors2}</h2>
                    <h2 class="text-xl py-2 text-white font-medium text-center">Visitors</h2>
                </div>
            </div>
        </div>
    </div>
</div>
    `;

