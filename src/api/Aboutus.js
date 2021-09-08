import React, { useState } from "react";
import howtouse from "./howtouse";
import howtousetwo from "./howtousetwo";



const Aboutus = () => {
    const [aboutData,] = useState(howtouse)
    const [aaboutData,] = useState(howtousetwo)
    document.title = "WEBSTAR-About";
    return (

        <>
            <section className="common-section our-services" >
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-12 col-lg-5 text-center our-service-leftside-img">
                            <img src="./img/xxx.jpg" alt="aboutusIMg">

                            </img>

                        </div>

                        <div className="col-12 col-lg-7 our-services-list">
                            <h3 className="mini-title">
                                -- Build Your Business with Us

                            </h3>
                            <h1 className="main-heading">What to Expect from TDOW as a Client</h1>
                            {aboutData.map((curElem) => {
                                const { id, info, title } = curElem;
                                return (<>

                                    <div className="row our-services-info" key={id}>
                                        <div className="col-1 our-services-number">{id}</div>
                                        <div className="col-10 our-services-data">
                                            <h2>{title}</h2>
                                            <p className="main-hero-para"> {info}</p>

                                        </div>
                                    </div>
                                </>);

                            })}
                            <br></br>
                            <button className="btn-style btn-style-border"><a href="/service">learn more</a> 


                            </button>
                        </div>
                    </div>


                </div>



            </section>
            <br />

            {/* PART 2 */}




            <section className="common-section our-services-our-services-rightside">
                <div className="container mb-5">

                    <div className="row">
                        <div className="col-12 col-lg-7 our-services-list">
                            <h3 className="mini-title">
                                -- Transform Your Future
                            </h3><br />
                            <h1 className="main-heading">More things to consider</h1>
                            {aaboutData.map((curElem) => {
                                const { id, info, title } = curElem
                                return (<>

                                    <div className="row our-services-info" key={id}>
                                        <div className="col-1 our-services-number">{id}</div>
                                        <div className="col-10 our-services-data">
                                            <h2>{title}</h2>
                                            <p className="main-hero-para"> {info}</p>

                                        </div>
                                    </div>
                                </>);

                            })}
                            <br></br>
                            <button className="btn-style btn-style-border"><a href="/service">learn more</a></button>
                        </div>





                        <div className="col-12 col-lg-5 text-center our-service-rightside-img">
                            <img src="./img/xxxx.jpg" alt="aboutusIMg">

                            </img>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Aboutus;
