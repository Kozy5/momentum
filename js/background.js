const images = ["3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.querySelector("img");

bgImage.src = `img/${chosenImage}`;
