const musicas = [
  {
    titulo: "Música 1",
    src: "músicas/Linkin Park -  Numb (Lyrics).mp3",
  },
  {
    titulo: "Música 2",
    src: "músicas/Linkin Park - In the End (Lyrics).mp3",
  },
  { titulo: "Música 3", src: "musicas/musica3.mp3" },
];

let currentIndex = 0;
const audio = document.getElementById("audio-player");
const currentTitle = document.getElementById("current-title");
const musicList = document.getElementById("music-list");
const volumeControl = document.getElementById("volume-control");

musicas.forEach((musica, index) => {
  const li = document.createElement("li");
  li.textContent = musica.titulo;
  li.onclick = () => loadMusic(index);
  musicList.appendChild(li);
});

function loadMusic(index) {
  currentIndex = index;
  audio.src = musicas[index].src;
  currentTitle.textContent = musicas[index].titulo;
  audio.play();
}

function togglePlay() {
  if (!audio.src) return;
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function nextMusic() {
  currentIndex = (currentIndex + 1) % musicas.length;
  loadMusic(currentIndex);
}

function prevMusic() {
  currentIndex = (currentIndex - 1 + musicas.length) % musicas.length;
  loadMusic(currentIndex);
}

volumeControl.addEventListener("input", () => {
  audio.volume = volumeControl.value;
});
