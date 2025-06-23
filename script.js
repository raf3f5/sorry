function startLetter() {
  window.location.href = 'letter.html';
}

document.addEventListener("DOMContentLoaded", () => {
  const stickers = ['❤️', '🌧️', '🧸', '😢', '💌'];
  const container = document.getElementById("stickers-container");

  if (container) {
    for (let i = 0; i < 15; i++) {
      const sticker = document.createElement("div");
      sticker.textContent = stickers[Math.floor(Math.random() * stickers.length)];
      sticker.style.left = Math.random() * 100 + 'vw';
      sticker.style.top = Math.random() * 100 + 'vh';
      sticker.style.transform = `rotate(${Math.random() * 360}deg)`;
      sticker.addEventListener('click', () => {
        sticker.style.transform = `scale(1.5) rotate(${Math.random() * 360}deg)`;
      });
      container.appendChild(sticker);
    }
  }
});
