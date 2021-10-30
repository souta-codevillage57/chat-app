import React, { memo, useEffect, useState } from "react"
import { auth } from "./config/firebase"

export const AuthContext = React.createContext();

export const AuthProvider = memo((props) => {
    const { children } = props;
    const [user, setUser] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setUser(user)
        })
    }, [])

    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    )
})

