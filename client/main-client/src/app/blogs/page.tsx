import { ListBlogs } from "../ui/blogs/ListBlogs";

export default function Blogs() {
    const blogData: BlogData[] = [
        {
            title: "The Ocean's Mysteries",
            description: "Unveiling the deep sea secrets.",
            imagePath: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjcyMDR8MHwxfGFsbHwxfHx8fHx8fHwxNjMyMjM3NjIz&ixlib=rb-1.2.1&q=80&w=400"
        },
        {
            title: "Desert Wildlife",
            description: "Survival in the arid lands.",
            imagePath: "https://images.unsplash.com/photo-1501706362039-c6e809899963?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjcyMDR8MHwxfGFsbHwxfHx8fHx8fHwxNjMyMjM3NjIz&ixlib=rb-1.2.1&q=80&w=400"
        },
        {
            title: "Tropical Paradise",
            description: "Exploring exotic locations.",
            imagePath: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjcyMDR8MHwxfGFsbHwxfHx8fHx8fHwxNjMyMjM3NjIz&ixlib=rb-1.2.1&q=80&w=400"
        },
        {
            title: "Autumn Harvest",
            description: "Celebrating the fall season.",
            imagePath: "https://images.unsplash.com/photo-1501961451162-9d05e03eaeff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjcyMDR8MHwxfGFsbHwxfHx8fHx8fHwxNjMyMjM3NjIz&ixlib=rb-1.2.1&q=80&w=400"
        },
        {
            title: "Winter Wonderland",
            description: "Magic of snowy landscapes.",
            imagePath: "https://images.unsplash.com/photo-1516684669134-de6a586f4168?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjcyMDR8MHwxfGFsbHwxfHx8fHx8fHwxNjMyMjM3NjIz&ixlib=rb-1.2.1&q=80&w=400"
        },
        {
            title: "Spring Blossoms",
            description: "The beauty of renewal.",
            imagePath: "https://images.unsplash.com/photo-1526169727768-bc1c55e9d788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjcyMDR8MHwxfGFsbHwxfHx8fHx8fHwxNjMyMjM3NjIz&ixlib=rb-1.2.1&q=80&w=400"
        },
        {
            title: "Gastronomic Delights",
            description: "Exquisite culinary adventures.",
            imagePath: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjcyMDR8MHwxfGFsbHwxfHx8fHx8fHwxNjMyMjM3NjIz&ixlib=rb-1.2.1&q=80&w=400"
        },
        {
            title: "Cultural Festivals",
            description: "A celebration of diversity.",
            imagePath: "https://images.unsplash.com/photo-1500839941678-aae14dbfae9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjcyMDR8MHwxfGFsbHwxfHx8fHx8fHwxNjMyMjM3NjIz&ixlib=rb-1.2.1&q=80&w=400"
        },
        {
            title: "Architectural Marvels",
            description: "Wonders of human creativity.",
            imagePath: "https://images.unsplash.com/photo-1501982823946-cbd592e8ddc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjcyMDR8MHwxfGFsbHwxfHx8fHx8fHwxNjMyMjM3NjIz&ixlib=rb-1.2.1&q=80&w=400"
        },
        {
            title: "Modern Art",
            description: "Exploring contemporary art.",
            imagePath: "https://images.unsplash.com/photo-1533779283484-9cf10e30b6ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjcyMDR8MHwxfGFsbHwxfHx8fHx8fHwxNjMyMjM3NjIz&ixlib=rb-1.2.1&q=80&w=400"
        }
    ];

    return (
        <div className="flex flex-col justify-center items-center p-10">
            <h1 className="text-xl font-bold p-4">Blogs</h1>
            <ListBlogs data={blogData} />
        </div>
    )
}