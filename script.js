player1 = [
  {
    nombre: "pikachu",
    tipo: "electrico",
    vida: 100,
    fuerza: 50,
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
  },
  {
    nombre: "bulbasur",
    tipo: "planta",
    vida: 100,
    fuerza: 50,
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },
  {
    nombre: "squirtle",
    tipo: "agua",
    vida: 100,
    fuerza: 50,
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
  },
];

player2 = [
  {
    nombre: "charmander",
    tipo: "fuego",
    vida: 100,
    fuerza: 50,
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  },
  {
    nombre: "chikorita",
    tipo: "planta",
    vida: 100,
    fuerza: 50,
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png",
  },
  {
    nombre: "totodile",
    tipo: "agua",
    vida: 100,
    fuerza: 50,
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png",
  },
];

const copiaP1 = player1.map((e) => ({ ...e, vidaActual: e.vida }));
const copiaP2 = player2.map((e) => ({ ...e, vidaActual: e.vida }));

let pokemonIMG = document.querySelectorAll(".imagenPokemon");

copiaP1.forEach((e, i) => {
  pokemonIMG[i].src = e.img
});

copiaP2.forEach((e, i) => {
  pokemonIMG[i+3].src = e.img
});

let seleccionJugador1=""
let seleccionJugador2=""

function elegirPersonaje(id){
  let pokemonImagev1 = document.getElementById("pokemonImageBox1")
  let pokemonImagev2 = document.getElementById("pokemonImageBox2")
  let pokemonTextv1 = document.getElementById("pokemonText1")
  let pokemonTextv2 = document.getElementById("pokemonText2")
  switch (id){
    case 1:
      pokemonImagev1.src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
      pokemonTextv1.innerHTML = "Pikachu"
      seleccionJugador1= copiaP1[0]
      break
    case 2:
      pokemonImagev1.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
      pokemonTextv1.innerHTML = "Bulbasur"
      seleccionJugador1= copiaP1[1]
      break
    case 3:
      pokemonImagev1.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
      pokemonTextv1.innerHTML = "Squirtle"
      seleccionJugador1= copiaP1[2]
      break
    
    case 4:
      pokemonImagev2.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
      pokemonTextv2.innerHTML = "Charmander"
      seleccionJugador2= copiaP2[0]
      break
    
      case 5:
        pokemonImagev2.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png"
        pokemonTextv2.innerHTML = "Chikorita"
        seleccionJugador2= copiaP2[1]
        break

      case 6:
        pokemonImagev2.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png"
        pokemonTextv2.innerHTML = "Totodile"
        seleccionJugador2= copiaP2[2]
        break
      default:
          break
  }
}

function reiniciarJuego(){
  location.reload()
}


function luchar(){
  let pantallaLucha=document.getElementById("log")
  let vidaPokemons = document.querySelectorAll(".pokemon-hp")
  if(seleccionJugador1 && seleccionJugador2){
    if(seleccionJugador1.vidaActual>=1 && seleccionJugador2.vidaActual >= 1){
      let daño1 = Math.ceil(Math.random()* seleccionJugador1.fuerza)
      let daño2 = Math.ceil(Math.random()* seleccionJugador2.fuerza)
      // JUgador 1
      seleccionJugador2.vidaActual -= daño1
      if (seleccionJugador2.vidaActual < 0) seleccionJugador2.vidaActual = 0
      let indiceJugador2 = copiaP2.indexOf(seleccionJugador2);
      vidaPokemons[indiceJugador2 + 3].innerHTML = `${seleccionJugador2.vidaActual}/100`;
      pantallaLucha.innerHTML = `${seleccionJugador1.nombre} ha hecho su ataque y le ha quitado ${daño1} a ${seleccionJugador2.nombre} que se queda con ${seleccionJugador2.vidaActual} de vida`

      if (seleccionJugador2.vidaActual === 0) {
        pantallaLucha.innerHTML += `<br>${seleccionJugador2.nombre} ha sido derrotado. ¡${seleccionJugador1.nombre} ha ganado!`
      }
      
      // Jugador 2
      setTimeout(() => {
      seleccionJugador1.vidaActual -= daño2
      if (seleccionJugador1.vidaActual < 0) seleccionJugador1.vidaActual = 0
      
      let indiceJugador1 = copiaP1.indexOf(seleccionJugador1);
      vidaPokemons[indiceJugador1].innerHTML = `${seleccionJugador1.vidaActual}/100`;
      pantallaLucha.innerHTML = `${seleccionJugador2.nombre} ha hecho su ataque y le ha quitado ${daño2} a ${seleccionJugador1.nombre} que se queda con ${seleccionJugador1.vidaActual} de vida`

      if (seleccionJugador1.vidaActual === 0) {
        pantallaLucha.innerHTML += `<br>${seleccionJugador1.nombre} ha sido derrotado. ¡${seleccionJugador2.nombre} ha ganado!`
      }
      else{ 
        setTimeout(luchar,3000)}},3000)}
    
  }
  
  else{
    pantallaLucha.innerHTML="Algun jugador no ha elegido pokemon. Intentelo de nuevo."
  
}
  
}