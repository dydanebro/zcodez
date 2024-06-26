import React, { useRef } from "react";
import logo from './assets/logo.png';
import flyer1 from './assets/flyer1.jpeg';
import flyer2 from './assets/flyer2.jpeg';
import flyer3 from './assets/flyer3.jpeg';
import website1 from './assets/website1.jpeg';
import website2 from './assets/website2.jpeg';
import website3 from './assets/website3.jpeg';
import mobile1 from './assets/mobile1.jpeg';
import mobile2 from './assets/mobile2.jpeg';
import mobile3 from './assets/mobile3.jpeg';
import support1 from './assets/support1.jpeg';
import support2 from './assets/support2.jpeg';
import support3 from './assets/support3.jpeg';
import photo from './assets/photo.jpg';
import './App.css';
import emailjs from "@emailjs/browser";

const Home = () => {
    const form = useRef();

    const submit = e => {
        e.preventDefault();

        emailjs.sendForm('service_hfocfzn', 'template_s4o3aga', form.current, '0-64e-PQnxnSV7mum')
        .then((result) => {
            console.log(result.text);
            alert("Email sent successfully!\nThanks for visiting us.");
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <div className="container-fluid w-100 m-0 p-0">
            <section id="banner" className="bg-dark banner">
                <h1 className="text-center text-light">Welcome to</h1>
                <div className="home container-fluid d-flex justify-content-center align-items-center pb-5">
                    <img
                        src={logo}
                        alt="codez logo"
                        className="logo"
                    />
                </div>
            </section>
            <section id="services" className="mt-5 mb-5 p-3">
                <h3 className="text-dark text-center pb-3" id="about_h">Our Services</h3>
                <div className="row mt-5">
                    <div className="col-md-3">
                        <div class="card bg-dark mb-2" style={{
                            maxHeight: 400,
                            height: 400,
                        }}>
                            <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
                                <div class="carousel-inner"
                                    style={{
                                        maxHeight: 200,
                                        height: 200,
                                    }}>
                                    <div class="carousel-item active">
                                        <img src={flyer1} class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={flyer2} class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={flyer3} class="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button id="zap" class="carousel-control-prev text-light" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button id="zap" class="carousel-control-next text-light" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div class="card-body text-light d-flex flex-column justify-content-center align-items-center">
                                <h5 class="card-title">Infographics</h5>
                                <p class="card-text">Due to our creativity and curiousity, we can create very good quality flyers and logos.</p>
                                <a href={'/'} class="btn btn-primary w-100">More Info</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="card bg-dark mb-2" style={{
                            maxHeight: 400,
                            height: 400,
                        }}>
                            <div id="carouselExampleRide1" class="carousel slide" data-bs-ride="true">
                                <div class="carousel-inner"
                                    style={{
                                        maxHeight: 200,
                                        height: 200,
                                    }}>
                                    <div class="carousel-item active">
                                        <img src={website3} class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={website2} class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={website1} class="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button id="zap" class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide1" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button id="zap" class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide1" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div class="card-body text-light d-flex flex-column justify-content-center align-items-center">
                                <h5 class="card-title">Web Design</h5>
                                <p class="card-text">We are certified in responsive web design and web application development.</p>
                                <a href={'/'} class="btn btn-primary w-100">More Info</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="card bg-dark mb-2" style={{
                            maxHeight: 400,
                            height: 400,
                        }}>
                            <div id="carouselExampleRide2" class="carousel slide" data-bs-ride="true">
                                <div class="carousel-inner"
                                    style={{
                                        maxHeight: 200,
                                        height: 200,
                                    }}>
                                    <div class="carousel-item active">
                                        <img src={mobile1} class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={mobile2} class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={mobile3} class="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button id="zap" class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide2" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button id="zap" class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide2" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div class="card-body text-light d-flex flex-column justify-content-center align-items-center">
                                <h5 class="card-title">Mobile Development</h5>
                                <p class="card-text">We own some skills in very good mobile application development and deployment.</p>
                                <a href={'/'} class="btn btn-primary w-100">More Info</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="card bg-dark mb-2" style={{
                            maxHeight: 400,
                            height: 400,
                        }}>
                            <div id="carouselExampleRide3" class="carousel slide" data-bs-ride="true">
                                <div class="carousel-inner"
                                    style={{
                                        maxHeight: 200,
                                        height: 200,
                                    }}>
                                    <div class="carousel-item active">
                                        <img src={support1} class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={support2} class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={support3} class="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button id="zap" class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide3" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button id="zap" class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide3" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div class="card-body text-light d-flex flex-column justify-content-center align-items-center">
                                <h5 class="card-title">Technical Support</h5>
                                <p class="card-text">We can offer assistance on troubleshooting and technical issues.</p>
                                <a href={'/'} class="btn btn-primary w-100">More Info</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="about" className="mt-5 mb-5 bg-dark text-light">
                <h3 className="text-light text-center mt-3 pb-3" id="about_h">About Us</h3>
                <div className="d-flex flex-column justify-content-center align-items-center p-5">
                    <p className="">
                        CodeZ is a pseudo created by MOMO WANKO Zidane, a software egineer studying at IME-school,
                        a private university situated at Douala, Bonamoussadi. For more information about the school, follow <a href={'https://ime-school.com'}>this link</a>
                    </p>
                </div>
                <div className="col d-flex justify-content-center align-items-center mb-4 p-5">
                    <div class="row card d-flex flex-row w-50 justify-content-center align-items-center">
                        <div className="col-md-4 p-0">
                            <img src={photo} class="card-img-top" alt="..." />
                        </div>
                        <div class="col-md-4 card-body">
                            <h5 class="card-title text-center">Momo Wanko Zidane</h5>
                            <p class="card-text">To learn more about the founder of codeZ, click on the button bellow.</p>
                        </div>
                        <div className="col-md-4">
                            <a href={'/'} class="btn btn-primary w-100">More Info</a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="contact" className="mt-5 mb-5 p-4">
                <form ref={form} onSubmit={submit}>
                    <div className="row d-flex flex-column justify-content-center align-items-center">
                        <h3 className="text-dark text-center mb-5">Contact <b className="text-primary">codeZ</b></h3>
                        <div className="col-md-5 d-flex flex-column justify-content-center align-items-center">
                            <input type="text" className="form-control mb-3" name="from_name" placeholder="Enter your email..." />
                            <input type="text" className="form-control mb-3" name="from_email" placeholder="Enter your complete name..." />
                            <textarea className="form-control mb-3" name="message" placeholder="Motif of your message..."></textarea>
                            <button className="btn btn-outline-primary w-75">Submit</button>
                        </div>
                    </div>
                </form>
            </section>
            {/* <h2 className="text-center text-danger mt-5 mb-5">CONTENT STILL IN DEVELOPMENT PHASE ...</h2> */}
        </div>
    )
}

export default Home;
