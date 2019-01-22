'use strict';
const QUESTIONS = [
  {
    question: 'Who won the Stanley Cup in 1994?',
    answers: [
      'Washington Capitals',
      'Philadelphia Flyers',
      'Toronto Maple Leafs',
      'New York Rangers'
    ],
    image: {
      src:
        'https://media1.tenor.com/images/3365e922d81ec32de48c8ac6f4ed2d02/tenor.gif',
      alt: ''
    }
  },
  {
    question: 'When did Tiger Woods win his last major championship?',
    answers: ['2000', '1997', '2008', '2018'],
    image: {
      src:
        'https://media1.tenor.com/images/3365e922d81ec32de48c8ac6f4ed2d02/tenor.gif',
      alt: ''
    }
  },
  {
    question: 'How many Super Bowl rings does Eli Manning have?',
    answers: ['0', '1', '2', '3'],
    image: {
      src:
        'https://media1.tenor.com/images/3365e922d81ec32de48c8ac6f4ed2d02/tenor.gif',
      alt: ''
    }
  },
  {
    question: 'Who won the first World Series?',
    answers: [
      'New York Yankees',
      'Boston Red Sox',
      'Chicago Cubs',
      'Brooklyn Dodgers'
    ],
    image: {
      src:
        'https://media1.tenor.com/images/3365e922d81ec32de48c8ac6f4ed2d02/tenor.gif',
      alt: ''
    }
  },
  {
    question:
      "How many times has the US Men's National Team won the FIFA World Cup?",
    answers: ['0', '1', '2', '3'],
    image: {
      src:
        'https://media1.tenor.com/images/3365e922d81ec32de48c8ac6f4ed2d02/tenor.gif',
      alt: ''
    }
  },
  {
    question:
      'Who was picked after Hakeem Olajuwon but before MJ in the 1984 NBA Draft?',
    answers: ['Charles Barkley', 'Dennis Rodman', 'Sam Bowie', 'Sam Decker'],
    image: {
      src:
        'https://media1.tenor.com/images/3365e922d81ec32de48c8ac6f4ed2d02/tenor.gif',
      alt: ''
    }
  },
  {
    question: 'How many Grand Slams has Serena Williams won?',
    answers: ['18', '10', '25', '23'],
    image: {
      src:
        'https://media1.tenor.com/images/3365e922d81ec32de48c8ac6f4ed2d02/tenor.gif',
      alt: ''
    }
  },
  {
    question: 'How many NFL teams are based in New York?',
    answers: ['1', '2', '3', '4'],
    image: {
      src:
        'https://media1.tenor.com/images/3365e922d81ec32de48c8ac6f4ed2d02/tenor.gif',
      alt: ''
    }
  }
];

const ANSWERS = [
  'New York Rangers',
  '2008',
  '2',
  'Boston Red Sox',
  '0',
  'Sam Bowie',
  '23',
  '3'
];

const STATE = {
  questionIndex: 0,
  score: 0,
  correct: false,
  view: 'START'
};

function startTemplate() {
  return `<section class="start-screen">
        <h1>Welcome to the Sports Trivia!!!</h1>
        <button class="quiz-start js-quiz-start" type="button">Start</button>
      </section>`;
}

function questionTemplate() {
  const index = STATE.questionIndex;
  return `<header role="banner">
        <ul class="js-results results">
          <li><b>Q:</b> ${index + 1}/${ANSWERS.length}</li>
          <li><b>Score:</b> ${STATE.score}</li>
        </ul>
      </header>
      <section>
        <h1>${QUESTIONS[index].question}</h1>
        <form class="question-form js-question-form">
          <fieldset>
            <label class="question-choice-block">
              <input value="${
                QUESTIONS[index].answers[0]
              }" name="question" type="radio" required />${
    QUESTIONS[index].answers[0]
  }
            </label>
            <label class="question-choice-block">
              <input value="${
                QUESTIONS[index].answers[1]
              }" name="question" type="radio"  />${QUESTIONS[index].answers[1]}
            </label>
            <label class="question-choice-block">
              <input value="${
                QUESTIONS[index].answers[2]
              }" name="question" type="radio" />${QUESTIONS[index].answers[2]}
            </label>
            <label class="question-choice-block">
              <input value="${
                QUESTIONS[index].answers[3]
              }" name="question" type="radio" />${QUESTIONS[index].answers[3]}
            </label>
            <button type="submit" value="submit" class="submit-button js-submit-button">Submit</button>
          </fieldset>
        </form>
      </section>`;
}

