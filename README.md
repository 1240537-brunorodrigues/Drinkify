
# Drinkify – Physical-Digital Board Game Hub

Drinkify é um hub digital pensado para complementar um jogo de tabuleiro físico de beber. Este repositório contém todo o código necessário para:
- Lançar um dado digital (1–6).
- Comprar cartas aleatórias de um baralho pré-definido.
- Apresentar perguntas de escolha múltipla com consequências de jogo.
- Navegar num menu simples para aceder a cada funcionalidade.

---

## 🎲 Descrição Geral

Ao jogar Drinkify, cada jogador avança no tabuleiro físico lançando um dado (físico ou digital). Dependendo da cor da casa em que cair, o jogador deverá:
- **Branco**: Nada acontece.
- **Azul**: Beber um gole.
- **Rosa**: Comprar uma carta digital (instruções em PDF).
- **Roxo**: Responder a uma pergunta digital de escolha múltipla.

O hub digital facilita essas ações eletronicamente, mantendo apenas o tabuleiro e as peças físicas em jogo.

---

## 🚀 Funcionalidades Principais

1. **Dado Digital**  
   - Ícone de dado no canto superior esquerdo.  
   - Clique para gerar um número aleatório de 1 a 6.  

2. **Comprar Carta**  
   - Seleção “Draw a Card” no menu inicial.  
   - Exibe uma carta aleatória a partir de uma lista carregada (JSON/PDF).  
   - Cada carta inclui título e instruções (centrados e esteticamente formatados).  

3. **Responder a Pergunta**  
   - Seleção “Draw a Question” no menu inicial.  
   - Apresenta uma pergunta de escolha múltipla com 4 opções embaralhadas.  
   - Após escolher uma opção, surge o botão “Ver Desafio” (apenas animação de escala).  
   - Se a resposta estiver correta/incorreta, exibe o texto de consequência (vário tipo de “receita de beber” ou avanço/retrocesso).  

4. **Manual de Utilizador Integrado**  
   - Descrição rápida de como utilizar cada funcionalidade (dados, cartas, perguntas).  
   - Regras gerais para interagir com o tabuleiro físico e o centro digital.  

---

## 📁 Estrutura de Ficheiros

```

├── index.html
├── style.css
├── README.md
└── js
   ├── app.js
   ├── cards.js
   ├── questions.js
   └── script.js


````

- **index.html**  
  Contém a estrutura base do menu, das seções (“Draw a Card”, “Draw a Question”, “User Manual”) e o botão de dado.

- **style.css**  
  Definições de estilos avançados usando variáveis CSS (`:root`), animações (fadeIn, popIn, popScale), layouts centrados com `position: fixed` e temas coloridos (rosas/roxo/vibrantes).

- **js/app.js**  
  Lógica de navegação do menu, animações de transição (Abrir/Fechar seções), lançamento do dado digital, integração “Draw a Card” (aleatorização) e chamada da função `startQuiz()` para iniciar o quiz.

- **js/cards.js**  
  Conjunto de cartas em formato JSON/JavaScript. Cada carta é um objeto com `{ title: "...", content: "..." }`. O código JavaScript lê essa lista e exibe uma carta aleatória quando o utilizador clica em “Draw Card”.

- **js/questions.js**  
  Conjunto de perguntas (array de objetos) com os campos:
  ```js
  {
    numb: 1,
    question: "Pergunta aqui?",
    answer: "Resposta Correta",
    options: ["Opção A", "Opção B", "Opção C", "Opção D"],
    correct: "Texto de consequência se acertar",
    incorrect: "Texto de consequência se errar"
  }

`numb` serve apenas para organização interna; a numeração não é mostrada ao jogador.

* **js/script.js**
  Lógica do quiz em si:

   1. Inicializa lista de índices disponíveis (`no_repeat`) no `sessionStorage`.
   2. Função `getRandomQuestionIndex()` para escolher uma pergunta sem repetir até esgotar a lista.
   3. `startQuiz()`: obtém um índice novo, exibe a pergunta e opções (sem mostrar o `numb`).
   4. `optionSelected()`: regista a escolha do jogador, desabilita restantes opções e mostra o botão “Ver Desafio”.
   5. `showResult()`: avalia correção, exibe texto de consequência e ícone (“check” ou “times”).

---

## 💻 Como Executar Localmente

1. **Clone o repositório**

   ```bash
   git clone https://github.com/SEU_USUARIO_DRINKIFY.git
   cd seu-repositorio-drinkify
   ```

2. **Abra o `index.html` num navegador moderno**

   * Basta fazer duplo clique no ficheiro `index.html` ou:

   ```bash
   # Em sistemas Unix-like:
   xdg-open index.html

   # No Windows PowerShell:
   start index.html
   ```

