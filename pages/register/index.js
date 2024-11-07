import React from "react"
import { H1 } from "../components/common/Typefaces"
import { Button } from "../components/common/Button"

export default function Register() {
    return (
        <>
            <H1>Inscription</H1>
            <form action="/register" method="POST" >
                <label for="pseudo">Pseudo : </label>
                <input required id="pseudo" type="pseudo" name="pseudo" />

                <label for="email">Email : </label>
                <input required id="email" type="email" name="email" />
                
                <label for="password">Mot de passe : </label>
                <input required id="password" type="password" name="password" />
                
                <Button id="submitRegister">Créer mon compte</Button>
            </form>
        </>
    )
};
