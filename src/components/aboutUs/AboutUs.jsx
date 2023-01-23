import React from 'react';
import '../aboutUs/AboutUs.css'

const AboutUs = () => {
    return (
        <div>
           

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
        <div className="aboutus-block2">
            <div className="aboutus-block2-h2" >
                <h2>Наши преимущества</h2>
            </div>
            <div className='aboutus-block2-elems'>
                <div сlassName='aboutus-block2-elem' >
                    <img width='300px' src="http://careersteps123.com/wp-content/uploads/sites/3/2019/09/jobs5.jpg" alt="" />
                    <h3>Свободная зона поиска работы</h3>
                    <span>Здесь вы можете легко найти работу не имея опыта или каких-либо еще требований, которые обычно нужны, вы можете легко зарегистрироваться на сайте и уже искать подходящую для вас работу.</span>
                </div>
                <div сlassName='aboutus-block2-elem' >
                    <img src="" alt="" />
                    <h3>Свободная зона для размещения объявлений</h3>
                    <span>Здесь вы так же можете добавлять свою организацию или свой бизнес и принимать заказы от клиентов, наши курьеры доставят ваши заказы за кратчайшие сроки, потому что наш легко настроен для этого.</span>
                </div>
                <div сlassName='aboutus-block2-elem' >
                    <img src="" alt="" />
                    <h3>Легкий способ регистрации</h3>
                    <span>Вы сможете зарегистрироваться очень легко и быстро, что помогает для быстрых действий, то есть для поиска работы и для других вещей.</span>
                </div>
                
            </div>
        </div>

        </div>
    );
};

export default AboutUs;