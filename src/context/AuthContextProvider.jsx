import React from "react"
import { useContext, useState } from "react"
import { createContext } from "react"
const AuthContext = createContext()

export function useAuthContext() {
    return useContext(AuthContext)
}

export default function AuthContextProvider({ children }) {
    let [user, setUser] = useState(() => {
        let userInfo = JSON.parse(localStorage.getItem("userInfo"))
        console.log(userInfo)
        if (userInfo) {
            return userInfo
        } else return null
    })
    return (
        <AuthContext.Provider value={[user, setUser]}>
            {children}
        </AuthContext.Provider>
    )
}
