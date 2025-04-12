import React from 'react';
import { Code, Brain, Wallet, Heart, Lightbulb, BookOpen } from 'lucide-react';

function ThemeSection() {
  const themeBoxes = [
    { id: 1, name: "Web3", offset: false, icon: <Code size={80} /> },
    { id: 2, name: "AI/ML", offset: true, icon: <Brain size={80} /> },
    { id: 3, name: "Fintech", offset: false, icon: <Wallet size={80} /> },
    { id: 4, name: "HealthCare", offset: true, icon: <Heart size={80} /> },
    { id: 5, name: "Open Innovation", offset: false, icon: <Lightbulb size={80} /> },
    { id: 6, name: "Edtech", offset: true, icon: <BookOpen size={80} /> }
  ];
  
  return (
    <div className="w-full h-screen flex justify-center items-center p-8">
      <div className="flex flex-nowrap overflow-x-auto w-full max-w-7xl justify-around">
        {themeBoxes.map((box) => (
          <div
            key={box.id}
            className={`flex items-start ${box.offset ? 'mt-24' : ''} transition-transform duration-300 hover:scale-105`}
          >
            <ThemeBox name={box.name} icon={box.icon} />
          </div>
        ))}
      </div>
    </div>
  );
}

function ThemeBox({ name, icon }) {
  return (
    <div
      className="rounded-xl w-56 h-56 flex flex-col items-center justify-center p-6 m-3 shadow-lg flex-shrink-0 transition-all duration-300 hover:shadow-xl"
      style={{
        backgroundColor: '#d4b996',
        borderColor: '#a68a64',
        borderWidth: '3px',
        borderStyle: 'solid'
      }}
    >
      <div className="text-amber-800 w-32 h-32 mb-2 flex items-center justify-center">
        {icon}
      </div>
      <p
        className="text-xl font-bold text-amber-800"
      >
        {name}
      </p>
    </div>
  );
}

export default ThemeSection;
