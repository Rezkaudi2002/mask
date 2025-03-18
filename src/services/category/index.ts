// data
import categories from "@/content/categories/categories";

export const getCategoryByTitle = async (title: string): Promise<CategoryType | undefined> => {

    const data = categories.find((item) => item.title === decodeURI(title));

    if (!data) return undefined; // Ensure undefined is returned if not found

    return data
};

export const getAllCategories = () => {
    return categories
}