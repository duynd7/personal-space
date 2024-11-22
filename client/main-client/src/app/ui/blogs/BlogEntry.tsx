export const BlogEntry = (props: {data: BlogData}) => {
    const {title, description, imagePath} = props.data;
    return (
        <div key={title} className="h-80 bg-slate-200 text-slate-900 rounded-md bg-clip-border scale-100 hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-md hover:shadow-gray-200">
            <img src={imagePath} className="object-cover h-48 w-96 rounded-t-md" />
            <h1 className="font-bold text-xl pt-1 px-5">{title}</h1>
            <p className="px-5">{description}</p>
        </div>
    )
}