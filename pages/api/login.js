import database from "../../_database";

try {
    const sql = `SELECT * FROM user`
    const [users] = await database.query(sql)
    return NextResponse.json(users)

} catch (error) {
    console.log(error)
    return NextResponse.json({ error: error.message })
}