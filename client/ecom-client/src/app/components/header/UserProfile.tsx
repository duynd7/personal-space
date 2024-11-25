"use client"
import { useUserData } from "@/app/hooks/UserDataContext"

export const UserProfile = () => {
    const { userData } = useUserData();

    return (
        <div className="px-4">
            {!userData ?
                <button className="bg-primary rounded-md p-2 text-white font-bold" >Sign in</button>
                :
                <div className="flex flex-row gap-2 items-center float-end">
                    <p className="font-bold">
                        {userData.name}
                    </p>
                    <div className="rounded-full">
                        <img
                            className="rounded-full w-11 border-primary hover:border-secondary border-2 duration-100 cursor-pointer"
                            src={userData.avatarUrl}
                        >
                        </img>
                    </div>
                </div>
            }
        </div>
    )
}