<<<<<<< HEAD
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
=======
const audio = document.getElementById("audio-player");
const playButton = document.querySelector(".btns button:nth-child(2)");
const progressBar = document.getElementById("progress-bar");
const currentTitle = document.getElementById("current-title");

const musicas = [
    {
        nome: "Linkin Park - Numb",
        arquivo: "músicas/Linkin Park -  Numb (Lyrics).mp3"
    },
    {
        nome: "Linkin Park - In the End",
        arquivo: "músicas/Linkin Park - In the End (Lyrics).mp3"
    },
    {
        nome: "Linkin Park - The Emptiness Machine",
        arquivo: "músicas/Linkin Park - The Emptiness Machine (Lyrics).mp3"
    }
];

let indexAtual = 0;

function carregarMusica(index) {
    const musica = musicas[index];
    audio.src = musica.arquivo;
    currentTitle.textContent = musica.nome;
    progressBar.value = 0;
}

function togglePlay() {
    const img = playButton.querySelector("img");
    if (audio.paused) {
        audio.play();
        img.src = "imagens/pausa.png";
    } else {
        audio.pause();
        img.src = "imagens/botao-play.png";
    }
}

function nextMusic() {
    indexAtual = (indexAtual + 1) % musicas.length;
    carregarMusica(indexAtual);
    audio.play();
}

function prevMusic() {
    indexAtual = (indexAtual - 1 + musicas.length) % musicas.length;
    carregarMusica(indexAtual);
    audio.play();
}

// Atualiza a barra de progresso conforme a música toca
audio.addEventListener("timeupdate", () => {
    progressBar.max = audio.duration;
    progressBar.value = audio.currentTime;
});

// Permite o usuário controlar a barra
progressBar.addEventListener("input", () => {
    audio.currentTime = progressBar.value;
});

// Carrega a primeira música ao iniciar
carregarMusica(indexAtual);
>>>>>>> 472c19d (atualizando js)
