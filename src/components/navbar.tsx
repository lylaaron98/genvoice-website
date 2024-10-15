"use client"; // Mark this component as a client component

import React from 'react';
import { Button, AppBar, Toolbar, Typography } from '@mui/material';
import { usePathname } from 'next/navigation'; // Import usePathname

const Navbar = () => {
    const pathname = usePathname(); // Get the current pathname

    const handleLogout = () => {
        // Clear the token from local storage and redirect to the login page
        localStorage.removeItem("authToken"); 
        window.location.href = '/login'; // Redirect to login page
    };

    return (
        <AppBar position="static" sx={{ background: 'black' }}>
            <Toolbar>
                {pathname === '/login' ? (
                    // Render nothing or placeholder on login page
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        {/* You can place a placeholder here if desired */}
                        GenVoice Profile Login
                    </Typography>
                ) : (
                    // Render normal Navbar contents for other pages
                    <>
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            <Button color="inherit" href="/">Profile</Button>
                        </Typography>
                        <Button color="inherit" href="/settings">Settings</Button>
                        <Button color="inherit" onClick={handleLogout}>
                            Logout
                        </Button>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
