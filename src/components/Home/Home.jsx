import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import './home.css'
import HomeCard from './HomeCards';
import SideBar from './SideBar';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import Footer from '../footer/Footer';
import { useNavigate } from 'react-router-dom'
import { useRecommend } from '../../Context/recommendation';
import { useProducts } from '../../Context/productContext';
import { useOrgaContext } from '../../Context/organContext';
const Home = () => {
    const {getRec, recomm} = useRecommend()
    const {getProduct} = useProducts()
    const {getOrga,orgaProducts} = useOrgaContext()
    useEffect(()=>{
        getRec()
        getOrga()
    },[])
        const work = orgaProducts.filter((item)=>{
            return item.category == 'Другое'
        })

    console.log(work)
    const navigate = useNavigate()
    return (
        <div>
        <Box className="homepage-main">
            <Box className='home-block1'>
                {/* <h1 '>ПОЛУЧАЙ И ЗАРАБАТЫВАЙ ВМЕСТЕ С НАМИ</h1> */}

               
                  
               
            <Box className='home-page-block1'>
                       <div >
                        <h1 id='home-page-h1'>ПОЛУЧАЙ И ЗАРАБАТЫВАЙ ВМЕСТЕ С НАМИ</h1>
                        </div> 
                        <div className='block1'>
                        <div className='home-page-block1-buttons'>
                    <h2>Найти работу <DeliveryDiningIcon/></h2>
                    <button onClick={()=>navigate('/aboutus')} class="button1">Начать</button>
                
                    </div>
                <div className='home-page-block1-buttons'>
                    <h2>Сделать заказ <LocalDiningIcon/> </h2>
                    <button onClick={()=>navigate('/products')} class="button1">Заказать</button>
                    </div>
                            </div>   
                
            </Box>
            </Box>
            <Box className='home-page-h2-h2'><h2>НАЧНИ ЗАРАБАТЫВАТЬ С НАМИ</h2></Box>
        <Box id="homepage-block2" className='home-page-block2'>
        <div className='home-lenta'>
            <div className='left-block'>
                <SideBar/>
            </div>
            <div className='mid-block'>
                <HomeCard work={work}/>
            </div>
            <div className='right-block'>

            </div>
            
        </div>
        </Box>
        {/* <Box className="block3"> */}
        <Box className='homepage-block3-h2'>
            <h2>СТАНОВИСЬ ЧАСТЬЮ НАШЕЙ КОМПАНИИ</h2>
        </Box>
        <Box className="home-page-block3">
        <div className="block3-elem">
            <img width="400px" src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/dd109bb1f7572eed.png" alt="" />
            <h2>Закажи прямо сейчас</h2>
            <button onClick={()=> navigate('/products') } className='block3-btn'><span>Создай свой бизнес</span> </button>
        </div>
        <div className="block3-elem">
        <img width="400px" src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/8148ef38ec4096b7.png" alt="" />
            <h2>Добавь свое заведение</h2>
            <button onClick={()=> navigate('/products') } className='block3-btn'> <span>Добавить ресторан</span> </button>
        </div>
        <div className="block3-elem">
        <img width="400px" src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/7a9d4feba62d2c0b.png" alt="" />
            <h2>Стань курьером и зарабатывай</h2>
            <button onClick={()=> navigate('/aboutus') } className='block3-btn'> <span>Начать зарабатывать</span> </button>
        </div>
        {/* </Box> */}
        </Box>

        
            <Box className="block4">
                <h1 className="home-page-block4-h1">Лучшие рестораны и не только</h1>
        <Box className="home-page-block4">
            <div className="block4-elems">
                <img width="100px" src="https://pbs.twimg.com/profile_images/1579916871654117376/Dxd2l1sN_400x400.png" alt="" />
                <h3>McDonalds</h3>
            </div>
            <div className="block4-elems">
                <img width="100px" src="https://triniti-grodno.by/en/assets/images/1-etazh/kfc/kfc_logo.svg.png" alt="" />
                <h3>KFC</h3>
            </div>
            <div className="block4-elems">
                <img width="100px" src="https://yt3.ggpht.com/ytc/AMLnZu_fJmMYkfAFiJPtmF2kk2v2aJZZbzborFMEAJos6Q=s900-c-k-c0x00ffffff-no-rj" alt="" />
                <h3>Nathans</h3>
            </div>
            <div className="block4-elems">
                <img width="100px" src="https://pbs.twimg.com/profile_images/595834945957974016/kNyt2Ar3_400x400.jpg" alt="" />
                <h3>Navat</h3>
            </div>
            <div className="block4-elems">
                <img width="100px" src="https://play-lh.googleusercontent.com/PDSuJ9JjikJ2kNqMoKFEOJ6NpX7_SNXJuW7ixBRiqR_ptEBjjYn5JFm3W4DO7zHMQ5M" alt="" />
                <h3>Burger King</h3>
            </div>
            <div className="block4-elems">
                <img width="100px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWgM1FM_j8g0-Jimra7WSH7A7F1biyxOLr8Q&usqp=CAU" alt="" />
                <h3>Subway</h3>
            </div>
            <div className="block4-elems">
                <img width="100px" src="https://play-lh.googleusercontent.com/jGw2IsVM2f6jXDI9bVneLLHogRPjwwSrFYSQ_Pv8Zczmmx-Y_o56TzOJiwOwetOJM_Q" alt="" />
                <h3>Pizza Hut</h3>
            </div>
            <div className="block4-elems">
                <img width="100px" src="https://pbs.twimg.com/profile_images/895935208830246915/D0Jbrigo_400x400.jpg" alt="" />
                <h3>Dodo pizza</h3>
            </div>
        </Box>
        </Box>
        </Box>
        <Footer/>
        </div>
    );

};

export default Home;