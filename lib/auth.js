import React, { useState, useEffect, useContext, createContext } from 'react';
import { useRouter } from 'next/router';
import firebase from './firebase';
import { createUser } from './db';
import cookie from 'js-cookie';

const authContext = createContext();

export function AuthProvider({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
    return useContext(authContext);
};

function useProvideAuth() {
    const router = useRouter();
    const [user, setUser] = useState(null);

    const handleUser = (rawUser) => {
        if (rawUser) {
            const user = formatUser(rawUser);

            const { token, ...userWithoutToken } = user;

            createUser(user.uid, userWithoutToken);
            setUser(user);
            router.replace('/dashboard');

            cookie.set('fast-feedback-auth', true, { expires: 1 });
            return user;
        } else {
            router.replace('/');
            setUser(false);
            cookie.remove('fast-feedback-auth');

            return false;
        }
    };

    const signinWithGitHub = () => {
        return firebase
            .auth()
            .signInWithPopup(new firebase.auth.GithubAuthProvider())
            .then((response) => {
                handleUser(response.user);
            });
    };
    const signinWithGoogle = () => {
        return firebase
            .auth()
            .signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then((response) => {
                handleUser(response.user);
            });
    };

    const signout = () => {
        return firebase
            .auth()
            .signOut()
            .then(() => {
                handleUser(false);
            });
    };

    useEffect(() => {
        const unsubscribe = firebase
            .auth()
            .onAuthStateChanged((user) => handleUser(user));

        return () => unsubscribe();
    }, []);

    return {
        user,
        signinWithGitHub,
        signinWithGoogle,
        signout
    };
}

const formatUser = (user) => ({
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    token: user.ya,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL
});
