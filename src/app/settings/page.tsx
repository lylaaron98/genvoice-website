"use client";

import { useState, useEffect } from 'react';
import { Container, Paper, Typography, TextField, Button, Alert } from '@mui/material';

const SettingsPage = () => {
    const [newPassword, setNewPassword] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [message, setMessage] = useState('');
    const [storedPassword, setStoredPassword] = useState('');

    useEffect(() => {
        // Retrieve the stored password on component mount
        const password = localStorage.getItem("userPassword");
        if (password) {
            setStoredPassword(password);
        } else {
            setStoredPassword('GenVoice123!'); // Default to the original password if none set
        }
    }, []);

    const handleChangePassword = (e: React.FormEvent) => {
        e.preventDefault();
        if (newPassword && currentPassword === storedPassword) {
            localStorage.setItem("userPassword", newPassword); // Change password in local storage
            setMessage('Password changed successfully!');
            setNewPassword(''); // Clear input
            setCurrentPassword(''); // Clear current password input
        } else {
            setMessage('Current password is incorrect or new password is empty');
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper elevation={3} sx={{ padding: 4, marginTop: 8 }}>
                <Typography variant="h5" component="h1" gutterBottom>
                    Settings
                </Typography>
                <form onSubmit={handleChangePassword} noValidate>
                    <TextField 
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Current Password"
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                    <TextField 
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="New Password"
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <Button 
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ marginTop: 2 }}
                    >
                        Change Password
                    </Button>
                    {message && (
                        <Alert severity={message.includes('successfully') ? "success" : "error"} sx={{ marginTop: 2 }}>
                            {message}
                        </Alert>
                    )}
                </form>
            </Paper>
        </Container>
    );
};

export default SettingsPage;
