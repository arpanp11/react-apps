import React, { useState, useEffect } from 'react';
import useCountDown from 'react-countdown-hook';

import './App.css';

const secondsToCount = 10;
const paragraph = `Coding is the best. We are able to build something from scratch. It is literally imagination incarnate. Solving our own problems through coding is one of the coolest things we could do!`;

const findTypo = (str1, str2) => {
  let typos = [];

  str2.split('').forEach(function (character, index) {
    if (character !== str1.charAt(index)) typos.push(index);
  });

  return typos;
};

const App = () => {
  const [typedText, setTypedText] = useState('');
  const [typoIndexes, setTypoIndexes] = useState([]);
  const [timeLeft, { start, reset }] = useCountDown(secondsToCount * 1000, 100);

  useEffect(() => {
    setTypoIndexes(findTypo(paragraph, typedText));
  }, [typedText]);

  useEffect(() => {
    if (typedText.length === 0) {
      return;
    }

    if (timeLeft !== 0) {
      return;
    }

    // words typed = (characters - typos) / 5
    const wordsTyped = (typedText.length - typoIndexes.length) / 5;
    const minMultiplier = 60 / secondsToCount;
    const wpm = wordsTyped * minMultiplier;

    alert(`You type at a ${wpm.toFixed(2)} word/minute.`);
  }, [timeLeft]);

  const startTimer = () => {
    setTypedText('');
    start();
  };

  const resetTimer = () => {
    setTypedText('');
    reset();
  };

  return (
    <div className='app'>
      {/* sidebar */}
      <div className='sidebar'>
        <div className='timer'>{(timeLeft / 1000).toFixed(2)}</div>
        <button className='start' onClick={() => startTimer()}>
          Start
        </button>
        <button className='reset' onClick={() => resetTimer()}>
          Reset
        </button>
      </div>

      <div className='content'>
        {/* show the paragraph */}
        <p>
          {paragraph.split('').map((character, index) => {
            // check what class to apply to each character
            let characterClass = '';
            const hasBeenTyped = typedText.length > index;
            if (hasBeenTyped) {
              characterClass = typoIndexes.includes(index)
                ? 'incorrect'
                : 'correct';
            }

            return (
              <span key={index} className={characterClass}>
                {character}
              </span>
            );
          })}
        </p>

        <form>
          <textarea
            rows='10'
            value={typedText}
            placeholder='Test your typing skills...'
            onChange={(e) => setTypedText(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default App;
