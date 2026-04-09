const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const title = document.getElementById("title");
const anime = document.getElementById("anime");

let yesSize = 1;

// NO kabur (DIBATASI BIAR GA KELUAR LAYAR HP)
noBtn.addEventListener("mouseover", () => {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  // YES membesar (TETAP PUNYA KAMU)
  yesSize += 0.1;
  yesBtn.style.transform = `scale(${yesSize})`;

  title.innerText = "Yakin nggak? 😭";

  // GANTI VIDEO (TETAP PUNYA KAMU)
  anime.innerHTML = '<source src="video/sedih.mp4" type="video/mp4">';
  anime.load();
});

// YES klik (TETAP PUNYA KAMU)
yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      text-align:center;
      padding:20px;
    ">
      <video autoplay loop muted playsinline style="width:200px;border-radius:16px;margin-bottom:20px;">
        <source src="video/jadi.mp4" type="video/mp4">
      </video>

      <h1 style="color:#ff4d6d;">I love you too ❤️</h1>
    </div>
  `;
});
