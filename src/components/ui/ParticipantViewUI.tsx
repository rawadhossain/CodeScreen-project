import { useParticipantViewContext } from '@stream-io/video-react-sdk';
import { Maximize, Minimize } from 'lucide-react';
import { useEffect, useState } from 'react';

const CustomParticipantViewUI = () => {
    const { participantViewElement } = useParticipantViewContext();
    const [isFullscreenElement, setIsFullscreenElement] = useState(false);

    useEffect(() => {
        // Sync local state with fullscreen changes
        const handleFullscreenChange = () => {
            setIsFullscreenElement(
                document.fullscreenElement === participantViewElement,
            );
        };

        window.addEventListener('fullscreenchange', handleFullscreenChange);

        return () =>
            window.removeEventListener(
                'fullscreenchange',
                handleFullscreenChange,
            );
    }, [participantViewElement]);

    const toggleFullscreen = () => {
        if (isFullscreenElement) {
            return document.exitFullscreen();
        }

        return participantViewElement?.requestFullscreen();
    };

    return (
        <>
            <button
                style={{
                    position: 'absolute',
                    bottom: 10,
                    right: 10,
                    width: '25px',
                    height: '20px',
                }}
                onClick={toggleFullscreen}
            >
                {isFullscreenElement ? <Minimize /> : <Maximize />}
            </button>
            {/* Add other custom UI elements here */}
        </>
    );
};

export default CustomParticipantViewUI;
