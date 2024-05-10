const User = require("../models/User")

const userCreate = async () => {

    const user = {
        "firstName": "Edward",
        "lastName": "Quisocala",
        "email": "sis.duar@gmail.com",
        "password": "123456",
        "phone": "998040405"
    }

    await User.create(user)
}


module.exports = userCreate