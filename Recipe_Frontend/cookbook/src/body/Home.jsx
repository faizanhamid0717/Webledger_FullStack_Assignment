

import React from 'react'
import  './Home.css'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
        <div className='container'>

            <div className='recipe-image'>
              Peanut Butter  Pretzel Butterscotch Blondies
            </div>

            <div className='content'>
                <h1>All-in-one <br/> recipe manager <br/> & planner website</h1>
                <p>The ultimate recipe organiser for easy access to all of your recipes on all of your devices</p>
            </div>
       
        </div>

<div className='container2'>

<div className='leftcontent'>
     
     <h2>CookBook <br/> Your ultimate <br/> kitchen companion.</h2>
     <p>Tried, tested & loved by thousands of home cooks.<br/> CookBook is free to use*, see what all the fuss is <br/>about!</p>
     <p>* with up to 20 recipes and 5 OCR scans</p>
     <Link to={'/getstarted'}><button className='get-started2'>GET STARTED</button> </Link>
</div>

<div className='rightimage'>
  <img src='https://uploads-ssl.webflow.com/63bb7fe09d70bb7dc8e86719/63d1db61192f1ded4ea55b61_All-recipes---phone-recipe-no-padding%20(1)-p-1080.webp'/>
</div>

</div>
        
    </div>
  )
}
