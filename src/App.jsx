import React from 'react'
import Header from './Component/Header.jsx'
import { Features_list } from './Component/Elements.jsx'
import { About_list } from './Component/Elements.jsx'
import { Courses} from './Component/Elements.jsx'
import { Students} from './Component/Elements.jsx'

import LineImg from './assets/Images/line.png'


function Features({img,title,description,imgPosition,button}){
 
  return(
    <li className='Features_li'>
    {imgPosition==='start'&&<img src={img} alt="img1" />}
    <h5>{title}</h5>
    <p>{description}</p>
    {imgPosition==='end'&&<img src={img} alt="img1" />}
    </li>
  )
}
const App = () => {
  return (
    <div className='container'>
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
    <section className="About_coll">
    {About_list.map((featuresProps, index) => (
        <Features key={index} {...featuresProps} />
      ))}
    </section>
    </div>
    <div className='Courses_tab'>
      <div className='courses_col'>
      <h3>Our Featured Courses</h3>
      <img src={LineImg} />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit repudiandae odit iste.Curabitur pellentesque neque eget diam</p>
      </div>
    <section className="Courses_List">
    {Courses.map((featuresProps, index) => (
        <Features key={index} {...featuresProps} />
      ))}
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
        <Features key={index} {...featuresProps} />
      ))}
    </section>
    </div>
    </main>
    </div>
  )
}

export default App
