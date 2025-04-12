import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';

// --- Data (Hackathon Events and Themes) ---
// (Keep the hackathonEvents and themeVariants arrays/objects as they were in your original code)
const hackathonEvents = [
  {
    id: 1,
    title: "The Grand Opening 🎭",
    description: "Roll out of bed and into the most epic hackathon kickoff! Time to meet your fellow code warriors and grab that essential morning coffee elixir.",
    timestamp: "Day 1 - Early Bird Hours",
    icon: "🌟"
  },
  {
    id: 2,
    title: "Brain Fuel Session 🧠",
    description: "Tech talks that won't put you to sleep! Our wizards of wisdom share their secrets while you munch on brain food (aka snacks).",
    timestamp: "Day 1 - Morning Magic",
    icon: "📚"
  },
  {
    id: 3,
    title: "Squad Assembly Time 🤝",
    description: "Find your coding soulmates! Whether you're a CSS wizard or a backend ninja, your dream team awaits. No awkward icebreakers, we promise!",
    timestamp: "Day 1 - When The Sun's High",
    icon: "🤝"
  },
  {
    id: 4,
    title: "The Great Code-Off Begins! ⚡",
    description: "Fingers on keyboards, energy drinks at the ready! Time to turn those wild ideas into working wonders. May the bugs be ever in your favor!",
    timestamp: "Day 1 - Post-Lunch Power Hour",
    icon: "💻"
  },
  {
    id: 5,
    title: "Midnight Madness 🌙",
    description: "When the clock strikes twelve, the real magic happens! Pizza-powered coding sessions and debugging adventures await the brave.",
    timestamp: "Day 1 - When The Moon Rules",
    icon: "🌙"
  },
  {
    id: 6,
    title: "Dawn of Innovation ☀️",
    description: "Sunrise, coffee refills, and that moment when your code finally works! Keep pushing through - you're halfway to glory!",
    timestamp: "Day 2 - First Light",
    icon: "☀️"
  },
  {
    id: 7,
    title: "The Final Countdown ⏰",
    description: "Panic mode: Activated! Time to squash those bugs, polish that UI, and prepare for the grand finale. No pressure, just excitement!",
    timestamp: "Day 2 - High Noon",
    icon: "⚡"
  },
  {
    id: 8,
    title: "Show & Tell Spectacular 🎪",
    description: "Your moment to shine! Dazzle the judges with your creation. Pro tip: Pretend the demo gods are watching and triple-check everything!",
    timestamp: "Day 2 - Tea Time",
    icon: "🎭"
  },
  {
    id: 9,
    title: "The Victory Lap 🏆",
    description: "Drum roll, please! Time to crown the champions and celebrate everyone's amazing achievements. Yes, even that project that 'almost' worked!",
    timestamp: "Day 2 - Golden Hour",
    icon: "🏆"
  },
  {
    id: 10,
    title: "The After-Party 🎉",
    description: "You did it! Time to celebrate with your fellow survivors - er, participants! Share war stories, exchange contacts, and plan world domination.",
    timestamp: "Day 2 - When Stars Appear",
    icon: "🎉"
  }
];

const themeVariants = {
  customTheme: { name: "Ancient Forest", colors: { primary: "#AB7B43", secondary: "#89432A", background: "from-stone-950 to-stone-900", card: "bg-stone-800/70", text: "text-amber-200", timeline: "bg-gradient-to-b from-amber-700/30 via-amber-600/50 to-amber-700/30" }, fogColor: 0x331316, treeColor: 0x582422, trunkColor: 0x89432A, particleColor: 0xAB7B43 },
  goldenSanctuary: { name: "Golden Sanctuary", colors: { primary: "#FCD34D", secondary: "#F59E0B", background: "from-amber-900 to-amber-950", card: "bg-amber-900/70", text: "text-amber-200", timeline: "bg-gradient-to-b from-amber-500/30 via-amber-400/50 to-amber-500/30" }, fogColor: 0x78350f, treeColor: 0xfcd34d, trunkColor: 0x92400e, particleColor: 0xfef3c7 }
};

