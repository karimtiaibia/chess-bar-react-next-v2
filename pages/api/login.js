import database from "../../_database";
import { z } from "zod";
import bcrypt from "bcryptjs";
import cookie from "cookie";
import { serialize } from "cookie";

const UserLogin = z.object({
    name: z.string(),
    password: z.string(),
});
console.log("Validation Zod : ", validatedFields);
export default async function loginHandler(req, res) {
    const validatedFields = UserLogin.safeParse(req.body);
    if (!validatedFields.success) {
        return res.status(400).json({ error: "Champ invalide.", details: validatedFields.error });
    }
    console.log("Reçu : ", req.body);

    const { name, password } = validatedFields.data;

    try {
        const [users] = await database.query(`
            SELECT * FROM user 
            WHERE name = ?
        `, [name]);
        
        if (req.method === "POST" && req.headers["content-type"] === "application/json") {
            req.body = JSON.parse(req.body);
        }
        
        if (users.length === 0) {
            return res.status(400).json({ error: "Identifiants invalides !" });
        }

        const user = users[0]; // Get the first user

        // Compare the password with the hashed password in the database
        const match = await bcrypt.compare(password, user.password);

        if (match) {
            // If the password matches, create a session cookie (JWT or simple cookie)
            const sessionCookie = serialize("user_session", JSON.stringify({
                connected: true,
                user: {
                    id: user.id,
                    name: user.name,
                    admin: user.admin,
                }
            }), {
                httpOnly: true,  // The cookie can't be accessed via JavaScript
                secure: process.env.NODE_ENV === "production", // Use secure cookies in production (HTTPS)
                maxAge: 60 * 60 * 24, // 1 day expiration
                path: "/",  // Cookie is accessible throughout the whole site
            });

            // Set the cookie in the response
            res.setHeader("Set-Cookie", sessionCookie);

            // Redirect based on whether the user is an admin or not
            if (user.admin) {
                return res.redirect(302, "/admin");
            }

            return res.redirect(302, "/");
        } else {
            // Password does not match
            return res.status(400).json({ error: "Identifiants invalides !" });
        }

    } catch (error) {
        console.error("Database error:", error);
        return res.status(500).json({ error: "Erreur de la base de données." });
    }
    
}
