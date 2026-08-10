import React, { useState, useEffect } from 'react';

export default function LeblancTimerView({ setSp }) {
  const [seconds, setSeconds] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => setSeconds((s) => s - 1), 1000);
    } else if (seconds === 0 && isActive) {
      setIsActive(false);
      setSp((prev) => prev + 20);
      alert('Coffee brewed! +20 SP Recovered!');
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, setSp]);

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60).toString().padStart(2, '0');
    const s = (sec % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div className="p5-card" style={{ textAlign: 'center' }}>
      <h2 className="p5-card-header">CAFÉ LEBLANC FOCUS</h2>
      <p style={{ color: '#aaa', marginBottom: '1rem' }}>BREW SIPHON COFFEE TO RECOVER SP</p>
      
      <div style={{ fontSize: '4rem', fontFamily: 'Bebas Neue', color: '#ffe600', letterSpacing: '2px' }}>
        {formatTime(seconds)}
      </div>

      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1rem' }}>
        <button 
          className="p5-menu-btn" 
          style={{ fontSize: '1.2rem', padding: '0.5rem 1.5rem' }}
          onClick={() => setIsActive(!isActive)}
        >
          {isActive ? 'PAUSE' : 'BREW (START)'}
        </button>
        <button 
          className="p5-menu-btn" 
          style={{ fontSize: '1.2rem', padding: '0.5rem 1.5rem', background: '#333' }}
          onClick={() => { setIsActive(false); setSeconds(25 * 60); }}
        >
          RESET
        </button>
      </div>
    </div>
  );
}