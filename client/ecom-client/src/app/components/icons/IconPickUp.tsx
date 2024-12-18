export const IconPickUp = (iconProps: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={`${iconProps.size}px`}
            height={`${iconProps.size}px`}
            viewBox="0 0 16 16"
            fill="none"
        >
            <path
                d="M8 2C7.31377 2 6.72293 2.48437 6.58835 3.15728L6.2198 5H4.1802L4.62719 2.76505C4.94874 1.15729 6.3604 0 8 0C9.6396 0 11.0513 1.15729 11.3728 2.76505L11.8198 5H9.7802L9.41165 3.15728C9.27707 2.48437 8.68623 2 8 2Z"
                fill={iconProps.fill}
            />
            <path d="M15 15H1V13L2 7H14L15 13V15Z" fill={iconProps.fill} />
        </svg>

    )
}