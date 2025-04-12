import React from 'react';
import { motion } from 'framer-motion';
import './BackgroundGrid.css';

const GlowingOrbs = ({ variant = 'default' }) => {
    const variants = {
        default: {
            orb1: {
                width: '500px',
                height: '500px',
                color: 'var(--primary)',
                top: '-100px',
                right: '-100px',
                animationDuration: '20s'
            },
            orb2: {
                width: '300px',
                height: '300px',
                color: 'var(--accent-blue)',
                bottom: '-100px',
                left: '-100px',
                animationDuration: '15s'
            },
            orb3: {
                width: '400px',
                height: '400px',
                color: 'var(--accent-orange)',
                top: '50%',
                left: '60%',
                animationDuration: '18s'
            }
        },
        alternate: {
            orb1: {
                width: '400px',
                height: '400px',
                color: 'var(--accent-green)',
                top: '20%',
                right: '-50px',
                animationDuration: '22s'
            },
            orb2: {
                width: '350px',
                height: '350px',
                color: 'var(--primary-light)',
                bottom: '30%',
                left: '-80px',
                animationDuration: '17s'
            },
            orb3: {
                width: '450px',
                height: '450px',
                color: 'var(--secondary)',
                top: '70%',
                right: '20%',
                animationDuration: '19s'
            }
        }
    };

    const currentVariant = variants[variant];

    return (
        <div className="glowing-orbs">
            {Object.entries(currentVariant).map(([key, orb]) => (
                <motion.div
                    key={key}
                    className="orb"
                    style={{
                        width: orb.width,
                        height: orb.height,
                        background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
                        top: orb.top,
                        left: orb.left,
                        right: orb.right,
                        bottom: orb.bottom,
                        animation: `float-slow ${orb.animationDuration} ease-in-out infinite alternate`
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    transition={{ duration: 1.5 }}
                />
            ))}
        </div>
    );
};

export default GlowingOrbs; 