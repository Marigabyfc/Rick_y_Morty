import "./Cardmodule.css"
import { Link } from "react-router-dom";


export default function Card(props) {
 const {name, species, gender, image, onClose, id} = props
   return (
      <div className = "div">
         <Link to={`/detail/${id}`}><h5 className="card-title">{name}</h5></Link>
         <button onClick={onClose} className="button">X</button>
         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img  src={image} alt={name} width = "300px" />
      </div>
   );
}
