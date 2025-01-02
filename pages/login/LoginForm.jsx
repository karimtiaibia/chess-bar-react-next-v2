"use client";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

import { login } from "./actions";
import { Button } from "../components/common/Button";
import { Input } from "../components/Searchbar";
    
export default function LoginForm() {

    const [state, loginAction] = useActionState(login, undefined);

    return (
        <form action={loginAction} className="login-form">
            <div className="login-email-container">
                <Input 
                    id="email" 
                    name="email" 
                    placeholder="Email" 
                />
            </div>
            {state?.errors?.email && (
                <p className="login-email-error">{state.errors.email}</p>
            )}

            <div className="login-password-container">
                <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                />
            </div>
            {state?.errors?.password && (
                <p className="login-password-error">{state.errors.password}</p>
            )}
            <SubmitButton />
        </form>
    );
}

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button disabled={pending} type="submit"
            className="register-button"
            aria-disabled={pending}>
                {pending ? "Connexion en cours..." : "Se connecter"}
        </Button>
    );
}