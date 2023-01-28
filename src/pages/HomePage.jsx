import main_img from '../assets/images/image.png';

import { useState } from 'react';
import products from '../components/items/products';
import Menu from '../components/Menu/Menu';
import Products from '../components/Product/Product';




const HomePage = () => {
        
    const [items, setItems] = useState(products);


    const onClickAllHandle = () => {
        setItems(products);
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
                            <Menu setItems={setItems}/>
                        }
                    </div>
                    <div className="assortment_collection">
                        {
                            <Products setItems={setItems} items={items}/>
                        }

                        
                    </div>
                    <button onClick={onClickAllHandle} className="view-more button-style">
                        Показать ещё
                    </button>
                </div>
            </div>

        </section>

        
    );
}

export default HomePage;