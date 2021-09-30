const gravedad = 9.8;
console.log(gravedad);

// Intenta ejecutar el codigo, si hay un error ejecuta un catch
try{
gravedad=10.1;
}catch(e){
  // El catch se ejecuta si hay un error, recibe como parametro el error "e"
console.log(e);
}finally{
  // El finally siempre se ejecuta
  console.log('Soy el finally');
}
console.log(gravedad);