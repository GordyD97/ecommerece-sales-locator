var repoList = document.querySelector('#listEl');
var fetchButton = document.querySelector('.fetch-button');
var newName = document.querySelector('#newManga');

function getApi() {
    // encodeURIcomponent
    fetch('https://api.jikan.moe/v4/anime?q='+newName.value+'')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        repoList.innerHTML = ''
        for (var i = 0; i < 5; i++) {
            var listItem = document.createElement('li');
            var listImg = document.createElement('img');
            listItem.innerHTML = data.data[i].title;
            listImg.setAttribute('src', data.data[i].images.webp.image_url); 
            listImg.setAttribute('alt', "title");
            repoList.appendChild(listItem);
            listItem.appendChild(listImg);
          }
        console.log(data)
    });
}
fetchButton.addEventListener('click', getApi);

document.getElementById("newManga")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("btnFind").click();
    }
});


// var requestOptions = {
//   method: 'GET',
// };

// fetch("https://api.geoapify.com/v2/places?categories=commercial.books&filter=circle:-75.371964,39.887065,9000&bias=proximity:-75.371964,39.887065&limit=20&apiKey=3f037f71cb1e42579fb3ff5aa319aeee", requestOptions)
//   .then(response => response.json())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

//   var map = L.map("my-map").setView([39.8694, -75.3824], 10);
  
//   // Get your own API Key on https://myprojects.geoapify.com
//   var myAPIKey = "3f037f71cb1e42579fb3ff5aa319aeee";

//   // Retina displays require different mat tiles quality
//   var isRetina = L.Browser.retina;

//   var baseUrl =
//     "https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey=3f037f71cb1e42579fb3ff5aa319aeee";
//   var retinaUrl =
//     "https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}@2x.png?apiKey=3f037f71cb1e42579fb3ff5aa319aeee";

//   // Add map tiles layer. Set 20 as the maximal zoom and provide map data attribution.
//   L.tileLayer(isRetina ? retinaUrl : baseUrl, {
//     attribution:
//       'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | © OpenStreetMap <a href="https://www.openstreetmap.org/copyright" target="_blank">contributors</a>',
//     apiKey: myAPIKey,
//     maxZoom: 40,
//     id: "osm-bright",
//   }).addTo(map);

  