import React from "react";
import Link from "next/link";
import Image from "next/image";
import { isAuthenticated, isAdmin } from "@/_middlewares";


export default function Header() {
    return (
        <header>
            <div className="header-container">
                <div className="chessbar-logo">
                    <Link href="/">
                        <Image 
                            src="/img/logo.png" 
                            width={330}
                            height={130}
                            alt="Logo de Chess Bar" 
                        />
                    </Link>
                </div>
                <nav className="navbar">
                    <div id="links">
                        <li><Link id="tournaments" href="/tournaments">Tournois à venir</Link></li>
                        <li><Link id="rules" href="/rules">Règlement</Link></li>
                        {/* A afficher une fois l'utilisateur connecté */}
                        
                            <li><Link id="account" href="/account">Profil</Link></li>
                            <li><Link id="logout" href="/logout">Déconnexion</Link></li>

                        {/* A afficher si l'utilisateur est déconnecté ou n'a pas de compte */}

                            <li><Link id="login" href="/login">Connexion</Link></li>
                            <li><Link id="register" href="/register">S&apos;inscrire</Link></li>

                        {/* A afficher si l'utilisateur est administrateur */}

                            <li><Link id="admin" href="/admin">Administration</Link></li>

                    </div>
                    <a className="icon">
                        <i className="fa fa-bars" alt="Burger Menu"></i>
                    </a>
                </nav>
            </div>
        </header>
    )
}