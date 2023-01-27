import main_img from '../assets/images/image.png';

import menu_salad from '../assets/icons/disable/green-salad.svg';
import menu_water from '../assets/icons/disable/Water.svg';
import menu_hamburger from '../assets/icons/disable/hamburger.svg';
import menu_french_fries from '../assets/icons/disable/french-fries.svg';
import menu_pizza from '../assets/icons/disable/pizza.svg';
import menu_discount from '../assets/icons/disable/discount.svg';


import { useState } from 'react';
import products from '../components/items/products';
import { CATEGORIES } from '../data/categories';
import { IconDiscont, IconFrenchFries, IconGreenSalad, IconHamburger, IconPizza, IconWater } from '../components/icons/icons';
import menu from '../components/items/menu';
import { filter } from '../utils/filter';





const HomePage = () => {
        
    const [items, setItems] = useState(products);

    const [menuItems, setMenuItems] = useState(menu);

    const onClickFilterHandle = (category) => {
        setItems(filter(products, category));
    };


    return (
        <section>
            <div className="main-block">
                <div className="main-block_container container">
                    <div className="main_text-content">
                        <p>Экспресс-доставка от Яндекс Еды</p>
                        <div className="main-headline">
                            <h1 className="main-title">
                                Быстро и вкусно.
                            </h1>
                        </div>
                        <p className='main_description'>Сеть быстрого питания #1 в Казани</p>
                        <div className="action-box">
                            <button className="button-style">
                                Сделать заказ
                            </button>
                            <p>
                                бесплатная доставка от 500 рублей
                            </p>
                        </div>
                    </div>
                    <div className="main_image-box">
                        <img src={main_img} alt="" className="main-img" />
                    </div>
                </div>
            </div>

            <div className="assortment">
                <div className="assortment_container container">
                    <h1>Наше Меню</h1>
                    <div className="menu_collection">
                        {
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
                        }
                    </div>
                    <div className="assortment_collection">
                        {
                            items.map((item) => {
                                return (
                                    <div key={item.id} className="assortment-item">
                                
                                        <div className="assortment-header">
                                            <p className='assortment-title'>
                                                {CATEGORIES[item.category]} "{item.name}"
                                            </p>
                                            <p className="main-description">
                                                {item.weight} грамм - 1 порция
                                            </p>
                                            <p className="other-description">
                                                {item.proteins} - белков, {item.fats} - жиров, {item.carbs} - углеводов
                                            </p>
            
                                            <div className="assortment_action">
                                                Добавить в корзину
                                            </div>
                                        </div>
            
                                    
                                        
                                        <div className="assortment-img-box">
                                            <span className='dark-effect'></span>
                                            <img src={item.img} alt="" className="assortment-img" />
                                        </div>
                                    </div>
                                );
                            })
                        }

                        
                    </div>
                    <button className="view-more button-style">
                        Показать ещё
                    </button>
                </div>
            </div>

        </section>

        
    );
}

export default HomePage;