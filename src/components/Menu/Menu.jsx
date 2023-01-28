import { useState } from "react";
import { filter } from "../../utils/filter";
import menu from "../items/menu";
import products from "../items/products";

import menuStyles from '../Menu/Menu.modules.css';



const Menu = ({setItems}) => {
    const [menuItems, setMenuItems] = useState(menu);
    
    const onClickFilterHandle = (category) => {
        setItems(filter(products, category));
    };

    return (
        menuItems.map((item) => {
            return (
                <div key={item.id} onClick={() => onClickFilterHandle(item.category)} className="menu-item">
                    <div className="menu-img-box">
                        {/* <img src={menu_salad} alt="" className="menu-img" /> */}
                        {item.img}
                    </div>
                    <p className="menu-name">
                        {item.name}
                    </p>
                </div>
            );
        })
    );
}

export default Menu;