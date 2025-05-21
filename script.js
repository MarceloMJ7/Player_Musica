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
