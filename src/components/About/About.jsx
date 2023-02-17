import  img  from "./img.jpg/mariana.jpg"

export default function About (){
    return(
        <div>
            <img src={img} alt="img"/>
            <h1>Bienvenidos!</h1>
        </div>
    )
}