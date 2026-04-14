async function buscarMensagem() {
  alert("JS carregou!");

  const res = await fetch("http://localhost:3000/api/mensagem");
  const data = await res.json();

  document.getElementById("resposta").innerText = data.mensagem;
}
