import main_img from '../assets/images/image.png';

import menu_salad from '../assets/icons/disable/green-salad.svg';
import menu_water from '../assets/icons/disable/Water.svg';
import menu_hamburger from '../assets/icons/disable/hamburger.svg';
import menu_french_fries from '../assets/icons/disable/french-fries.svg';
import menu_pizza from '../assets/icons/disable/pizza.svg';
import menu_discount from '../assets/icons/disable/discount.svg';

import asrt_img1 from '../assets/images/item__image-1.png';


const HomePage = () => {
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
                        <div className="menu-item">
                            <div className="menu-img-box">
                                <img src={menu_salad} alt="" className="menu-img" />
                            </div>
                            <p className="menu-name">
                                Салаты
                            </p>
                        </div>

                        <div className="menu-item">
                            <div className="menu-img-box">
                                <img src={menu_water} alt="" className="menu-img" />
                            </div>
                            <p className="menu-name">
                                Напитки
                            </p>
                        </div>

                        <div className="menu-item">
                            <div className="menu-img-box">
                                <img src={menu_hamburger} alt="" className="menu-img" />
                            </div>
                            <p className="menu-name">
                                Бургеры
                            </p>
                        </div>

                        <div className="menu-item">
                            <div className="menu-img-box">
                                <img src={menu_french_fries} alt="" className="menu-img" />
                            </div>
                            <p className="menu-name">
                                Закуски
                            </p>
                        </div>

                        <div className="menu-item">
                            <div className="menu-img-box">
                                <img src={menu_pizza} alt="" className="menu-img" />
                            </div>
                            <p className="menu-name">
                                Пицца
                            </p>
                        </div>

                        <div className="menu-item">
                            <div className="menu-img-box">
                                <img src={menu_discount} alt="" className="menu-img" />
                            </div>
                            <p className="menu-name">
                                Акции
                            </p>
                        </div>
                    </div>
                    <div className="assortment_collection">
                        <div className="assortment-item">
                            
                            <div className="assortment-header">
                                <p className='assortment-title'>
                                    Салат "Греческий"
                                </p>
                                <p className="main-description">
                                    300 грамм - 1 порция
                                </p>
                                <p className="other-description">
                                    36 - белков, 11 - жиров, 55 - углеводов
                                </p>

                                <div className="assortment_action">
                                Добавить в корзину
                                </div>
                            </div>

                           
                            
                            <div className="assortment-img-box">
                                <span className='dark-effect'></span>
                                <img src={asrt_img1} alt="" className="assortment-img" />
                            </div>
                        </div>

                        <div className="assortment-item">
                            
                            <div className="assortment-header">
                                <p className='assortment-title'>
                                    Салат "Греческий"
                                </p>
                                <p className="main-description">
                                    300 грамм - 1 порция
                                </p>
                                <p className="other-description">
                                    36 - белков, 11 - жиров, 55 - углеводов
                                </p>

                                <div className="assortment_action">
                                Добавить в корзину
                                </div>
                            </div>

                           
                            
                            <div className="assortment-img-box">
                                <span className='dark-effect'></span>
                                <img src={asrt_img1} alt="" className="assortment-img" />
                            </div>
                        </div>

                        <div className="assortment-item">
                            
                            <div className="assortment-header">
                                <p className='assortment-title'>
                                    Салат "Греческий"
                                </p>
                                <p className="main-description">
                                    300 грамм - 1 порция
                                </p>
                                <p className="other-description">
                                    36 - белков, 11 - жиров, 55 - углеводов
                                </p>

                                <div className="assortment_action">
                                Добавить в корзину
                                </div>
                            </div>

                           
                            
                            <div className="assortment-img-box">
                                <span className='dark-effect'></span>
                                <img src={asrt_img1} alt="" className="assortment-img" />
                            </div>
                        </div>

                        <div className="assortment-item">
                            
                            <div className="assortment-header">
                                <p className='assortment-title'>
                                    Салат "Греческий"
                                </p>
                                <p className="main-description">
                                    300 грамм - 1 порция
                                </p>
                                <p className="other-description">
                                    36 - белков, 11 - жиров, 55 - углеводов
                                </p>

                                <div className="assortment_action">
                                Добавить в корзину
                                </div>
                            </div>

                           
                            
                            <div className="assortment-img-box">
                                <span className='dark-effect'></span>
                                <img src={asrt_img1} alt="" className="assortment-img" />
                            </div>
                        </div>

                        <div className="assortment-item">
                            
                            <div className="assortment-header">
                                <p className='assortment-title'>
                                    Салат "Греческий"
                                </p>
                                <p className="main-description">
                                    300 грамм - 1 порция
                                </p>
                                <p className="other-description">
                                    36 - белков, 11 - жиров, 55 - углеводов
                                </p>

                                <div className="assortment_action">
                                Добавить в корзину
                                </div>
                            </div>

                           
                            
                            <div className="assortment-img-box">
                                <span className='dark-effect'></span>
                                <img src={asrt_img1} alt="" className="assortment-img" />
                            </div>
                        </div>

                        <div className="assortment-item">
                            
                            <div className="assortment-header">
                                <p className='assortment-title'>
                                    Салат "Греческий"
                                </p>
                                <p className="main-description">
                                    300 грамм - 1 порция
                                </p>
                                <p className="other-description">
                                    36 - белков, 11 - жиров, 55 - углеводов
                                </p>

                                <div className="assortment_action">
                                Добавить в корзину
                                </div>
                            </div>

                           
                            
                            <div className="assortment-img-box">
                                <span className='dark-effect'></span>
                                <img src={asrt_img1} alt="" className="assortment-img" />
                            </div>
                        </div>

                        <div className="assortment-item">
                            
                            <div className="assortment-header">
                                <p className='assortment-title'>
                                    Салат "Греческий"
                                </p>
                                <p className="main-description">
                                    300 грамм - 1 порция
                                </p>
                                <p className="other-description">
                                    36 - белков, 11 - жиров, 55 - углеводов
                                </p>

                                <div className="assortment_action">
                                Добавить в корзину
                                </div>
                            </div>

                           
                            
                            <div className="assortment-img-box">
                                <span className='dark-effect'></span>
                                <img src={asrt_img1} alt="" className="assortment-img" />
                            </div>
                        </div>

                        <div className="assortment-item">
                            
                            <div className="assortment-header">
                                <p className='assortment-title'>
                                    Салат "Греческий"
                                </p>
                                <p className="main-description">
                                    300 грамм - 1 порция
                                </p>
                                <p className="other-description">
                                    36 - белков, 11 - жиров, 55 - углеводов
                                </p>

                                <div className="assortment_action">
                                Добавить в корзину
                                </div>
                            </div>

                           
                            
                            <div className="assortment-img-box">
                                <span className='dark-effect'></span>
                                <img src={asrt_img1} alt="" className="assortment-img" />
                            </div>
                        </div>
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