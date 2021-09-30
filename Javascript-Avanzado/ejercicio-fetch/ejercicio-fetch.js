const $btnCat = document.querySelector("#btnCat");
const $divCats = document.querySelector("#divCats");

$btnCat.addEventListener("click", () => {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      // Desestructuracion
      // const [cat] = data;
      // const cat = data[0];

      // console.log(data);
      // const{url} = cat;
      const imgCat = document.createElement("img");
      
      imgCat.src = data[0].url;
      // imgCat.src = data[0].url
      document.body.append(imgCat);
      $divCats.appendChild(imgCat);
    })
});

// API DOGS
const $btnDog = document.querySelector("#btnDog");
const $divDogs = document.querySelector("#divDogs");
$btnDog.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      const imgDog = document.createElement("img");
      
      imgDog.src = data.message;
      document.body.append(imgDog);
      $divCats.appendChild(imgDog);
    })
});