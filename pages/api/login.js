import database from "../../_database";
import bcrypt from "bcryptjs";


async function userLogin (req, res) {
    const name = req.body.name
    const password = req.body.password
    const [users] = await database.query(`
        SELECT * FROM user
        WHERE name = ?
    `, [name])
    if (users.length === 0) {
        req.session.error = "Identifiants invalides !"
        return res.redirect('/login')
    }
    for (let user of users) {
        const match = await bcrypt.compare(password, user.password)
        if (match) {
            req.session.connected = true
            req.session.user = user
            if (user.admin) {
                return res.redirect('/admin')
            }
            return res.redirect('/')
        }
    }
    req.session.error = "Identifiants invalides !"
    return res.redirect('/login')
}