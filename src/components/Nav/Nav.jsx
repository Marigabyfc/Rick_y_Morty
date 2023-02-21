import SearchBar from "../SearchBar";
import "./Navmodule.css"
import { Link } from "react-router-dom";

export default function Nav ({onSearch}){
    return (
        <div className="div2">
            <Link to ='/about'><button className="buttonbito">About</button></Link>
            <Link to='/home'><button className="boton">Home</button></Link>
            <Link to = '/favorite'><button className="botoncito">Favorites</button></Link>
            <SearchBar onSearch={onSearch} />
        </div>
    )
}