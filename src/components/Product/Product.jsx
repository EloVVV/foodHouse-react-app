import { CATEGORIES } from "../../data/categories";

import productStyles from '../Product/Products.modules.css';



const Products = ({setItems, items}) => {

    return (
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
    );
}

export default Products;