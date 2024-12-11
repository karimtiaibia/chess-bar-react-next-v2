import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Vérifier si l'utilisateur est connecté via une API ou un cookie
        const fetchUser = async () => {
            try {
                const response = await fetch("/api/user"); // API qui retourne les données utilisateur
                if (response.ok) {
                    const userData = await response.json();
                    setUser(userData);
                    setIsAuthenticated(true);
                }
            } catch (error) {
                console.error("Erreur lors de la récupération des données utilisateur", error);
                setUser(null);
                setIsAuthenticated(false);
            }
        };

        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, isAuthenticated }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
