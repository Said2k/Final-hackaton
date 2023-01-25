import React, { useEffect, useState } from 'react';
import { useRecommend } from '../../Context/recommendation';
import { useSearchParams } from 'react-router-dom';
import Support from '../Support/Support';
import '../SupportBot/SupportBot.css'



const SupportBot = () => {
    const {supportBot,answer,supportBotAnswer,quations } = useRecommend()
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchProduct, setSearchProduct] = useState(searchParams.get('q')|| '')
    console.log(quations);
    console.log(answer);

    useEffect(()=>{
        supportBot()
    },[])
// console.log(answer);
    
    useEffect(()=>{
        setSearchParams({
            q: searchProduct,
        })

    },[searchProduct])

    return (
        <div className='supportbot-main'>
            
        <div className='support-bot'>
            <h2>Вопросы</h2>
            {quations.map((item,index)=>(
                <div className='bot-question'>
                    <button className='bot-button'
                    onClick={()=>supportBotAnswer(index+1)}
                    value={searchProduct} ><p>{item}</p></button>
                </div>
            ))}
            
               

        </div>
         <div className='bot-asnwer'>
            <h2>Ответы</h2>
                    <p>{answer}</p>
                </div>
        </div>
    );
};

export default SupportBot;