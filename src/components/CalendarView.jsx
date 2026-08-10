import React from 'react';

export default function CalendarView({ timeSlot, setTimeSlot, onGainStat }) {
  const handleActivity = (activityName, stat, amount) => {
    onGainStat(stat, amount);
    if (timeSlot === 'DAYTIME') setTimeSlot('AFTER SCHOOL');
    else if (timeSlot === 'AFTER SCHOOL') setTimeSlot('EVENING');
    else setTimeSlot('DAYTIME');
  };

  return (
    <>
      {/* Daily News Dashboard */}
      <div className="p5-card">
        <h2 className="p5-card-title" style={{ background: '#ffe600', color: '#000' }}>
          DAILY NEWS // RATING 85
        </h2>
        <p style={{ fontSize: '0.95rem', lineHeight: '1.4' }}>
          <strong>COGNITIVE ATMOSPHERE:</strong> Heavy rain forecasted today. Studying at Leblanc yields +1.5x Knowledge!
        </p>
      </div>

      {/* Time Slot Actions */}
      <div className="p5-card">
        <h2 className="p5-card-header">CHOOSE ACTIVITY</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <button 
            className="p5-menu-btn" 
            style={{ fontSize: '1.2rem', padding: '0.6rem 1rem' }}
            onClick={() => handleActivity('Study at Library', 'Knowledge', 25)}
          >
            📖 STUDY AT LIBRARY (+KNOWLEDGE)
          </button>
          <button 
            className="p5-menu-btn" 
            style={{ fontSize: '1.2rem', padding: '0.6rem 1rem' }}
            onClick={() => handleActivity('Work Out at Gym', 'Guts', 25)}
          >
            🏋️ WORK OUT AT GYM (+GUTS)
          </button>
        </div>
      </div>
    </>
  );
}