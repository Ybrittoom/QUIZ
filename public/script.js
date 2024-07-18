function iniciarQUIZ() {
    const QUIZpergunta = document.getElementById("QUIZpergunta");
    const InputResposta = document.getElementById("InputResposta");
    const AcertouErrou = document.getElementById("AcertouErrou");
    const botaoIniciar = document.getElementById("iniciar");

    // Esconde o botão "iniciar"
    botaoIniciar.style.display = "none";

    alert("Vamos começar");
    alert("A primeira letra de todas as respostas sem acentos. Caso você erre a pergunta, você não poderá responder novamente. Não é necessário usar acento.");

    let pontos = 0;

    const gabarito = [
        { pergunta: "1- Qual é o maior planeta do sistema solar?", resposta: "jupiter"},
        { pergunta: "2- Qual a montanha mais alta do mundo?", resposta: "everest"},
        { pergunta: "3- Qual é a fórmula química da água? ", resposta: "H2o"},
        { pergunta: "4- Em que ano começou a Primeira Guerra Mundial?", resposta: "1914"},
        { pergunta: "5- Qual a capital do Japão?", resposta: "toquio"},
        { pergunta: "6- Qual processo as plantas usam para converter luz solar em energia?", resposta: "fotossintese"},
        { pergunta: "7- Qual o idioma mais falado do mundo?", resposta: "mandarim"},
        { pergunta: "8- Quem pintou Mona Lisa?", resposta: "leonardo da vinci"},
        { pergunta: "9- Qual a distância aproximada entre a Terra e a Lua (em KM)?", resposta: "384400"},
        { pergunta: "10- Qual é o metal mais abundante na crosta terrestre?", resposta: "aluminio"},
    ]

    function handleKeyDown(event) {
        if (event.key !== "Enter") return;

        if (InputResposta.value.trim().toLowerCase() === questao.resposta.trim().toLowerCase()) {
            AcertouErrou.textContent = "Está certa a resposta";
            pontos++;
            setTimeout(() => {
                alert("PARABÉNS!! VOCÊ GANHOU MAIS UM PONTO");
                if(gabarito.length){
                    perguntar();
                } else {
                    final();
                }
            }, 1000);
        } else {
            AcertouErrou.textContent = "Resposta errada";
            setTimeout(() => {
                AcertouErrou.textContent = '...';
                if(gabarito.length){
                    
                    perguntar();

                } else {

                    final();

                }

            }, 1000);
        }
    }

    let questao;

    function perguntar() { 
        questao = gabarito.shift();
        InputResposta.value = '';
        AcertouErrou.textContent = '...';
        QUIZpergunta.textContent = questao.pergunta;
    }

    perguntar();

    InputResposta.addEventListener("keydown", handleKeyDown);
    
    function final() {
        const modal = document.getElementById("meuModal");
        const span = document.getElementsByClassName("close")[0];
        const paragrafo = document.getElementById("paragrafo");

        alert('ACABOU');
        alert('Você chegou no final do QUIZ DE PERGUNTAS GERAIS');
        alert(`Você terminou o QUIZ com ${pontos} pontos, PARABÉNS!!!!!`);
        alert('ATÉ A PRÓXIMA FASE!!!');
        
        InputResposta.removeEventListener("keydown", handleKeyDown);
        AcertouErrou.textContent = "Finalizar";
        

        AcertouErrou.onclick = function() {
            modal.style.display = "block";
        }


        AcertouErrou.onclick = function() {
            modal.style.display = "block";
            // Mostrar o gif de carregamento
            loading.classList.remove("hidden");
            paragrafo.classList.add("hidden");


            // Simular carregamento
            setTimeout(() => {
                // Esconder o gif de carregamento e mostrar o conteúdo do modal
                loading.classList.add("hidden");
                paragrafo.classList.remove("hidden");
                paragrafo.textContent = "Muito obrigado por responder o QUIZ: PERGUNTAS GERAIS, estou muito grato por ter participado desse meu projeto, ATÉ MAIS";
            }, 2000); // tempo de carregamento simulado (2 segundos)
        }


        //Ao apertar no X, o modal desaparece
        span.onclick = function() {
            modal.style.display = "none";
            window.location.href = "seg.html"
        }

        //Quando o usuario clicar fora do modal, o mesmo desaparece
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none"; 
                window.location.href = "seg.html"
            }
        }


        paragrafo.textContent = "Muito obrigado por responder o QUIZ: PERGUNTAS GERAIS, estou muito grato por ter participado desse meu projeto, ATÉ MAIS";
 

       
    }

}
