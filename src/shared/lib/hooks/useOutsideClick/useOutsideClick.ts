import React, { MutableRefObject } from 'react';

export const useOutsideClick = <T>(callback: (value?: any) => void) => {
    const ref = React.useRef<T>(null) as MutableRefObject<HTMLDivElement>;

    React.useEffect(() => {
        const handleClick: EventListener = (event: Event) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        };

        document.addEventListener('click', handleClick, true);

        return () => {
            document.removeEventListener('click', handleClick, true);
        };
    }, [ref, callback]);

    return ref;
};