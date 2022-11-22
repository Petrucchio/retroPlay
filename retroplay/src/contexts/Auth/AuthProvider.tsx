import { useState } from "react";
import { User } from "../../types/User";
import { useAPI } from "../hooks/useApi";
import { AuthContext } from "./AuthContext";
import React from "react";

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState<User | null>(null);
    const api = useAPI();

    const signin = async (email, password) => {
        const data = await api.signin(email,password);
        if(data.user && data.token){
            setUser(data.user);
            return true;
        }
        return false;
    }
    const signout = async () => {
        await api.logout();
        setUser(null);
    }
    
    return(
        <AuthContext.Provider value ={{user, signin, signout}}>
            {children}
        </AuthContext.Provider>
    )
}