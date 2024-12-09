import database from "../../_database";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { serialize } from "cookie";

const UserLogin = z.object({
    name: z.string().min(1, "Le champ 'name' est obligatoire."),
    password: z.string().min(1, "Le champ 'password' est obligatoire."),
});

export default async function loginHandler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Méthode non autorisée." });
    }
    // log si req.body est bien un objet JSON
    console.log("Reçu : ", req.body); // Vérifiez ce qui est reçu
    const validatedFields = UserLogin.safeParse(req.body);
    
    if (!validatedFields.success) {
        console.error("Validation échouée : ", validatedFields.error);
        return res.status(400).json({
            error: "Champ invalide.",
            details: validatedFields.error.issues.map(issue => issue.message),
        });
    }

    const { name, password } = validatedFields.data;

    try {
        const [users] = await database.query(`
            SELECT * FROM user 
            WHERE name = ?
        `, [name]);

        if (users.length === 0) {
            return res.status(400).json({ error: "Identifiants invalides !" });
        }

        const user = users[0];
        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.status(400).json({ error: "Identifiants invalides !" });
        }

        const sessionCookie = serialize("user_session", JSON.stringify({
            connected: true,
            user: {
                id: user.id,
                name: user.name,
                admin: user.admin,
            }
        }), {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24,
            path: "/",
        });
        console.log(user.admin)
        res.setHeader("Set-Cookie", sessionCookie);
        
        // Renvoyer une réponse JSON avec admin
        return res.status(200).json({ 
            success: true, 
            admin: user.admin,
            redirect: user.admin ? "/admin" : "/" 
        });      

    } catch (error) {
        console.error("Database error:", error);
        return res.status(500).json({ error: "Erreur de la base de données." });
    }
}