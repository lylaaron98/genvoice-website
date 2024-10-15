"use client";

import  { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const HomePage = () => {
    const router = useRouter();

    useEffect(() => {
        // Check for the authentication token
        const token = localStorage.getItem("authToken"); // Check for auth token
        if (!token) {
            // If there is no token, redirect to /login
            router.push('/login');
        } else {
            // If the token exists, redirect to /profile
            router.push('/profile');
        }
    }, [router]);

    // Return null while redirecting
    return null; 
};

export default HomePage;
