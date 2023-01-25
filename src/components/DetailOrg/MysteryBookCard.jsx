import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../Context/authContext";
import { useComm } from "../../Context/commContext";
import { useOrgaContext } from "../../Context/organContext";
import "./MysteryBookCard.css";

const MysteryBookCard = () => {
    const navigate = useNavigate()
    const {id} =useParams()
    const {user} = useAuth()
    const {commProducts, deleteComm, getComm,addComment} = useComm()
    const {getOneOrga, oneProductOrga} = useOrgaContext()
    const [comment, setComment] = useState({
        body: '',
        organization: id,
    })

    useEffect(()=>{
        getOneOrga(id)
    },[])
    useEffect(()=>{
        getComm(id)
    },[])

    return (
        <Box className="container1">
            <Box className="block_detail">
                <div class="orga-detail-img">
                    <img width='150px' src={oneProductOrga.cover} alt="" />
                    <div className="btn-podkiska">
                        <button>Подписаться</button>
                    </div>
                </div>
                <div className="orga-detail-text">
                    <h2 className="">{oneProductOrga.title}</h2>
                    <div className="orga-text">
                    <span className="orga-typo">Адрес: {oneProductOrga.address}</span>
                    <span className="orga-typo">Номер: {oneProductOrga.phone}</span>
                    <span className="orga-typo">Категория: {oneProductOrga.category}</span>  
                    </div> 


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