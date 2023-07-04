import React from 'react'
//import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Detail() {
    const {id} = useParams()
    const [characterDetail, setCharacterDetail] = useState({})

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then (response => response.json())
        .then((data) => {
           if (data.name) {
              setCharacterDetail(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacterDetail({});
     }, [id]);

    return (
    <div>
        <h2 style={{
            color:"rgba(49, 26, 208, 1 )",
            textShadow:"-1px 1px  10px rgba(255, 0, 255, 1 )",
            textDecoration:"dashed underline overline",
            fontSize:25,
            marginBottom:2,
            marginTop:"2%"
         }}>{characterDetail.id}
         </h2>

        <h2 style={{ 
            backgroundColor:'rgba(31, 28, 31, 0.8)',
            color:"beige",
            textShadow:"-1px 1px  10px rgba(255, 0, 255, 1 )",}}>
            {characterDetail.name}
            </h2>

         <div style={{
            backgroundColor:'rgba(31, 28, 31, 0.8)',
            color:"beige",
            textShadow:"-1px 1px  10px rgba(255, 0, 255, 1 )",
            border:'3px solid rgba(84, 5, 208, .5)',
            position:"relative",
            fontSize:20,
            textDecoration:"underline",
            textUnderlinePosition:"under",
            display:"flex",
            flexDirection:"column",
            justifyContent: "space-around",
            
            
         }}>
            <h4>{characterDetail.status}</h4>
            <h4>{characterDetail.species}</h4>
            <h4>{characterDetail.gender}</h4>

         </div>

        <h4 style={{
            color:"beige",
            textShadow:"-1px 1px  10px rgba(255, 0, 255, 1 )",
            border:"1px solid black",
            fontSize:15,
            backgroundColor:'rgba(31, 28, 31, 0.8)', 
         }}>{characterDetail.origin?.name}
         </h4>
        <img src={characterDetail.image} alt={characterDetail.name} />

    </div>
  )
}

export default Detail