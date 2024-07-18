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
    QUIZpergunta.textContent = "1- Qual é o maior planeta do sistema solar?";

    // Função para gerenciar a primeira pergunta
   
   
    function handleKeyDown(event) {
        if (event.key === "Enter") {
            if (InputResposta.value.trim().toLowerCase() === "jupiter") {
                AcertouErrou.textContent = "Está certa a resposta";
                pontos++;
                setTimeout(() => {
                    alert("PARABÉNS!! VOCÊ GANHOU MAIS UM PONTO");
                    pergunta2();
                }, 1000);
            } else {
                AcertouErrou.textContent = "Resposta errada";
                setTimeout(() => {
                    AcertouErrou.textContent = '...';
                    pergunta2();
                }, 1000);
            }
            InputResposta.removeEventListener("keydown", handleKeyDown);
        }
    }

    // Adiciona o event listener para a primeira pergunta
    InputResposta.addEventListener("keydown", handleKeyDown);

   
   
    function pergunta2() {
        InputResposta.value = '';
        AcertouErrou.textContent = '...';
        QUIZpergunta.textContent = "2- Qual a montanha mais alta do mundo?";

        // Função para gerenciar a segunda pergunta
        function handleKeyDown2(event) {
            if (event.key === "Enter") {
                if (InputResposta.value.trim().toLowerCase() === "everest") {
                    AcertouErrou.textContent = "Está certa a resposta";
                    pontos++;
                    setTimeout(() => {
                        alert("PARABÉNS!! VOCÊ GANHOU MAIS UM PONTO");
                        pergunta3();
                    }, 1000);
                } else {
                    AcertouErrou.textContent = "Resposta errada";
                    setTimeout(() => {
                        AcertouErrou.textContent = '...';
                        pergunta3();
                    }, 1000);
                }
                InputResposta.removeEventListener("keydown", handleKeyDown2);
            }
        }

        // Adiciona o event listener para a segunda pergunta
        InputResposta.addEventListener("keydown", handleKeyDown2);
    }

    function pergunta3() {
        InputResposta.value = '';
        AcertouErrou.textContent = '...';
        QUIZpergunta.textContent = "3- Qual é a fórmula química da água? ";

        //função para gerenciar a terceira pergunta
        function handleKeyDown3(event) {
            if (event.key === "Enter") {
               if (InputResposta.value.trim() === "H2o") {
                AcertouErrou.textContent = "Está certa a resposta";
                pontos++;
                setTimeout(() => {
                    alert("PARABÉNS!! VOCÊ GANHOU MAIS UM PONTO");
                    pergunta4();
                }, 1000)
               } else {
                AcertouErrou.textContent = "Resposta errada";
                setTimeout(() => {
                    AcertouErrou.textContent = "...";
                    pergunta4();
                }, 1000);
               }
               InputResposta.removeEventListener("keydown", handleKeyDown3);
            }
        }

        // Adiciona o event listener para a terceira pergunta
        InputResposta.addEventListener("keydown", handleKeyDown3);
    }

    function pergunta4() {
        InputResposta.value = '';
        AcertouErrou.textContent = '...';
        QUIZpergunta.textContent = "4- Em que ano começou a Primeira Guerra Mundial?";

        function handleKeyDown4(event) {
            if (event.key === "Enter") {
                if (InputResposta.value.trim().toLowerCase() === "1914") {
                    AcertouErrou.textContent = "Está certa a resposta";
                    pontos++;
                    setTimeout(() => {
                        alert("PARABÉNS!! VOCÊ GANHOU MAIS UM PONTO");
                        pergunta5();
                    }, 1000);
                } else {
                    AcertouErrou.textContent = "Resposta errada";
                    setTimeout(() => {
                        AcertouErrou.textContent = "...";
                        pergunta5();
                    }, 1000);
                }
                InputResposta.removeEventListener("keydown", handleKeyDown4);
            }
        }
        InputResposta.addEventListener("keydown", handleKeyDown4);
    }

    function pergunta5() {
        InputResposta.value = '';
        AcertouErrou.textContent = '...';
        QUIZpergunta.textContent = "5- Qual a capital do Japão?";

        function handleKeyDown5(event) {
            if (event.key === "Enter") {
                if (InputResposta.value.trim().toLowerCase() === "toquio") {
                    AcertouErrou.textContent = "Está certa a resposta";
                    pontos++;
                    setTimeout(() => {
                        alert("PARABÉNS!! VOCÊ GANHOU MAIS UM PONTO");
                        pergunta6();
                    }, 1000);
                } else {
                    AcertouErrou.textContent = "Resposta errada";
                    setTimeout(() => {
                        AcertouErrou.textContent = "...";
                        pergunta6();
                    }, 1000);
                }
                InputResposta.removeEventListener("keydown", handleKeyDown5);
            }
        }
        InputResposta.addEventListener("keydown", handleKeyDown5);
    }

    function pergunta6() {
        InputResposta.value = '';
        AcertouErrou.textContent = '...';
        QUIZpergunta.textContent = "6- Qual processo as plantas usam para converter luz solar em energia?";

        function handleKeyDown6(event) {
            if (event.key === "Enter") {
                if (InputResposta.value.trim().toLowerCase() === "fotossintese") {
                    AcertouErrou.textContent = "Está certa a resposta";
                    pontos++;
                    setTimeout(() => {
                        alert("PARABÉNS!! VOCÊ GANHOU MAIS UM PONTO");
                        pergunta7();
                    }, 1000);
                } else {
                    AcertouErrou.textContent = "Resposta errada";
                    setTimeout(() => {
                        AcertouErrou.textContent = "...";
                        pergunta7();
                    }, 1000);
                }
                InputResposta.removeEventListener("keydown", handleKeyDown6);
            }
        }
        InputResposta.addEventListener("keydown", handleKeyDown6);
    }

    function pergunta7() {
        InputResposta.value = '';
        AcertouErrou.textContent = '...';
        QUIZpergunta.textContent = "7- Qual o idioma mais falado do mundo?";

        function handleKeyDown7(event) {
            if (event.key === "Enter") {
                if (InputResposta.value.trim().toLowerCase() === "mandarim") {
                    AcertouErrou.textContent = "Está certa a resposta";
                    pontos++;
                    setTimeout(() => {
                        alert("PARABÉNS!! VOCÊ GANHOU MAIS UM PONTO");
                        pergunta8();
                    }, 1000);
                } else {
                    AcertouErrou.textContent = "Resposta errada";
                    setTimeout(() => {
                        AcertouErrou.textContent = "...";
                        pergunta8();
                    }, 1000);
                }
                InputResposta.removeEventListener("keydown", handleKeyDown7);
            }
        }
        InputResposta.addEventListener("keydown", handleKeyDown7);
    }

    function pergunta8() {
        InputResposta.value = '';
        AcertouErrou.textContent = '...';
        QUIZpergunta.textContent = "8- Quem pintou Mona Lisa?";

        function handleKeyDown8(event) {
            if (event.key === "Enter") {
                if (InputResposta.value.trim().toLowerCase() === "leonardo da vinci") {
                    AcertouErrou.textContent = "Está certa a resposta";
                    pontos++;
                    setTimeout(() => {
                        alert("PARABÉNS!! VOCÊ GANHOU MAIS UM PONTO");
                        pergunta9();
                    }, 1000);
                } else {
                    AcertouErrou.textContent = "Resposta errada";
                    setTimeout(() => {
                        AcertouErrou.textContent = "...";
                        pergunta9();
                    }, 1000);
                }
                InputResposta.removeEventListener("keydown", handleKeyDown8);
            }
        }
        InputResposta.addEventListener("keydown", handleKeyDown8);
    }

    function pergunta9() {
        InputResposta.value = '';
        AcertouErrou.textContent = '...';
        QUIZpergunta.textContent = "9- Qual a distância aproximada entre a Terra e a Lua (em KM)?";

        function handleKeyDown9(event) {
            if (event.key === "Enter") {
                if (InputResposta.value.trim().toLowerCase() === "384,400 km") {
                    AcertouErrou.textContent = "Está certa a resposta";
                    pontos++;
                    setTimeout(() => {
                        alert("PARABÉNS!! VOCÊ GANHOU MAIS UM PONTO");
                        pergunta10();
                    }, 1000);
                } else {
                    AcertouErrou.textContent = "Resposta errada";
                    setTimeout(() => {
                        AcertouErrou.textContent = "...";
                        pergunta10();
                    }, 1000);
                }
                InputResposta.removeEventListener("keydown", handleKeyDown9);
            }
        }
        InputResposta.addEventListener("keydown", handleKeyDown9);
    }

    function pergunta10() {
        InputResposta.value = '';
        AcertouErrou.textContent = '...';
        QUIZpergunta.textContent = "10- Qual é o metal mais abundante na crosta terrestre?";

        function handleKeyDown10(event) {
            if (event.key === "Enter") {
                if (InputResposta.value.trim().toLowerCase() === "aluminio") {
                    AcertouErrou.textContent = "Está certa a resposta";
                    pontos++;
                    setTimeout(() => {
                        alert("PARABÉNS!! VOCÊ GANHOU MAIS UM PONTO");
                        final();
                    }, 1000);
                } else {
                    AcertouErrou.textContent = "Resposta errada";
                    setTimeout(() => {
                        AcertouErrou.textContent = "...";
                        final();
                    }, 1000);
                }
                InputResposta.removeEventListener("keydown", handleKeyDown10);
            }
        }
        InputResposta.addEventListener("keydown", handleKeyDown10);
    }

    function final() {
        alert('ACABOU')
        alert('Voce chegou no final do QUIZ DE PERGUNTAS GERAIS')
        alert(`Voce terminou o QUIZ com ${pontos} pontos, PARABENS!!!!!`)
        alert('ATE A PROXIMA FASE!!!')
    }
}
