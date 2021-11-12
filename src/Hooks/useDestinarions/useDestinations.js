import { useEffect, useState } from 'react';

const useDestinations = () => {
    const [destinations, setDestinations] = useState([]);
    useEffect(() => {
        fetch('https://whispering-tor-36819.herokuapp.com/destinations')
            .then(res => res.json())
            .then(data => setDestinations(data));
    }, []);
    return [destinations];
};

export default useDestinations;