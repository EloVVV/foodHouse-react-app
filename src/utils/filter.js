import { CATEGORIES } from "../data/categories";

export const filter = (data, category) => {
    return data.filter((item) => {
        return item.category === category;
    });
}