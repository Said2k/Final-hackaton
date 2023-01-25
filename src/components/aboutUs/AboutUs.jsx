import { Button } from '@mui/material';
import React from 'react';
import { useAuth } from '../../Context/authContext';
import { useDell } from '../../Context/deliveryContext';
import '../aboutUs/AboutUs.css'
import Footer from '../footer/Footer';

const AboutUs = () => {
 
    return (
        <div className='aboutus-main'>


            <div className='aboutus'>
            <div className='aboutus-h1'>
                {/* <h1>Как это работает?</h1> */}
        <div class="background-one">
        <div class="link-container">
            <a class="link-one" href="/aboutus">Как это работает?</a>
        </div>
        </div>

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
        <div className="aboutus-block2-main">
        <div className="aboutus-block2">
            <div className="aboutus-block2-h2" >
                <h2>Наши преимущества</h2>
            </div>
            <div className='aboutus-block2-elems'>
                <div id='aboutus-block2-elem' >
                    <img src="http://careersteps123.com/wp-content/uploads/sites/3/2019/09/jobs5.jpg" alt="" />
                    <h3>Свободная зона поиска работы</h3>
                    <span>Здесь вы можете легко найти работу не имея опыта или каких-либо еще требований, которые обычно нужны, вы можете легко зарегистрироваться на сайте и уже искать подходящую для вас работу.</span>
                </div>
                <div id='aboutus-block2-elem' >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPpTc3e9jLWq0QmgWR-p6jkLXbwbK1Z9gDKg01-fLoFFtrpAfBoP2KSVLrC76S4eknpQg&usqp=CAU" alt="" />
                    <h3>Свободная зона для размещения объявлений</h3>
                    <span>Здесь вы так же можете добавлять свою организацию или свой бизнес и принимать заказы от клиентов, наши курьеры доставят ваши заказы за кратчайшие сроки, потому что наш легко настроен для этого.</span>
                </div>
                <div id='aboutus-block2-elem' >
                    <img src="https://www.a-priority.ru/upload/medialibrary/ee5/ee5aade22bc8397a4d44f82c1a5d4f4f.png" alt="" />
                    <h3>Легкий способ регистрации</h3>
                    <span>Вы сможете зарегистрироваться очень легко и быстро, что помогает для быстрых действий, то есть для поиска работы и для других вещей.</span>
                </div>
                
            </div>
        </div>
</div>

        <div className='aboutus-block3'>
        <div className='aboutus-block3-elem'>
            <img src="https://resumeshkin.com/ru/uploads/posts/2020-08/1596510013_chelovek-idyot-k-svoej-czeli-v-rezyume.jpg" alt="" />
            <h2>Наша цель</h2>
            <span>Цель нашей компании в том, чтобы предоставить рабочие места и удобные условия для организаций в сфере доставки. Мы хотим предоставить работу для людей, у которых нет условий, чтобы устроиться на работу из-за разных факторов. Наш сайт позволит легко зарегистрироваться и зарабатывать деньги на доставке, не только еды, но и всего прочего, что означает, то что вы так же можете создавать рабочие места для пользователей нашего сайта. Все очень просто, если вам нужно доставить какую-то вещь в какую-либо точку, то вам нужно зарегистрироваться и опубликовать пост с подробностями о доставляемом веще и наши курьеры сделают эту работу в кратчайшие сроки.</span>
        </div>
        </div>
        <Footer/>
        </div>
        
    );
};

export default AboutUs;