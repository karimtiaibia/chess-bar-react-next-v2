import { parse } from "cookie";

export default function logoutHandler(req, res) {
    const cookies = req.headers.cookie ? parse(req.headers.cookie) : {};
    
    // Parse cookie safely
    let session = null;
    try {
        session = cookies.user_session ? JSON.parse(cookies.user_session) : null;
    } catch (err) {
        return res.status(400).json({ status: "invalidSession", message: "Session cookie corrompu." });
    }

    // Vérification de la session
    if (!session || !session.connected) {
        return res.status(401).json({ status: "notAuthenticated", message: "Utilisateur non authentifié." });
    }

    // Détection du rôle utilisateur
    const userRole = session.user?.admin ? "admin" : "authenticated";
    return res.status(200).json({ status: userRole });
}
