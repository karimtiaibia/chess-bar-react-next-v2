import database from "../../_database";
import { z } from "zod";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcryptjs";

const RegisterUser = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    confirmPassword: z.string(),
});

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const validatedFields = RegisterUser.safeParse(req.body);

    if (!validatedFields.success) {
        return res.status(400).json({ error: "Invalid input", details: validatedFields.error });
    }

    const { name, email, password, confirmPassword } = validatedFields.data;

    if (password !== confirmPassword) {
        return res.status(400).json({ error: "Passwords do not match" });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const id = uuidv4();

        await database.execute(`
                INSERT INTO user (id, name, email, password) 
                VALUES (?, ?, ?, ?)
            `,
            [id, name, email, hashedPassword]
        );

        return res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error("Database error:", error);
        return res.status(500).json({ error: "Database error" });
    }
}