let partidas = 0;
let ganadas = 0;
let empatadas = 0;
let perdidas = 0;

function juego(jugador) {
  const opciones = ["piedra", "papel", "tijera"];
  const maquina = opciones[Math.floor(Math.random() * opciones.length)];
  let mensaje;

  partidas++;

  if (jugador === maquina) {
    mensaje = "Empata";
    empatadas++;
  }
  
  else if (
    (jugador === "piedra" && maquina === "tijera") ||
    (jugador === "tijera" && maquina === "papel") ||
    (jugador === "papel" && maquina === "piedra")
  ) {
    mensaje = "Gana jugador";
    ganadas++;
  } else {
    mensaje = "Gana máquina";
    perdidas++;
  }

  document.getElementById("jugada-jugador").textContent =
    `Tu sacas: ${jugador}`;
  document.getElementById("jugada-maquina").textContent =
    `La máquina saca: ${maquina}`;
  document.getElementById("mensaje").textContent = mensaje;

  document.getElementById("marcador").textContent =
    `Partidas jugadas: ${partidas}`;
  document.getElementById("ganadas").textContent = `Ganadas: ${ganadas}`;
  document.getElementById("empatadas").textContent = `Empates: ${empatadas}`;
  document.getElementById("perdidas").textContent = `Derrotas: ${perdidas}`;
}
