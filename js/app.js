// ================================
// js/app.js
// ================================
document.addEventListener("DOMContentLoaded", () => {
    /*********************************************************
     * 1) Grab DOM elements
     *********************************************************/
    const diceBtn         = document.getElementById("diceBtn");
    const toast           = document.getElementById("toast");        // optional toast
    const homeMenu        = document.getElementById("homeMenu");
    const cardSection     = document.getElementById("cardSection");
    const questionSection = document.getElementById("questionSection");
    const manualSection   = document.getElementById("manualSection");
    const backButtons     = document.querySelectorAll(".back-btn");

    const drawCardBtn   = document.getElementById("drawCardBtn");
    const cardDisplay   = document.getElementById("cardDisplay");

    // Quiz‐related containers (inside #questionSection)
    const infoBox   = document.getElementById("infoBox");
    const quizBox   = document.getElementById("quizBox");
    const resultBox = document.getElementById("resultBox");

    // Next button in quiz footer
    const nextBtn = document.querySelector("#quizBox .next_btn");

    // Retrieve global startQuiz/resetQuiz (defined in script.js)
    const startQuiz = window.startQuiz || function() {
        console.warn("No startQuiz() found. Ensure script.js defines startQuiz().");
    };
    const resetQuiz = window.resetQuiz || function() {
        // Fallback no-op if not defined
        console.warn("No resetQuiz() found. Ensure script.js defines resetQuiz().");
    };

    /*********************************************************
     * 2) Dice Roll Logic
     *********************************************************/
    function showToast(message) {
        if (!toast) {
            alert(message);
            return;
        }
        toast.textContent = message;
        toast.classList.add("show");

        setTimeout(() => {
            toast.classList.remove("show");
        }, 1500);
    }

    if (diceBtn) {
        diceBtn.addEventListener("click", () => {
            const roll = Math.floor(Math.random() * 6) + 1;
            showToast(`Rodaste um ${roll}!`);
            // Optionally: dispatch a custom event with the roll value:
            // window.dispatchEvent(new CustomEvent("diceRolled", { detail: { roll } }));
        });
    }

    /*********************************************************
     * 3) Section Navigation Helpers
     *********************************************************/
function hideElement(el) {
        if (!el) return;
        el.classList.add("slide-out");
        el.setAttribute("aria-hidden", "true");
        setTimeout(() => {
            el.classList.remove("active", "slide-out");
        }, 500);
}

    function showElement(el) {
        if (!el) return;
        el.classList.remove("slide-out");
        el.classList.add("active");
        el.setAttribute("aria-hidden", "false");
    }

    /**
     * Slide home ⟶ section
     * 1) slide homeMenu left
     * 2) after 500ms, show target section
     */
function openSection(sectionEl) {
        if (!homeMenu || !sectionEl) return;

        hideElement(homeMenu);

        // after animation, show target
        setTimeout(() => {
            showElement(sectionEl);
        }, 500);
}

    /**
     * Slide section ⟶ home
     * 1) slide the section left
     * 2) after 500ms, show homeMenu
     */
function returnHome(fromSectionEl) {
        if (!homeMenu || !fromSectionEl) return;

        // hide this section with animation
        hideElement(fromSectionEl);

        // after animation, show homeMenu
        setTimeout(() => {
            showElement(homeMenu);
        }, 500);
}

    /*********************************************************
     * 4) Wire Home Menu Buttons
     *********************************************************/
    if (homeMenu) {
        const menuButtons = homeMenu.querySelectorAll("button[data-target]");
        menuButtons.forEach((btn) => {
            btn.addEventListener("click", () => {
                const targetId = btn.getAttribute("data-target");
                if (targetId === "cardSection") {
                    openSection(cardSection);
                } else if (targetId === "questionSection") {
                    openSection(questionSection);
                } else if (targetId === "manualSection") {
                    openSection(manualSection);
                }
            });
        });
    }

    /*********************************************************
     * 5) Wire “Back” Buttons in Each Section
     *********************************************************/
    backButtons.forEach((backBtn) => {
        backBtn.addEventListener("click", (e) => {
            const parentSection = e.target.closest(".section-container");
            if (parentSection) {
                returnHome(parentSection);

                // Se estivermos em questionSection, faz também:
                if (parentSection.id === "questionSection") {
                    infoBox?.classList.remove("activeInfo");
                    quizBox?.classList.remove("activeQuiz");
                    resultBox?.classList.remove("activeResult");
                    resetQuiz();
                    nextBtn?.classList.remove("show");
                }
            }
        });
    });

    /*********************************************************
     * 6) Draw a Card Logic
     *********************************************************/
    const cardsArray = Array.isArray(window.cards) ? window.cards : [];
    if (!cardsArray.length) {
        console.warn("No cards defined. Please check js/cards.js exports.");
    }

    if (drawCardBtn && cardDisplay) {
        drawCardBtn.addEventListener("click", () => {
            if (!cardsArray.length) {
                cardDisplay.innerHTML = '<p style="color:red;">No cards available.</p>';
                return;
            }

            // 1) Escolhe um índice aleatório
            const idx = Math.floor(Math.random() * cardsArray.length);
            const cardObj = cardsArray[idx];

            // 2) Gera as duas partes do HTML (título e conteúdo)
            const titleHTML   = `<h3 class="card-title">${cardObj.title}</h3>`;
            const contentHTML = `<p class="card-content">${cardObj.content}</p>`;

            // 3) Usa essas variáveis para preencher o cardDisplay completo
            cardDisplay.innerHTML = `
      <div class="card-wrapper">
        ${titleHTML}
        ${contentHTML}
      </div>
    `;

            // 4) Se você quiser animação de fade-in (opcional), adicione a classe "visible"
            const wrapper = cardDisplay.querySelector(".card-wrapper");
            if (wrapper) {
                // força reflow para garantir a transição CSS
                void wrapper.offsetWidth;
                wrapper.classList.add("visible");
            }

            // 5) (Opcional) cartão não repetir:
            // cardsArray.splice(idx, 1);
        });
    }

    /*********************************************************
     * 7) Draw a Question Logic
     *********************************************************/
        // We override openSection so that if questionSection is opened,
        // we call startQuiz() shortly after it becomes visible.
    const originalOpenSection = openSection;
    openSection = (sectionEl) => {
        originalOpenSection(sectionEl);

        if (sectionEl === questionSection) {
            // Reset quiz state immediately (in case of re-entry)
            resetQuiz();

            // After section has slid in (≈500ms), call startQuiz
            setTimeout(() => {
                startQuiz();
            }, 550);
        }
    };

    /*********************************************************
     * 8) Optional Clean-up When Leaving questionSection
     *********************************************************/


    /*********************************************************
     * 9) Initially hide all sections (except home)
     *********************************************************/
    // Mark sections hidden for accessibility
    [cardSection, questionSection, manualSection].forEach((sec) => {
        if (sec) sec.setAttribute("aria-hidden", "true");
    });
    // Home is visible
    if (homeMenu) homeMenu.setAttribute("aria-hidden", "false");
});