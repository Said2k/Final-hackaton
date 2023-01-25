import { Box, Button, Container, Paper, Rating, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../Context/authContext";
import { useComm } from "../../Context/commContext";
import { useOrgaContext } from "../../Context/organContext";
import { useRecommend } from "../../Context/recommendation";
import "./MysteryBookCard.css";

const MysteryBookCard = () => {
    const navigate = useNavigate()
    const {id} =useParams()
    const {user} = useAuth()
    const {getHistory,history} = useRecommend()
    const {commProducts, deleteComm, getComm,addComment,} = useComm()
    const {getOneOrga, oneProductOrga,ratingOrga, subscribeOrga} = useOrgaContext()
    const [comment, setComment] = useState({
        body: '',
        organization: id,
    })

    const [rating,setRating]= useState({
        value: oneProductOrga.ratings,
    })




    useEffect(()=>{
        getOneOrga(id)
        getHistory()
    },[])


    
    useEffect(()=>{
        getComm(id)
    },[])

    useEffect(() => {
        ratingOrga(id, rating)

    }, [rating.value])

    const handleRating =  (e) => {
        
        setRating({value: Number(e.target.value)})
        
        
    }

console.log(history);
    return (
        <Box className="container1">
            <Box className="block_detail">
                <div class="orga-detail-img">
                    <img width='150px' src={oneProductOrga.cover} alt="" />
                    <div className="btn-podkiska">
                    <p>{oneProductOrga.subscribers}</p>

                        <button onClick={()=> subscribeOrga(id)}>{}  Подписаться</button>
                        <Typography component="legend">Оценка</Typography>
                <Rating 
                //  onClick={()=>ratingOrga(id,rating) }
            onChange={(e)  => handleRating(e)}
                 value={rating.value} />
            <p>{oneProductOrga.ratings}</p>

            {/* {...rating, value: e.target.value} */}
                    </div>
                </div>
                <div>
                <div className="orga-detail-text">
                    <h2 className="">{oneProductOrga.title}</h2>
                    <div className="orga-text">
                    <span className="orga-typo">Адрес: {oneProductOrga.address}</span>
                    <span className="orga-typo">Номер: {oneProductOrga.phone}</span>
                    <span className="orga-typo">Категория: {oneProductOrga.category}</span>  
                    </div> 


                </div>

                <Paper sx={{width: '50%', marginTop: '50px'}}>История заказов
                {history?.map((item)=>(
                    <p>{item}</p>
                    
                ))}
                
                </Paper>
                </div>
                
            </Box>
            
            <Box className="block_detail2">
                <Box className="commList">
                {commProducts.map((item) => (
                    <div key={item.id}>
                    <span>{item.user}  </span>
                    <span>
                        {item.body}   
                    </span>
                    {item.user == user ? <button onClick={()=> deleteComm(id, item.id)}>Delete</button> : null}
                    </div>
                ))}
                </Box>
                <TextField value={comment.body} onChange={(e)=>setComment({...comment, body: e.target.value})} id="standard-basic" label="Оставить отзыв" variant="standard" sx={{marginTop: "10px"}}/>
                <Button onClick={()=>addComment(id, comment)}>Отправить</Button>
            </Box>
        </Box>
    )
};

export default MysteryBookCard;