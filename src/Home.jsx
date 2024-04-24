import React from "react";
import logo from './assets/logo.png';
import icon from './assets/icon.png'
import flyer1 from './assets/flyer1.jpeg';
import flyer2 from './assets/flyer2.jpeg';
import flyer3 from './assets/flyer3.jpeg';
import website1 from './assets/website1.jpeg';
import website2 from './assets/website2.jpeg';
import website3 from './assets/website3.jpeg';
import mobile1 from './assets/mobile1.jpeg';
import mobile2 from './assets/mobile2.jpeg';
import mobile3 from './assets/mobile3.jpeg';
import './App.css';

const Home = () => {
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
                        <div class="card bg-dark" style={{
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
                                <button class="carousel-control-prev text-light" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next text-light" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div class="card-body text-light d-flex flex-column justify-content-center align-items-center">
                                <h5 class="card-title">Infographics</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary w-100">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                    <div class="card bg-dark" style={{
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
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide1" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide1" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div class="card-body text-light d-flex flex-column justify-content-center align-items-center">
                                <h5 class="card-title">Web Design</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary w-100">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                    <div class="card bg-dark" style={{
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
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide2" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide2" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div class="card-body text-light d-flex flex-column justify-content-center align-items-center">
                                <h5 class="card-title">Mobile Development</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary w-100">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                    <div class="card bg-dark" style={{
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
                                        <img src={icon} class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={icon} class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={icon} class="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide3" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide3" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div class="card-body text-light d-flex flex-column justify-content-center align-items-center">
                                <h5 class="card-title">Technical Support</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary w-100">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="about" className="mt-5 mb-5">
                <h3 className="text-dark text-center pb-3" id="about_h">About Us</h3>
                <div className="d-flex flex-column justify-content-center align-items-center p-5">
                    <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus elit vel mauris rutrum faucibus. Aenean neque ipsum, venenatis eu vulputate vel, ultricies at tellus. Morbi ac elit sapien. Integer euismod sit amet massa non molestie. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus nunc dui, lacinia eu laoreet eget, commodo vel urna. Aliquam ac dolor a est elementum dictum ut a elit. Ut ut nisl malesuada, mattis urna ut, rutrum augue.</p>
                    <p>Mauris vitae facilisis nunc. Suspendisse imperdiet est sit amet tortor sollicitudin, a porttitor orci gravida. Donec rhoncus scelerisque metus, vitae tempor ante imperdiet eget. Sed interdum pharetra lacus, et volutpat leo aliquam quis. Aliquam suscipit lobortis massa ac pulvinar. Duis ullamcorper nisi id elementum commodo. Donec iaculis magna nulla, vitae porttitor justo vehicula nec.</p>
                    <p>Curabitur nibh velit, tristique nec consequat sed, congue nec sem. Maecenas finibus, urna quis malesuada pharetra, odio leo sodales urna, a molestie eros erat in nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam facilisis nulla elit. Maecenas ornare ex urna. In ac sem condimentum justo eleifend molestie. Duis suscipit velit vitae lobortis cursus.</p>
                </div>
                <div>
                    <div class="card w-50">
                        <img src={icon} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;
