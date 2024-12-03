"use client"

import { useEffect } from "react"
import { DeliverLocation } from "./DeliverLocation"
import { Logo } from "./Logo"
import { SearchBar } from "./SearchBar"
import { UserProfile } from "./UserProfile"
import { useUserData } from "@/app/hooks/UserDataContext"

export const Header = () => {
    return (
        <div className="w-full h-20 bg-neutral flex flex-row items-center justify-center px-4 gap-4">
            <div className="w-1/12">
                <Logo />
            </div>
            <div className="w-7/12 flex items-center justify-center">
                <DeliverLocation />
            </div>
            <div className="w-2/12 items-center">
                <SearchBar placeholder="Search food..." />
            </div>
            <div className="w-2/12">
                <UserProfile />
            </div>
        </div>
    )
}