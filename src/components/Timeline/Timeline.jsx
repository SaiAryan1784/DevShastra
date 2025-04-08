// import { useState, useEffect } from 'react';

// export default function Timeline() {
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [activeEvent, setActiveEvent] = useState(null);
//   const [isVisible, setIsVisible] = useState(false);
//   const [animatedEvents, setAnimatedEvents] = useState([]);
  
//   // Update current time every minute
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 60000);
    
//     return () => clearInterval(timer);
//   }, []);
  
//   // Animation on component mount
//   useEffect(() => {
//     setIsVisible(true);
    
//     // Staggered animation for events
//     const eventIds = events.map(event => event.id);
//     const animationTimer = setInterval(() => {
//       setAnimatedEvents(prev => {
//         if (prev.length >= eventIds.length) {
//           clearInterval(animationTimer);
//           return prev;
//         }
//         return [...prev, eventIds[prev.length]];
//       });
//     }, 200);
    
//     return () => clearInterval(animationTimer);
//   }, []);
  
//   // Sample hackathon events
//   const events = [
//     {
//       id: 1,
//       title: "Registration Opens",
//       date: new Date("2025-04-26T09:00:00"),
//       icon: "📝",
//       position: "left"
//     },
//     {
//       id: 2,
//       title: "Opening Ceremony",
//       date: new Date("2025-04-26T10:00:00"),
//       icon: "🎬",
//       position: "right"
//     },
//     {
//       id: 3,
//       title: "Hacking Begins",
//       date: new Date("2025-04-26T11:00:00"),
//       icon: "💻",
//       position: "left"
//     },
//     {
//       id: 4,
//       title: "Midpoint Check-in",
//       date: new Date("2025-04-27T14:00:00"),
//       icon: "🔄",
//       position: "right"
//     },
//     {
//       id: 5,
//       title: "Hacking Ends",
//       date: new Date("2025-04-28T09:00:00"),
//       icon: "🏁",
//       position: "left"
//     },
//     {
//       id: 6,
//       title: "Judging & Presentations",
//       date: new Date("2025-04-28T10:00:00"),
//       icon: "🏆",
//       position: "right"
//     },
//     {
//       id: 7,
//       title: "Awards Ceremony",
//       date: new Date("2025-04-28T16:00:00"),
//       icon: "🎉",
//       position: "left"
//     }
//   ];

//   // Format date for display
//   const formatDate = (date) => {
//     return date.toLocaleString('en-US', {
//       weekday: 'short',
//       month: 'short',
//       day: 'numeric',
//       hour: '2-digit',
//       minute: '2-digit'
//     });
//   };

//   // Shorter date format similar to the image example
//   const shortFormatDate = (date) => {
//     return `${date.toLocaleString('en-US', {
//       weekday: 'short'
//     })}, ${date.toLocaleString('en-US', {
//       month: 'short'
//     })} ${date.getDate()}, ${date.toLocaleString('en-US', {
//       hour: '2-digit',
//       minute: '2-digit'
//     })}`;
//   };

//   // Determine if event is in the past, current, or future
//   const getEventStatus = (eventDate) => {
//     if (eventDate < currentTime) return "past";
    
//     // Find next event
//     const upcomingEvents = events.filter(e => e.date > currentTime);
//     if (upcomingEvents.length > 0 && eventDate.getTime() === upcomingEvents[0].date.getTime()) {
//       return "current";
//     }
    
//     return "future";
//   };

//   return (
//     <div 
//       className={`max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
//     >
//       <h2 
//         className={`text-2xl font-bold mb-8 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
//         style={{ color: "#331316" }}
//       >
//         Hackathon Timeline
//       </h2>
      
//       {/* Current time indicator */}
//       <div 
//         className={`mb-10 text-center p-3 rounded-lg transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
//         style={{ backgroundColor: "#AB7B43", color: "white" }}
//       >
//         <p className="font-medium">Current Time: {formatDate(currentTime)}</p>
//       </div>
      
//       {/* Timeline container */}
//       <div className="relative flex justify-center">
//         <div className="w-full max-w-3xl relative">
//           {/* Vertical line with animation */}
//           <div 
//             className={`absolute left-1/2 top-0 bottom-0 w-1 bg-gray-300 transition-all duration-1500 origin-top ${isVisible ? 'scale-y-100' : 'scale-y-0'}`}
//             style={{ backgroundColor: "#D1D5DB" }}
//           ></div>
          
//           {/* Events */}
//           <div className="space-y-16">
//             {events.map((event) => {
//               const status = getEventStatus(event.date);
//               const isActive = activeEvent === event.id;
//               const isAnimated = animatedEvents.includes(event.id);
//               const isLeft = event.position === "left";
              
