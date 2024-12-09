import React, { useState } from 'react';
// Imported style
import { H1 } from "../components/common/Typefaces";
import { Button } from "../components/common/Button";
import { Section } from '../components/common/Section';
import { AiOutlineExclamationCircle } from "react-icons/ai";

export const login = async (formData) => {
    const payload = {
        name: formData.get("name"),
        password: formData.get("password"),
    };
    
    console.log("Payload envoyé : ", payload); // Ajoutez ceci pour vérifier

    if (!payload.name || !payload.password) {
        throw new Error("Tous les champs sont obligatoires.");
    }

    const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Échec d'authentification.");
    }
};



export default function Login() {
       
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [pending, setPending] = useState(false);
    
   
    
    const formAction = async (event) => {
        event.preventDefault();
        setPending(true);
        setErrorMessage('');
        const formData = new FormData(event.target);

        try {
            await login(formData);
        } catch (error) {
            setErrorMessage(error.message);
        } finally {
            setPending(false);
        }

        if (errorMessage) {
            document.querySelector('input').focus();
        }
    };

    return (
        <Section>
            <form onSubmit={formAction} className="login-form">
                <div className="login-container">
                    <div className="login-title-container">
                        <H1>Login</H1>
                    </div>
                    <div className="login-name-container">
                        <label className="login-name-label" htmlFor="name">
                            Nom
                        </label>
                        <div>
                            <input
                                name="name" // Corrected name attribute
                                value={name}
                                placeholder="Entrez votre nom"
                                onChange={(ev) => setName(ev.target.value)}
                                className="login-input-name"
                                required
                            />
                        </div>
                    </div>
                    <div className="login-password-container">
                        <label className="login-password-label" htmlFor="password">
                            Mot de passe
                        </label>
                        <div>
                            <input
                                name="password" // Corrected name attribute
                                type="password"
                                value={password}
                                placeholder="Entrez votre mot de passe"
                                onChange={(ev) => setPassword(ev.target.value)}
                                className="login-input-password"
                                required
                            />
                        </div>
                    </div>
                    <Button
                        className="login-button"
                        type="submit"
                        disabled={pending}>
                        {pending ? "Connexion en cours..." : "Se connecter"}
                    </Button>

                    <div
                        className="error-message-container"
                        aria-live="polite"
                        aria-atomic="true"
                    >
                        {errorMessage && (
                            <>
                                <AiOutlineExclamationCircle />
                                <p className="error-message">{errorMessage}</p>
                            </>
                        )}
                    </div>
                </div>
            </form>
        </Section>
    );
}
