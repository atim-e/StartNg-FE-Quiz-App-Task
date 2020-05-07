let ul = document.getElementById("ul");
let nextButton = document.getElementById("btnNext");
let quizbox = document.getElementById("questionBox");
let opt1 = document.getElementById("opt1");
let opt2 = document.getElementById("opt2");
let opt3 = document.getElementById("opt3");
let opt4 = document.getElementById("opt4");

let app = {
  questions: [
    {
      q: "Earth is approximately how many miles away from the Sun?",
      options: ["9.3 million", "39 million", "93 million", "193 million"],
      answer: 3,
    },
    {
      q:
        'Which insect short-circuited an early supercomputer and inspired the term "computer bug"?',
      options: ["Moth", "Cockroach", "Fly", "Beetle"],
      answer: 1,
    },
    {
      q:
        "Which of the following men does not have a chemical element named after him?",
      options: [
        "Albert Einstein",
        "Niels Bohr",
        "Isaac Newton",
        "Enrico Fermi",
      ],
      answer: 3,
    },
    {
      q: "How many keywords are in a typical programming language?",
      options: [
        "Less than 10",
        "Between 30 and 70",
        "Between 150 and 250",
        "Over 500",
      ],
      answer: 2,
    },
    {
      q: "Which sea creature has three hearts?",
      options: ["Starfish", "Seahorse", "Whale", "Octopus"],
      answer: 4,
    },
  ],

  index: 0,
  load: function () {
    if (this.index <= this.questions.length - 1) {
      quizbox.innerHTML = this.index + 1 + ". " + this.questions[this.index].q;
      opt1.innerHTML = this.questions[this.index].options[0];
      opt2.innerHTML = this.questions[this.index].options[1];
      opt3.innerHTML = this.questions[this.index].options[2];
      opt4.innerHTML = this.questions[this.index].options[3];
    } else {
      quizbox.innerHTML = "Quiz Completed!";
      ul.style.display = "none";
      nextButton.style.display = "none";
    }
  },

  next: function () {
    this.index++;
    this.load();
  },

  check: function (ele) {
    let id = ele.id.split("");
    if (id[id.length - 1] == this.questions[this.index].answer) {
      this.score++;
      ele.className = "correct";
      this.scoreCard();
    } else {
      ele.className = "wrong";
    }
  },

  preventClick: function () {
    for (let i = 0; i < ul.children.length; i++) {
      ul.children[i].style.pointerEvents = "none";
    }
  },

  allowClick: function () {
    for (let i = 0; i < ul.children.length; i++) {
      ul.children[i].style.pointerEvents = "auto";
      ul.children[i].className = "";
    }
  },

  score: 0,
  scoreCard: function () {
    scoreCard.innerHTML = this.score + "/" + this.questions.length;
  },
};

window.load = app.load();

function button(ele) {
  app.check(ele);
  app.preventClick();
}

function next() {
  app.next();
  app.allowClick();
}
