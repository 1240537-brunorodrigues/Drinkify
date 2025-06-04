// ================================
// js/script.js
// ================================

/* ----------------------------------------
   1) Elementos do DOM
   ---------------------------------------- */
const quiz_box    = document.querySelector(".quiz_box");
const result_box  = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const next_btn    = document.querySelector(".next_btn");

/* ----------------------------------------
   2) Estado global
   ---------------------------------------- */
// Array de índices de perguntas ainda disponíveis
let no_repeat;

// Índice atual da pergunta que está sendo exibida
let que_count;

// Resposta selecionada pelo usuário
let userAns;

// Flag se a resposta está certa ou não
let correct;

// Texto do “desafio” (correto/errado)
let challenge;

// (Tempos que eventualmente você use)
let counter, counterLine;

/* ----------------------------------------
   3) Inicialização do no_repeat em sessionStorage
   ---------------------------------------- */
if (!sessionStorage.getItem("no_repeat")) {
    // Monta array [0, 1, 2, ..., questions.length-1]
    const arr = [];
    for (let i = 0; i < questions.length; i++) {
        arr.push(i);
    }
    sessionStorage.setItem("no_repeat", JSON.stringify(arr));
}

// Carrega no_repeat da sessionStorage
no_repeat = JSON.parse(sessionStorage.getItem("no_repeat"));

/* ----------------------------------------
   4) Função que pega aleatoriamente um índice e já “marca” como usado
   ---------------------------------------- */
function getRandomQuestionIndex() {
    // Se não restar nenhuma pergunta, retorna null
    if (!Array.isArray(no_repeat) || no_repeat.length === 0) return null;

    // Pega um índice aleatório dentro de no_repeat
    const randomPos = Math.floor(Math.random() * no_repeat.length);
    const questionIndex = no_repeat[randomPos];

    // Remove esse índice do array no_repeat e salva no sessionStorage
    no_repeat.splice(randomPos, 1);
    sessionStorage.setItem("no_repeat", JSON.stringify(no_repeat));

    return questionIndex;
}

/* ----------------------------------------
   5) Função para iniciar/mostrar o Quiz
   ---------------------------------------- */
function startQuiz() {
    if (!quiz_box) {
        console.warn("container .quiz_box não encontrado.");
        return;
    }

    // Tenta obter um novo índice de pergunta
    const nextIndex = getRandomQuestionIndex();

    if (nextIndex === null) {
        // Se não houver mais perguntas, exibe mensagem e encerra
        quiz_box.classList.remove("activeQuiz");
        result_box.classList.add("activeResult");
        const scoreTextEl = result_box.querySelector(".score_text");
        const iconEl      = result_box.querySelector(".icon");

        iconEl.innerHTML = '<i class="fas fa-info-circle"></i>';
        scoreTextEl.innerHTML = `<span>Não há mais perguntas nesta sessão. Atualize a página para recomeçar.</span>`;
        return;
    }

    // Define o índice da pergunta atual
    que_count = nextIndex;

    // Mostra o quiz box e renderiza a pergunta
    quiz_box.classList.add("activeQuiz");
    showQuestions(que_count);
}

window.startQuiz = startQuiz;

/* ----------------------------------------
   6) Função para “resetar” apenas quiz/resultBox (não reseta no_repeat)
   ---------------------------------------- */
function resetQuiz() {
    // Limpa quaisquer timers pendentes
    clearInterval(counter);
    clearInterval(counterLine);

    // Esconde a caixa de quiz e resultados
    quiz_box?.classList.remove("activeQuiz");
    result_box?.classList.remove("activeResult");

    // Esconde o botão “Ver Desafio”
    next_btn?.classList.remove("show");
}

window.resetQuiz = resetQuiz;

/* ----------------------------------------
   7) Quando usuário clica em “Ver Desafio”
   ---------------------------------------- */
if (next_btn) {
    next_btn.addEventListener("click", () => {
        const correctAnswer = questions[que_count].answer;
        correct = (userAns === correctAnswer);

        // Pára timers, se houver
        clearInterval(counter);
        clearInterval(counterLine);

        showResult();
    });
}

/* ----------------------------------------
   8) Exibe questão + embaralha opções
   ---------------------------------------- */
function showQuestions(index) {
    const que_text = document.querySelector(".que_text");
    if (!que_text || !option_list) {
        console.warn("Containers de pergunta não encontrados.");
        return;
    }

    // 1) Embaralha as opções
    const nums = [0, 1, 2, 3];
    const randOrder = [];
    let i = nums.length;
    while (i--) {
        const r = Math.floor(Math.random() * (i + 1));
        randOrder.push(nums[r]);
        nums.splice(r, 1);
    }

    // 2) Renderiza a pergunta
    const qObj = questions[index];
    que_text.innerHTML = `<span>${qObj.question}</span>`;

    // 3) Renderiza as 4 opções embaralhadas
    option_list.innerHTML = `
    <div class="option"><span>${qObj.options[randOrder[0]]}</span></div>
    <div class="option"><span>${qObj.options[randOrder[1]]}</span></div>
    <div class="option"><span>${qObj.options[randOrder[2]]}</span></div>
    <div class="option"><span>${qObj.options[randOrder[3]]}</span></div>
  `;

    // 4) Adiciona event listener em cada opção
    const allOptions = option_list.querySelectorAll(".option");
    allOptions.forEach((opt) => {
        opt.addEventListener("click", () => optionSelected(opt));
    });
}

/* ----------------------------------------
   9) Lógica ao clicar numa opção
   ---------------------------------------- */
function optionSelected(answerEl) {
    // pára eventuais timers
    clearInterval(counter);
    clearInterval(counterLine);

    userAns = answerEl.textContent.trim();

    // desabilita todas as opções
    const allOpts = option_list.querySelectorAll(".option");
    allOpts.forEach((opt) => {
        opt.classList.add("disabled");
    });

    // destaca a opção clicada
    answerEl.classList.add("option_click");

    // mostra botão “Ver Desafio”
    next_btn?.classList.add("show");
}

/* ----------------------------------------
   10) Exibe resultado/libera próximo passo
   ---------------------------------------- */
function showResult() {
    if (!quiz_box || !result_box) return;

    // esconde quiz, mostra resultado
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("activeResult");

    const scoreTextEl = result_box.querySelector(".score_text");
    const iconEl      = result_box.querySelector(".icon");

    if (correct) {
        challenge = questions[que_count].correct;
        iconEl.innerHTML = '<i class="fas fa-check"></i>';
    } else {
        challenge = questions[que_count].incorrect;
        iconEl.innerHTML = '<i class="fas fa-times"></i>';
    }

    scoreTextEl.innerHTML = `<span>${challenge}</span>`;
}

// Export para testes em ambiente Node
if (typeof module !== "undefined" && module.exports) {
    module.exports = { getRandomQuestionIndex };
}
