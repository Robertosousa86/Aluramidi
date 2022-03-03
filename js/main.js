const playSong = (audioSelector) => {
  const element = document.querySelector(audioSelector);

  if (element && element.localName === 'audio') return element.play();

  return console.log(`Elemento ou seletor ${element.localName} não encontrado.`);
};

const listKey = document.querySelectorAll('.tecla');

for (counter = 0; counter < listKey.length; counter++) {
  const key = listKey[counter];
  const instrument = key.classList[1];

  const idAudio = `#som_${instrument}`;

  key.onclick = () => playSong(idAudio);

  key.onkeydown = (event) => {
    if (event.code === 'Space' || event.code === 'Enter')
      return key.classList.add('ativa');
  };

  key.onkeyup = () => key.classList.remove('ativa');
}
