import { useState, useEffect } from "react";

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        widht: undefined,
        height: undefined
    });

    useEffect(() => {
        const hadleResize = () => {
            setWindowSize({ 
                widht: window.innerWidth,
                height: window.innerHeight
            });
        }
        hadleResize();
        window.addEventListener('resize', hadleResize);
        return () =>  window.removeEventListener('resize', hadleResize);;
    }, []);
    return windowSize;
}

export default useWindowSize;