import Card from './Card/Card';



export default function Cards({characters, onClose}) {
    return (<div>
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

