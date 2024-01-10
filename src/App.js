import logo from './logo.svg';
import clock from './assets/clock.png';
import second from './assets/second.png';
import hour from './assets/hour.png';
import mintes from './assets/mintes.png';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='App'>
      <div className='clockMain'>
        <img src={clock} alt='clock' className='clock' />
        <img
          src={hour}
          alt='hour'
          style={{
            transform: `rotate(${
              time.getHours() * 30 + time.getMinutes() / 2
            }deg)`,
          }}
          className='clockHand hour'
        />
        <img
          src={mintes}
          alt='mintes'
          style={{ transform: `rotate(${time.getMinutes() * 6}deg)` }}
          className='clockHand mintes'
        />
        <img
          src={second}
          alt='second'
          style={{ transform: `rotate(${time.getSeconds() * 6}deg)` }}
          className='clockHand second'
        />
      </div>
    </div>
  );
}

export default App;
