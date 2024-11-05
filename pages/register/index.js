import React from "react"

export default function Register() {
    return (
        <>
            <h2>Inscription</h2>

            <form action="/register" method="POST" >
                <label for="pseudo">Pseudo : </label>
                <input required id="pseudo" type="pseudo" name="pseudo" />

                <label for="email">Email : </label>
                <input required id="email" type="email" name="email" />
                
                <label for="password">Mot de passe : </label>
                <input required id="password" type="password" name="password" />
                
                <button id="submitRegister" >Créer mon compte</button>
            </form>
            </>
    )
};
