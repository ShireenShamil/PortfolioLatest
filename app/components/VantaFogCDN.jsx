// components/VantaFogCDN.jsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import Script from 'next/script';

const VantaFogCDN = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  // State to track if both scripts are loaded
  const [areScriptsLoaded, setAreScriptsLoaded] = useState(false);

  useEffect(() => {
    // This effect will run ONLY when areScriptsLoaded becomes true,
    // and if vantaEffect hasn't been initialized yet, and the ref is ready.
    if (areScriptsLoaded && !vantaEffect && vantaRef.current && window.VANTA && window.THREE) {
      console.log('Initializing Vanta.js FOG effect...');
      setVantaEffect(window.VANTA.FOG({
        el: vantaRef.current,
        // When using CDN, Vanta.js expects THREE to be global.
        // You generally don't need to explicitly pass it if it's global,
        // but adding this line is safer if Vanta.js has an internal check for it.
        // However, the primary issue is THREE being undefined globally.
        // Let's rely on window.THREE existing.
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0x411479,
        midtoneColor: 0x0,
        baseColor: 0xb0909,
      }));
    }

    // Cleanup function
    return () => {
      if (vantaEffect) {
        console.log('Destroying Vanta.js effect...');
        vantaEffect.destroy();
      }
    };
  }, [areScriptsLoaded, vantaEffect]); // Dependencies: re-run when scripts load or effect state changes

  const backgroundStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: 0,
    overflow: 'hidden',
    border: '2px solid red', // TEMP: for debugging
    pointerEvents: 'none', // allow clicks through the background
  };

  return (
    <>
      {/* Load Three.js */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
        // Use 'beforeInteractive' for Three.js so it's available early
        strategy="beforeInteractive"
        onLoad={() => {
          // Check if Vanta.js is also loaded, if so, set state to true
          // This ensures both are ready before trying to initialize
          if (window.VANTA && window.THREE) {
            setAreScriptsLoaded(true);
            console.log('Three.js and Vanta.js scripts loaded!');
          }
        }}
      />
      {/* Load Vanta.js Fog effect */}
      <Script
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.fog.min.js"
        // 'lazyOnload' can be problematic if Three.js isn't fully ready.
        // Let's try 'beforeInteractive' for Vanta.js as well,
        // and rely on the onLoad handlers to coordinate.
        strategy="beforeInteractive" // Changed to beforeInteractive
        onLoad={() => {
          // Check if Three.js is also loaded, if so, set state to true
          if (window.VANTA && window.THREE) {
            setAreScriptsLoaded(true);
            console.log('Three.js and Vanta.js scripts loaded!');
          }
        }}
      />

      <div ref={vantaRef} style={backgroundStyle}>
        {/* Vanta.js canvas will be appended here */}
      </div>
    </>
  );
};

export default VantaFogCDN;