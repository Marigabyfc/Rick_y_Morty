import "./Cardmodule.css"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../../redux/actions/actions';
import React from "react";
import { useEffect, useState } from "react";

export default function Card(props) {
const {name, species, gender, image, onClose, id} = props

const [isFav, setIsFav] = useState(false)

const dispatch = useDispatch();

const selector = useSelector(state => state.myFavorites);

useEffect(() => {
   selector.forEach((fav) => {
      if (fav.id === selector.id) {
         setIsFav(true);
      }
   });
}, [selector]);

// React.useEffect(() => {
// for (let i = 0; i < selector.length; i++) {
//    if(props[i].id === selector[i].id){
//       setIsFav(true)
//    }
// }
// }, [selector]);

const handleFavorite = () =>{
if (isFav){
   setIsFav(false);
   dispatch(actions.deleteFavorite(id));
} else {
   setIsFav(true);
   dispatch(actions.addFavorite({name, species, gender, image, onClose, id}))
}
}

   return (
      <div className = "div1">
       {
         isFav ? (
            <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
               )
            }
         <Link to={`/detail/${id}`}><h5>{name}</h5></Link>
         <button onClick={onClose} className="button">X</button>
         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>   
         <img  classname='imagen' src={image} alt={name}/>
      </div>


     
   );
}
