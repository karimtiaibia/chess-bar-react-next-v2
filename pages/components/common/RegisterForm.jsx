'use client';

import { useState } from 'react';
import { register } from '@/lib/actions';
// Styles
import { H1 } from './Typefaces';
import { Button } from './Button';
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
                    <div>
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
                    <div>
                        <label
                            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                            htmlFor="email">
                            Email
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Entrez votre adresse email" 
                                required />
                            <CiAt />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label
                            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                            htmlFor="password">
                            Mot de passe
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Entrez votre mot de passe"
                                required
                                minLength={6} />
                            <PiKey />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label
                            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                            htmlFor="confirm-password">
                            Confirmer le mot de passe
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                id="confirm-password"
                                type="password"
                                name="confirm-password"
                                placeholder="Confirmez votre mot de passe"
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

function RegisterButton() {
    const [pending, setPending] = useState(false);

    return (
        <Button className="register-button" aria-disabled={pending}>
            S'inscrire
        </Button>
    );
}
