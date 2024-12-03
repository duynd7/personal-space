import { IconLocation } from "../../icons/IconLocation"

export type ItemData = {
    id: string,
    displayName: string,
    fullPrice: number,
    discount: number,
    imagePath: string,
    shopName: string
}

type ItemEntryData = {
    itemData: ItemData
}

export const ItemEntry = ({ itemData }: ItemEntryData) => {
    return (
        <div className="w-52 h-fit cursor-pointer hover:shadow-md hover:shadow-secondary pt-3 pb-3 px-1 select-none">
            <img
                src={itemData.imagePath}
                className="w-52 h-52 rounded-md"
                draggable={false}
            />
            <p className="font-bold px-2">{itemData.displayName}</p>
            <p className="font-bold text-secondary px-1 py-2 flex flex-row items-center">
                <span>
                    <IconLocation fill="#e4ac05" stroke="#e4ac05" size={15} />
                </span>
                {itemData.shopName}
            </p>
            <p className="font-bold px-2">{`${itemData.fullPrice}₫`}</p>
            <button className="w-full bg-primary text-white rounded-md p-2 font-bold shadow-primary shadow-sm">Đặt ngay</button>
        </div>
    )
}