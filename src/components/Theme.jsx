import React from 'react';


function ThemeSection() {
  
  const themeBoxes = [
    { id: 1, offset: false },
    { id: 2, offset: true },
    { id: 3, offset: false },
    { id: 4, offset: true }
  ];
  
  return (
    <div className="flex w-full h-screen">
      
      <div className="w-3/4 flex justify-center items-center p-4">
        <div className="flex justify-around items-center w-full max-w-6xl">
          
          {themeBoxes.map((box) => (
            <div 
              key={box.id} 
              className={`flex items-start ${box.offset ? 'mt-32' : ''}`}
            >
              <EmptyThemeBox />
            </div>
          ))}
        </div>
      </div>
      {/* Navbar space (25% width) */}
      <div className="w-1/4 h-full">
        {/* Space for navbar */}
      </div>
    </div>
  );
}


function EmptyThemeBox() {
  return (
    <div 
      className="rounded-xl w-48 h-48 flex flex-col items-center justify-center p-4 m-2 shadow-md"
      style={{ 
        backgroundColor: '#d4b996',  
        borderColor: '#a68a64',      
        borderWidth: '2px',
        borderStyle: 'solid'
      }}
    >
      
      <p 
        className="text-2xl font-bold" 
        style={{ color: '#e6c200' }}
      >
        Theme
      </p>
    </div>
  );
}

export default ThemeSection;
