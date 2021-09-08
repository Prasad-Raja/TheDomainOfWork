import React from 'react'
import { NavLink } from "react-router-dom";


function Error404() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="err">
                            <h1 className="error">
                                Oops!</h1>
                            <h2 className="error"> 
                                404 Not Found</h2>
                            <div className="err">
                                Sorry, an error has occured, Requested page not found!
                                <NavLink className="nav-link " to="/">
                                    Take Me Home
                                    
                                       <div className="justify-content-center text-capitalize my-5"> Write to us</div>
                                </NavLink> 

                                <div className="row mx-5 me-6 justify-content-center">
                                    <div className="col-1 mx-2">
                                        <a href="/contact">
                                            <i className="fas fa-envelope fontawesome-style"> </i>
                                        </a>
                                    </div>
                                    <br/>
                                  
                                    </div>
                                     <div className="row mx-5 me-1 my-2 justify-content-center">
                                    <div className="col-1 mx-2">
                                        <a href="https://www.instagram.com/prasad___raja/">
                                            <i className="fab fa-instagram fontawesome-style"></i>
                                        </a>
                                    </div>


                                    <div className="col-1 mx-2">
                                        <a href="https://wa.me/?text=Hello">
                                            <i className="fab fa-whatsapp fontawesome-style"></i>
                                        </a>
                                    </div>

                                    <div className="col-1 mx-2">
                                        <a href="/">
                                            <i className="fab fa-github fontawesome-style"></i>
                                        </a>
                                    </div>

                                    <div className="col-1 mx-2">
                                        <a href="https://www.youtube.com/channel/UCiaWGOiwpoHyLSfPKSRYyBA">
                                            <i className="fab fa-youtube fontawesome-style"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Error404;
