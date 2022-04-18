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