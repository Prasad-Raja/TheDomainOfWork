import React,{ useState } from 'react';
import workapi from './api/workApi.js';



export const HowItWorks = () => {


    const[workData,] = useState(workapi);
    console.log(workData);
    return (
        <>
           <section>
               <div className="work-container container">
                   <h1 className="main-heading text-center">Experience Digital Innovation.</h1>
                   <div className="row">
                       {workData.map((curElem)=>{
                           const{logo,title,info} = curElem
                           return <>
                           
                           <div className ="col-12 col-lg text-center work-container-subdiv">
                   <i class={`fontawesome-style ${logo}`}></i>
                   <h2 className= "sub-heading">{title}
                   </h2>
                   <p className ="main-hero-para w-100" >{info}
                   </p>
                   </div>
                   
                           
                           </>;
                       })}
                  
                   </div>




               </div>

           </section>
        </>
    )
};
export default HowItWorks;