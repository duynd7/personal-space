export type PromotionData = {
    id: string,
    imagePath: string
}

export const PromotionEntry = (promotionData: PromotionData) => {
    let style = { backgroundImage: `url(${promotionData.imagePath})`}

    return (
        <div
            className="min-w-72 h-40 rounded-md overflow-hidden bg-cover snap-center"
            style={style}
        >
            <div className="relative top-2 w-fit h-fit bg-secondary rounded-r-md">
                <p className="p-1 text-white font-bold text-sm">Promo</p>
            </div>
        </div>
    )
}