import React from 'react';
import { motion } from 'framer-motion';

const BackgroundGrid = ({ scrollPosition }) => {
    return (
        <>
            {/* Modern grid background layers */}
            <div className="grid-background" style={{ opacity: Math.min(scrollPosition / 300, 1) }}></div>
            <div className="grid-glow" style={{ opacity: Math.min(scrollPosition / 500, 1) }}></div>

            {/* Dynamic grid cells that appear on scroll */}
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
                {Array.from({ length: 100 }).map((_, index) => {
                    const row = Math.floor(index / 10);
                    const col = index % 10;
                    const delay = (row + col) * 0.05;
                    const isVisible = scrollPosition > (index * 20);

                    return (
                        <motion.div
                            key={index}
                            className="grid-cell"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{
                                opacity: isVisible ? 1 : 0,
                                scale: isVisible ? 1 : 0.8,
                            }}
                            transition={{
                                duration: 0.3,
                                delay: delay
                            }}
                            style={{
                                top: `${row * 10}%`,
                                left: `${col * 10}%`,
                            }}
                        />
                    );
                })}
            </div>

            {/* Overlay for better contrast */}
            <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]"></div>
        </>
    );
};

export default BackgroundGrid; 