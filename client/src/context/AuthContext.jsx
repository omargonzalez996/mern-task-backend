import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest } from '../api/auth'
import Cookies from 'js-cookie'

export const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context;
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [errors, setErrors] = useState([])

    // clear errors after 5 seconds
    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([]);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [errors]);

    const signUp = async (user) => {
        try {
            const res = await registerRequest(user);
            console.log(res);
            if (res.status === 200) {
                setUser(res.data);
                setIsAuthenticated(true);
            }
        } catch (error) {
            console.log(error.response.data);
            setErrors(error.response.data.error)
        }
    }

    const signIn = async (user) => {
        try {
            const res = await loginRequest(user)
            console.log(res.data);
            setUser(res.data)
            setIsAuthenticated(true)
        } catch (error) {
            console.log(error);
            setErrors(error.response.data.error)
        }
    }

    useEffect(() => {
        const cookies = Cookies.get()
        console.log(cookies);
        if (cookies.token) {
            console.log(cookies.token);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ signUp, signIn, user, isAuthenticated, errors }}>
            {children}
        </AuthContext.Provider>
    )
}