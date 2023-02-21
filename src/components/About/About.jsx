import  img  from "./img.jpg/mariana.jpg"
import './Aboutmodule.css'

export default function About (){
    return(
        <div>
          <img src={img} alt="img" className="imgabout
          "/>
            <h1>Bienvenidos!</h1>
        </div>
    )
}