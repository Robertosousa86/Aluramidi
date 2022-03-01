const playSong = (idAudioSong) => document.querySelector(idAudioSong).play();

const listKey = document.querySelectorAll('.tecla');

let counter = 0;

while (counter < listKey.length) {
  listKey[counter].onclick = playPom;

  counter = counter + 1;
}
