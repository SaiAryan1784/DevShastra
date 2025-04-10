import React from 'react';
import { motion } from 'framer-motion';

const BackgroundGrid = ({ scrollPosition }) => {
    return (
        <>
            {/* Modern grid background layers - always visible */}
            <div className="grid-background" style={{ opacity: 0.7 }}></div>
            <div className="grid-glow" style={{ opacity: 0.5 }}></div>

            {/* Dynamic grid cells that appear on scroll except for home section */}
            <div
                id="dynamic-grid"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 2,
                    pointerEvents: 'none'
                }}
            >
                {Array.from({ length: 4 }).map((_, index) => {
                    const row = Math.floor(index / 2);
                    const col = index % 2;
                    const delay = (row + col) * 0.05;
                    const isVisible = scrollPosition < window.innerHeight ? true : scrollPosition > (index * 20);

                    return (
                        <motion.div
                            key={index}
                            className="grid-cell"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{
                                opacity: isVisible ? 0.7 : 0,
                                scale: isVisible ? 1 : 0.8,
                                border: '1px solid rgba(124, 58, 237, 0.3)'
                            }}
                            transition={{
                                duration: 0.3,
                                delay: scrollPosition < window.innerHeight ? delay : 0
                            }}
                            style={{
                                top: `${row * 50}%`,
                                left: `${col * 50}%`,
                                width: '50%',
                                height: '50%',
                                border: '1px solid rgba(124, 58, 237, 0.3)',
                                background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.1), rgba(15, 23, 42, 0.05))',
                                boxShadow: '0 0 20px rgba(124, 58, 237, 0.1)'
                            }}
                        />
                    );
                })}
            </div>

            {/* Overlay for better contrast */}
            <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]"></div>
        </>
    );
};

export default BackgroundGrid; 