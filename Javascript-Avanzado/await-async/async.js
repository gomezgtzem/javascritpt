const $btnCat = document.querySelector("#btnCat");
const $divCats = document.querySelector("#divCats");

$btnCat.addEventListener("click", async() => {
  const respCats = await fetch("https://api.thecatapi.com/v1/images/search");
  const dataCats = await respCats.json();
  const imgCat = document.createElement("img");
  imgCat.src = dataCats[0].url;
  // document.body.append(imgCat);
  $divCats.appendChild(imgCat);
});

// API DOGS
const $btnDog = document.querySelector("#btnDog");
const $divDogs = document.querySelector("#divDogs");
$btnDog.addEventListener("click", async() => {
  const respDogs = await fetch("https://dog.ceo/api/breeds/image/random");
  const dataDogs = await respDogs.json();
  const imgDog = document.createElement("img");
  imgDog.src = dataDogs.message;
  document.body.append(imgDog);
  $divCats.appendChild(imgDog);
    });