import React from 'react';

const MENU_ITEMS = [
  { id: 'about', label: '01 // SYSTEM INFO' },
  { id: 'resume', label: '02 // COOPERATIVE' },
  { id: 'projects', label: '03 // PALACE DATA' },
];

export default function P5Menu({ activeTab, onSelectTab }) {
  return (
    <nav className="p5-menu-container">
      {MENU_ITEMS.map((item) => {
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            className={`p5-menu-btn ${isActive ? 'active' : ''}`}
            onClick={() => onSelectTab(item.id)}
          >
            <div className="p5-menu-btn-inner">
              <span>{item.label}</span>
              {isActive && <span>★</span>}
            </div>
          </button>
        );
      })}
    </nav>
  );
}