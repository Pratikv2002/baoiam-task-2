import React from 'react'
import "./Section8.css"
import section8icon from "./section8img.svg"
import institutesLogo from "./Section8Img.png"
export default function Section8() {
  return <section className='Section8'>
        <div className='Section8Div'> 
            <div className='Section8DivA'>
                <div className='section8Inside'> 
                        <h5>SPOILER: THEY LOVE IT</h5>
                        <h4>Baoiam has helped all types of schools and districts foster a love of learning.</h4>
                        <a href="">View all Case Studies</a>
                  </div>
                  <div className='section7Img'>
                       <img src={section8icon} alt="" />
                   </div>
            </div>
            <div  className='Section8DivB' >
                <div className='Section8DivBDivA' >
                  <div className='Section8DivBDivAImg'>
                    <img src={institutesLogo} alt="" />
                    <p>Indian Schools Boost Math Scores with BAOIAM</p>
                  </div>
                  <div className='demo'>
                    <a href="">Learn More</a>
                  </div>
                </div>
                <div className='Section8DivBDivA'>
                  <div className='Section8DivBDivAImg'> 
                    <img src={institutesLogo} alt="" />
                    <p>Pune Community Schools deploy BAOIAM toboost math skills for 15,000 students</p>
                  </div>
                  <div className='demo2'>
                  <a href="">Learn More</a>
                  </div>
                  
                </div>
                <div className='Section8DivBDivA'>
                  <div className='Section8DivBDivAImg'>
                    <img src={institutesLogo} alt="" />
                    <p>Maximizing Your Most Valuavle and Scarcest Resource: For Teachers in this Sprawling Tesas School District, it's About Time</p>
                  </div>
                  <div className='demo3'>
                  <a href="">Learn More</a>
                  </div>
                </div>
                <div className='Section8DivBDivA Section8special'>
                    <h4>Explore all Case Studies</h4>
                    <div className='demo4'>
                    <a href="">View All  </a>
                    </div>
                    
                </div>
            </div>
        </div>
  </section>
}
