import { Box, Button, Container, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../Context/authContext";
import { useComm } from "../../Context/commContext";
import { useOrgaContext } from "../../Context/organContext";
import "./MysteryBookCard.css";

const MysteryBookCard = () => {
    const {id} = useParams()
    const {user} = useAuth()
    const {commProducts, deleteComm, getComm} = useComm()
    const {getOneOrga, oneProductOrga} = useOrgaContext()
    useEffect(()=>{
        getOneOrga(id)
        getComm(2)
    },[])

    return (
        <Box className="container1">
            <Box className="block_detail" sx={{backgroundImage: `url(${oneProductOrga.cover})`}}>

                <div class="content">
                    <div class="blockText">{oneProductOrga.title}</div>
                    <div class="blockText">{oneProductOrga.address}</div>
                    <div class="blockText">{oneProductOrga.phone_number}</div>
                </div>
            </Box>
            <Box className="black_detail2">
                <Box className="commList">
                {commProducts.map((item) => (
                    <div key={item.id}>
                    <span>
                        {item.body} {item.user}
                    </span>
                    {item.user == user ? <button onClick={()=> deleteComm(id, item.id)}>Delete</button> : null}
                    </div>
                ))}
                </Box>
                <TextField id="standard-basic" label="Comments" variant="standard" sx={{marginTop: "10px"}}/>
                <Button></Button>
            </Box>
        </Box>
    )
};

export default MysteryBookCard;