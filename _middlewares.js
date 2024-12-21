// Middleware pour bloquer l'accès aux pages connectées 

// middleware/isConnected.js
import { NextResponse } from 'next/server';

export function isConnected(req) {
    const token = req.cookies.get('authToken'); // Supposons que le token d'authentification est stocké dans un cookie

    if (!token) {
        // Rediriger vers la page de connexion si l'utilisateur n'est pas authentifié
        return NextResponse.redirect(new URL('/login', req.url));
    }

        // Vérifier la validité du token (par exemple en décryptant ou en appelant une API externe)
        // Exemple basique : on peut ajouter des vérifications supplémentaires ici

        // Si tout est OK, permettre l'accès
        return NextResponse.next();
}

// Configurer le middleware pour les routes nécessaires
export const config = {
    matcher: ['/protected-route/:path*'], // Remplacez par les routes où le middleware doit s'appliquer
};


// Middleware pour bloquer l'accès aux pages admin 
// middleware/isAdmin.js

export function isAdmin(req) {
    const token = req.cookies.get('authToken'); // Supposons que le token d'authentification est stocké dans un cookie

    if (!token) {
    // Rediriger vers la page de connexion si l'utilisateur n'est pas authentifié
    return NextResponse.redirect(new URL('/login', req.url));
    }

    // Exemple de vérification des rôles utilisateur
    try {
        const user = JSON.parse(atob(token.split('.')[1])); // Décoder le payload JWT (remplacez cette logique si nécessaire)

        if (user.role !== 'admin') {
            // Rediriger si l'utilisateur n'a pas le rôle administrateur
            return NextResponse.redirect(new URL('/not-authorized', req.url));
        }
    } catch (err) {
        console.error('Erreur lors de la vérification du token:', err);
    return NextResponse.redirect(new URL('/login', req.url));
}

// Si tout est OK, permettre l'accès
return NextResponse.next();

}

