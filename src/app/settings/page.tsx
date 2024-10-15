"use client";

import { useState } from 'react';
import { Container, Paper, Typography, TextField, Button, Alert } from '@mui/material';

const SettingsPage = () => {
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleChangePassword = (e: React.FormEvent) => {
        e.preventDefault();
        if (newPassword) {
            setMessage('Password changed successfully!');
            setNewPassword(''); // Clear input
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
                        <Alert severity="success" sx={{ marginTop: 2 }}>
                            {message}
                        </Alert>
                    )}
                </form>
            </Paper>
        </Container>
    );
};

export default SettingsPage;
