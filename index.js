'use strict';

//retrieved this from stackoverflow
Array.prototype.shuffle = function() {
  var input = this;

  for (var i = input.length - 1; i >= 0; i--) {
    var randomIndex = Math.floor(Math.random() * (i + 1));
    var itemAtIndex = input[randomIndex];

    input[randomIndex] = input[i];
    input[i] = itemAtIndex;
  }
  return input;
};

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
      alt: 'Mark Messier laughing with the Stanley Cup'
    }
  },
  {
    question: 'When did Tiger Woods win his last major championship?',
    answers: ['2000', '1997', '2008', '2018'],
    image: {
      src: 'https://i.makeagif.com/media/10-22-2015/ok9Pv9.gif',
      alt: 'Tiger Woods makes putt on 18th hole and celebrates'
    }
  },
  {
    question: 'How many Super Bowl rings does Eli Manning have?',
    answers: ['0', '1', '2', '3'],
    image: {
      src: 'https://thumbs.gfycat.com/TheseScratchyBoto-small.gif',
      alt:
        'Eli Manning holding up the Lombardi Trophy after winning the Super Bowl'
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
      src: 'http://go.newspapers.com/i/email/Ncom_HIH_Oct2016.jpg',
      alt:
        'Newspaper clipping and image of Fenway Park after Boston Americans win 1903 World Series'
    }
  },
  {
    question:
      "How many times has the US Men's National Team won the FIFA World Cup?",
    answers: ['0', '1', '2', '3'],
    image: {
      src: 'https://media.giphy.com/media/l1J9PwaMlfmVhEMve/giphy.gif',
      alt:
        'Former US Mens Soccer Coach Bruce Arena shaking his head in disbielf'
    }
  },
  {
    question:
      'Who was picked after Hakeem Olajuwon but before MJ in the 1984 NBA Draft?',
    answers: ['Charles Barkley', 'Dennis Rodman', 'Sam Bowie', 'Sam Decker'],
    image: {
      src:
        'https://static.businessinsider.com/image/4fe4e0e669bedd9a54000010/image.jpg',
      alt:
        'Sam Bowie looking disguted after being drafted by the Portland Trail Blazers'
    }
  },
  {
    question: 'How many Grand Slams has Serena Williams won?',
    answers: ['18', '10', '25', '23'],
    image: {
      src: 'https://media.giphy.com/media/nst6esTet5QY/giphy.gif',
      alt: 'Serena Williams yelling in excitement after winning a point'
    }
  },
  {
    question: 'How many NFL teams are based in New York?',
    answers: ['1', '2', '3', '4'],
    image: {
      src: 'https://i.imgflip.com/1wyc1y.jpg',
      alt:
        "ESPN's Chris Berman holding up a Buffalo Bills jersey showing a cirlce and the name 'Wagons'"
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
  questionCount: 0,
  maxQuestions: 5,
  score: 0,
  correct: false,
  view: 'START',
  questionOrder: []
};

function startTemplate() {
  return `<section class="start-screen">
        <h1>Welcome to the Sports Trivia!!!</h1>
        <button class="quiz-start js-quiz-start" type="button">Start</button>
      </section>`;
}

function questionTemplate() {
  const index = STATE.questionOrder[STATE.questionCount];
  let choices = [...QUESTIONS[index].answers].shuffle();
  let choicesHTML = '';

  for (let i = 0; i < choices.length; i++) {
    choicesHTML += `
    <label class="question-choice-block">
      <input value="${choices[i]}" 
      name="question" type="radio" required />
      ${choices[i]}
    </label>`;
  }

  return `<header role="banner">
        <ul class="js-results results">
          <li><b>Q:</b> ${STATE.questionCount + 1}/${STATE.maxQuestions}</li>
          <li><b>Score:</b> ${STATE.score}</li>
        </ul>
      </header>
      <section>
        <h1>${QUESTIONS[index].question}</h1>
        <form class="question-form js-question-form">
          <fieldset>
            ${choicesHTML}
            <button type="submit" value="submit" class="submit-button js-submit-button">Submit</button>
          </fieldset>
        </form>
      </section>`;
}

function questionResultTemplate() {
  const index = STATE.questionOrder[STATE.questionCount];
  return `<header role="banner">
            <ul class="js-results results">
              <li><b>Q:</b> ${STATE.questionCount + 1}/${
    STATE.maxQuestions
  }</li>
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
  const score = STATE.score / STATE.maxQuestions;
  let title = '';
  let img = '';
  let alt = '';
  if (score >= 0.8) {
    title = 'Hall of Famer';
    img =
      'https://imagesvc.timeincapp.com/v3/fan/image?url=https%3A%2F%2Fgmenhq.com%2Ffiles%2F2014%2F08%2Fmichael-strahan-nfl-hall-of-fame-enshrinees-gold-jacket-dinner.jpg';
    alt = 'Michael Strahan poses in his Hall of Fame jacket';
  } else if (score >= 0.6) {
    title = 'All-Star';
    img =
      'http://www.citysportsreport.com/wp-content/uploads/2014/07/LeBronLoveKyrie.jpg';
    alt = 'Lebron James slapping hands with his teammates';
  } else if (score >= 0.4) {
    title = 'Rookie';
    img =
      'http://images.performgroup.com/di/library/omnisport/16/8c/luka-doncic-cropped_rajx9s0ypqad1qqvynqg7kk7m.jpg?t=1786219224';
    alt = 'Luka Doncic, rookie from Mavs, makes a funny face';
  } else {
    title = 'Benchwarmer';
    img =
      'https://images.csmonitor.com/csm/2013/01/0106-Robert-Griffin-III_1.jpg';
    alt = 'RGIII sitting on the bench with a knee injury';
  }
  return `<h1>You are: ${title}</h1>
          <img src="${img}" alt="${alt}">
          <h2>Score: ${STATE.score}/${STATE.maxQuestions}</h2>
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
  STATE.questionOrder = [];
  STATE.questionCount = 0;
  STATE.score = 0;
  updateCurrentView('QUESTION');

  for (let i = 0; i < ANSWERS.length; i++) {
    STATE.questionOrder.push(i);
  }

  STATE.questionOrder.shuffle();
}

function updateCurrentView(view) {
  STATE.view = view;
}

function submitAnswer(input) {
  updateCurrentView('QUESTION_RESULT');
  const index = STATE.questionOrder[STATE.questionCount];
  if (input === ANSWERS[index]) {
    STATE.score++;
    STATE.correct = true;
  } else {
    STATE.correct = false;
  }
}

function clickNext() {
  STATE.questionCount++;
  if (STATE.questionCount === STATE.maxQuestions) {
    STATE.view = 'RESULTS';
  } else {
    STATE.view = 'QUESTION';
  }
}

function handleStartQuiz() {
  $('main').on('click', '.js-quiz-start', function(event) {
    initializeQuiz();
    renderView();
  });
}

function handleRestartQuiz() {
  $('main').on('click', '.js-restart-quiz', function(event) {
    STATE.view = 'START';
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

$(handleQuizApp);
