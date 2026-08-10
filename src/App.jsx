import React, { useState } from 'react';
import CalendarView from './components/CalendarView';
import StatsView from './components/StatsView';
import ConfidantsView from './components/ConfidantsView';
import LeblancTimerView from './components/LeblancTimerView';
import './App.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('calendar');
  
  // Core App State
  const [sp, setSp] = useState(45);
  const [timeSlot, setTimeSlot] = useState('AFTER SCHOOL'); // Daytime, After School, Evening
  const [weather, setWeather] = useState('🌧️ RAIN');
  
  const [stats, setStats] = useState({
    Knowledge: { rank: 2, exp: 40 },
    Guts: { rank: 1, exp: 20 },
    Proficiency: { rank: 3, exp: 65 },
    Kindness: { rank: 2, exp: 10 },
    Charm: { rank: 1, exp: 80 }
  });

  const handleGainStat = (statName, amount) => {
    setStats((prev) => {
      const current = prev[statName];
      let newExp = current.exp + amount;
      let newRank = current.rank;
      if (newExp >= 100) {
        newExp -= 100;
        newRank += 1;
      }
      return { ...prev, [statName]: { rank: newRank, exp: newExp } };
    });
  };

  return (
    <div className="phanstat-app">
      <div className="bg-halftone" />

      {/* Top System Bar */}
      <header className="p5-topbar">
        <div className="p5-date-badge">4/11 FRI // {timeSlot}</div>
        <div className="p5-weather-badge">{weather}</div>
        <div className="p5-sp-meter">SP: {sp}/100</div>
      </header>

      {/* Active Screen View */}
      <main className="p5-view-container">
        {activeTab === 'calendar' && (
          <CalendarView 
            timeSlot={timeSlot} 
            setTimeSlot={setTimeSlot} 
            onGainStat={handleGainStat} 
          />
        )}
        {activeTab === 'stats' && <StatsView stats={stats} />}
        {activeTab === 'confidants' && <ConfidantsView sp={sp} setSp={setSp} />}
        {activeTab === 'leblanc' && <LeblancTimerView setSp={setSp} />}
      </main>

      {/* Bottom Navigation */}
      <nav className="p5-bottom-nav">
        <button 
          className={`p5-nav-btn ${activeTab === 'calendar' ? 'active' : ''}`}
          onClick={() => setActiveTab('calendar')}
        >
          <span>📅</span> CALENDAR
        </button>
        <button 
          className={`p5-nav-btn ${activeTab === 'stats' ? 'active' : ''}`}
          onClick={() => setActiveTab('stats')}
        >
          <span>📊</span> STATS
        </button>
        <button 
          className={`p5-nav-btn ${activeTab === 'confidants' ? 'active' : ''}`}
          onClick={() => setActiveTab('confidants')}
        >
          <span>🃏</span> NETWORK
        </button>
        <button 
          className={`p5-nav-btn ${activeTab === 'leblanc' ? 'active' : ''}`}
          onClick={() => setActiveTab('leblanc')}
        >
          <span>☕</span> LEBLANC
        </button>
      </nav>
    </div>
  );
}