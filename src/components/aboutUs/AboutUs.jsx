import { Button } from '@mui/material';
import React from 'react';
import { useAuth } from '../../Context/authContext';
import { useDell } from '../../Context/deliveryContext';
import '../aboutUs/AboutUs.css'

const AboutUs = () => {
    return (
        <div>
            <div class="background-one">
                <div class="link-container">
                    <a class="link-one" href="/aboutus">О нас</a>
                </div>
            </div>

            <div className='aboutus'>
            <div className='aboutus-h1'>
                <h1>Как это работает?</h1>
            </div>
            <div className='aboutus-block1'>
               <div className='aboutus-block1-elems'>
            <h1>Шаг 1</h1>
            <span>Создаете аккаунт и заходите на него</span>
        </div>
        <div className='aboutus-block1-elems'>
            <h1>Шаг 2</h1>
        <span>Добавляете свою организацию и можете размещать свое объявление, а так же если вы хотите найти работу, то переходите по ссылке и ищете подходящую для себя работу в качестве курьера или же еще кого-то</span>
        </div>
        <div className='aboutus-block1-elems'>
            <h1>Шаг 3</h1>
        <span>Начинаете работать и зарабатывать</span>
        </div> 
            </div>
            
        
        </div>

        </div>
    );
};

export default AboutUs;