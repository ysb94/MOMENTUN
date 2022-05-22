const images = ["0.jpg", "1.jpg", "2.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgimg = document.createElement("img");

bgimg.src = `img/${chosenImage}`;
bgimg.className = "background";
document.body.appendChild(bgimg);