import { useState, useEffect } from 'react';

const useMovement = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [direction, setDirection] = useState('down');

  // add event listner to window to listen for arrow keys
  useEffect(() => {
    const keyDownHandler = (e) => {
      if (e.key === 'ArrowUp') {
        move('up');
      }
      if (e.key === 'ArrowLeft') {
        move('left');
      }
      if (e.key === 'ArrowDown') {
        move('down');
      }
      if (e.key === 'ArrowRight') {
        move('right');
      }
    };

    window.addEventListener('keydown', keyDownHandler);

    return () => window.removeEventListener('keydown', keyDownHandler);
  }, []);

  const move = (dir) => {
    setDirection(dir);

    if (dir === 'up') {
      setY((y) => y - 20);
    }
    if (dir === 'left') {
      setX((x) => x - 20);
    }
    if (dir === 'down') {
      setY((y) => y + 20);
    }
    if (dir === 'right') {
      setX((x) => x + 20);
    }
  };
  return { x, y, direction, move };
};

export default useMovement;
