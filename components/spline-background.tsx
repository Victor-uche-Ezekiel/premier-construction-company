'use client';

import { useState } from 'react';

export function SplineBackground() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="absolute inset-0 z-10 overflow-hidden">
      <div className={`w-full h-full transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <iframe
          src="https://my.spline.design/eveningcoffee-8c37c863321a8de3ad62f5b57f0946a0/"
          frameBorder="0"
          width="100%"
          height="100%"
          title="3D World Planet Background"
          onLoad={() => setIsLoaded(true)}
          style={{ 
            pointerEvents: 'none',
            background: 'transparent'
          }}
        />
      </div>
      <div 
        className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-600/5 transition-opacity duration-1000 ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`} 
      />
    </div>
  );
}
