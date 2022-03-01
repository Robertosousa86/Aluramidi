const playSong = (idAudioSong) => document.querySelector(idAudioSong).play();

const listKey = document.querySelectorAll('.tecla');

let counter = 0;

while (counter < listKey.length) {
  listKey[counter].onclick = () => playSong('#som_tecla_pom');
  
  counter = counter + 1;
}
