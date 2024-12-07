"use client";
import { useState } from "react";
// Styles
import { H1 } from "./Typefaces";
import { Button } from "./Button";
import { Section } from "./Section";
// Imported icons
import { CiUser, CiAt } from "react-icons/ci";
import { PiKey } from "react-icons/pi";
import { AiOutlineExclamationCircle } from "react-icons/ai";

export const register = async (formData) => {
    const payload = {
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
        confirmPassword: formData.get("confirm-password"),
    };

    const response = await fetch("/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Echec de l'inscription.");
    }

};

export default function RegisterForm() {
    
    const [errorMessage, setErrorMessage] = useState("");
    const [pending, setPending] = useState("");
    const formAction = async (event) => {
        event.preventDefault();
        setPending(true);
        setErrorMessage("");
        const formData = new FormData(event.target);
        try {
            await register(formData);
        } catch (error) {
            setErrorMessage(error.message);
        } finally {
            setPending(false);
        }
    };
    
    return (
        <Section>
            <form onSubmit={formAction} className="register-form">
                <div>
                    <H1>S'inscrire</H1>
                    <div>
                        <div>
                            <label className="name-label" htmlFor="name">
                                Nom
                            </label>
                            <div className="relative">
                                <input
                                    className="name-input"
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder="Entrez votre nom"
                                    required
                                />
                                <CiUser />
                            </div>
                        </div>
                        <div>
                            <label className="" htmlFor="email">
                                Email
                            </label>
                            <div className="relative">
                                <input
                                    className=""
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Entrez votre adresse email"
                                    required
                                />
                                <CiAt />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label className="" htmlFor="password">
                                Mot de passe
                            </label>
                            <div className="relative">
                                <input
                                    className=""
                                    id="password"
                                    type="password"
                                    name="password"
                                    placeholder="Entrez votre mot de passe"
                                    required
                                    minLength={6}
                                />
                                <PiKey />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label className="" htmlFor="confirm-password">
                                Confirmer le mot de passe
                            </label>
                            <div className="relative">
                                <input
                                    className=""
                                    id="confirm-password"
                                    type="password"
                                    name="confirm-password"
                                    placeholder="Confirmez votre mot de passe"
                                    required
                                    minLength={6}
                                />
                                <PiKey />
                            </div>
                        </div>
                    </div>
                    <Button
                        className="register-button"
                        type="submit"
                        pending={pending.toString()}
                        aria-disabled={pending}>
                            {pending ? "Inscription en cours..." : "S'inscrire"}
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