// Fetch nos permite hacer peticiones http desde javascript

const peticion = fetch('https://api.pexels.com/v1/')
.then(resp => resp.json())
.then(data => console.log(data)).catch(e=>{
  console.log(e);
});

// console.log(peticion);