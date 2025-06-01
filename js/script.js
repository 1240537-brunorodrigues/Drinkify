// ================================
// js/script.js
// ================================

/* ----------------------------------------
   1) Grab & initialize state
   ---------------------------------------- */
const quiz_box    = document.querySelector(".quiz_box");
const result_box  = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");

// “Next” button no footer
const next_btn    = document.querySelector(".next_btn");

let no_repeat;
let que_count;
let userAns;
let correct;
let challenge;
let counter;
let counterLine;

/* ----------------------------------------
   2) Initialize no_repeat on first load
   ---------------------------------------- */
if (sessionStorage.getItem("no_repeat") === null) {
    const temp = [];
    for (let i = 0; i < questions.length; i++) {
        temp.push(i);
    }
    sessionStorage.setItem("no_repeat", JSON.stringify(temp));
}

no_repeat = JSON.parse(sessionStorage.getItem("no_repeat"));

// Escolhe aleatoriamente uma pergunta que ainda não foi usada
(function pickRandomQuestion() {
    const total = questions.length;
    let idx = Math.floor(Math.random() * total);
    while (no_repeat[idx] == null) {
        idx = Math.floor(Math.random() * total);
    }
    que_count = idx;
})();

/* ----------------------------------------
   3) Função para iniciar o quiz imediatamente
   ---------------------------------------- */
function startQuiz() {
    if (!quiz_box) {
        console.warn("Quiz container não encontrado.");
        return;
    }
    quiz_box.classList.add("activeQuiz");  // exibe o quiz
    showQuestions(que_count);
}

window.startQuiz = startQuiz;

/* ----------------------------------------
   4) Função para resetar estado do quiz
   ---------------------------------------- */
function resetQuiz() {
    sessionStorage.removeItem("no_repeat");
    clearInterval(counter);
    clearInterval(counterLine);
    quiz_box?.classList.remove("activeQuiz");
    result_box?.classList.remove("activeResult");
}

window.resetQuiz = resetQuiz;

/* ----------------------------------------
   5) Next Button (quando clica “Ver Desafio”)
   ---------------------------------------- */
if (next_btn) {
    next_btn.addEventListener("click", () => {
        const correctAnswer = questions[que_count].answer;
        correct = (userAns === correctAnswer);

        clearInterval(counter);
        clearInterval(counterLine);

        showResult();
    });
}

/* ----------------------------------------
   6) Renderiza a pergunta & opções
   ---------------------------------------- */
function showQuestions(index) {
    const que_text = document.querySelector(".que_text");
    if (!que_text || !option_list) return;

    // 1) Embaralha as opções
    const nums = [0, 1, 2, 3];
    const randOrder = [];
    let i = nums.length;
    while (i--) {
        const j = Math.floor(Math.random() * (i + 1));
        randOrder.push(nums[j]);
        nums.splice(j, 1);
    }

    // 2) Insere o texto da pergunta
    const qObj = questions[index];
    const queTag = `<span>${qObj.numb}. ${qObj.question}</span>`;
    que_text.innerHTML = queTag;

    // 3) Insere as quatro opções embaralhadas
    const optionTag = `
    <div class="option"><span>${qObj.options[randOrder[0]]}</span></div>
    <div class="option"><span>${qObj.options[randOrder[1]]}</span></div>
    <div class="option"><span>${qObj.options[randOrder[2]]}</span></div>
    <div class="option"><span>${qObj.options[randOrder[3]]}</span></div>
  `;
    option_list.innerHTML = optionTag;

    // 4) Coloca listener em cada opção
    const allOptions = option_list.querySelectorAll(".option");
    allOptions.forEach((opt) => {
        opt.addEventListener("click", () => optionSelected(opt));
    });
}

/* ----------------------------------------
   7) Tratamento ao clicar numa opção
   ---------------------------------------- */
function optionSelected(answerEl) {
    clearInterval(counter);
    clearInterval(counterLine);

    userAns = answerEl.textContent.trim();

    // Desabilita todas as opções
    const allOpts = option_list.querySelectorAll(".option");
    allOpts.forEach((opt) => {
        opt.classList.add("disabled");
    });

    // Destaca a opção clicada
    answerEl.classList.add("option_click");

    // Exibe botão “Ver Desafio”
    next_btn?.classList.add("show");
}

/* ----------------------------------------
   8) Exibe o resultado (sem botões extras)
   ---------------------------------------- */
function showResult() {
    if (!quiz_box || !result_box) return;

    // Esconde o quiz e mostra a caixa de resultado
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