3. **Navegue pelas funcionalidades**

   * Clique no ícone de dado para rolar 1–6.
   * Escolha “Tirar uma Carta” para ver uma carta aleatória.
   * Escolha “Pergunta” para jogar o quiz.
   * Use “Voltar” para voltar ao menu principal.

> **Nota**: Como o projeto não requer servidor backend, não é preciso `npm`, `yarn` ou outro servidor local. Qualquer navegador (Chrome, Firefox, Edge, Safari) suporta HTML, CSS e JavaScript puro.

---

## 🎨 Personalização e Estilos

* **Temas e Cores**

   * O CSS utiliza variáveis (`--primary`, `--secondary`, `--neutral-lightest` etc.) para facilitar ajustes de cores.
   * Basta alterar esses valores em `:root` se quiser outro esquema (ex.: verde/laranja, azul/roxo, etc.).

* **Fonte “Poppins”**

   * Incluída via Google Fonts no `index.html`.
   * Para usar outra tipografia, altere o `<link>` no `<head>` e modifique `font-family` no CSS.

* **Animações**

   * **popIn**: usado para menus / seções, inclui `translate(-50%, -50%)` + `scale` para não deslocar.
   * **popScale**: usado especificamente no botão “Ver Desafio” para aparecer em escala sem mover.
   * **fadeIn**: para entradas simples de texto ou caixas.

---

## 📜 Guia de Jogo Rápido

1. **Setup Inicial**

   * Colocam-se o tabuleiro físico e as peças tradicionais.
   * Cada jogador posiciona a sua peça na casa de partida.

2. **Primeiro Jogador**

   * Abre o hub digital e clica no ícone do dado para obter um número (1–6).
   * Move a sua peça no tabuleiro físico o número de casas correspondentes.

3. **Interagir com Casas Coloridas**

   * **Branco**: Sem ação, passa a vez.
   * **Azul**: Deve “beber um gole” (cada um bebe do seu próprio copo).
   * **Rosa**: No hub digital, clica em “Draw a Card” e segue as instruções.
   * **Roxo**: No hub digital, clica em “Draw a Question”.

      * Responde à pergunta. Se acertar, avança ou dá um “privilégio”; se errar, recua/sofre penalização.

4. **Próxima Vez**

   * O próximo jogador segue o mesmo processo: lança dado, move peça e vê ação conforme cor.

5. **Terminar a Sessão de Jogo**

   * Quando todas as perguntas do quiz forem esgotadas, o quiz mostra mensagem a informar que “não há mais perguntas nesta sessão”.
   * Para recomeçar perguntas, basta atualizar a página (o `sessionStorage` será limpo e as perguntas voltam a ser sorteáveis).

---

## 📂 Estrutura Técnica

```txt
seu-repositorio-drinkify/
├── index.html         # Estrutura HTML principal
├── style.css          # Estilos (CSS customizado + variáveis + animações)
├── README.md          # Este ficheiro de documentação
├── js/
│   ├── cards.js       # Lista de cartas em formato JavaScript
│   ├── questions.js   # Lista de perguntas e opções em JavaScript
│   ├── script.js      # Lógica do quiz (embaralhamento, seleção, resultado)
│   └── app.js         # Lógica do menu, navegação, dado, drawCard e integração geral
└── images/            # (Opcional) Capturas de ecrã, ícones extras, etc.
```

* **cards.js**
  Contém um array global `window.cards = [ { title: "...", content: "..." }, ... ]`.

* **questions.js**
  Contém um array global `questions = [ { numb, question, options[], answer, correct, incorrect }, ... ]`.

* **script.js**

   * Regista `no_repeat` no `sessionStorage`.
   * Funções: `getRandomQuestionIndex()`, `startQuiz()`, `resetQuiz()`, `showQuestions()`, `optionSelected()`, `showResult()`.

* **app.js**

   * Menu: `openSection()`, `returnHome()`.
   * Dado digital: `diceBtn.addEventListener('click', ...)`.
   * Fluxo “Draw a Card”: `drawCardBtn.addEventListener('click', ...)`.
   * Fluxo “Draw a Question”: intercepta `openSection(questionSection)` para chamar `startQuiz()`.

---

## 🤝 Contribuições

Contribuições são bem-vindas! Se quiser:

1. **Criar um fork** deste repositório.
2. **Fazer alterações** (por exemplo, adicionar novas perguntas, cartas, ou melhorar estilos).
3. **Submeter um pull request** detalhando as mudanças.

---

## 📝 Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT). Sinta-se à vontade para reutilizar, modificar e distribuir o código, desde que mantenha o aviso de direitos de autor e a licença original.

---

##### Desenvolvido com ❤️ por Equipa Drinkify
