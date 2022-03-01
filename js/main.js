const playSong = (idAudioElement) =>
  document.querySelector(idAudioElement).play();

const listKey = document.querySelectorAll('.tecla');

let counter = 0;

while (counter < listKey.length) {
  listKey[counter].onclick = () => playSong('#som_tecla_pom');

  ++counter;
}
