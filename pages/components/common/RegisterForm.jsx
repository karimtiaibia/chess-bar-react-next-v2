'use client';
import React, { useState } from 'react';
//import { useFormState, useFormStatus } from 'react-dom';
import { register } from '@/lib/actions';
import { H1 } from './Typefaces';
import RegisterButton from './RegisterButton';
// Imported icons
import { CiUser, CiAt } from "react-icons/ci";
import { PiKey } from "react-icons/pi";
import { AiOutlineExclamationCircle } from "react-icons/ai";

export default function RegisterForm() {
    const [errorMessage, setErrorMessage] = useState('');
    const formAction = async (event) => { 
        event.preventDefault(); 
        try { 
            await register(event.target); 
        } catch (error) { 
            setErrorMessage(error.message); 
        } 
    };
    
    return (
        <form onSubmit={formAction} className="register-form">
            <div>
                <H1>
                    S'inscrire
                </H1>
                <div>
                    <div className="name-container">
                        <label
                            className="name-label"
                            htmlFor="name">
                            Nom
                        </label>
                        <div className="relative">
                            <input
                                className="name-input"
                                id="name"
                                type="text"
                                name="name"
                                placeholder="Entrez votre nom"
                                required />
                            <CiUser />
                        </div>
                    </div>
                    <div className="email-container">
                        <label
                            className="email-label"
                            htmlFor="email">
                            Email
                        </label>
                        <div className="relative">
                            <input
                                className="email-input"
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Entrez votre adresse email" 
                                required />
                            <CiAt />
                        </div>
                    </div>
                    <div className="password-container">
                        <label
                            className="password-label"
                            htmlFor="password">
                            Mot de passe
                        </label>
                        <div className="relative">
                            <input
                                className="password-input"
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Enter password"
                                required
                                minLength={6} />
                            <PiKey />
                        </div>
                    </div>
                    <div className="password-confirm-container">
                        <label
                            className="password-confirm-label"
                            htmlFor="password-confirm">
                            Confimer mot de passe
                        </label>
                        <div className="relative">
                            <input
                                className="password-confirm-input"
                                id="password-confirm"
                                type="password"
                                name="passwordConfirm"
                                placeholder="Entrer votre mot de passe"
                                required
                                minLength={6} />
                            <PiKey />
                        </div>
                    </div>
                </div>
                <RegisterButton />
                <div
                    className="error-message-container"
                    aria-live="polite"
                    aria-atomic="true">
                    {errorMessage && (
                        <>
                            <AiOutlineExclamationCircle />
                            <p className="error-message">{errorMessage}</p>
                        </>
                    )}
                </div>
            </div>
        </form>
    );
}
