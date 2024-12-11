import { parse } from "cookie";

export default function handler(req, res) {
    const cookies = req.headers.cookie ? parse(req.headers.cookie) : {};
    const session = cookies.user_session ? JSON.parse(cookies.user_session) : null;

    if (!session || !session.connected) {
        return res.status(401).json({ status: "notAuthenticated" });
    }

    const userStatus = session.user.admin ? "admin" : "authenticated";
    return res.status(200).json({ status: userStatus });
}
