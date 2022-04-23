var newTitle = document.querySelector('#newManga');
var fetchAnime = document.querySelector('.fetch-anime');
var repoAnime = document.querySelector('#animeEl');

function getApi() {
  // encodeURIcomponent
  fetch('https://api.jikan.moe/v4/anime?q='+newTitle.value+'&sfw')
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
    // console.log(data)
  });
}
fetchAnime.addEventListener('click', getApi);