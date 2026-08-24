const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "Assim que acaba a Copa do Mundo 2026, você se depara com o Neymar aposentado.",
    alternativas:[ 
       {
         texto: "Isso é assustador!",
         afirmacao: "afirmacao"
       },
       { 
         texto: "Isso é maravilhoso!",
         afirmacao: "afirmacao"
       }
    ]
  },
  {
    enunciado: "O Neymar pós aposentado, quer entrar para o Athletico Paranaense, porém precisa de votos pra isso.",
    alternativas: [
       {
         texto: "Eu votaria!",
         afirmacao: "afirmacao"
       },
       { 
         texto: "Eu não votaria!",
         afirmacao: "afirmacao"
       }
    ]
      
  },
  {
    enunciado: "O Neymar estando no Athletico Paranaense, se depara com um lançe decisivo para ser campeão da Libertadores.",
    alternativas: [
       {
         texto: "Ele chuta no ângulo do gol, e faria o gol.",
         afirmacao: "afirmacao"
       },
       { 
         texto: "Cavaria um pênalti.",
         afirmacao: "afirmacao"
       }
    ]
      
  },
  {
    enunciado: "Qual foi o clube europeu pelo qual Neymar Jr. conquistou a UEFA Champions League e para qual equipe ele se transferiu na transação mais cara da história do futebol?",
    alternativas: [
      {
         texto: "FC Barcelona * Contexto: Neymar conquistou a Liga dos Campeões na temporada 2014/2015, formando o famoso trio de ataque "MSN" ao lado de Lionel Messi e Luis Suárez.",
         afirmacao: "afirmacao"
       },
       { 
         texto: "Paris Saint-Germain (PSG) * Contexto: Em agosto de 2017, o PSG pagou a multa rescisória de 222 milhões de euros para tirá-lo do Barcelona, tornando-a a transferência mais cara da história do futebol mundial.",
         afirmacao: "afirmacao"
       }
    ]
  
  },
  {
    enunciado: "Quais são os dois maiores artilheiros da história da Seleção Brasileira masculina (em jogos oficiais)?",
    alternativas: [
      {
         texto: "Neymar e Pelé.",
         afirmacao: "afirmacao"
       },
       { 
         texto: "Manoel Gomez e Tony Ramos.",
         afirmacao: "afirmacao"
       }
    ]
  },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal = afirmacoes;
    atual++;
    mostraPergunta();
}
mostraPergunta();