//               // Define colors based on status
//               let dotColor, bgColor, textColor, borderColor, statusText;
              
//               switch(status) {
//                 case "past":
//                   dotColor = "#331316";
//                   bgColor = "#F3F4F6";
//                   textColor = "#582422";
//                   borderColor = "#582422";
//                   statusText = "Completed";
//                   break;
//                 case "current":
//                   dotColor = "#AB7B43";
//                   bgColor = "#FEFCE8";
//                   textColor = "#89432A";
//                   borderColor = "#AB7B43";
//                   statusText = "In Progress";
//                   break;
//                 case "future":
//                   dotColor = "#89432A";
//                   bgColor = "#FFFFFF";
//                   textColor = "#331316";
//                   borderColor = "#89432A";
//                   statusText = "Upcoming";
//                   break;
//               }
              
//               // Animation properties based on position
//               const animationDirection = isLeft ? '-translate-x-10' : 'translate-x-10';
              
//               return (
//                 <div 
//                   key={event.id} 
//                   className={`relative flex transition-all duration-500 ${isAnimated ? 'opacity-100 translate-x-0' : `opacity-0 ${animationDirection}`}`}
//                 >
//                   {isLeft ? (
//                     // Left side event
//                     <div className="w-1/2 flex justify-end pr-8">
//                       <div 
//                         className={`max-w-md p-5 rounded-lg transition-all duration-300 ${isActive ? 'scale-105' : 'scale-100'}`}
//                         style={{ 
//                           backgroundColor: bgColor,
//                           borderRight: `4px solid ${borderColor}`,
//                           borderTopRightRadius: '0',
//                           borderBottomRightRadius: '0',
//                           boxShadow: isActive ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none'
//                         }}
//                         onMouseEnter={() => setActiveEvent(event.id)}
//                         onMouseLeave={() => setActiveEvent(null)}
//                       >
//                         <div className="flex items-center mb-2">
//                           <span 
//                             className={`text-2xl mr-3 transition-transform duration-300 ${isActive ? 'scale-125 rotate-12' : ''}`}
//                             style={{ color: textColor }}
//                           >
//                             {event.icon}
//                           </span>
//                           <h3 
//                             className="font-bold text-xl"
//                             style={{ color: textColor }}
//                           >
//                             {event.title}
//                           </h3>
//                         </div>
                        
//                         <div className="text-sm font-medium mb-2" style={{ color: textColor }}>
//                           {shortFormatDate(event.date)}
//                         </div>
                        
//                         <div className="text-sm" style={{ color: status === "past" ? "#6B7280" : textColor }}>
//                           {statusText}
//                         </div>
//                       </div>
//                     </div>
//                   ) : (
//                     // Right side event
//                     <div className="w-1/2 flex justify-start pl-8 ml-auto">
//                       <div 
//                         className={`max-w-md p-5 rounded-lg transition-all duration-300 ${isActive ? 'scale-105' : 'scale-100'}`}
//                         style={{ 
//                           backgroundColor: bgColor,
//                           borderLeft: `4px solid ${borderColor}`,
//                           borderTopLeftRadius: '0',
//                           borderBottomLeftRadius: '0',
//                           boxShadow: isActive ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none'
//                         }}
//                         onMouseEnter={() => setActiveEvent(event.id)}
//                         onMouseLeave={() => setActiveEvent(null)}
//                       >
//                         <div className="flex items-center mb-2">
//                           <span 
//                             className={`text-2xl mr-3 transition-transform duration-300 ${isActive ? 'scale-125 rotate-12' : ''}`}
//                             style={{ color: textColor }}
//                           >
//                             {event.icon}
//                           </span>
//                           <h3 
//                             className="font-bold text-xl"
//                             style={{ color: textColor }}
//                           >
//                             {event.title}
//                           </h3>
//                         </div>
                        
//                         <div className="text-sm font-medium mb-2" style={{ color: textColor }}>
//                           {shortFormatDate(event.date)}
//                         </div>
                        
//                         <div className="text-sm" style={{ color: status === "past" ? "#6B7280" : textColor }}>
//                           {statusText}
//                         </div>
//                       </div>
//                     </div>
//                   )}
                  
//                   {/* Timeline dot */}
//                   <div 
//                     className="absolute left-1/2 transform -translate-x-1/2"
//                     style={{ top: '20px' }}
//                   >
//                     <div 
//                       className={`w-4 h-4 rounded-full transition-all duration-300 ${status === "current" ? "animate-pulse" : ""} ${isActive ? "scale-150" : "scale-100"}`}
//                       style={{ 
//                         backgroundColor: dotColor,
//                         border: `2px solid ${dotColor}`
//                       }}
//                     ></div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
      
