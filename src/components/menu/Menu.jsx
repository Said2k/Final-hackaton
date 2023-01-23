import React from 'react';
import '../menu/Menu.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const Menu = () => {
    return (
        <div className='menu'>
            <div className='menu-navigation'>
                <h2>Категории</h2>
                <a href="">Супы</a>
                <a href="">Горячие блюда</a>
                <a href="">Салаты</a>
                <a href="">Закуски</a>
                <a href="">Фастфуд</a>
                <a href="">Десерты</a>
                <a href="">Прочее</a>
            </div>
            <div className='menu-cards'>
                <div className="menu-cards-wrap">
                    <div className="menu-card">
                        <img width="250px" src="https://kfc.ee/wp-content/uploads/2022/09/VEGGIE-FILET-BURGER.png" alt="" />
                        <div className='menu-btn-cart'>
                        <h4>Бургер</h4>
                        <button><AddShoppingCartIcon/></button>
                    </div>
                    </div>
                    <div className="menu-card">
                        <img width="250px" src="https://kfc.ee/wp-content/uploads/2022/09/VEGGIE-FILET-BURGER.png" alt="" />
                        <div className='menu-btn-cart'>
                        <h4>Бургер</h4>
                        <button><AddShoppingCartIcon/></button>
                    </div>
                    </div>
                    <div className="menu-card">
                        <img width="250px" src="https://kfc.ee/wp-content/uploads/2022/09/VEGGIE-FILET-BURGER.png" alt="" />
                        <div className='menu-btn-cart'>
                        <h4>Бургер</h4>
                        <button><AddShoppingCartIcon/></button>
                    </div>
                    </div>
                    <div className="menu-card">
                        <img width="250px" src="https://kfc.ee/wp-content/uploads/2022/09/VEGGIE-FILET-BURGER.png" alt="" />
                        <div className='menu-btn-cart'>
                        <h4>Бургер</h4>
                        <button><AddShoppingCartIcon/></button>
                    </div>
                    </div>
                    <div className="menu-card">
                        <img width="250px" src="https://kfc.ee/wp-content/uploads/2022/09/VEGGIE-FILET-BURGER.png" alt="" />
                        <div className='menu-btn-cart'>
                        <h4>Бургер</h4>
                        <button><AddShoppingCartIcon/></button>
                    </div>
                    </div>
                    <div className="menu-card">
                        <img width="250px" src="https://kfc.ee/wp-content/uploads/2022/09/VEGGIE-FILET-BURGER.png" alt="" />
                        <div className='menu-btn-cart'>
                        <h4>Бургер</h4>
                        <button><AddShoppingCartIcon/></button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;