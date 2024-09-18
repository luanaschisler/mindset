const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [ //abre lista de perguntas
    { //abre objeto de pergunta
        enunciado: "Ao entrar em uma rede social de Vídeos, você se depara com um vídeo de stand up, onde o apresentador faz piadas com diversas situações,onde as mesmas ofendem o público. Isso é?",
        alternativas: [
            {
                texto:"Apenas humor",
                afirmacao:"afirmacao"
            },
            {
                texto: "Passou dos limites, não é engraçado",
                afirmacao:"afirmacao"
            }
            
        
        ]
    },//fecha objeto de pergunta
    {
        enunciado: "Após o fim do vídeo você abre os comentários para ver o impacto que as piadas tiveram.Ao ver as pessoas não vendo problema nenhum com o stand up, qual seu pensamento?",
        alternativas: [
            {
            texto:"Tanto faz",
            afirmacao:"afirmacao"
            },
            {
                texto:"Que errado",
                afirmacao:"afirmacao"
            }
        ]
    },
    {
        enunciado: "Ao terminar de ler um último comentário você discorda do que o usuário  diz. O que você faz? ",
        alternativas:[
            {
                texto:"Respondo de maneira imponente",
                afirmacao:"afirmacao"
            },
            {
                texto:"Não respondo",
                afirmacao:"afirmacao"
            }
        ]

    },
    
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";  

function mostraPergunta() {
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = " ";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        
        function respostaSelecionada(opcaoSelecionada){
            const afirmacoes = opcaoSelecionada.afirmacao;
            historiaFinal += afirmacoes + " ";
            atual++
            mostraPergunta();
        }
        caixaAlternativas.appendChild(botaoAlternativas);
    }

}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}
mostraPergunta()