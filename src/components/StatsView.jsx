import React from 'react';

export default function StatsView({ stats }) {
  return (
    <div className="p5-card">
      <h2 className="p5-card-header">SOCIAL PARAMETERS</h2>
      {Object.entries(stats).map(([name, data]) => (
        <div key={name} style={{ marginBottom: '1rem' }}>
          <div className="stat-row">
            <span className="stat-name">{name.toUpperCase()}</span>
            <span style={{ color: '#fff', fontWeight: 'bold' }}>RANK {data.rank}</span>
          </div>
          <div className="stat-bar-outer">
            <div className="stat-bar-inner" style={{ width: `${data.exp}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}