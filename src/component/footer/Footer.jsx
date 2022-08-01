import React from 'react'
import "./footer.css";



const Footer = () => {
  return (
    <>
       <footer>
          <div className='container'>
               <div className='row'>
                   <div className='col-md-3 sl'>
                      <img src='img/logo.png'/>
                      <p>Since 2018,Sweez has been closely working with its clients across the globe to help them transform their ideas into powerful softwares</p>
                      <div className='social-icon-f'>
                         <a href='#'><i class="fa-brands fa-facebook"></i></a>
                         <a href='#'><i class="fa-brands fa-instagram"></i></a>
                         <a href='#'><i class="fa-brands fa-linkedin"></i></a>
                      </div>
                   </div>
                   <div className='col-md-3 footer-service'>
                      <ul>
                          <h3>Services</h3>
                          <li><a>Web Application Development</a></li>
                          <li><a>Mobile App Development</a></li>
                          <li><a>Dedicated Development Team</a></li>
                          <li><a>UI/UX Design</a></li>
                          <li><a>Software Project Rescue</a></li>
                      </ul>
                   </div>
                   <div className='col-md-3'>
                       <h3>Official Info</h3>
                       <ul>
                           <li><a><i className='fas fa-message'></i>info@sweezststem.co</a></li>
                           <li><a><i className='fas fa-phone'></i>020 7871 0029</a></li>
                           <li><a><i className='fas fa-location'></i>2a the parade Epsom kt18 5fe</a></li>
                       </ul>
                   </div>
                   <div className='col-md-3'>
                      <ul>
                         <h3>News Letter</h3>
                         <li>Subscribe our newsleteer to get our latest update & news.</li>
                      </ul>
                   </div>
               </div>
               <div className='row'>
                   <div className='col-md-12 text-center fh4'>
                       <h4>© 2022 Sweez.ltd . All Rights Reserved</h4>
                   </div>
               </div>
          </div>
       </footer>
    </>
  )
}

export default Footer