// --- Helper Components ---

const MagicalGlow = ({ size = 20, color, delay = 0 }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none" // Added pointer-events-none
    style={{
      background: `radial-gradient(circle, ${color}20 0%, ${color}00 70%)`,
      width: `${size}rem`,
      height: `${size}rem`,
      filter: "blur(8px)",
      // Center the glow regardless of parent positioning context
      left: '50%',
      top: '50%',
      transform: "translate(-50%, -50%)"
    }}
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.4, 0.7, 0.4]
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      delay
    }}
  />
);

const MagicalParticles = ({ color = "#AB7B43" }) => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 }); // Start off-screen
  const [particles, setParticles] = useState([]);
  const particleColor = color || "#AB7B43"; // Ensure color has a default

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      if (Math.random() > 0.7) { // Reduced frequency slightly
        const newParticle = {
          id: Date.now() + Math.random(), // Add random to avoid collision
          x: e.clientX + (Math.random() - 0.5) * 10, // Slight offset
          y: e.clientY + (Math.random() - 0.5) * 10,
          size: Math.random() * 6 + 2, // Slightly smaller max size
          lifetime: Math.random() * 1500 + 500, // Shorter max lifetime
          createdAt: Date.now()
        };
        setParticles(prev => [...prev.slice(-50), newParticle]); // Limit particle array size
      }
    };

    const cleanupInterval = setInterval(() => {
      const now = Date.now();
      setParticles(prev => prev.filter(p => now - p.createdAt < p.lifetime));
    }, 1000); // Increased cleanup interval

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(cleanupInterval);
    };
  }, []); // Empty dependency array is correct here

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden"> {/* Added overflow-hidden */}
      {/* Main cursor glow */}
      <motion.div
        className="absolute rounded-full"
        style={{
          background: `radial-gradient(circle, ${particleColor}30 0%, ${particleColor}00 70%)`, // Adjusted opacity
          width: "80px", // Slightly smaller
          height: "80px",
          filter: "blur(12px)", // Slightly more blur
          left: mousePos.x,
          top: mousePos.y,
          transform: "translate(-50%, -50%)"
        }}
        animate={{ scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Trailing particles */}
      <AnimatePresence>
        {particles.map(particle => {
          const progress = Math.min(1, (Date.now() - particle.createdAt) / particle.lifetime); // Ensure progress doesn't exceed 1
          return (
            <motion.div
              key={particle.id}
              className="absolute rounded-full"
              style={{
                background: particleColor,
                width: particle.size,
                height: particle.size,
                left: particle.x,
                top: particle.y,
                transform: "translate(-50%, -50%)"
              }}
              initial={{ opacity: 0.8, y: 0, x: 0 }}
              animate={{
                y: -40 - Math.random() * 30, // Increased upward motion
                x: (Math.random() - 0.5) * 50, // Increased sideways motion
                opacity: 0,
                scale: 0.5 // Shrink as they fade
              }}
              transition={{
                duration: particle.lifetime / 1000,
                ease: "easeOut"
              }}
              exit={{ opacity: 0 }} // Ensure exit animation completes
            />
          );
        })}
      </AnimatePresence>
    </div>
  );
};


