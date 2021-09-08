import React, { useState } from 'react'

const Contact = () => {
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        message: "",
    });
    let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUserData({
            ...userData, [name]: value
        });
    };
    //FIREBASE
    const submitData = async (event) => {
        event.preventDefault();

        const { firstName, lastName, phone, email, address, message, } = userData;
        if (firstName && lastName && email && phone && address && message) {
            const res = await fetch("https://reactwebstar-default-rtdb.firebaseio.com/userDataRecord.json",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        firstName,
                        lastName,
                        phone,
                        email,
                        address,
                        message,

                    })
                }


            );
            if (res) {
                setUserData({
                    firstName: "",
                    lastName: "",
                    phone: "",
                    email: "",
                    address: "",
                    message: "",
                })
                alert("Data Stored");
            }

            else {
                alert("Please fill the data");
            }

        }
        else {
            alert("Please fill the data");
        }


    };
document.title = "WEBSTAR-Contact";


    return (
        <section className="contactus-section">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-12 mx-auto">
                        <div className="row">
                            <div className="contact-leftside col-12 col-lg-5 ">
                                <h1 className="main-heading  fw-bold">
                                    CONTACT US FREELY<br /> 
                                </h1>
                                <p className="main-hero-para"> YOU CAN CONTACT US ANYTIME 24 X7 UNHESITANTLY <br /></p>
                                <figure>
                                    <img src="./img/xxxxx.jpg" alt="contactusimg" className="img-fluid"></img>
                                </figure>
                            </div>
                            <div>
                                <div className="contact-rightside col-12 col-lg-7">

                                    <form method="POST">
                                        <div className="row">

                                            <div className="col-12 col-lg-6 contact-input-feild">
                                                <input type="text"
                                                    name="firstName"
                                                    id=""
                                                    className="form-control"
                                                    placeholder="First Name"
                                                    value={userData.firstName}
                                                    onChange={postUserData}
                                                >

                                                </input>
                                            </div>


                                            <div className="col-12 col-lg-6 contact-input-feild">
                                                <input type="text"
                                                    name="lastName"
                                                    id=""
                                                    className="form-control"
                                                    placeholder="Last Name"
                                                    value={userData.lastName}
                                                    onChange={postUserData}>

                                                </input>
                                            </div>
                                        </div>


                                        <div className="row">

                                            <div className="col-12 col-lg-6 contact-input-feild">
                                                <input type="text"
                                                    name="phone"
                                                    id=""
                                                    className="form-control"
                                                    placeholder="Contact Number"
                                                    value={userData.phone}
                                                    onChange={postUserData}>

                                                </input>
                                            </div>


                                            <div className="col-12 col-lg-6 contact-input-feild">
                                                <input type="text"
                                                    name="email"
                                                    id=""
                                                    className="form-control"
                                                    placeholder="Email Id"
                                                    value={userData.email}
                                                    onChange={postUserData}>

                                                </input>
                                            </div>
                                        </div>


                                        <div className="row">
                                            <div className=" col-12  contact-input-feild">
                                                <input type="text"
                                                    name="address"
                                                    id=""
                                                    className="form-control"
                                                    placeholder="Address"
                                                    value={userData.address}
                                                    onChange={postUserData}>

                                                </input>
                                            </div>
                                        </div>


                                        <div className="row">
                                            <div className="col-12 contact-input-feild">
                                                <input type="text"
                                                    name="message"
                                                    id=""
                                                    className="form-control"
                                                    placeholder="Enter Your Concern"
                                                    value={userData.message}
                                                    onChange={postUserData}
                                                >

                                                </input>
                                            </div>
                                        </div>
                                        <div class="form-check form-checkbox-style" >
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" className="main-hero-para" >
                                                I Agree that all the information given above is true
                                            </label>
                                        </div>
                                        <div class="form-check form-checkbox-style">
                                            <input class="form-check-input " type="checkbox" value="" id="flexCheckChecked" />
                                            <label class="form-check-label" className="main-hero-para" >
                                                Subscribed to the newsletter
                                            </label>
                                        </div>
                                        <button className="btn-style w-100" type="submit" onClick={submitData}> SUBMIT</button>








                                    </form>


                                </div></div>

                        </div>
                    </div>
                </div>
            </div>




        </section>
    )
}

export default Contact
