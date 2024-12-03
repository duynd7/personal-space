"use client"

import useFetch from "@/app/hooks/UseFetch";
import { ItemsList } from "./ItemsList";
import { PromotionData, PromotionEntry } from "./promotion_list/PromotionEntry";
import { SpinLoader } from "../skeleton/SpinLoader";

export const PromotionList = () => {
    let { data, loading, error } = useFetch<PromotionData[]>("http://localhost:5142/cheat/promotionlist");

    if (loading) {
        return (
            <div className="flex justify-center items-center m-auto h-52 bg-slate-100">
                <SpinLoader />
            </div>
        )
    }
    if (error) {
        return (
            <p>Errors: {error}</p>
        )
    }

    if (data) {
        return (
            <div className="h-fit w-full p-4">
                <ItemsList items={[...data.map(promotion => {
                    return (
                        <PromotionEntry id={promotion.id} imagePath={promotion.imagePath} />
                    )
                })]} />
            </div>
        )
    }
    else {
        return (
            <></>
        )
    }
}