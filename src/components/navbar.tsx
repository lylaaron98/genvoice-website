"use client";

import React from 'react';
import { Button, AppBar, Toolbar, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const router = useRouter(); // Use router for navigation

    const handleNavigation = (path: string) => {
        router.push(path); // Navigate to the specified path
    };

    return (
        <AppBar position="static" sx={{ background: 'black' }}>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    <Button color="inherit" onClick={() => handleNavigation('/')}>
                        Home
                    </Button>
                </Typography>
                <Button color="inherit" onClick={() => handleNavigation('/login')}>
                    Login
                </Button>
                <Button color="inherit" onClick={() => handleNavigation('/settings')}>
                    Settings
                </Button>
                <Button color="inherit">
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
