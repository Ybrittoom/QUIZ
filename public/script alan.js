function iniciarQUIZ() {
    const QUIZpergunta = document.getElementById("QUIZpergunta");
    const InputResposta = document.getElementById("InputResposta");
    const AcertouErrou = document.getElementById("AcertouErrou");
    const botaoIniciar = document.getElementById("iniciar");

    // Esconde o botão "iniciar"
    botaoIniciar.style.display = "none";

    alert("Vamos começar");
    alert("A primeira letra de todas as respostas tem que estar em maiúscula. Caso você erre a pergunta, você não poderá responder novamente. Não é necessário usar acento.");

    let pontos = 0;

    // Primeira pergunta
    
    const gabarito = [
        { pergunta: "1- Qual é o maior planeta do sistema solar?", resposta: "jupiter"},
        { pergunta: "2- Qual a montanha mais alta do mundo?", resposta: "Everest"},
        { pergunta: "3- Qual é a fórmula química da água? ", resposta: "H2o"},
        { pergunta: "4- Em que ano começou a Primeira Guerra Mundial?", resposta: "1914"},
        { pergunta: "5- Qual a capital do Japão?", resposta: "toquio"},
        { pergunta: "6- Qual processo as plantas usam para converter luz solar em energia?", resposta: "fotossintese"},
        { pergunta: "7- Qual o idioma mais falado do mundo?", resposta: "mandarim"},
        { pergunta: "8- Quem pintou Mona Lisa?", resposta: "leonardo da vinci"},
        { pergunta: "9- Qual a distância aproximada entre a Terra e a Lua (em KM)?", resposta: "384,400 km"},
        { pergunta: "10- Qual é o metal mais abundante na crosta terrestre?", resposta: "aluminio"},
    ]


    function handleKeyDown(event) {
        if (event.key !== "Enter") return true;

        if (InputResposta.value.trim().toLowerCase() === questao.resposta) {
            AcertouErrou.textContent = "Está certa a resposta";
            pontos++;
            setTimeout(() => {
                alert("PARABÉNS!! VOCÊ GANHOU MAIS UM PONTO");
                if(gabarito.length){
                    perguntar();
                } else {
                    final()
                }
            }, 1000);
        } else {
            AcertouErrou.textContent = "Resposta errada";
            setTimeout(() => {
                AcertouErrou.textContent = '...';
                if(gabarito.length){
                    perguntar();
                } else {
                    final()
                }
            }, 1000);
        }
    }

    let questao;
    function perguntar(){ 
        questao = gabarito.shift();
        InputResposta.value = '';
        AcertouErrou.textContent = '...';
        QUIZpergunta.textContent = questao.pergunta;
    }

    perguntar();
    InputResposta.addEventListener("keydown", handleKeyDown);
    
    function final() {
        alert('ACABOU')
        alert('Voce chegou no final do QUIZ DE PERGUNTAS GERAIS')
        alert(`Voce terminou o QUIZ com ${pontos} pontos, PARABENS!!!!!`)
        alert('ATE A PROXIMA FASE!!!')
    }
}
