import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useRecommend } from '../../Context/recommendation';
import SupportBot from '../SupportBot/SupportBot';
import '../SupportBot/SupportBot.css'
import { useNavigate } from 'react-router-dom'
import Footer from '../footer/Footer';


const Support = () => {
        const [searchParams, setSearchParams] = useSearchParams();
        const [searchProduct, setSearchProduct] = useState(searchParams.get('q')|| '')

        const {search,searchProd} = useRecommend()
        const navigate = useNavigate()





    useEffect(()=>{
        setSearchParams({
            q: searchProduct,
        })
        search()
    },[searchProduct])

    console.log(searchProd);
    return (
        <div className='support1'>
            <div  style={{display: 'flex', justifyContent: 'center', marginTop: '30px'}}>
                <input type="text" value={searchProduct} onChange={(e) => setSearchProduct(e.target.value)} /></div>
                {searchProd.map((item)=>(
                    <div onClick={()=> navigate('/products') } className='global-search' style={{display: 'flex', justifyContent: 'center'}}>
                        <img src={item.cover} alt="" />
                        <h3>{item.title}</h3>
                    </div>

                ))}
            <SupportBot/>
<Footer/>
        </div>
    );
};

export default Support;