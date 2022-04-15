import React from 'react'
import "./Section3.css"
import section3Img from "./VideoImgSection3.svg"

export default function Section3() {
  return <section className='Section3'>
    <div className='Section3Inside'>
    <img className='Section3Img' src={section3Img} alt="" srcSet="" /> 
              <div className='section3Heading'>
                 <h4>Try This Today!</h4>
                 <h3>Experice BAOIAM for</h3>
               </div>
      <div className='section3Div'>
             <div className='Search'>
               <div className='searchDiv searchDivA'>
               <select name="" id="">
                     <option value="">Select Class</option>
                     <option value="">Class1</option>
                     <option value="">Class2</option>
                     <option value="">Class3</option>
                 </select>
               </div>
                 <div  className='searchDivB searchDiv'>
                 <select name="" id="">
                     <option value="">Select Subject</option>
                     <option value="">Subject1</option>
                     <option value="">Subject3</option>
                     <option value="">Subject3</option>
                 </select>
                 </div>
                 <div className=' searchDivBtn searchDiv'>
                   <button>Done</button>
                 </div>
        </div>
      </div>
      </div>
      {/* </div> */}
  </section>
}
