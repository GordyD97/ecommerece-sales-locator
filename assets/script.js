var repoList = document.querySelector('#listEl');
var fetchButton = document.querySelector('.fetch-button');


function getApi() {
    // encodeURIcomponent
    fetch('https://kitsu.io/api/edge/manga?filter[categories]=adventure')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        repoList.innerHTML = ''
        for (var i = 0; i < data.data.length; i++) {
            var listItem = document.createElement('li');
            listItem.innerHTML = data.data[i].attributes.canonicalTitle;
            repoList.appendChild(listItem);
          }
        console.log(data)
    });
}
fetchButton.addEventListener('click', getApi);
