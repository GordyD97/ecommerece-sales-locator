var repoList = document.querySelector('#listEl');
var fetchButton = document.querySelector('.fetch-button');

function getApi() {
    var requestUrl = 'https://kitsu.io/api/edge/anime?filter[categories]=adventure';
    // encodeURIcomponent
    fetch('https://kitsu.io/api/edge/anime?filter[categories]=adventure')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        console.log(data.data.length)
        repoList.innerHTML = ''
        for (var i = 0; i < data.data.length; i++) {
            console.log('test')
            var listItem = document.createElement('li');
            listItem.innerHTML = data.data[i].attributes.canonicalTitle;
        
            repoList.appendChild(listItem);
          }
        console.log(data)
    });
}

fetchButton.addEventListener('click', getApi);
