import { Busqueda } from "./styles/searchbar";
import { useState } from "react";
export default function SearchBar({onSearch}) {
   
   const [id, setId] = useState('');

   const handleOnChange = (e) => {
      setId(e.target.value);
   }

   // const search = () =>{
   //    onSearch(id)
   //    setId('')
   // }

   return (
      <Busqueda>
         <input type='search' placeholder="Ingresa ID..." style ={{
            marginTop:20,
            color:"beige",
            width: '150px',
            height:'38px',
            marginRight:5,
            border:'2px solid rgba(200, 191, 255, 1 )',
            borderRadius: "4px",
            backgroundColor: "rgba(119, 136, 153, 1 )"

         }}
            onChange={handleOnChange}
         />
         <button onClick={() => onSearch(id)} style={{
            marginTop:20,
            width: '85px',
            height:'35px',
            marginLeft: 10,
            background:"rgba(119, 136, 153, 1 )",
            WebkitTextFillColor: "rgba( 245, 245, 220, 1)",
            textShadow:"-1px 1px 10px rgba(0, 255, 0, .5 )",
            borderRadius: 5,
            border: '2px solid rgba(186, 85, 211, .5)',
            
         }}>
         Agregar
         </button>
      </Busqueda>
   );
}

