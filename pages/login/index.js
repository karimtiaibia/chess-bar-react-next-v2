import React from "react"
import { H1 } from "../components/common/Typefaces"
import { Button } from "../components/common/Button"

export default function Login() {
    return (
        <div className="login">
            <H1>Connexion</H1>
            <form action="/login" method="POST">
                <label htmlFor="pseudo">Pseudo : </label>
                <input id="pseudo" type="text" name="pseudo" required />
                
                <label htmlFor="password">Mot de passe : </label>
                <input id="password" type="password" name="password" required />

                <p><a href="/register">Pas encore de compte ? Inscrivez-vous !</a></p>
                <Button>Connexion</Button>
            </form>
        </div>
    )
};
