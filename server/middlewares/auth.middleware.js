export const check_body = (req, res, next) => {
    let {name, email, password} = req.body
    if (!name || !email || !password) return res.status(400).json({message : "all fields are required"})
    if (name === "" || email === "") return res.status(400).json({message : "name and email must be non empty string"})
    if (password.length < 6) return res.status(400).json({message : "password must have at least 6 characters"})
    next()
}

export const check_cred = (req, res, next) => {
    let {email, password} = req.body
    if (!email || !password) return res.status(400).json({message : "all fields are required"})
    next()
}