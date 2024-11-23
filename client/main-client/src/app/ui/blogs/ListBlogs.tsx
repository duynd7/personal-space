import { BlogEntry } from "./BlogEntry";

export const ListBlogs = (props: { data: BlogData[] }) => {
    const { data } = props;
    return (
        <div className="grid grid-cols-3 gap-4">
            {data.map((d) => {
                return (
                    <BlogEntry data={d} />
                )
            })}
        </div>
    )
}