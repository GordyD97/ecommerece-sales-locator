var repoList = document.querySelector('#testEl');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://upenn-cors-anywhere.herokuapp.com/api.itbook.store%2F1.0%2Fsearch%2Fmongodb';
    // encodeURIcomponent
    fetch('https://api.itbook.store/1.0/search/mongodb')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
    });
}

window.addEventListener('click', getApi);
