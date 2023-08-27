import bcrypt from "bcryptjs"

const users = [
    {
        name: "Admin",
        email: "admin@gmail.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true
    },
    {
        name: "Shivam",
        email: "shivam@gmail.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: false
    },
    {
        name: "Mukesh",
        email: "mukesh@gmail.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: false
    }
]

export default users