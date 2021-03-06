import React,{useState} from 'react'
import serviceapi from './api/ServiceApi.js';

const Services = () => {
    const[serviceData, ] =useState(serviceapi);
    return (
        <>
            <section className="service-main-container">
                <div className="container service-container">
                    <h1 className="main-heading text-center fw-bold">Services that make us exceptional</h1>
                    <div className="row">
                        {serviceData.map((curElem) => {
                            const{id,logo,title,info}= curElem
                            return( <>
                            <div className="col-12 col-lg-4 col-xxl-4 work-container-subdiv" key={id}>
                            <i className={`fontawesome-style ${logo}`}></i>
                            <h2 className="sub-heading">{title}</h2>
                                <p className ="main-hero-para">{info}</p> 

                        </div>
                            </>);
                        })}
                        
                    </div>
                </div>
            </section>
        </>
    );
};
export default Services
