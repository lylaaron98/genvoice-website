"use client";

import { useState } from 'react';

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
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold">Settings</h1>
            <form onSubmit={handleChangePassword} className="space-y-4">
                <input 
                    type="password" 
                    value={newPassword} 
                    onChange={(e) => setNewPassword(e.target.value)} 
                    placeholder="New Password" 
                    className="border p-2"
                    required 
                />
                <button type="submit" className="bg-blue-500 text-white p-2">Change Password</button>
                {message && <p className="text-green-500">{message}</p>}
            </form>
        </div>
    );
};

export default SettingsPage;
