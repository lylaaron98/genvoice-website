"use client"; // Mark this component as a client component

import React from 'react';
import { Button, AppBar, Toolbar, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const router = useRouter(); // Use router for navigation

    const handleNavigation = (path: string) => {
        router.push(path); // Navigate to the specified path
    };

    const handleLogout = () => {
        // Implement logout logic here (e.g., clearing auth state)
        // Redirect to login page
        router.push('/login');
    };

    return (
        <AppBar position="static" sx={{ background: 'black' }}>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    <Button color="inherit" onClick={() => handleNavigation('/')}>
                        Home
                    </Button>
                </Typography>
                <Button color="inherit" onClick={() => handleNavigation('/settings')}>
                    Settings
                </Button>
                <Button color="inherit" onClick={handleLogout}>
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
