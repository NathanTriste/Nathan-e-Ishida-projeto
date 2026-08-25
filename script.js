const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que acaba a Copa do Mundo 2026, você se depara com o Neymar aposentado.",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "Ele se aposenta e todos ficam Sad."
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Você é uma péssima pessoa."
            }
        ]
    },
    {
        enunciado: "O Neymar pós-aposentado quer entrar para o Athletico Paranaense, porém precisa de votos pra isso.",
        alternativas: [
            {
                texto: "Eu votaria!",
                afirmacao: "Você votou, ele entrou pro Athletico e fez o Coxa de filhinho."
            },
            {
                texto: "Eu não votaria!",
                afirmacao: "Mesmo sem você votar ele consegue entrar pois tu é indiferente."
            }
        ]
    },
    {
        enunciado: "O Neymar estando no Athletico Paranaense se depara com um lance decisivo para ser campeão da Libertadores.",
        alternativas: [
            {
                texto: "Ele chuta no ângulo do gol, e faria o gol.",
                afirmacao: "Foi o que ocorreu e fez o Athletico ser campeão."
            },
            {
                texto: "Cavaria um pênalti.",
                afirmacao: "Conseguiu e fez um gol classificando o Athletico como campeão."
            }
        ]
    },
    {
        enunciado: "Qual foi o clube europeu pelo qual Neymar Jr. conquistou a UEFA Champions League e para qual equipe ele se transferiu na transação mais cara da história do futebol?",
        alternativas: [
            {
                texto: "FC Barcelona",
                afirmacao: "Correto."
            },
            {
                texto: "Paris Saint-Germain (PSG)",
                afirmacao: "Correto também."
            }
        ]
    },
    {
        enunciado: "Quais são os dois maiores artilheiros da história da Seleção Brasileira masculina (em jogos oficiais)?",
        alternativas: [
            {
                texto: "Neymar e Pelé.",
                afirmacao: "Tu manja das paradas."
            },
            {
                texto: "Manoel Gomes e Tony Ramos.",
                afirmacao: "Bateu a cabeça, hein?"
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();