import React from 'react';

const CONFIDANTS = [
  { name: 'Best Friend', arcana: 'VII. THE CHARIOT', rank: 3 },
  { name: 'Mentor', arcana: 'V. THE HIEROPHANT', rank: 5 },
  { name: 'Study Buddy', arcana: 'I. THE MAGICIAN', rank: 2 },
];

export default function ConfidantsView({ sp, setSp }) {
  const handleHangout = (cost) => {
    if (sp >= cost) {
      setSp(sp - cost);
      alert('Spent ' + cost + ' SP to deepen your bond!');
    } else {
      alert('Not enough SP! Visit Cafe Leblanc to recover SP.');
    }
  };

  return (
    <div className="p5-card">
      <h2 className="p5-card-header">CONFIDANT NETWORK</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
        {CONFIDANTS.map((c, i) => (
          <div key={i} style={{ background: '#222', padding: '0.8rem', borderLeft: '4px solid #e60012' }}>
            <div style={{ color: '#ffe600', fontSize: '0.85rem', fontWeight: 'bold' }}>{c.arcana}</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{c.name}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.4rem', alignItems: 'center' }}>
              <span>RANK {c.rank} / 10</span>
              <button 
                style={{ background: '#e60012', color: '#fff', border: 'none', padding: '0.3rem 0.6rem', cursor: 'pointer', fontWeight: 'bold' }}
                onClick={() => handleHangout(15)}
              >
                HANGOUT (-15 SP)
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}