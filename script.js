function carregarVideo() {
  const link = document.getElementById("youtubeLink").value.trim();
  const frame = document.getElementById("videoFrame");

  if (link === "") {
    alert("Cole um link do YouTube.");
    return;
  }

  // Extrai o ID do vídeo
  const videoId = link.split("v=")[1]?.split("&")[0];

  if (!videoId) {
    alert("Link inválido. Use o formato: https://www.youtube.com/watch?v=ID");
    return;
  }

  frame.src = `https://www.youtube.com/embed/${videoId}`;
}

function salvar() {
  const texto = document.getElementById("comentario").value.trim();
  const resultado = document.getElementById("resultado");

  if (texto === "") {
    alert("Por favor, escreva um comentário.");
    return;
  }

  resultado.style.display = "block";
  resultado.innerHTML = `<h3>Comentário Salvo:</h3><p>${texto}</p>`;
}
