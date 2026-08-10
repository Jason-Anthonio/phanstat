import React from 'react';

export default function PageTransition({ isTransitioning }) {
  return (
    <div className={`p5-wipe ${isTransitioning ? 'animate' : ''}`} />
  );
}