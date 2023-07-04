import Card from './Card';
import { DivPersonajes } from './styles/cards';
 export default function Cards({characters, onClose}) {
 
   return <DivPersonajes>{
         characters.map(({id, name, status, species, origin, gender, image}) => (
            <Card 
               key={id}
               id={id}
               name={name}
               status={status}
               species={species}
               gender={gender}
               origin={origin.name}
               image={image}
               onClose={onClose}
            /> 

         ))
         
      }</DivPersonajes>;
   
}
