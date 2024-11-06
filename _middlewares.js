// Middleware pour bloquer l'accès aux pages connectées 
export function isAuthenticated(req, res, next) {
    if (req.session && req.session.connected) {
        return next(); // L'utilisateur est authentifié, on peut afficher la page
    } else {
        return res.status(401).send('401 Unauthorized. Vous devez être connecté pour pouvoir accéder à cette page.'); // L'utilisateur n'est pas authentifié, on retourne une erreur 401
    }
    res.redirect('/')
}

// Middleware pour bloquer l'accès aux pages admin 
export function isAdmin(req, res, next) {
    if (req.session && req.session.connected && req.session.user && req.session.user.admin) {
        return next(); // L'utilisateur est authentifié ET admin, on peut afficher la page
    } else {
        return res.status(401).send('401 Unauthorized. Vous devez disposer des droits administrateurs pour accéder à cette page.'); // L'utilisateur n'est pas authentifié, on retourne une erreur 401
    }
}