import logotype from '../../assets/icons/FoodHouse_Logo.svg';
import cart_icon from '../../assets/icons/cart-icon.svg';
import styles from '../Header/Header.modules.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header_container container">
                <a href="/" className="logotype-box">
                    <img src={logotype} alt="" className="logotype-icon" />
                </a>
                <nav className="menu">
                    <a href="/" className="menu-link">Главная</a>
                    <a href="/" className="menu-link">Меню</a>
                    <a href="/" className="menu-link">Сервис</a>
                    <a href="/" className="menu-link">О нас</a>
                </nav>
                <div className="actions_block">
                    <div className="cart_box">
                        <div className="cart-count">
                            12
                        </div>
                        <div className="cart-icon-box">
                            <img src={cart_icon} alt="" className="cart-icon" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;