function questionResultTemplate() {
  const index = STATE.questionIndex;
  return `<header role="banner">
            <ul class="js-results results">
              <li><b>Q:</b> ${index + 1}/${ANSWERS.length}</li>
              <li><b>Score:</b> ${STATE.score}</li>
            </ul>
          </header>
          <section>
            <h1>${STATE.correct ? 'Correct!' : 'Incorrect :('}</h1>
            <img
              src="${QUESTIONS[index].image.src}"
              alt="${QUESTIONS[index].image.alt}"
            />
            ${
              !STATE.correct
                ? `<h2>The correct answer was ${ANSWERS[index]}</h2>`
                : ''
            }
            <button class="next-button js-next-button" type="button">Next</button>
          </section>`;
}

function resultsTemplate() {
  return `<h1>Results:</h1>
          <img src="https://imagesvc.timeincapp.com/v3/fan/image?url=https%3A%2F%2Fgmenhq.com%2Ffiles%2F2014%2F08%2Fmichael-strahan-nfl-hall-of-fame-enshrinees-gold-jacket-dinner.jpg" alt="Michael Strahan poses in his Hall of Fame jacket">
          <h2>Score: ${STATE.score}/${ANSWERS.length}</h2>
          <button class="restart-quiz js-restart-quiz" type="button">Take it again?</button>`;
}

function renderView() {
  if (STATE.view === 'START') {
    $('main').html(startTemplate());
  } else if (STATE.view === 'QUESTION') {
    $('main').html(questionTemplate());
  } else if (STATE.view === 'QUESTION_RESULT') {
    $('main').html(questionResultTemplate());
  } else {
    $('main').html(resultsTemplate());
  }
}

function initializeQuiz() {
  STATE.questionIndex = 0;
  STATE.score = 0;
  STATE.view = 'START';
}

function updateCurrentView(view) {
  STATE.view = view;
}

function submitAnswer(input) {
  updateCurrentView('QUESTION_RESULT');
  if (input === ANSWERS[STATE.questionIndex]) {
    STATE.score++;
    STATE.correct = true;
  } else {
    STATE.correct = false;
  }
}

function clickNext() {
  STATE.questionIndex++;
  if (STATE.questionIndex === ANSWERS.length) {
    STATE.view = 'RESULTS';
  } else {
    STATE.view = 'QUESTION';
  }
}

function handleStartQuiz() {
  $('main').on('click', '.js-quiz-start', function(event) {
    updateCurrentView('QUESTION');
    renderView();
  });
}

function handleRestartQuiz() {
  $('main').on('click', '.js-restart-quiz', function(event) {
    initializeQuiz();
    renderView();
  });
}

function handleClickNext() {
  $('main').on('click', '.js-next-button', function(event) {
    clickNext();
    renderView();
  });
}

function handleSubmitAnswer() {
  $('main').on('submit', '.js-question-form', function(event) {
    event.preventDefault();
    const input = $(event.currentTarget)
      .find('input[name="question"]:checked')
      .val();
    submitAnswer(input);
    renderView();
  });
}

function handleQuizApp() {
  handleStartQuiz();
  handleClickNext();
  handleSubmitAnswer();
  handleRestartQuiz();
}

$(handleQuizApp());
