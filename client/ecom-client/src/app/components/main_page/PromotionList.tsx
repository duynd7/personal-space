import { PromotionData, PromotionEntry } from "./promotion_list/PromotionEntry";

export const PromotionList = () => {
    let promotions: PromotionData[] = [
        {
            id: "PRM_0001",
            imagePath: "./images/promo_0001.png"
        },
        {
            id: "PRM_0002",
            imagePath: "./images/promo_0001.png"
        },
        {
            id: "PRM_0003",
            imagePath: "./images/promo_0001.png"
        },
        {
            id: "PRM_0004",
            imagePath: "./images/promo_0001.png"
        },
        {
            id: "PRM_0005",
            imagePath: "./images/promo_0001.png"
        },
        {
            id: "PRM_0005",
            imagePath: "./images/promo_0001.png"
        },
        {
            id: "PRM_0005",
            imagePath: "./images/promo_0001.png"
        },
        {
            id: "PRM_0005",
            imagePath: "./images/promo_0001.png"
        },
        {
            id: "PRM_0005",
            imagePath: "./images/promo_0001.png"
        },
        {
            id: "PRM_0005",
            imagePath: "./images/promo_0001.png"
        },
        {
            id: "PRM_0005",
            imagePath: "./images/promo_0001.png"
        },
        {
            id: "PRM_0005",
            imagePath: "./images/promo_0001.png"
        }
    ];

    return (
        <div className="h-fit w-full bg-white p-4">
            <div className="flex space-x-2 snap-proximity snap-x overflow-x-scroll">
                {promotions.map((promotion: PromotionData, index) => {
                    return (
                        <div key={index} className="snap-center">
                            <PromotionEntry id={promotion.id} imagePath={promotion.imagePath} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}