import Card from './Card/Card';
import "./Card/Cardmodule.css";


export default function Cards({characters, onClose}) {
    return (<div className='div222'>
         {characters.map((elem) =>{
           return (<Card
           key ={elem.id}
           name={elem.name}
           species={elem.species}
           gender={elem.gender}
           image={elem.image}
           id = {elem.id}
           onClose={() => onClose(elem.id)}
         />)
         })}
   </div>);
}

