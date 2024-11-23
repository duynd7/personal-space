import { ListBlogs } from "../ui/blogs/ListBlogs";

export default function Blogs() {
    const blogData: BlogData[] = [
        {
            title: "The Ocean's Mysteries",
            description: "Unveiling the deep sea secrets.",
            imagePath: "https://www.example.com/ocean.jpg"
        },
        {
            title: "Desert Wildlife",
            description: "Survival in the arid lands.",
            imagePath: "https://www.example.com/desert.jpg"
        },
        {
            title: "Tropical Paradise",
            description: "Exploring exotic locations.",
            imagePath: "https://www.example.com/tropical.jpg"
        },
        {
            title: "Autumn Harvest",
            description: "Celebrating the fall season.",
            imagePath: "https://www.example.com/autumn.jpg"
        },
        {
            title: "Winter Wonderland",
            description: "Magic of snowy landscapes.",
            imagePath: "https://www.example.com/winter.jpg"
        },
        {
            title: "Spring Blossoms",
            description: "The beauty of renewal.",
            imagePath: "https://www.example.com/spring.jpg"
        },
        {
            title: "Gastronomic Delights",
            description: "Exquisite culinary adventures.",
            imagePath: "https://www.example.com/food.jpg"
        },
        {
            title: "Cultural Festivals",
            description: "A celebration of diversity.",
            imagePath: "https://www.example.com/festival.jpg"
        },
        {
            title: "Architectural Marvels",
            description: "Wonders of human creativity.",
            imagePath: "https://www.example.com/architecture.jpg"
        },
        {
            title: "Modern Art",
            description: "Exploring contemporary art.",
            imagePath: "https://www.example.com/art.jpg"
        }
    ];

    return (
        <div className="flex flex-col justify-center items-center p-10">
            <h1 className="text-xl font-bold p-4">Blogs</h1>
            <ListBlogs data={blogData} />
        </div>
    )
}