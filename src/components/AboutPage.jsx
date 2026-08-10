import React from 'react';

export default function AboutPage() {
  return (
    <div className="p5-card">
      <h2 className="p5-card-title">SYSTEM INFO</h2>
      <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#fff' }}>
        WELCOME TO THE PHANTOM NAVIGATION SYSTEM.
      </p>
      <br />
      <p style={{ color: '#ccc' }}>
        Specializing in Autonomous Robotics, SLAM Algorithms, ROS 2, and Custom Hardware Prototyping.
      </p>
    </div>
  );
}