const playSong = (idAudioElement) =>
  document.querySelector(idAudioElement).play();

const listKey = document.querySelectorAll('.tecla');

let counter = 0;

while (counter < listKey.length) {
  const key = listKey[counter];
  const instrument = key.classList[1];

  const idAudio = `#som_${instrument}`;

  key.onclick = () => playSong(idAudio);

  ++counter;
}
