"use client"
import { KeyboardEvent, useEffect, useRef } from "react";

type SearchBarProps = {
    placeholder?: string
};

export const SearchBar = ({ placeholder }: SearchBarProps) => {
    const searchBarRef = useRef<HTMLInputElement>(null)
    const keyEventHandler: any = (event: KeyboardEvent) => {
        if (event) {
            console.log(event);
            if (event.ctrlKey && event.code === 'Space') {
                event.preventDefault();
                searchBarRef.current?.focus();
            }
            if (!event.shiftKey && event.code === 'Enter') {
                alert(searchBarRef.current?.value);
            }
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', keyEventHandler);
        return () => {
            window.removeEventListener('keydown', keyEventHandler);
        }
    }, []);

    return (
        <div className="w-3/5 h-12 flex flex-row rounded-full bg-slate-100 items-center">
            <input
                ref={searchBarRef}
                className=" w-11/12 h-12 rounded-full px-5 bg-transparent"
                placeholder={placeholder || ""}
            />
            <div className="w-11 h-11 aspect-square bg-gradient-to-t from-blue-400 to-indigo-400 rounded-full p-2 right-52 float-end hover:cursor-pointer hover:from-blue-700 hover:to-indigo-700 scale-90 hover:scale-100 transition-all duration-100" >
                <img src="./search.svg" alt="SearchIcon" className="w-7 h-7 aspect-square stroke-blue-700" />
            </div>
        </div>
    )
}