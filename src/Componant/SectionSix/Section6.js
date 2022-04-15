import React from 'react'
import "./Section6.css"
import section6Img from './Section6Img.svg'
import { useState } from 'react'

export default function Section6() {
  const [teacherStyle, setTeacherStyle] = useState({
    border:" 2px solid rgb(27, 204, 248)"
  })
  const [familyStyle, setFamilyStyle] = useState({
    border:"none"
  })
  const [data, setdData] = useState({
    H41:"Share login access",
    H42:"Letter for parents and families",
    H43:"Home learning guide",
    p1:"Ensure your students have access to their login information as DreamBox cannot access it. Please contact an administrator or teacher.",
    p2:"Share the Parent Home Usage Letter with your students’ families to help them use DreamBox at home.",
    p3:"Share the Home Learning with DreamBox link with families on district, school, or class webpages.",
    a11:"Single sign-in tutorial",
    a12:"School sign-in tutorial",
    a2:"How to download parent letter",
    a3:"Download Home Learning Guide"
  }
  )
  function handleOnClickSection6(event){
      if(event.target.id==="teacher"){
        setTeacherStyle({
          border:" 2px solid rgb(27, 204, 248)"
        })
        setFamilyStyle({
          border:"none"
        })
        setdData({
          H41:"Share login access",
          H42:"Letter for parents and families",
          H43:"Home learning guide",
          p1:"Ensure your students have access to their login information as DreamBox cannot access it. Please contact an administrator or teacher.",
          p2:"Share the Parent Home Usage Letter with your students’ families to help them use DreamBox at home.",
          p3:"Share the Home Learning with DreamBox link with families on district, school, or class webpages.",
          a11:"Single sign-in tutorial",
          a12:"School sign-in tutorial",
          a2:"How to download parent letter",
          a3:"Download Home Learning Guide"
        }
        )
      }
      else{
        setTeacherStyle({
          border:"none"
        })
        setFamilyStyle({
          border:" 2px solid rgb(27, 204, 248)"
        })
        setdData({
          H41:"Check device compatibility",
          H42:"Quick login tips",
          H43:"Family support hub",
          p1:"Make sure your learner is set up for success. Check out our list of supported devices and get started!",
          p2:"Read our helpful blog post to learn the different methods for logging in to your DreamBox account.",
          p3:"Learn about troubleshooting tips, navigating the dashboard, understanding your child's data, creating bookmarks to login and more.",
          a11:"Learn more",
          a12:" ",
          a2:"Read more",
          a3:"Get Help"
        }
       )
      }
  }

  return <section className='Section6'>
          <div className='section6Div'>
          <div className='section6DivB'>
              <img src={section6Img} alt="" />
            </div>
            <div className='section6DivA'>
              <h4>New to BAOIAM ?</h4>
              <h3>Launch BAOIAM in</h3>
              <h3> 1...2...3..Go!</h3>
              <h6 style={teacherStyle} onClick={handleOnClickSection6} id="teacher" href="">For Teacher</h6>
              <h6 style={familyStyle} onClick={handleOnClickSection6} id="family" href="">For Family</h6>
            </div>
          </div>
          <div className='section6Div2'>
               <div className='section6Box'>
                 <h4>{data.H41}</h4>
                 <p>{data.p1}</p>
                 <hr />
                 <a href="">{data.a11}</a>
                 <br />
                { data.H41==="Share login access"&&<a href="">{data.a12}</a>}
                </div>
                <div className='section6Box'>
                 <h4>{data.H42}</h4>
                 <p>{data.p2}</p>
                 <hr />
                 <a href="">{data.a2} </a>
                </div>
               <div className='section6Box'>
                 <h4>{data.H43}</h4>
                 <p>{data.p3}</p>
                 <hr />
                 <a href="">{data.a3}</a>
                 </div>
               
          </div>
          <div className='section6Div3'>
             <a href="">More Solution for Teacher </a>
          </div>
  </section>
  
}
