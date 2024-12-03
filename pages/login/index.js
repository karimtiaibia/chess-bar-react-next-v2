
import React, { useState } from 'react'
// Imported style
import { H1 } from "../components/common/Typefaces"
import { Button } from "../components/common/Button"

export default function Login (props) {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    return (
        <div className={'login-container'}>
            <div className={'login-title-container'}>
                <H1>Login</H1>
            </div>
            <div className={'login-name-container'}>
                <input
                    value={name}
                    placeholder="Entrez votre nom"
                    onChange={(ev) => setName(ev.target.value)}
                    className={'login-input-name'}
                />
                <label className="errorLabel">{emailError}</label>
            </div>
            <div className={'login-password-container'}>
                <input
                    value={password}
                    placeholder="Entrez votre mot de passe"
                    onChange={(ev) => setPassword(ev.target.value)}
                    className={'login-input-password'}
                />
                <label className="errorLabel">{passwordError}</label>
            </div>
            <Button 
                className={'login-button'} 
                type="submit" 
                value={'Se connecter'} >
            </Button>
        </div>  
    )
}

