type SearchBarProps = {
    placeholder: string
}

export const SearchBar = ({ placeholder }: SearchBarProps) => {
    return (
        <div className="flex flex-row items-center">
            <svg className="stroke-secondary w-6 h-6"
                xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
                <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <input
                id="searchBar"
                placeholder={placeholder}
                className="w-3/4 border-b-0 border-opacity-0 hover:border-b-2 hover:border-b-primary focus:border-b-2 focus:border-b-primary duration-100"
            />
        </div>
    )
}