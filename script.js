// Jogo de Perguntas
const perguntas = [
	{
		pergunta: "Quem é o pai do comunismo?",
		respostas: ["Karl Marx", "Vladimir Lenin", "Mao Zedong", "Che Guevara"],
		correta: 0
	},
	{
		pergunta: "O que é a luta de classes?",
		respostas: ["A luta entre os ricos e os pobres", "A luta entre os trabalhadores e os capitalistas", "A luta entre os comunistas e os capitalistas", "A luta entre os socialistas e os comunistas"],
		correta: 1
	},
	// ...
];

const btnJogarPerguntas = document.getElementById("btn-jogar-perguntas");
const perguntasContainer = document.getElementById("perguntas-container");

btnJogarPerguntas.addEventListener("click", () => {
	perguntasContainer.innerHTML = "";
	perguntas.forEach((pergunta, index) => {
		const perguntaHTML = `
			<h3>${pergunta.pergunta}</h3>
			<ul>
				${pergunta.respostas.map((resposta, i) => `<li><input type="radio" name="pergunta-${index}" value="${i}">${resposta}</li>`).join