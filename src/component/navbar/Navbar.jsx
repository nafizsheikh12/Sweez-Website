import React from 'react'
import "./navbar.css"


const Navbar = () => {
  return (
    <>
      <header>
          <div className='headerTop'>
              <div className='container'>
                   <div className='top-link'>
                      <a href='tel:01875788833'>
                         <i className='fas fa-mobile'></i>
                         +880 1875799476
                      </a>
                   </div>
              </div>
          </div>
          <div className='main-nav'>
             <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                  <a class="navbar-brand" href="#"><img className='logoweb' src='img/logo.png'/></a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                      <a class="nav-link active" aria-current="page" href="#">Home</a>
                      <a class="nav-link" href="#">About Us</a>
                      <a class="nav-link" href="#">Services</a>
                      <a class="nav-link">Contract Us</a>
                    </div>
                  </div>
                </div>
              </nav>
          </div>
      </header>
    </>
  )
}

export default Navbar