import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ['blue', 'red', 'white', 'seashell', 'gold', 'yellowgreen'];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColorIndex(prevIndex => (prevIndex + 1) % colors.length);
    }, 8888);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer className="flex  items-center  justify-between w-[95%]">
      <div className="flex flex-wrap gap-8 justify-center mx-4">
        <div className="text-center text-white">
          <h1 className="text-2xl font-bold mb-1">396 mi</h1>
          <p className="text-sm">Range (EPA est.)</p>
        </div>
        <div className="text-center text-white">
          <h1 className="text-2xl font-bold mb-1">1.99 s</h1>
          <p className="text-sm">0-60 mph*</p>
        </div>
        <div className="text-center text-white">
          <h1 className="text-2xl font-bold mb-1">200 mph</h1>
          <p className="text-sm">Top Speed†</p>
        </div>
        <div className="text-center text-white">
          <h1 className="text-2xl font-bold mb-1">1,020 hp</h1>
          <p className="text-sm">Peak Power</p>
        </div>
      </div>
      <button 
        style={{ backgroundColor: colors[colorIndex] }}
        className="bg-slate-50 text-gray-800 w-32 h-10 rounded-full font-semibold"
      >
        Order Now
      </button>
    </footer>
  );
};

export default Footer;
