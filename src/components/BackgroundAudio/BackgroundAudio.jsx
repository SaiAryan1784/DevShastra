import { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function BackgroundAudio() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [audio] = useState(new Audio('/background-music.mp3')); // You'll need to add your music file to the public folder

    useEffect(() => {
        // Configure audio
        audio.loop = true;
        audio.volume = 1; // Set initial volume to 30%

        return () => {
            audio.pause();
            audio.currentTime = 0;
        };
    }, [audio]);

    useEffect(() => {
        if (isPlaying) {
            audio.play().catch(error => {
                console.log("Audio playback failed:", error);
                setIsPlaying(false);
            });
        } else {
            audio.pause();
        }
    }, [isPlaying, audio]);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <button
            onClick={togglePlay}
            className="fixed bottom-4 right-4 z-50 p-2 rounded-full bg-amber-900/10 border border-amber-700/20 hover:bg-amber-900/20 transition-all duration-200"
            title={isPlaying ? "Mute music" : "Play music"}
        >
            {isPlaying ? (
                <Volume2 className="h-4 w-4 text-amber-200/70" />
            ) : (
                <VolumeX className="h-4 w-4 text-amber-200/70" />
            )}
        </button>
    );
} 