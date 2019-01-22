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
  lastChoice: '',
  currentView: 'START'
};

function handleQuizApp() {}

$(handleQuizApp());
