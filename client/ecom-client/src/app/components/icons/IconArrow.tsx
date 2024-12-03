export const IconArrow = (iconProps: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={`${iconProps.size}px`} 
            height={`${iconProps.size}px`}
            viewBox="0 0 24 24"
            fill={iconProps.fill}
        >
            <path
                d="M5 12H19M19 12L13 6M19 12L13 18"
                stroke={iconProps.stroke}
                strokeWidth={iconProps.strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>

    )
}