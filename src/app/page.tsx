"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import HomeContent from '../components/HomeContent';

const HomePage = () => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication state

    useEffect(() => {
        // Simulating authentication check (you can replace this with real authentication logic)
        const token = localStorage.getItem("authToken"); // Example: check for auth token
        if (token) {
            setIsAuthenticated(true);
        } else {
            router.push('/login'); // Redirect to login page if not authenticated
        }
    }, [router]);

    // Render original homepage content if authenticated
    return isAuthenticated ? <HomeContent /> : null; // Render nothing while redirecting
};

export default HomePage;
