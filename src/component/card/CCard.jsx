import React from 'react'
import './ccard.css';

const CCard = ({title,des,icon}) => {
  return (
    <>
    <div className="col-md-4 mb-4">
         <div className="card choose-card" >    
            <div className="card-body">
               <i className={icon} id="chooseicon"></i>
              <h5 className="card-titlee">{title}</h5>
              <p className="card-tex">{des}</p>
             </div>
         </div>    
     </div>
    </>
  )
}

export default CCard