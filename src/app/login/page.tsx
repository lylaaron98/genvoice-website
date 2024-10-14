"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation'; 

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (username === 'genvoice' && password === 'GenVoice123!') {
            router.push('/'); // Redirect to main page on successful login
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <form onSubmit={handleLogin} className="space-y-4">
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    placeholder="Username" 
                    className="border p-2"
                    required 
                />
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Password" 
                    className="border p-2"
                    required 
                />
                <button type="submit" className="bg-blue-500 text-white p-2">Login</button>
                {error && <p className="text-red-500">{error}</p>}
            </form>
        </div>
    );
};

export default LoginPage;
