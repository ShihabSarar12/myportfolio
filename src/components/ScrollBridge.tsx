import { useScroll } from '@react-three/drei';
import { useEffect } from 'react';

const ScrollBridge = () => {
    const scroll = useScroll();

    useEffect(() => {
        (window as any).__scrollControls = scroll;
    }, [scroll]);

    return null;
};

export { ScrollBridge };
