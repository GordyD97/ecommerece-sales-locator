# Weeb Paradise

# General Description
For our project, we decided to create a website called "Weeb Paradise", which revolves around the distribution of Manga. Weeb Paradise prompts the user for a keyword before returning 5 different Mangas that best fits the user's keyword. Furthermore, it will prompt the user for their zip code and then return the nearest Manga distributor, while also giving the user the location of said distributor based off the map. Essentially, this website acts as a means to facilitate the purchase of Manga by recommending the user the best-fit Manga to a given search criteria, while also providing them with a convienently-located distributor based off of the zip code they provide.

# Structure
Weeb Paradise is based off of 2 API's: JikanAPI and Geoapify.
- Jikan is the open-source API that is notably used for the "most active online anime/manga community and database", MyAnimeList.net, which mainly focuses on recommending anime and manga to the user based off of a variety of factors, such as popularity, release date, and specific genres. The purpose of Jikan in Weeb Paradise was to return the name and cover art of the 5 most popular Mangas that best fit the user's search query.

- Geoapify is an API that offers developers access to map and auxiliary APIs, as well as data services that allows for the utmost streamlining of the development of geospacial analytics applications and modern maps. In Weeb Paradise, We used Geoapify to create an image of a map and prompt the user to input a zip code. Upon submission, the website will return the name and address of the nearest distributor of Manga to said zip code, while also pinpointing its location on the map.

# Accessibility
As for styling, Weeb Paradise offers support to both desktops and mobile devices by using media queries to adjust the layout of the page based off of screen resolution, meaning the website can be used on the go. Furthermore, colorblind people can use it

Credits:
- Erick Ramos-Torres
- Gordon Draine
- Steffan Carter
- Chris McHenry