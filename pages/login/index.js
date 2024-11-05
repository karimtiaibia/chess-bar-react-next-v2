import React from "react"

export default function Login() {
    return (
        <div className="login">
            <h2>Connexion</h2>
            <form action="/login" method="POST">
                <label for="pseudo">Pseudo : </label>
                <input id="pseudo" type="text" name="pseudo" required />
                
                <label for="password">Mot de passe : </label>
                <input id="password" type="password" name="password" required />

                <p><a href="/register">Pas encore de compte ? Inscrivez-vous !</a></p>
                <button>Connexion</button>
            </form>
        </div>
    )
};
