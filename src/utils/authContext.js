import React, {createContext, useState} from "react";

export const AuthContext = createContext();
export const AuthPageContext = createContext("Login");

export const AuthContextProvider = props => {
    const [user, setUser] = useState(false);

    return(
        <AuthContext.Provider value={[user, setUser]}>
            {props.children}
        </AuthContext.Provider>
    );
}