import './Favoritemodule.css'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Favorite() {

    const selector = useSelector(state => state.myFavorites)

return (
    <div>
        {
            selector.map(e =>{
             return (
              <div className='divaFavorite' key ={e.id}>
                <Link to={`/detail/${e.id}`}><h5>{e.name}</h5></Link>
                <h2 className='h22'>{e.name}</h2>
                <h2 className='h22'>{e.name}</h2>
                <h2 className='h22'>{e.species}</h2>
                <h2 className='h22'>{e.gender}</h2>   
                <img  classname='favoriteImagen' src={e.image} alt={e.name}/>
              </div>
              )
            })
        }
    </div>
  )
}
