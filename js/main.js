const playPom = () => {
  document.querySelector('#som_tecla_pom').play();
};

const listKey = document.querySelectorAll('.tecla');

let counter = 0;

while (counter < listKey.length) {
  listKey[counter].onclick = playPom;

  counter = counter + 1;
}
