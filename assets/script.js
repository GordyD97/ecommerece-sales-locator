var repoList = document.querySelector('#listEl');
var fetchButton = document.querySelector('.fetch-button');
var newName = document.querySelector('#newManga');
var currentTimeout;
var currentPromiseReject;
function getApi() {
  // encodeURIcomponent
  fetch('https://api.jikan.moe/v4/anime?q=' + newName.value + '')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      repoList.innerHTML = ''
      for (var i = 0; i < 5; i++) {
        var listItem = document.createElement('li');
        var listImg = document.createElement('img');
        var listText = document.createElement('p');
        listImg.setAttribute('src', data.data[i].images.webp.image_url);
        listImg.setAttribute('alt', "title");

        listItem.appendChild(listImg);
        listText.textContent = data.data[i].title;
        listItem.appendChild(listText);
        repoList.appendChild(listItem);
      }
      console.log(data)
    });
}
fetchButton.addEventListener('click', getApi);

// DO NOT UNCOMMENT!!!! WILL BREAK SHIT!!!!! WIP!!
// var topList = document.querySelector('#rando')
// window.addEventListener("load", rando);
// fetch('https://api.jikan.moe/v4/random/manga')
// .then(function (response) {
//   return response.json();
// })
// .then(function (data) {
//     repoList.innerHTML = ''
//     for (var i = 0; i < 1; i++) {
//         var listItem = document.createElement('li');
//         var listImg = document.createElement('img');
//         var listText = document.createElement('p');
//         listImg.setAttribute('src', data[i].images.webp.image_url); 
//         listImg.setAttribute('alt', "title");

//         listItem.appendChild(listImg);
//         listText.textContent = data[i].title;
//         listItem.appendChild(listText);
//         topList.appendChild(listItem);
//       }
//     console.log("Hmmmm")
// });

document.getElementById("newManga")
  .addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      document.getElementById("btnFind").click();
    }
  });


var requestOptions = {
  method: 'GET',
};

fetch("https://api.geoapify.com/v2/places?categories=commercial.books&filter=circle:-75.371964,39.887065,9000&bias=proximity:-75.371964,39.887065&limit=20&apiKey=3f037f71cb1e42579fb3ff5aa319aeee", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

var map = L.map("my-map").setView([39.8694, -75.3824], 10);

// Get your own API Key on https://myprojects.geoapify.com
var myAPIKey = "3f037f71cb1e42579fb3ff5aa319aeee";

// Retina displays require different mat tiles quality
var isRetina = L.Browser.retina;

var baseUrl =
  "https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey=3f037f71cb1e42579fb3ff5aa319aeee";
var retinaUrl =
  "https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}@2x.png?apiKey=3f037f71cb1e42579fb3ff5aa319aeee";

// Add map tiles layer. Set 20 as the maximal zoom and provide map data attribution.
L.tileLayer(isRetina ? retinaUrl : baseUrl, {
  attribution:
    'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | © OpenStreetMap <a href="https://www.openstreetmap.org/copyright" target="_blank">contributors</a>',
  apiKey: myAPIKey,
  maxZoom: 40,
  id: "osm-bright",
}).addTo(map);


const markerIcon = L.icon({
  iconUrl: `https://api.geoapify.com/v1/icon/?type=material&color=red&icon=lightbulb&iconType=awesome&apiKey=3f037f71cb1e42579fb3ff5aa319aeee`,
  iconSize: [31, 46], // size of the icon
  iconAnchor: [15.5, 42], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -45] // point from which the popup should open relative to the iconAnchor
});
const storeMarker = L.marker([39.8694, -75.3824], {
  icon: markerIcon


}).addTo(map);

document.querySelector("#autocomplete-container")

// function addressAutocomplete(containerElement) {
//   // create input element

// }

addressAutocomplete(document.getElementById("autocomplete-container"));


function addressAutocomplete(containerElement, callback, options) {
  // var inputElement = document.createElement("input");
  // inputElement.setAttribute("type", "text");
  // inputElement.setAttribute("placeholder", "Enter an address here");
  // containerElement.appendChild(inputElement);

  var currentItems;

  const MIN_ADDRESS_LENGTH = 3;
  const DEBOUNCE_DELAY = 300;
  var inputElement = document.querySelector('#input1');
  /* Process a user input: */
  inputElement.addEventListener("input", function (e) {
    const currentValue = this.value;

    // Cancel previous timeout
    if (currentTimeout) {
      clearTimeout(currentTimeout);
    }

    // Cancel previous request promise
    if (currentPromiseReject) {
      currentPromiseReject({
        canceled: true
      });
    }

    // Skip empty or short address strings
    if (!currentValue || currentValue.length < MIN_ADDRESS_LENGTH) {
      return false;
    }

    /* Call the Address Autocomplete API with a delay */
    currentTimeout = setTimeout(() => {
      currentTimeout = null;

      /* Create a new promise and send geocoding request */
      const promise = new Promise((resolve, reject) => {
        currentPromiseReject = reject;

        // Get an API Key on https://myprojects.geoapify.com
        const apiKey = "3f037f71cb1e42579fb3ff5aa319aeee";

        var url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(currentValue)}&format=json&limit=5&apiKey=${apiKey}`;

        fetch(url)
          .then(response => {
            currentPromiseReject = null;

            // check if the call was successful
            if (response.ok) {
              response.json().then(data => resolve(data));
            } else {
              response.json().then(data => reject(data));
            }
          });
      });

      promise.then((data) => {
        // here we get address suggestions
        console.log(data);
      }, (err) => {
        if (!err.canceled) {
          console.log(err);
        }
      });
    }, DEBOUNCE_DELAY);
  });
}




