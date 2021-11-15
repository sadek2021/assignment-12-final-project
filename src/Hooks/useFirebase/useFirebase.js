import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut, onAuthStateChanged } from "firebase/auth";
import firebaseInitialize from '../../Firebase/Firebase.init';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

firebaseInitialize();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [loading, setLoading] = useState(true);
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();

    /* Provider */
    const googleProvider = new GoogleAuthProvider();

    /* Google Login/Register */
    const loginUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    /* Display Name/User Name */
    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(result => {
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    /* Email+Password Registration */
    const handleRegistration = () => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    /* Email+Password Login */
    const handleLogin = () => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    /* Get Input Field */
    const getName = e => {
        setName(e?.target?.value);
    }
    const getEmail = e => {
        setEmail(e?.target?.value);
    }
    const getPassword = e => {
        setPassword(e?.target?.value);
    }

    /* Log Out */
    const logout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsLoading(false));
    }

    /* Get the currently signed -in user */
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth]);

    /* Save user to database */
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    /* Find Admin */
    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
            .finally(() => setLoading(false));
    }, [user.email])

    // Customized Button
    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(orange[200]),
        backgroundColor: orange[200],
        '&:hover': {
            backgroundColor: orange[300],
        },
    }));

    return { user, error, isLoading, setError, setUser, setUserName, setIsLoading, loginUsingGoogle, getName, getEmail, getPassword, handleRegistration, handleLogin, logout, loading, admin, saveUser, name, email, ColorButton }
};

export default useFirebase;