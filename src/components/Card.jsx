import { Nombres } from "./styles/cards";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../redux/actions/actions";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Card({id, name, status, species, origin, gender, image, onClose, addFav, removeFav, myFavorites}) {
   
   const {pathname} = useLocation();
   const [isFav, setIsFav] = useState(false);

   useEffect(()=>{
      myFavorites.forEach(charFav => {
         if (charFav.id === id) setIsFav(true)
      })
   },[myFavorites]);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeFav(id);
         } else{
            setIsFav(true);
            addFav({
               id, name, status, species, origin, gender, image
            });
         }
   }


   return (
      <div style={{backgroundColor:'rgba( 169, 169, 169, .3 )', 
            color:"beige",
            width:'16%',
            marginRight: '2%',
            marginLeft: '2%',
            marginTop:'5%',
            padding:1,
            position: "relative",
            textShadow:"-1px 1px  10px rgba(0, 255, 0, 1 )",
            border: '2px solid rgba(225, 112, 220, 1)',
            borderRadius:25,
         }}>


         {pathname === '/home' && <button onClick={() => onClose(id)} 
            style={{
               position: 'absolute',
               right:0,
               top:0,
               backgroundColor: 'rgb( 127, 120, 200)',
               borderRadius:10
            }}
         >
         X
         </button>}

         {
            isFav ? <button onClick={handleFavorite}>💕</button>
            : <button onClick={handleFavorite}>❤</button>
         }

         <img src={image}
         alt='No se pudo cargar imagen' 
         width={200} 
         height={200} 
         border={"3rem"}
         style={{borderRadius: '10%',
         position:"relative",
         }}
         />

         <h2 style={{
            textDecoration:"dashed underline overline",
            fontSize:25,
            marginBottom:2,
            marginTop:2
         }}>
            {id}
         </h2>
         <Nombres style={{
                 
            }}>
         
            <Link to={`/Detail/${id}`}>{name}</Link>
         
         </Nombres>
         <div style={{
            border:'1px solid rgba(84, 5, 208, .5)',
            position:"relative",
            fontSize:12,
            textDecoration:"underline",
            textUnderlinePosition:"under",
            display:"flex",
            flexDirection:"column",
            justifyContent: "space-around",
            
            
         }}>
            <h2>{status}</h2>
            <h2>{species}</h2>
            <h2>{gender}</h2>
         </div>
         <h2 style={{
            border:"1px solid black",
            fontSize:13,
            backgroundColor:'rgba(31, 28, 31, 0.8)', 
         }}
         >{origin}
         </h2>
      </div>
   );

}

 function mapDispatchToProps(dispatch){
   return{
      addFav: function(character){
         dispatch(addFav(character))
      },

      removeFav: function (id) {
         dispatch(removeFav(id))

   }
};
};

const mapStateToProps = (state)=>{
   return{
      myFavorites: state.myFavorites,
   }
}

export default connect (mapStateToProps, mapDispatchToProps)(Card);
