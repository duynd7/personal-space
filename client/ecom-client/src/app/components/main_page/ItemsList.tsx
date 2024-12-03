"use client"

import { ReactNode, useRef } from "react"
import { IconArrow } from "../icons/IconArrow"

export type ItemListProps = {
    title?: string,
    items: ReactNode[]
}

export const ItemsList = ({ title, items }: ItemListProps) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -scrollContainerRef.current.clientWidth / items.length,
                behavior: 'smooth',
            });
        }
    }

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: scrollContainerRef.current.clientWidth / items.length,
                behavior: 'smooth',
            });
        }
    }

    return (
        <div>
            {title ? <h1 className="text-center font-bold text-2xl m-3">{title}</h1> : ""}
            <div className="flex flex-row justify-center items-center gap-6">
                <div
                    onClick={scrollLeft}
                    className="h-full items-center flex flex-col justify-center">
                    <div className="bg-secondary font-extrabold p-2 rounded-full shadow-secondary shadow-lg cursor-pointer">
                        <div className="rotate-180">
                            <IconArrow stroke="#ffffff" size={40} strokeWidth={2} />
                        </div>
                    </div>
                </div>
                <div ref={scrollContainerRef} className={`w-5/6 h-fit flex flex-row gap-5 snap-proximity snap-x overflow-x-scroll m-3 px-3 py-3`}>
                    {items.map((item, index) => {
                        return (
                            <div key={index} className="snap-center">
                                {item}
                            </div>
                        )
                    })}
                </div>
                <div
                    onClick={scrollRight}
                    className="h-full items-center flex flex-col justify-center">
                    <div className="bg-secondary font-extrabold p-2 rounded-full shadow-secondary shadow-lg cursor-pointer">
                        <IconArrow stroke="#ffffff" size={40} strokeWidth={2} />
                    </div>
                </div>
            </div>
        </div>
    )
}