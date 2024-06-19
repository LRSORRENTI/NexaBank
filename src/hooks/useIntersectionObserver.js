import { useEffect, useState } from 'react';

const useIntersectionObserver = (options) => {
    const [entries, setEntries] = useState([]);

    const callback = (entries) => {
        setEntries(entries);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(callback, options);
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach(element => observer.observe(element));

        return () => observer.disconnect();
    }, [options]);

    return entries;
};

export default useIntersectionObserver;
