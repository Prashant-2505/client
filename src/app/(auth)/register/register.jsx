'use client'
import React, { useState, useEffect } from 'react';
import styles from '../../styles/register.module.css';
import Link from 'next/link';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!name || !email || !password) {
            alert("Please fill all fields");
            return;
        }

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
        };

        setLoading(true); 

        try {
            const response = await fetch("http://localhost:8000/api/auth/candidate/signUp", options);
            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Sign up failed');
            }

            alert("Sign up successful");
            setName("");
            setEmail("");
            setPassword("");
        } catch (error) {
            alert(`Error: ${error}`);
        } finally {
            setLoading(false); 
        }
    };

    return (
        <div className={styles.login}>
            <div className={styles.inner}>
                <h3>Welcome back</h3>
                <p>Sign in to your account to continue</p>
                <form onSubmit={handleSubmit}>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Enter your name"
                    />
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Enter your email"
                    />
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Enter your password"
                    />
                    <button type="submit">{loading ? "Loading..." : "Sign up"}</button>
                </form>
                <p>Already have an account? <Link href="/login"><span>Sign in</span></Link></p>
            </div>
        </div>
    );
};

export default Register;
