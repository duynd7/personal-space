"use client"

import { ReactNode, useState } from "react";
import { IconBike } from "../icons/IconBike";
import { IconPickUp } from "../icons/IconPickUp";
import React from "react";

type PromotionBannerDeliveryOption = {
    name: string,
    iconNode: ReactNode
}

export const PromotionBanner = () => {
    const [optionIndex, setOptionIndex] = useState(0);

    let selections: PromotionBannerDeliveryOption[] = [
        {
            name: "Delivery",
            iconNode: <IconBike />
        },
        {
            name: "Pickup",
            iconNode: <IconPickUp />
        }
    ];

    const onClickOption = function (index: number) {
        setOptionIndex(index);
    }

    const iconSize = 20;

    return (
        <div className="h-[30rem] bg-gradient-to-l from-primary to-secondary">
            <div className="w-full h-full flex flex-row">
                <div className="w-4/6 p-16">
                    <h1 className="text-white text-7xl font-bold my-5">Are you Starving?</h1>
                    <p className="text-black my-5">With a few clicks, find meals that are accesible to you</p>
                    <div className="w-full h-fit bg-white rounded-lg p-4">
                        <div className="flex flex-row gap-4">
                            {selections.map((option, index) => {
                                let selected = index === optionIndex;
                                return (
                                    <div key={index} className={`flex flex-row p-2 items-center rounded-md cursor-pointer
                                    ${selected ?
                                            "bg-primary text-white"
                                            :
                                            "text-black"}`
                                    }
                                        onClick={onClickOption.bind(this, index)}
                                    >
                                        {React.cloneElement(option.iconNode as React.ReactElement<any>, { fill: (selected ? "#ffffff" : "#000000"), size: iconSize })}
                                        <p className="font-bold pl-2">{option.name}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="flex flex-row items-center">
                            <div className="my-5 bg-slate-200 p-2 rounded-md w-5/6">
                                <span>
                                    <svg className="w-6 h-6 inline fill-secondary"
                                        xmlns="http://www.w3.org/2000/svg" version="1.0" id="Layer_1" width="800px" height="800px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64">
                                        <path d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24  C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24  C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z" />
                                    </svg>
                                </span>
                                <input
                                    placeholder="Input your address..."
                                    className="bg-transparent ml-2 w-5/6 grow"
                                />
                            </div>
                            <div className="w-1/6 text-white font-bold m-2 cursor-pointer">
                                <div className="bg-primary flex flex-row h-full rounded-md p-2">
                                    <svg className="w-6 h-6 stroke-white"
                                        xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
                                        <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className="pl-4">Find Food</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-2/6 flex flex-col justify-end">
                    <img
                        className="w-fit select-none"
                        draggable={false}
                        src="./images/noodle_promotion.png"
                    />
                </div>
            </div>
        </div>
    )
}