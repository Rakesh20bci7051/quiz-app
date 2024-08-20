// src/components/Quiz.js
import React, { useState } from 'react';
import Question from './Question';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);

  const questions = [
    {
      question: 'Which Indian satellite was the first to be launched into space?',
      options: ['INSAT-1A', 'Aryabhata', 'Rohini', 'GSAT-1'],
      answer: 'Aryabhata',
      explanation: 'Aryabhata was India’s first satellite, launched by the Soviet Union on April 19, 1975.',
    },
    {
      question: 'Which Indian mission was the first to reach Mars?',
      options: ['Mangalyaan', 'Chandrayaan-1', 'GSAT-6A', 'RISAT-2'],
      answer: 'Mangalyaan',
      explanation: 'Mangalyaan, also known as Mars Orbiter Mission (MOM), was India’s first interplanetary mission, reaching Mars on November 5, 2013.',
    },
    {
      question: 'What is the name of the Indian lunar mission that discovered water on the Moon?',
      options: ['Chandrayaan-1', 'Chandrayaan-2', 'Chandrayaan-3', 'Vikram'],
      answer: 'Chandrayaan-1',
      explanation: 'Chandrayaan-1, India’s first lunar mission, discovered water molecules on the Moon’s surface in 2008.',
    },
    {
      question: 'Which country was the first to successfully land a rover on Mars?',
      options: ['USA', 'Soviet Union', 'China', 'India'],
      answer: 'USA',
      explanation: 'The USA was the first country to land a rover on Mars with the Viking 1 mission in 1976.',
    },
    {
      question: 'What is the name of the space observatory launched by India to study the Sun?',
      options: ['Aditya-L1', 'INSAT-3DR', 'RISAT-1', 'Astrosat'],
      answer: 'Aditya-L1',
      explanation: 'Aditya-L1 is India’s first solar mission, designed to study the Sun’s outermost layers.',
    },
    {
      question: 'Which Indian mission was the first to land a spacecraft on the Moon?',
      options: ['Chandrayaan-1', 'Chandrayaan-2', 'Mangalyaan', 'GSAT-6'],
      answer: 'Chandrayaan-2',
      explanation: 'Chandrayaan-2 was India’s second lunar exploration mission, which attempted a soft landing near the Moon’s south pole in 2019.',
    },
    {
      question: 'What is the name of the first space station launched by China?',
      options: ['Tiangong-1', 'Shenzhou-5', 'Chang\'e-4', 'Tianwen-1'],
      answer: 'Tiangong-1',
      explanation: 'Tiangong-1 was China’s first prototype space station, launched in 2011.',
    },
    {
      question: 'What does ISRO stand for?',
      options: ['Indian Space Research Organisation', 'International Space Research Organisation', 'Indian Satellite Research Organisation', 'Institute of Space Research Organisation'],
      answer: 'Indian Space Research Organisation',
      explanation: 'ISRO stands for Indian Space Research Organisation, the space agency of the Government of India.',
    },
    {
      question: 'Which country launched the first artificial satellite?',
      options: ['USA', 'Soviet Union', 'China', 'India'],
      answer: 'Soviet Union',
      explanation: 'The Soviet Union launched the first artificial satellite, Sputnik 1, on October 4, 1957.',
    },
    {
      question: 'Which Indian rocket is known as the “workhorse” of ISRO?',
      options: ['PSLV', 'GSLV', 'SLV', 'ASLV'],
      answer: 'PSLV',
      explanation: 'The Polar Satellite Launch Vehicle (PSLV) is known as ISRO’s “workhorse” due to its consistent success in launching satellites into orbit.',
    },
    {
      question: 'Which Indian satellite is primarily used for communication purposes?',
      options: ['INSAT', 'Cartosat', 'RISAT', 'GSAT'],
      answer: 'GSAT',
      explanation: 'The GSAT series of satellites is used primarily for communication purposes by ISRO.',
    },
    {
      question: 'Which Indian mission was the first to study the Moon in detail?',
      options: ['Chandrayaan-1', 'Chandrayaan-2', 'Astrosat', 'INSAT-3DR'],
      answer: 'Chandrayaan-1',
      explanation: 'Chandrayaan-1 was India’s first mission to study the Moon in detail, launched in 2008.',
    },
    {
      question: 'Which spacecraft became the first to fly by Pluto?',
      options: ['Voyager 1', 'New Horizons', 'Pioneer 10', 'Cassini'],
      answer: 'New Horizons',
      explanation: 'NASA’s New Horizons spacecraft became the first to fly by Pluto on July 14, 2015.',
    },
    {
      question: 'Which Indian satellite is used for earth observation and resource management?',
      options: ['Cartosat', 'GSAT', 'INSAT', 'RISAT'],
      answer: 'Cartosat',
      explanation: 'The Cartosat series of satellites is used for earth observation and resource management.',
    },
    {
      question: 'Which mission marked India’s entry into interplanetary exploration?',
      options: ['Chandrayaan-1', 'Chandrayaan-2', 'Mangalyaan', 'Astrosat'],
      answer: 'Mangalyaan',
      explanation: 'Mangalyaan (Mars Orbiter Mission) marked India’s entry into interplanetary exploration by successfully reaching Mars in 2013.',
    },
    {
      question: 'Which country was the first to send a human to space?',
      options: ['USA', 'Soviet Union', 'China', 'India'],
      answer: 'Soviet Union',
      explanation: 'The Soviet Union was the first country to send a human, Yuri Gagarin, to space on April 12, 1961.',
    },
    {
      question: 'What is the name of the first Indian satellite launched by an Indian-made launch vehicle?',
      options: ['Aryabhata', 'Rohini', 'GSAT-1', 'INSAT-1A'],
      answer: 'Rohini',
      explanation: 'Rohini was the first Indian satellite launched by an Indian-made launch vehicle (SLV-3) in 1980.',
    },
    {
      question: 'Which Indian space mission was launched to study the Sun?',
      options: ['Aditya-L1', 'Mangalyaan', 'Astrosat', 'Chandrayaan-1'],
      answer: 'Aditya-L1',
      explanation: 'Aditya-L1 is India’s first mission dedicated to studying the Sun.',
    },
    {
      question: 'Which country launched the first space station?',
      options: ['USA', 'Soviet Union', 'China', 'India'],
      answer: 'Soviet Union',
      explanation: 'The Soviet Union launched the first space station, Salyut 1, in 1971.',
    },
    {
      question: 'Which Indian mission aimed to explore the southern hemisphere of the Moon?',
      options: ['Chandrayaan-1', 'Chandrayaan-2', 'Mangalyaan', 'GSAT-6'],
      answer: 'Chandrayaan-2',
      explanation: 'Chandrayaan-2 aimed to explore the southern hemisphere of the Moon, including a soft landing attempt.',
    },
    {
      question: 'Which country successfully landed a rover on the far side of the Moon in 2019?',
      options: ['USA', 'Russia', 'China', 'India'],
      answer: 'China',
      explanation: 'China successfully landed the Chang\'e-4 rover on the far side of the Moon in January 2019.',
    },
    {
      question: 'What was the first Indian satellite to be launched from an Indian rocket?',
      options: ['Aryabhata', 'Rohini', 'INSAT-1A', 'GSAT-1'],
      answer: 'Rohini',
      explanation: 'Rohini was the first Indian satellite to be launched from an Indian rocket, SLV-3, in 1980.',
    },
    {
      question: 'Which space agency developed the Hubble Space Telescope?',
      options: ['NASA', 'ESA', 'ISRO', 'JAXA'],
      answer: 'NASA',
      explanation: 'NASA, in collaboration with the European Space Agency, developed the Hubble Space Telescope, launched in 1990.',
    },
    {
      question: 'Which Indian satellite series is focused on weather forecasting and monitoring?',
      options: ['INSAT', 'GSAT', 'Cartosat', 'RISAT'],
      answer: 'INSAT',
      explanation: 'The INSAT series of satellites is primarily focused on weather forecasting and monitoring.',
    },
    {
      question: 'Which Indian mission is the first dedicated multi-wavelength space observatory?',
      options: ['Astrosat', 'Chandrayaan-1', 'Mangalyaan', 'RISAT-2'],
      answer: 'Astrosat',
      explanation: 'Astrosat is India’s first dedicated multi-wavelength space observatory, launched in 2015.',
    },
    {
      question: 'Which spacecraft was the first to land on the Moon?',
      options: ['Luna 2', 'Apollo 11', 'Surveyor 1', 'Chandrayaan-1'],
      answer: 'Luna 2',
      explanation: 'Luna 2, launched by the Soviet Union in 1959, was the first spacecraft to impact the Moon’s surface.',
    },
    {
      question: 'Which Indian satellite was the first to be launched into a geostationary orbit?',
      options: ['GSAT-1', 'INSAT-1A', 'Aryabhata', 'Rohini'],
      answer: 'INSAT-1A',
      explanation: 'INSAT-1A was India’s first satellite to be launched into a geostationary orbit, in 1982.',
    },
    {
      question: 'Which country was the first to land a rover on Mars?',
      options: ['USA', 'Soviet Union', 'China', 'India'],
      answer: 'USA',
      explanation: 'The USA was the first country to land a rover on Mars with the Viking 1 mission in 1976.',
    },
    {
      question: 'What is the name of the Indian mission to study asteroids?',
      options: ['Astrosat', 'Chandrayaan-2', 'Mangalyaan', 'Mission Shukrayaan'],
      answer: 'Mission Shukrayaan',
      explanation: 'Mission Shukrayaan is an upcoming ISRO mission planned to study Venus and possibly asteroids.',
    },
    {
      question: 'Which spacecraft discovered water ice at the poles of the Moon?',
      options: ['Lunar Reconnaissance Orbiter', 'Chandrayaan-1', 'Apollo 15', 'Viking 2'],
      answer: 'Chandrayaan-1',
      explanation: 'India’s Chandrayaan-1 mission discovered water ice at the Moon’s poles in 2008.',
    },
  ];
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = () => {
    setShowAnswer(true);

    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setSelectedOption('');
    setShowAnswer(false);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert(`Quiz completed! Your score is ${score + 1} out of ${questions.length}`);
      setCurrentQuestion(0);
      setScore(0);
    }
  };

  return (
    <div className="quiz-container">
      <Question
        question={questions[currentQuestion].question}
        options={questions[currentQuestion].options}
        selectedOption={selectedOption}
        handleOptionChange={handleOptionChange}
        showAnswer={showAnswer}
        correctAnswer={questions[currentQuestion].answer}
        explanation={questions[currentQuestion].explanation}
      />
      <button onClick={handleSubmit} disabled={!selectedOption}>
        Show Answer
      </button>
      <button onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Quiz;