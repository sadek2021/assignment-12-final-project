import { useEffect } from 'react';
import { useState } from 'react';

const useServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
        // fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return { services };
};

export default useServices;