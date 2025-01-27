// data
import blogs from "@/content/blogs/blogs.json"

export const getBlogByTitle = async (title: string) => {
    const data = blogs.find((item) => {
        return item.title === decodeURI(title)
    })

    return data
}