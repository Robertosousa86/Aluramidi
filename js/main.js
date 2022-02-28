const playPom = () => {
  document.querySelector('#som_tecla_pom').play();
};

const listKey = document.querySelectorAll('.tecla');

listKey[0].onclick = playPom;
