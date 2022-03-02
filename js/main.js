const playSong = (idAudioElement) =>
  document.querySelector(idAudioElement).play();

const listKey = document.querySelectorAll('.tecla');

for (counter = 0; counter < listKey.length; counter++) {
  const key = listKey[counter];
  const instrument = key.classList[1];

  const idAudio = `#som_${instrument}`;

  key.onclick = () => playSong(idAudio);

  key.onkeydown = () => key.classList.add('ativa');
  key.onkeyup = () => key.classList.remove('ativa');
}
