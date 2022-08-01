import React from 'react'
import "./ccard.css";

const TeamCard = ({icon,title,des}) => {
  return (
    <>
      <div className="col-md-3">
         <div className="card team-card" > 
             <div className='card-image'>
                 <img src={icon} class="" alt="..."/>   
             </div>   
            <div className="card-body">
              <h5 className="team-title">{title} <span>+</span></h5>
              <p className="team-text">{des}</p>
             </div>
         </div>    
       </div>
    </>
  )
}

export default TeamCard