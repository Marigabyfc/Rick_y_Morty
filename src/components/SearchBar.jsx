import { useState } from "react";
import "./Nav/Navmodule.css"
export default function SearchBar({onSearch}) {

   const [character, setCharacter] = useState("")

   const handleChange = (e) =>{
      setCharacter(e.target.value)
   }

   return (
      <div>
         <input value = {character} type='search' className = "input2" name = "name" onChange={handleChange}/>
      <button onClick={() => onSearch(character)}>Agregar</button>
      </div>
   );
}
