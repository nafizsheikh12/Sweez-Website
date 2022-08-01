import React from 'react'
import './card.css'


const Card = ({title,des,img}) => {
  return (
    <>
       <div className="col-md-4">
         <div className="card service-card" >    
            <div className="card-body">
              <img  src={img} className="cardimg img-fluid" alt="..."/>
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{des}</p>
             
             </div>
         </div>    
        </div>
    </>
  )
}

export default Card