// --- Timeline Event Item Component ---
const TimelineEventItem = React.memo(({ event, index, theme, isActive, isHovered, setActiveEvent, setHoveredEvent }) => {
  const { colors } = theme;
  // On medium screens and up, use alternating layout. Otherwise, stack vertically.
  // md corresponds to 768px by default in Tailwind
  const isAlternatingLayout = window.innerWidth >= 768; // Check screen width for layout logic
  const isEven = index % 2 === 0;

  // Base classes
  const containerClasses = `relative flex items-start md:items-center mb-16 md:mb-24 last:mb-8`;
  // Responsive layout classes
  const layoutClasses = isAlternatingLayout
    ? (isEven ? 'md:flex-row' : 'md:flex-row-reverse')
    : 'flex-col'; // Stack vertically on small screens

  return (
    <motion.div
      key={event.id}
      className={`${containerClasses} ${layoutClasses}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }} // Trigger animation sooner
      transition={{ duration: 0.6, delay: index * 0.05 }} // Faster animation
    >
      {/* --- Content Card --- */}
      {/* Takes full width on mobile, 5/12 on desktop */}
      <div className={`w-full ${isAlternatingLayout ? (isEven ? 'md:w-5/12 md:pr-8' : 'md:w-5/12 md:pl-8') : 'mb-4 pl-12 pr-4'}`}> {/* Adjusted padding for mobile */}
        <motion.div
          className={`relative ${colors.card} backdrop-blur-sm border transition-all duration-300 rounded-lg md:rounded-xl p-4 md:p-5 shadow-lg ${isActive || isHovered ? `border-[${colors.primary}]/70` : `border-[${colors.primary}]/30`}`} // Using actual color variable
          style={{
            '--glow-color': colors.primary, // CSS variable for boxShadow
            borderColor: isActive || isHovered ? `${colors.primary}99` : `${colors.primary}4D`, // Dynamic border color
          }}
          whileHover={isAlternatingLayout ? { // Only apply hover scale on larger screens if desired
            scale: 1.03,
            boxShadow: `0 0 20px 5px var(--glow-color)33` // Use CSS var, softer glow
          } : {}}
          onClick={() => setActiveEvent(isActive ? null : event.id)}
          onMouseEnter={() => setHoveredEvent(event.id)}
          onMouseLeave={() => setHoveredEvent(null)}
        >
          {/* Icon and title */}
          <div className="flex items-center gap-3 mb-2 md:mb-3">
            <div className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full text-xl md:text-2xl transition-all duration-300 ${isActive || isHovered ? `bg-[${colors.primary}]/40` : `bg-[${colors.secondary}]/30`}`}
              style={{ backgroundColor: isActive || isHovered ? `${colors.primary}66` : `${colors.secondary}4D` }}>
              {event.icon}
            </div>
            <h3 className={`text-lg md:text-2xl font-bold ${colors.text}`}>{event.title}</h3>
          </div>

          {/* Description */}
          <p className={`${colors.text.replace('text-', 'text-opacity-')}90 text-sm md:text-base mb-2 md:mb-3`}>{event.description}</p> {/* Responsive text size */}

          {/* Timestamp */}
          <div className={`text-xs md:text-sm ${colors.text.replace('text-', 'text-opacity-')}70 italic`}> {/* Responsive text size */}
            {event.timestamp}
          </div>

          {/* Decorative elements (subtle border) */}
          <div className={`absolute top-1 left-1 right-1 bottom-1 border border-[${colors.primary}]/10 rounded-md md:rounded-lg pointer-events-none`}
            style={{ borderColor: `${colors.primary}1A` }} />

          {/* Shimmer effect */}
          {(isActive || isHovered) && (
            <motion.div
              className="absolute inset-0 rounded-lg md:rounded-xl overflow-hidden pointer-events-none" // Added pointer-events-none
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="absolute inset-0  opacity-50" style={{ // Generic color, consider making dynamic
                backgroundSize: "200% 100%",
                animation: "shimmerEffect 2.5s infinite linear"
              }} />
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* --- Center Node & Connecting Line --- */}
      {/* Positioned absolutely on mobile, relatively on desktop */}
      <div className={`flex justify-center ${isAlternatingLayout ? 'w-2/12 relative' : 'absolute left-4 top-2 h-full w-10'}`}> {/* Positioning changes */}
        <motion.div
          className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center z-10 cursor-pointer transition-all duration-300 ${isActive || isHovered ? `bg-[${colors.primary}]` : `bg-[${colors.secondary}]`}`}
          style={{ backgroundColor: isActive || isHovered ? colors.primary : colors.secondary }}
          whileHover={{ scale: 1.1 }}
          onClick={() => setActiveEvent(isActive ? null : event.id)}
          onMouseEnter={() => setHoveredEvent(event.id)}
          onMouseLeave={() => setHoveredEvent(null)}
        >
          <span className={`text-sm md:text-lg font-bold ${isActive || isHovered ? 'text-black/80' : colors.text.replace('text-', 'text-opacity-') + '90'}`}> {/* Contrast for active */}
            {index + 1}
          </span>
        </motion.div>

        {/* Connection line to center (Desktop) */}
        {isAlternatingLayout && (
          <div
            className={`absolute top-1/2 ${isEven ? 'left-0 right-1/2' : 'left-1/2 right-0'} h-0.5 bg-[${colors.primary}]/50 transform -translate-y-1/2`}
            style={{ backgroundColor: `${colors.primary}80` }}
          />
        )}
        {/* Connection line to card (Mobile) */}
        {!isAlternatingLayout && (
          <div
            className={`absolute top-5 left-1/2 w-6 h-0.5 bg-[${colors.primary}]/50 transform -translate-x-1/2`} // Horizontal line from node to card area
            style={{ backgroundColor: `${colors.primary}80` }}
          />
        )}
      </div>

      {/* Empty space for alternating layout (Desktop only) */}
      {isAlternatingLayout && <div className="w-5/12" />}

    </motion.div>
  );
});
TimelineEventItem.displayName = 'TimelineEventItem'; // Add display name for React DevTools


// --- Main Timeline Component ---
const Timeline = () => {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null); // Ref to hold scene objects
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const treeGroupRef = useRef(null);
  const particleSystemRef = useRef(null);

  const [activeEvent, setActiveEvent] = useState(null);
  const [hoveredEvent, setHoveredEvent] = useState(null);
  const [currentTheme, setCurrentTheme] = useState("customTheme"); // Default theme
  const theme = themeVariants[currentTheme];

  // Debounced resize handler
  const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };


  // Setup Three.js Scene
  // useEffect(() => {
  //   if (!canvasRef.current) return;

  //   // Initialize scene, camera, renderer if they don't exist
  //   if (!sceneRef.current) {
  //       sceneRef.current = new THREE.Scene();
  //       cameraRef.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  //       cameraRef.current.position.set(0, 5, 18); // Adjusted initial camera position
  //       rendererRef.current = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true }); // Added antialias
  //       rendererRef.current.setSize(window.innerWidth, window.innerHeight);
  //       rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Pixel ratio optimization

  //       // Lights (create only once)
  //       const ambientLight = new THREE.AmbientLight(0xffffff, 0.2); // Base ambient light
  //       sceneRef.current.add(ambientLight);
  //       sceneRef.current.ambientLight = ambientLight; // Store reference

  //       const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6); // Base directional light
  //       directionalLight.position.set(5, 15, 10);
  //       sceneRef.current.add(directionalLight);
  //       sceneRef.current.directionalLight = directionalLight; // Store reference
  //   }

  //   const scene = sceneRef.current;
  //   const camera = cameraRef.current;
  //   const renderer = rendererRef.current;


  //   // --- Theme-dependent updates ---
  //   scene.fog = new THREE.FogExp2(theme.fogColor, 0.02); // Adjusted fog density

  //   // Update light colors based on theme
  //   scene.ambientLight.color.setHex(theme.fogColor); // Ambient light matches fog base
  //   scene.ambientLight.intensity = 0.4;
  //   scene.directionalLight.color.setHex(theme.particleColor); // Directional light matches particle highlights
  //   scene.directionalLight.intensity = 0.8;

  //    // --- Ground ---
  //    if (!scene.ground) {
  //       const groundGeometry = new THREE.PlaneGeometry(200, 200); // Larger ground
  //       const groundMaterial = new THREE.MeshStandardMaterial({ color: theme.fogColor, roughness: 0.9 });
  //       const ground = new THREE.Mesh(groundGeometry, groundMaterial);
  //       ground.rotation.x = -Math.PI / 2;
  //       ground.position.y = -2.5;
  //       scene.add(ground);
  //       scene.ground = ground;
  //    } else {
  //        scene.ground.material.color.setHex(theme.fogColor); // Update ground color
  //        scene.ground.material.needsUpdate = true;
  //    }

  //   // --- Trees ---
  //   if (treeGroupRef.current) {
  //     scene.remove(treeGroupRef.current); // Remove old trees before adding new ones
  //   }
  //   treeGroupRef.current = new THREE.Group();
  //   scene.add(treeGroupRef.current);

  //   // Cached geometries and materials for trees
  //   const trunkGeometry = new THREE.CylinderGeometry(0.4, 0.6, 5, 6); // Simplified geometry
  //   const foliageGeometry = new THREE.ConeGeometry(1.8, 3.5, 6); // Simplified geometry
  //   const trunkMaterial = new THREE.MeshStandardMaterial({ color: theme.trunkColor });
  //   const foliageMaterial = new THREE.MeshStandardMaterial({ color: theme.treeColor, flatShading: true });

  //   const createTree = (x, z) => {
  //     const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
  //     trunk.position.set(x, 0, z); // Y position adjusted later by ground level

  //     const foliage1 = new THREE.Mesh(foliageGeometry, foliageMaterial);
  //     foliage1.position.y = 3;
  //     trunk.add(foliage1);

  //     const foliage2 = new THREE.Mesh(foliageGeometry, foliageMaterial);
  //     foliage2.position.y = 4.8; // Adjusted position
  //     foliage2.scale.set(0.7, 0.7, 0.7); // Adjusted scale
  //     trunk.add(foliage2);

  //     trunk.position.y = -2.5; // Place base on ground level
  //     return trunk;
  //   };

  //    // Dynamic tree count based on screen size (example)
  //    const isMobile = window.innerWidth < 768;
  //    const treeCount = isMobile ? 60 : 120; // Reduced count significantly
  //    const maxRadius = isMobile ? 30 : 45;

  //    // Create trees in rings + random scatter
  //    for (let i = 0; i < treeCount; i++) {
  //       const angle = Math.random() * Math.PI * 2;
  //       const radius = 8 + Math.random() * (maxRadius - 8); // Spread from center outwards
  //       const x = Math.cos(angle) * radius;
  //       const z = Math.sin(angle) * radius - 10; // Move forest slightly back

  //       const tree = createTree(x, z);
  //       tree.scale.set(
  //         0.6 + Math.random() * 1.0,
  //         0.8 + Math.random() * 0.8,
  //         0.6 + Math.random() * 1.0
  //       );
  //       tree.rotation.y = Math.random() * Math.PI * 2;
  //       treeGroupRef.current.add(tree);
  //    }

  //    // --- Particles ---
  //    if (particleSystemRef.current) {
  //       scene.remove(particleSystemRef.current); // Remove old particles
  //       particleSystemRef.current.geometry.dispose();
  //       particleSystemRef.current.material.dispose();
  //    }

  //    const particleCount = isMobile ? 300 : 600; // Reduced particle count
  //    const particleGeometry = new THREE.BufferGeometry();
  //    const positions = new Float32Array(particleCount * 3);
  //    const particleMaxRadius = isMobile ? 35 : 50;

  //    for (let i = 0; i < particleCount; i++) {
  //       const i3 = i * 3;
  //       const radius = 5 + Math.random() * particleMaxRadius;
  //       const angle = Math.random() * Math.PI * 2;
  //       positions[i3] = Math.cos(angle) * radius;
  //       positions[i3 + 1] = Math.random() * 12 - 1; // Height range
  //       positions[i3 + 2] = Math.sin(angle) * radius - 15; // Z offset
  //    }
  //    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  //    const particleMaterial = new THREE.PointsMaterial({
  //       color: theme.particleColor,
  //       size: isMobile ? 0.3 : 0.4, // Smaller particles on mobile
  //       sizeAttenuation: true,
  //       transparent: true,
  //       opacity: 0.7,
  //       blending: THREE.AdditiveBlending,
  //       depthWrite: false // Important for blending
  //    });

  //    particleSystemRef.current = new THREE.Points(particleGeometry, particleMaterial);
  //    scene.add(particleSystemRef.current);


  //    // --- Animation Loop ---
  //    let animationFrameId;
  //    const animate = () => {
  //      animationFrameId = requestAnimationFrame(animate);
  //      const elapsedTime = Date.now() * 0.0001; // Slower base speed

  //      // Tree sway
  //      treeGroupRef.current?.children.forEach((tree, i) => {
  //        tree.rotation.x = Math.sin(elapsedTime * 3 + i * 0.5) * 0.015;
  //        tree.rotation.z = Math.cos(elapsedTime * 5 + i * 0.3) * 0.015;
  //      });

  //      // Particle movement
  //      if (particleSystemRef.current) {
  //        const posAttribute = particleSystemRef.current.geometry.attributes.position;
  //        for (let i = 0; i < particleCount; i++) {
  //          const i3 = i * 3;
  //          // Gentle floating based on index and time
  //          posAttribute.array[i3 + 1] += Math.sin(elapsedTime * 5 + i) * 0.005; // Y movement
  //          // Keep particles within a vertical range
  //          if (posAttribute.array[i3+1] > 12) posAttribute.array[i3+1] = -1;
  //          if (posAttribute.array[i3+1] < -1) posAttribute.array[i3+1] = 12;
  //        }
  //        posAttribute.needsUpdate = true;
  //      }

  //       // Smooth camera movement towards center (optional)
  //       // camera.position.x += (-camera.position.x) * 0.01;
  //       // camera.lookAt(scene.position);

  //      renderer.render(scene, camera);
  //    };
  //    animate();

  //    // --- Resize Handling ---
  //    const handleResize = () => {
  //       if (camera && renderer) {
  //          camera.aspect = window.innerWidth / window.innerHeight;
  //          camera.updateProjectionMatrix();
  //          renderer.setSize(window.innerWidth, window.innerHeight);
  //          renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Update pixel ratio on resize

  //          // Adjustments for mobile aspect ratio (optional)
  //          if (window.innerWidth / window.innerHeight < 1) { // Portrait
  //              camera.fov = 85; // Wider FOV
  //              // camera.position.z = 20; // Move slightly further back
  //          } else { // Landscape
  //              camera.fov = 75;
  //              // camera.position.z = 18;
  //          }
  //          camera.updateProjectionMatrix(); // Apply FOV changes
  //       }
  //    };

  //    const debouncedResize = debounce(handleResize, 100); // Debounce resize events
  //    window.addEventListener('resize', debouncedResize);
  //    handleResize(); // Initial call


  //    // --- Cleanup ---
  //    return () => {
  //      window.removeEventListener('resize', debouncedResize);
  //      cancelAnimationFrame(animationFrameId);
  //       // Consider disposing geometries/materials if component unmounts frequently,
  //       // but for a main page component, it might not be necessary.
  //       // If needed: scene.traverse(obj => { /* dispose logic */ });
  //    };
  // }, [currentTheme, theme]); // Rerun effect when theme changes

  return (
    <div id="timeline" className={`relative min-h-screen font-serif overflow-hidden`}>
      {/* Theme Selector
      <div className="absolute top-4 right-4 z-20">
        <select
          className="bg-black/40 text-white text-sm border border-white/20 rounded px-2 py-1 backdrop-blur-sm appearance-none cursor-pointer" // Style adjustments
          value={currentTheme}
          onChange={(e) => {
            setCurrentTheme(e.target.value);
            setActiveEvent(null); // Reset active event on theme change
            setHoveredEvent(null);
          }}
        >
          {Object.entries(themeVariants).map(([key, themeMeta]) => ( // Use Object.entries for key and value
            <option key={key} value={key}>
              {themeMeta.name}
            </option>
          ))}
        </select>
      </div> */}

      {/* Three.js Background Canvas */}
      {/* <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" /> */}

      {/* Gradient Overlay for Depth (Optional) */}
      {/* <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/30 to-transparent z-5 pointer-events-none"></div> */}


      {/* Content Container */}
      <div className="relative z-10 pt-20 md:pt-24 pb-24 px-4"> {/* Increased top padding */}
        <motion.h1
          className={`text-3xl sm:text-4xl md:text-5xl text-center font-bold ${theme.colors.text} mb-16 md:mb-20`} // Responsive font size and margin
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block mr-2 md:mr-3 text-2xl md:text-3xl">🌿</span> {/* Responsive icon size */}
          The Enchanted Hackathon
          <span className="inline-block ml-2 md:ml-3 text-2xl md:text-3xl">🌿</span>
        </motion.h1>

        {/* Timeline Area */}
        {/* Use max-w-md for mobile, max-w-5xl for desktop */}
        <div className="max-w-md md:max-w-5xl mx-auto">
          {/* Central path - adjusted for responsiveness */}
          <div className="relative">
            {/* Vertical line: positioned left on mobile, center on desktop */}
            <div className={`absolute top-0 bottom-0 w-1 ${theme.colors.timeline} rounded-full left-4 md:left-1/2 md:-translate-x-1/2`} />

            {/* Background glows - positioned relative to the container */}
            {/* Use relative positioning for glows so they adapt to the container's width */}
            <div className="absolute w-full h-full top-0 left-0 pointer-events-none">
              {/* Example positioning - adjust top/left percentages */}
              <div className="absolute left-1/4 top-1/4 -translate-x-1/2 -translate-y-1/2 md:left-1/2">
                <MagicalGlow size={12} color={theme.colors.secondary} delay={0.5} />
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <MagicalGlow size={18} color={theme.colors.primary} delay={1.5} />
              </div>
              <div className="absolute left-3/4 top-3/4 -translate-x-1/2 -translate-y-1/2 md:left-1/2">
                <MagicalGlow size={12} color={theme.colors.primary} delay={1} />
              </div>
            </div>

            {/* Event items */}
            <div> {/* Added a container div for events */}
              {hackathonEvents.map((event, index) => (
                <TimelineEventItem
                  key={event.id}
                  event={event}
                  index={index}
                  theme={theme}
                  isActive={activeEvent === event.id}
                  isHovered={hoveredEvent === event.id}
                  setActiveEvent={setActiveEvent}
                  setHoveredEvent={setHoveredEvent}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom cursor effect */}
      <MagicalParticles color={theme.colors.primary} />

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes shimmerEffect {
          0% { background-position: -100% 0; } /* Start further left */
          100% { background-position: 200% 0; }
        }
        /* Style scrollbar for a more thematic feel (optional) */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            
        }
        ::-webkit-scrollbar-thumb {
            
            border-radius: 10px;
            border: 2px solid transparent;
            background-clip: content-box;
        }
         ::-webkit-scrollbar-thumb:hover {
           
        }

        /* Fallback for Firefox */
        * {
           scrollbar-width: thin;
           scrollbar-color: ${theme.colors.primary}80 #00000030;
        }

        body {
           /* Improve font rendering */
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </div>
  );
};

export default Timeline;