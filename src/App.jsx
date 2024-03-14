  import React from 'react'
  import Header from './Component/Header.jsx'
  import { Features_list } from './Component/Elements.jsx'
  import { About_list } from './Component/Elements.jsx'
  import { Courses} from './Component/Elements.jsx'
  import { Students} from './Component/Elements.jsx'
  import LineImg from './assets/Images/line.png'
  import fb from './assets/images/f-facebook.png'
  import google from './assets/images/f-google-plus.png'
  import pinterest from './assets/images/f-pinterest.png'
  import twitter from './assets/images/f-twitter.png'

  function Features({img,title,description,imgPosition}){
  
    return(
      <li>
      {imgPosition==='start'&&<img src={img} alt="img1" />}
      <h5>{title}</h5>
      <p>{description}</p> 
      {imgPosition==='end'&&<img src={img} alt="img1" />}
      </li>
    )
  }
  function Course({img,title,description,imgPosition,button}){
  
    return(
      <li>
      {imgPosition==='start'&&<img src={img} alt="img1" />}
      <h5>{title}</h5>
      <p>{description}</p>
      <button>{button}</button>
      {imgPosition==='end'&&<img src={img} alt="img1" />}
      </li>
    )
  }

  function Student({img,title,description,imgPosition}){
  
    return(
      <li>
      {imgPosition==='start'&&<img src={img} alt="img1" />}
      <h5>{title}</h5>
      <img src={LineImg} />
      <p>14 Apr / 14 comments</p>
      <p>{description}</p>
      {imgPosition==='end'&&<img src={img} alt="img1" />}  
      </li>
    )
  }

  function Contact({title,description,details,mobile,mail}){
  
    return(
      <li>
      <h5>{title}</h5>
      <p>{description}</p>
      <p>{details}</p>
      <p>{mobile}</p>
      <p>{mail}</p>
      </li>
    )
  }
  const App = () => {
    return (
      <div className='Fit_Page'>
      <Header />
      <main>
      
      <section className="features_coll">
      {Features_list.map((featuresProps, index) => (
          <Features key={index} {...featuresProps} />
        ))}
      </section>

      
      <div className='About_box'>
        <div className='About_list'>
        <h3>About Universh</h3>
        <img src={LineImg} />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit repudiandae odit iste.Curabitur pellentesque neque eget diam</p>
      </div>
        <section  className="About_coll">
        {About_list.map((featuresProps, index) => (
            <Features key={index} {...featuresProps} />
          ))}
        </section>
      </div>



      <div className='Courses_tab'>
        <div className='courses_list'>
        <h3>Our Featured Courses</h3>
        <img src={LineImg} />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit repudiandae odit iste.Curabitur pellentesque neque eget diam</p>
        </div>
        <section className="Courses_coll">
        {Courses.map((featuresProps, index) => (
            <Course key={index} {...featuresProps} />))
        }
        </section>
      </div>


      <div className='Students_blog'>
        <div className='Students_col'>
        <h3>Students Blogs</h3>
        <img src={LineImg} />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit repudiandae odit iste.Curabitur pellentesque neque eget diam</p>
        </div>
      <section className="Students_list">
      {Students.map((featuresProps, index) => (
          <Student key={index} {...featuresProps} />
        ))}
      </section>
      </div>

      <div className='Contact-details'>
      <div className ="Universh" >
       <h5>Universh</h5>
       <p>Lorem Ipsum is simply dummy text the printing and typesetting.</p>
       <p>Lorem Ipsum standard dummy text scrambled it make a type specimen reprehenderit in voluptate.
       </p>
       <h6>READ MORE</h6>
      </div>
      <div className ="Contact-list" >
      <h5>Contact</h5>
      <p>No.56, Area name, State, Country code.</p>
      <p>0 (123) 456-78-90</p>
      <p>info@universh.in</p>
      <div className='images'>
       <img src={fb} />
       <img src={twitter} />
       <img src={google} />
       <img src={pinterest} />
       </div>
      </div>
      </div>
      <div className='End-page'>
      <span className='End-list'>
      <p>Copyright © zozothemes.com., 2015 | All rights reserved</p>
      <h6>unsubscribe.</h6>
      </span>
      </div>
      </main>
    </div>

    )
  }

  export default App
