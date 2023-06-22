import User from "../models/user.model.js";
import bcrypt from "bcryptjs"
import { createAccessToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const register = async (req, res) => {
    try {
        const { email, password, username } = req.body;

        const foundUser = await User.findOne({ email })

        if (foundUser) return res.status(400).json({ message: ["The email already exists"] })

        const encryptedPass = await bcrypt.hash(password, 10)

        const newUser = new User({
            username,
            email,
            password: encryptedPass
        })
        const savedUser = await newUser.save()

        const token = await createAccessToken({ id: savedUser._id })

        res.cookie("token", token, {
            secure: true,
            sameSite: "none",
            httpOnly: false
        });

        res.json({
            id: savedUser._id,
            username: savedUser.username,
            email: savedUser.email,
            createdAt: savedUser.createdAt,
            updatedAt: savedUser.updatedAt
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const foundUser = await User.findOne({ email })

        if (!foundUser)
            return res.status(400).json({
                error: ["Email not found"]
            })

        const isMatch = await bcrypt.compare(password, foundUser.password);
        if (!isMatch) {
            return res.status(400).json({
                error: ["Incorrect password"]
            })
        }

        const token = await createAccessToken({
            id: foundUser._id,
            username: foundUser.username,
        });

        res.cookie("token", token, {
            secure: true,
            sameSite: "none",
            httpOnly: false,
        });

        res.json({
            id: foundUser._id,
            username: foundUser.username,
            email: foundUser.email,
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.message })
    }
}

export const logout = (req, res) => {
    res.cookie('token', "", {
        httpOnly: true,
        secure: true,
        expires: new Date(0)
    })
    return res.sendStatus(200)
}

export const profile = async (req, res) => {
    const foundUser = await User.findById(req.user.id)

    if (!foundUser) return res.status(400).json({ error: "User not found" })
    return res.json({
        id: foundUser._id,
        username: foundUser.username,
        email: foundUser.email,
        createdAt: foundUser.createdAt,
        updatedAt: foundUser.updatedAt
    })
}

export const verifyToken = async (req, res) => {
    const { token } = req.cookies

    if (!token) return res.status(401).json({ message: "Unauthorized" });

    jwt.verify(token, TOKEN_SECRET, async (error, user) => {
        if (error) return res.sendStatus(401)

        const foundUser = await User.findById(user.id)
        if (!foundUser) return res.sendStatus(401)

        return res.json({
            id: foundUser._id,
            username: foundUser.username,
            email: foundUser.email
        })
    })
}