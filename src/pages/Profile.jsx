import React from "react"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../context/AuthContextProvider"

export default function Profile() {
    let [user, setUser] = useAuthContext()
    let navigate = useNavigate()
    console.log(user)
    return (
        <div>
            Profile
            <button
                onClick={() => {
                    navigate("/")
                }}
            >
                Home page
            </button>
            <button
                onClick={() => {
                    setUser(null)
                    localStorage.clear()
                    navigate("/login")
                }}
            >
                Log Out
            </button>
        </div>
    )
}
