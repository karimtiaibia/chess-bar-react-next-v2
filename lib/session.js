"use server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";


const secretKey = process.env.SESSION_SECRET;
console.log("SESSION_SECRET:", secretKey);


// if (!secretKey) {
//     throw new Error("SESSION_SECRET is not defined in environment variables.");
// }

export async function createSession(userId) {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 jours
    const payload = { userId, expiresAt };

    // Création du token JWT
    const session = jwt.sign(payload, secretKey, { algorithm: "HS256", expiresIn: "7d" });

    // Ajouter le token dans un cookie
    cookies().set("session", session, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // Sécurisé seulement en production
        expires: expiresAt,
    });
}

export async function deleteSession() {
    // Supprimer le cookie de session
    cookies().delete("session");
}

export async function decrypt(session = "") {
    try {
        // Vérifier et décoder le token JWT
        const decoded = jwt.verify(session, secretKey, { algorithms: ["HS256"] });
        return decoded;
    } catch (error) {
        console.error("Failed to verify session:", error.message);
        return null; // Retourner null en cas d'échec
    }
}
