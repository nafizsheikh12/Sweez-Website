import React from 'react'
import "./home.css"

//component
import Card from '../../component/Card'
import CCard from '../../component/card/CCard'
import TeamCard from '../../component/card/TeamCard'
import Carousel from '../../component/carousel/Carousel'
import Footer from '../../component/footer/Footer'


const Home = () => {
  return (
    <>
       <section className='banner-section'>
          <div className='container'>
              <div className='row mb-8'>
                   <div className='col-md-6'>
                     <h1 className='home-heading'>Besporke <b>software development</b> company</h1>
                     <p className='sub-heading'><mark>Software Design for Posiblities</mark></p><br/>
                     <a className='btn btn-primary get-star'>Get started</a>
                   </div>
                   <div className='col-md-6'>
                       <img className="img-fluid" src="img/banner-2nd.png" alt=""/>
                   </div>
              </div>
          </div>
       </section>

       <div className='container scroller'>
          <h4>SCROLL</h4><br/>
          <div className='row scroolbar'>
              <div className='col-md-12'>
              <i class="fa-solid fa-arrow-down"></i>
              </div>
          </div>
       </div>


       <section id="service_section mb-5">
         <div className='container'>
           <h1 className='content-sec'>Our <span>services</span></h1>
           <p className='content-pr'>Dtech is a leading bespoke software development company. We build robust software for startups and established businesses, Since 2013.</p>

           <div className='row'>
              <Card title="Graphics Design" des="Good graphic design will help a business to gain high visibility which in turn can lead to increased sales. Attractive visuals, effective communication of ideas, higher visibility and enhanced credibility push traffic to your brand. Increased traffic leads to more opportunity." img="img/graphich.png"/>

              <Card title="Android App Development" des="We are reliable Mobile App Development Company.We offer professional android app development services. Our professional team of experts performs deep research and analysis to meet your requirements and expectations." img="img/app-development.png"/>

              <Card title="Web Design and Development" des="We develop dynamic responsive website, e-commerce stores,different kinds of web portals and other web application with easy to use admin panel to edit images and other contents." img="img/graphich.png"/>

              <Card title="Video Editing" des="Sweez provide professional video editing services for your Business, Youtube Channel, Promotional, Personal, Technical etc. A professional video editing can attract customers and make your viewers into customer." img="img/video-edition.png"/>


              <Card title="Digital Marketing" des="Digital marketing creates opportunities for small and medium business enterprises to compete with larger business entities." img="img/digital-marketing.png"/>
           </div>

          </div> 
       </section>

       <section id="counter_section">
           <div className='container'>
                <div className='row'>
                      <div className='col-md-4'>
                          <div className='counter-content'>
                             <h3 className='counter_count'>50+</h3><br/>
                             <p className='project_heading'>Happy Client</p>
                          </div>
                          
                      </div>
                      <div className='col-md-4'>
                          <div className='counter-content'>
                             <h3 className='counter_count'>80 +</h3><br/>
                             <p className='project_heading'>Finished Project</p>
                          </div>
                      </div>
                      <div className='col-md-4'>
                          <div className='counter-content'>
                             <h3 className='counter_count'>10 +</h3><br/>
                             <p className='project_heading'>Skilled Expert</p>
                          </div>
                      </div>
                </div>
           </div>
       </section>


       <section className='chooseSection'>
          <div className='container'>
               <h1 className='content-sec'>WHY <span>CHoose</span> US</h1>
               <p className='content-pr'>Have the peace of mind that you are working with one of the best bespoke software development companies</p>

               <div className='row'>
                   <CCard title="On Time Delivery" des="We implement a time-tested agile process that will ensure rapid and efficient project delivery" icon="fa-solid fa-truck"/>

                   <CCard title="Ideas" des="For clarity of what needs to be done, we discuss the requirements with you and polish them." icon="fa-solid fa-head-side-virus"/>

                    <CCard title="Client Communication" des="Our Development team remains in contact with clients to allow transparency and accuracy." icon="fa-solid fa-tower-cell"/>

                   <CCard title="Dedicated Support" des="90-day warranty & 24/7 support with well-defined SLAs that keep your software running." icon="fa-solid fa-user-gear"/>

               </div>
          </div>
       </section>


       <section id="appcostsec">
         <div className='container'>
             <div className='appcostseccon'>
                    <h3>How much will your app cost?</h3>
                    <p>send us the features you are looking to build and we shall advise on the next steps.</p>
                    <a className='getaquaotebtn' href='#contractUs'>get a quote</a>
             </div>
         </div>
       </section>


       <section id='team_section'>
          
           <h1 className='content-sec'>our <span>Team</span></h1>
           <div className='container'>
              <div className='row'>
                   <TeamCard icon="img/user.png" title="20" des="Developers"/>
                   <TeamCard icon="img/designer.png" title="3" des="Designer"/>
                   <TeamCard icon="img/marketing.png" title="5" des="Marketing"/>
                   <TeamCard icon="img/service.png" title="3" des="Customer Service"/>
                   <TeamCard icon="img/manager.png" title="5" des="Project Manager"/>
              </div>
           </div>
       </section>


       <section id="outClient">
          <div className='container'>
               <h1 className='content-sec'>What our <span>clients</span> say</h1>
              <Carousel />
          </div>
       </section>


       <section id='contractUs'>
           <div className='container'>
                <div className='row'>
                    <div className='col-md-7'>
                        <div className='form-inside-wrapper'>
                            <h2 className='section-text'>It is easy to <span>contact</span> us</h2>
                            <div className='mainform'>
                                <form className='clientform'>
                                    <input type='text' placeholder="Full Name" /><br/>
                                    <input type='text' placeholder="Your Email"/><br/>
                                    <input type='text' placeholder="Your Phone"/>
                                    <input type='text' placeholder="Your Budget"/><br/>
                                    <textarea className='messagearea' placeholder="Your Message"></textarea>
                                    <input type='submit' value="SEND REQUEST" className='submitBtn'/>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-5'>
                        <div className='section-tex'>
                            <h4>Things we do next</h4>
                            <ul>
                                <li>Our team contacts you within one business day</li>
                                <li>We engage an initial discussion to understand your requirements</li>
                                <li>Our team of analysts and developers assess the scope and propose a way forward with mutual consultation</li>
                            </ul>
                        </div>
                    </div>
                </div>
           </div>
       </section>
       <Footer/>
    </>
  )
}

export default Home