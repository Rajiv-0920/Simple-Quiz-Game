const questions = [
  {
    question: "Ayodhya is located at the bank of which river?",
    a: "Falgu",
    b: "Ganga",
    c: "Sarayu",
    d: "Yamuna",
    answer: "Sarayu",
  },
  {
    question:
      "The ‘Rath Yatra at Puri’ is celebrated in honour of which Hindu deity?",
    a: "Jaagannath",
    b: "Ram",
    c: "Shiva",
    d: "Vishnu",
    answer: "Jaagannath",
  },
  {
    question: "Which of the following contains ‘Gyatri Mantra’?",
    a: "Yajur Veda",
    b: "Rig Veda",
    c: "Upanishad",
    d: "Aranyaka",
    answer: "Rig Veda",
  },
  {
    question:
      "“Yama’, the God of death in Hinduism, uses what animal as his transport?",
    a: "Camel",
    b: "Elephant",
    c: "Buffalo",
    d: "Raven",
    answer: "Buffalo",
  },
  {
    question: "Who is the king of wealth?",
    a: "Kubera",
    b: "Agni",
    c: "Vayu",
    d: "Indra",
    answer: "Kubera",
  },
  {
    question: "Badrinath is situated on the bank of river?",
    a: "Ganga",
    b: "Yamuna",
    c: "Saraswathi",
    d: "Alaknanda",
    answer: "Alaknanda",
  },
  {
    question: "The number of Puranas is -",
    a: "18",
    b: "21",
    c: "23",
    d: "16",
    answer: "18",
  },
  {
    question: "Who had composed the original Ramayana?",
    a: "Sant Ek Nath",
    b: "Rishi Valmiki",
    c: "Anhinanda",
    d: "Tulsi Das",
    answer: "Rishi Valmiki",
  },
  {
    question: "Lakshmana is considered to be the incarnation of whom?",
    a: "Lord Vishnu",
    b: "Lord Brahma",
    c: "Lord Shiva",
    d: "Sheshnag",
    answer: "Sheshnag",
  },
  {
    question: "Ravana was a devotee of who among the following God?",
    a: "Lord Brahma",
    b: "Lord Shiva",
    c: "Lord Vishnu",
    d: "None of the above",
    answer: "Lord Shiva",
  },
  // {
  //   question: "",
  //   a: "",
  //   b: "",
  //   c: "",
  //   d: "",
  //   answer: "",
  // },
];

// ------------    Element Select    -----------
const questionEl = document.querySelector(".question");
const answersEl = document.querySelectorAll(".option-btn");
const nextBtnEl = document.querySelector(".btn");
const questionAnswerContainer = document.querySelector(".question-answer");
const scoreContainer = document.querySelector(".score");
const playAgain = document.querySelector(".play-again");

// ------------    right Answer    -----------
const userRightAnswer = document.querySelector(".right-answers");
const totalQuestions = document.querySelector(".total-questions");

var count = 0;
var countAns = 0;
nextBtnEl.disabled = true;
nextQuestion(count);
nextBtnEl.addEventListener("click", () => {
  count++;
  if (count < questions.length) {
    runAgain();
  } else {
    count = 0;
    questionAnswerContainer.classList.add("hide");
    scoreContainer.classList.add("show");
    userRightAnswer.innerText = countAns;
    totalQuestions.innerText = questions.length;

    playAgain.addEventListener("click", () => {
      countAns = 0;
      runAgain();
      questionAnswerContainer.classList.remove("hide");
      scoreContainer.classList.remove("show");
    });
  }
});
answersEl.forEach((ans) => {
  ans.addEventListener("click", (e) => {
    nextBtnEl.disabled = false;
    let userAns = e.currentTarget.innerText;
    if (questions[count].answer === userAns) {
      countAns++;
      rightAnswer();
      optionDisabled();
    } else {
      ans.classList.add("wrong");
      ans.innerHTML = ` <p>${userAns}</p>
              <i class="fa-solid fa-circle-xmark"></i> `;
      rightAnswer();
      optionDisabled();
    }
  });
});

function nextQuestion(count) {
  questionEl.innerText = questions[count].question;
  answersEl[0].innerHTML = `<p>${questions[count].a}</p>
              <i class="fa-regular fa-circle"></i>`;
  answersEl[1].innerHTML = `<p>${questions[count].b}</p>
              <i class="fa-regular fa-circle"></i>`;
  answersEl[2].innerHTML = `<p>${questions[count].c}</p>
              <i class="fa-regular fa-circle"></i>`;
  answersEl[3].innerHTML = `<p>${questions[count].d}</p>
              <i class="fa-regular fa-circle"></i>`;
}

function rightAnswer() {
  answersEl.forEach((value) => {
    if (questions[count].answer === value.innerText) {
      value.classList.add("right");
      value.innerHTML = ` <p>${questions[count].answer}</p>
        <i class="fa-solid fa-circle-check"></i> `;
    }
  });
}

function def() {
  answersEl.forEach((value) => {
    value.classList.remove("right");
    value.classList.remove("wrong");
  });
}
function optionDisabled() {
  answersEl.forEach((v) => {
    v.disabled = true;
  });
}
function optionEnabled() {
  answersEl.forEach((v) => {
    v.disabled = false;
  });
}

function runAgain() {
  nextQuestion(count);
  def();
  nextBtnEl.disabled = true;
  optionEnabled();
}
