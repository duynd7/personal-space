"use client"

import { useEffect } from "react"
import { DeliverLocation } from "./DeliverLocation"
import { Logo } from "./Logo"
import { SearchBar } from "./SearchBar"
import { UserProfile } from "./UserProfile"
import { useUserData } from "@/app/hooks/UserDataContext"

export const Header = () => {
    const { userData, setUserData } = useUserData();
    useEffect(() => {
      setUserData({
        id: "001",
        name: "Duy Nguyễn",
        email: "nguyen.duy0403@gmail.com",
        avatarUrl: "https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/420838001_7000935386691299_6624062107581403581_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGfx2WLuewfFWEhjXX9SrL135sCS0VHhfDfmwJLRUeF8JgLH5xpS1h2agtzl3vjjwF__eKEv6J_Vc8hVIW1-B3i&_nc_ohc=cZb1SLuaaZ0Q7kNvgG6T6Sk&_nc_zt=23&_nc_ht=scontent.fsgn2-4.fna&_nc_gid=A8q2Xxx-frPhoUXgWegzbhy&oh=00_AYCN0Dgk0z-JHGJTh5g9nw_k3h__DRxHmwjado102nC6Zg&oe=67460124"
      });
    }, [setUserData])

    return (
        <div className="w-screen h-20 bg-neutral flex flex-row items-center justify-center px-4 gap-4">
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