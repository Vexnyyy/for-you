const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const title = document.getElementById("title");
const video = document.getElementById("anime");

let scale = 1;
let noCount = 0;

function moveNo() {
  const container = document.querySelector(".btn-group");

  const maxX = container.offsetWidth - noBtn.offsetWidth;
  const maxY = container.offsetHeight - noBtn.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  scale += 0.15;
  yesBtn.style.transform = `scale(${scale})`;

  const texts = [
    "Yakin nggak? 😭",
    "Jangan dong 😢",
    "Pikir lagi 😭",
    "Aku sedih loh 😭",
    "Klik YES aja 😡"
  ];

  title.innerText = texts[Math.floor(Math.random() * texts.length)];

  // 🔥 ganti video tiap NO ditekan
  noCount++;

  if (noCount === 1) {
    video.src = "video/sedih.mp4";
  } else if (noCount === 2) {
    video.src = "video/sedih.mp4";
  }

  if (navigator.vibrate) {
    navigator.vibrate(100);
  }
}

noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("click", moveNo);

yesBtn.addEventListener("click", () => {
  title.innerText = "I love you too ❤️";
  noBtn.style.display = "none";
  yesBtn.style.display = "none";

  // 🔥 video happy
  video.src = "video/jadi.mp4";

  setInterval(createHeart, 200);
});

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.innerText = "❤️";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.animationDuration = (2 + Math.random() * 3) + "s";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 4000);
}