"use client"

import { createContext, ReactNode, useContext, useState } from "react";

interface UserData {
    id: string;
    name?: string;
    email?: string;
    avatarUrl?: string
}

interface UserContextType {
    userData: UserData | null;
    setUserData: (data: UserData | null) => void;
}
// Create the context
const UserContext = createContext<UserContextType | undefined>(undefined);

// Custom Hook to use UserContext
export const useUserData = (): UserContextType => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUserData must be used within a UserProvider");
    }
    return context;
};

// Provider component
interface UserProviderProps {
    children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [userData, setUserData] = useState<UserData | null>(null);

    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    );
};