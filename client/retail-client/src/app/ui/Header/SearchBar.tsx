type SearchBarProps = {
    placeholder?: string
};

export const SearchBar = ({ placeholder }: SearchBarProps) => {
    return (
        <div className="items-center inline-flex w-3/5 bg-slate-50 p-3 rounded-full">
            <input
                className=" w-11/12"
                placeholder={placeholder || ""}
            >
            </input>
            <div className="bg-blue-400 rounded-full p-2">
                <img src="./search.svg" alt="SearchIcon" className="w-7 h-7 aspect-square" />
            </div>
        </div>
    )
}