//       {/* Mobile view indicator */}
//       <div 
//         className={`mt-12 text-center p-2 rounded-lg bg-gray-100 transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
//       >
//         <p className="text-sm text-gray-600">
//           <span className="md:hidden">View in landscape for best experience</span>
//           <span className="hidden md:inline">Viewing on larger screen</span>
//         </p>
//       </div>
//     </div>
//   );
// }


import { useState, useEffect } from 'react';

export default function Timeline() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeEvent, setActiveEvent] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedEvents, setAnimatedEvents] = useState([]);
  
  // Update current time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Animation on component mount
  useEffect(() => {
    setIsVisible(true);
    
    // Staggered animation for events
    const eventIds = events.map(event => event.id);
    const animationTimer = setInterval(() => {
      setAnimatedEvents(prev => {
        if (prev.length >= eventIds.length) {
          clearInterval(animationTimer);
          return prev;
        }
        return [...prev, eventIds[prev.length]];
      });
    }, 200);
    
    return () => clearInterval(animationTimer);
  }, []);
  
  // Sample hackathon events
  const events = [
    {
      id: 1,
      title: "Registration Opens",
      date: new Date("2025-04-26T09:00:00"),
      icon: "📝",
      position: "left"
    },
    {
      id: 2,
      title: "Opening Ceremony",
      date: new Date("2025-04-26T10:00:00"),
      icon: "🎬",
      position: "right"
    },
    {
      id: 3,
      title: "Hacking Begins",
      date: new Date("2025-04-26T11:00:00"),
      icon: "💻",
      position: "left"
    },
    {
      id: 4,
      title: "Midpoint Check-in",
      date: new Date("2025-04-27T14:00:00"),
      icon: "🔄",
      position: "right"
    },
    {
      id: 5,
      title: "Hacking Ends",
      date: new Date("2025-04-28T09:00:00"),
      icon: "🏁",
      position: "left"
    },
    {
      id: 6,
      title: "Judging & Presentations",
      date: new Date("2025-04-28T10:00:00"),
      icon: "🏆",
      position: "right"
    },
    {
      id: 7,
      title: "Awards Ceremony",
      date: new Date("2025-04-28T16:00:00"),
      icon: "🎉",
      position: "left"
    }
  ];

  // Format date for display
  const formatDate = (date) => {
    return date.toLocaleString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Shorter date format similar to the image example
  const shortFormatDate = (date) => {
    return `${date.toLocaleString('en-US', {
      weekday: 'short'
    })}, ${date.toLocaleString('en-US', {
      month: 'short'
    })} ${date.getDate()}, ${date.toLocaleString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    })}`;
  };

  // Determine if event is in the past, current, or future
  const getEventStatus = (eventDate) => {
    if (eventDate < currentTime) return "past";
    
    // Find next event
    const upcomingEvents = events.filter(e => e.date > currentTime);
    if (upcomingEvents.length > 0 && eventDate.getTime() === upcomingEvents[0].date.getTime()) {
      return "current";
    }
    
    return "future";
  };

  return (
    <div 
      className={`max-w-4xl mx-auto p-6 rounded-lg shadow-lg transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{
        background: 'rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(1px)',
        border: '2px solid rgb(255, 255, 255)'
      }}
    >
      <h2 
        className={`text-2xl font-bold mb-8 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        style={{ color: "#331316" }}
      >
        Hackathon Timeline
      </h2>
      
      {/* Current time indicator */}
      <div 
        className={`mb-10 text-center p-3 rounded-lg transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        style={{ 
          backgroundColor: "rgba(171, 123, 67, 0.3)", // Glass effect with AB7B43
          color: "white",
          backdropFilter: 'blur(5px)' // Add a subtle blur to the background
        }}
      >
        <p className="font-medium">Current Time: {formatDate(currentTime)}</p>
      </div>
      
      {/* Timeline container */}
      <div className="relative flex justify-center">
        <div className="w-full max-w-3xl relative">
          {/* Vertical line with animation */}
          <div 
            className={`absolute left-1/2 top-0 bottom-0 w-1 bg-gray-300 transition-all duration-1500 origin-top ${isVisible ? 'scale-y-100' : 'scale-y-0'}`}
            style={{ backgroundColor: "#D1D5DB" }}
          ></div>
          
          {/* Events */}
          <div className="space-y-16">
            {events.map((event) => {
              const status = getEventStatus(event.date);
              const isActive = activeEvent === event.id;
              const isAnimated = animatedEvents.includes(event.id);
              const isLeft = event.position === "left";
              
              // Define colors based on status
              let dotColor, bgColor, textColor, borderColor, statusText;
              
              switch(status) {
                case "past":
                  dotColor = "#331316";
                  bgColor = "rgba(243, 244, 246, 0.8)"; // Glass effect
                  textColor = "#582422";
                  borderColor = "#582422";
                  statusText = "Completed";
                  break;
                case "current":
                  dotColor = "#AB7B43";
                  bgColor = "rgba(254, 252, 232, 0.8)"; // Glass effect
                  textColor = "#89432A";
                  borderColor = "#AB7B43";
                  statusText = "In Progress";
                  break;
                case "future":
                  dotColor = "#89432A";
                  bgColor = "rgba(255, 255, 255, 0.8)"; // Glass effect
                  textColor = "#331316";
                  borderColor = "#89432A";
                  statusText = "Upcoming";
                  break;
              }
              
              // Animation properties based on position
              const animationDirection = isLeft ? '-translate-x-10' : 'translate-x-10';
              
              return (
                <div 
                  key={event.id} 
                  className={`relative flex transition-all duration-500 ${isAnimated ? 'opacity-100 translate-x-0' : `opacity-0 ${animationDirection}`}`}
                >
                  {isLeft ? (
                    // Left side event
                    <div className="w-1/2 flex justify-end pr-8">
                      <div 
                        className={`max-w-md p-5 rounded-lg transition-all duration-300 ${isActive ? 'scale-105' : 'scale-100'}`}
                        style={{ 
                          backgroundColor: bgColor,
                          borderRight: `4px solid ${borderColor}`,
                          borderTopRightRadius: '0',
                          borderBottomRightRadius: '0',
                          boxShadow: isActive ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
                          backdropFilter: 'blur(5px)' // Glass effect
                        }}
                        onMouseEnter={() => setActiveEvent(event.id)}
                        onMouseLeave={() => setActiveEvent(null)}
                      >
                        <div className="flex items-center mb-2">
                          <span 
                            className={`text-2xl mr-3 transition-transform duration-300 ${isActive ? 'scale-125 rotate-12' : ''}`}
                            style={{ color: textColor }}
                          >
                            {event.icon}
                          </span>
                          <h3 
                            className="font-bold text-xl"
                            style={{ color: textColor }}
                          >
                            {event.title}
                          </h3>
                        </div>
                        
                        <div className="text-sm font-medium mb-2" style={{ color: textColor }}>
                          {shortFormatDate(event.date)}
                        </div>
                        
                        <div className="text-sm" style={{ color: status === "past" ? "#6B7280" : textColor }}>
                          {statusText}
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Right side event
                    <div className="w-1/2 flex justify-start pl-8 ml-auto">
                      <div 
                        className={`max-w-md p-5 rounded-lg transition-all duration-300 ${isActive ? 'scale-105' : 'scale-100'}`}
                        style={{ 
                          backgroundColor: bgColor,
                          borderLeft: `4px solid ${borderColor}`,
                          borderTopLeftRadius: '0',
                          borderBottomLeftRadius: '0',
                          boxShadow: isActive ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
                          backdropFilter: 'blur(5px)' // Glass effect
                        }}
                        onMouseEnter={() => setActiveEvent(event.id)}
                        onMouseLeave={() => setActiveEvent(null)}
                      >
                        <div className="flex items-center mb-2">
                          <span 
                            className={`text-2xl mr-3 transition-transform duration-300 ${isActive ? 'scale-125 rotate-12' : ''}`}
                            style={{ color: textColor }}
                          >
                            {event.icon}
                          </span>
                          <h3 
                            className="font-bold text-xl"
                            style={{ color: textColor }}
                          >
                            {event.title}
                          </h3>
                        </div>
                        
                        <div className="text-sm font-medium mb-2" style={{ color: textColor }}>
                          {shortFormatDate(event.date)}
                        </div>
                        
                        <div className="text-sm" style={{ color: status === "past" ? "#6B7280" : textColor }}>
                          {statusText}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Timeline dot */}
                  <div 
                    className="absolute left-1/2 transform -translate-x-1/2"
                    style={{ top: '20px' }}
                  >
                    <div 
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${status === "current" ? "animate-pulse" : ""} ${isActive ? "scale-150" : "scale-100"}`}
                      style={{ 
                        backgroundColor: dotColor,
                        border: `2px solid ${dotColor}`
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Mobile view indicator */}
      <div 
        className={`mt-12 text-center p-2 rounded-lg bg-gray-100 transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
      >
        <p className="text-sm text-gray-600">
          <span className="md:hidden">View in landscape for best experience</span>
          <span className="hidden md:inline">Viewing on larger screen</span>
        </p>
      </div>
    </div>
  );
}