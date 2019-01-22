'use strict';
const QUESTIONS = [
  {
    question: 'Who won the Stanley Cup in 1994?',
    answers: [
      'Washington Capitals',
      'Philadelphia Flyers',
      'Toronto Maple Leafs',
      'New York Rangers'
    ]
  },
  {
    question: 'When did Tiger Woods win his last major championship?',
    answers: ['2000', '1997', '2008', '2018']
  },
  {
    question: 'How many Super Bowl rings does Eli Manning have?',
    answers: ['0', '1', '2', '3']
  },
  {
    question: 'Who won the first World Series?',
    answers: [
      'New York Yankees',
      'Boston Red Sox',
      'Chicago Cubs',
      'Brooklyn Dodgers'
    ]
  },
  {
    question:
      "How many times has the US Men's National Team won the FIFA World Cup?",
    answers: ['0', '1', '2', '3']
  },
  {
    question:
      'Who was picked after Hakeem Olajuwon but before MJ in the 1984 NBA Draft?',
    answers: ['Charles Barkley', 'Dennis Rodman', 'Sam Bowie', 'Sam Decker']
  },
  {
    question: 'How many Grand Slams has Serena Williams won?',
    answers: ['18', '10', '25', '23']
  },
  {
    question: 'How many NFL teams are based in New York?',
    answers: ['1', '2', '3', '4']
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
  return `<section>
        <h1>Welcome to the Sports Trivia!!!</h1>
        <button class="quiz-start js-quiz-start" type="button">Start</button>
      </section>`;
}

function questionTemplate() {
  const index = STATE.questionIndex;
  return `<header role="banner">
        <ul class="js-results results">
          <li>Q: ${index+1}/10</li>
          <li>Score: ${STATE.score}</li>
        </ul>
      </header>
      <section>
        <h1>${QUESTIONS[index].question}</h1>
        <form class="question-form js-question-form">
          <fieldset>
            <label class="question-choice-block">
              <input value="${QUESTIONS[index].answers[0]}" name="question" type="radio" />${QUESTIONS[index].answers[0]}
            </label>
            <label class="question-choice-block">
              <input value="${QUESTIONS[index].answers[1]}" name="question" type="radio" />${QUESTIONS[index].answers[1]}
            </label>
            <label class="question-choice-block">
              <input value="${QUESTIONS[index].answers[2]}" name="question" type="radio" />${QUESTIONS[index].answers[2]}
            </label>
            <label class="question-choice-block">
              <input value="${QUESTIONS[index].answers[3]}" name="question" type="radio" />${QUESTIONS[index].answers[3]}
            </label>
            <button type="submit" value="submit" class="submit-button js-submit-button">Submit</button>
          </fieldset>
        </form>
      </section>`;
}

function questionResultTemplate() {}

function resultsTemplate() {}

function renderView() {
  if (STATE.view === 'START') {
    $('section').html(startTemplate());
  } else if (STATE.view === 'QUESTION') {
    $('section').html(questionTemplate());
  } else if (STATE.view === 'QUESTION_RESULT') {
    $('section').html(questionResultTemplate());
  } else {
    $('section').html(resultsTemplate());
  }
}

function initializeQuiz() {
  STATE.questionIndex = 0;
  STATE.score = 0;
  STATE.currentView = 'START';
}

function updateCurrentView(view) {
  STATE.view = view;
}

function submitAnswer(input) {
  updateCurrentView('QUESTION_RESULT');
  if(input === ANSWERS[STATE.questionIndex]){
    STATE.score++;
    STATE.correct = true;
  } else {
    STATE.correct = false;
  }
}

function handleStartQuiz() {
  $('.js-quiz-start').click(function(event) {
    updateCurrentView('QUESTION');
    renderView();
  });
}

function handleRestartQuiz() {
  $('.restart-quiz').click(function(event) {
    initializeQuiz();
    updateCurrentView('START');
    renderView();
  });
}

function handleClickNext() {}

function handleSubmitAnswer() {
  $('main').on('submit', '.js-question-form', (function (event) {
    debugger;
    event.preventDefault();
    const input = $(event.currentTarget).find('input[name="question"]:checked').val();
    submitAnswer(input);
    
    renderView();
  }));
}

function handleQuizApp() {
  handleStartQuiz();
  handleClickNext();
  handleSubmitAnswer();
  handleRestartQuiz();
}

$(handleQuizApp());
