const image = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");

function changeSizes() {
  counter.textContent++;
  if (image.width == 200) {
    image.width = 300;
  } else {
    image.width = 200;
  }
};

image.onclick = changeSizes;

     