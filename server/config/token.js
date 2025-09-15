import jwt from "jsonwebtoken"

const gentoken = async (id) => {
    try {
        const token = await jwt.sign({id}, process.env.JWT_SECRET, {expiresIn : '30d'})
        return token
    } catch (error) {
        throw new Error(`Token generation failed : ${error}`)
    }
}

export default gentoken