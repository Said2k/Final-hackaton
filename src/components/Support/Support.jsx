import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useRecommend } from '../../Context/recommendation';
import SupportBot from '../SupportBot/SupportBot';

const Support = () => {
        const [searchParams, setSearchParams] = useSearchParams();
        const [searchProduct, setSearchProduct] = useState(searchParams.get('q')|| '')

        const {search,searchProd,} = useRecommend()




    useEffect(()=>{
        setSearchParams({
            q: searchProduct,
        })
        search()
    },[searchProduct])

    console.log(searchProd);
    return (
        <div>
            <div style={{display: 'flex', width:'100%', justifyContent: 'center', marginTop: '30px'}}>
                <input type="text" value={searchProduct} onChange={(e) => setSearchProduct(e.target.value)} /></div>
                {searchProd.map((item)=>(
                    <div style={{display: 'flex', width:'100%', justifyContent: 'center'}}>
                        <h3>{item.title}</h3>
                        <img src={item.cover} alt="" />
                    </div>

                ))}
            <SupportBot/>

        </div>
    );
};

export default Support;