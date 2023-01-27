import { IconDiscont, IconFrenchFries, IconGreenSalad, IconHamburger, IconPizza, IconWater } from "../icons/icons";

const menu = [
    {
        id: "greenSalad",
        name: "Салаты",
        category: "greenSalad",
        img: <IconGreenSalad/>
    },
    {
        id: "water",
        name: "Напитки",
        category: "water",
        img: <IconWater/>
    },
    {
        id: "hamburger",
        name: "Бургеры",
        category: "hamburger",
        img: <IconHamburger/>
    },
    {
        id: "frenchFrie",
        name: "Закуски",
        category: "frenchFrie",
        img: <IconFrenchFries/>
    },
    {
        id: "pizza",
        name: "Пицца",
        category: "pizza",
        img: <IconPizza/>
    },
    {
        id: "discount",
        name: "Акции",
        category: "discount",
        img: <IconDiscont/>
    }
]

export default menu;