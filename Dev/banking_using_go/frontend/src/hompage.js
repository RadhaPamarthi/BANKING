import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './styles.css'; // Import your custom styles
import image1 from './pictures/1.svg';
import image2 from './pictures/2.png';
import image3 from './pictures/3.png';
import image4 from './pictures/4.png';
//import image5 from './pictures/1.png';
// Importing video
import videoFile from './pictures/1.mp4';

function HomePage() {
    return (
        <div className="HomePage">
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">radhaBank</a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#discover">Discover</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#service">Service</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#signup">Sign up</a>
                                </li>
                            </ul>
                            <button
                                className="btn btn-success text-dark"
                                onClick={() => window.location.href = '/login'}
                            >
                                Sign In
                            </button>
                        </div>
                    </div>
                </nav>

                <div className="mid">
                    <video autoPlay muted loop>
                        <source
                            className="embed-responsive"
                            src={videoFile}
                            type="video/mp4"
                        />
                    </video>
                    <div className="hero text-center">
                        <h2 className="text-light display-4 fw-bold">
                            Virtual Banking Made Easy
                        </h2>
                        <p className="text-light mx-auto">
                            Experience the future of banking with our fully digital platform, offering comprehensive services exclusively online—via web, email, live chat, and mobile. With us, you enjoy the convenience of banking anywhere without the need for physical branches.
                        </p>
                        <a className="btn btn-primary" href="/signup">Get Started</a>
                    </div>
                </div>
            </header>

            <section id="about" className="about py-3">
                <div className="row align-items-center container my-3 mx-auto">
                    <div className="text col-lg-6 col-md-6 col-12 pt-5 pb-5">
                        <h6>PREMIUM BANK</h6>
                        <h2>Unlimited Transaction with zero fees</h2>
                        <p>
                            A penny saved is a penny earned.
                        </p>
                        <a href="#learn-more-about">Learn More</a>
                    </div>
                    <div className="img col-lg-6 col-md-6 col-12 pt-5 pb-5">
                        <img className="img-fluid" src={image1} alt="Illustration of premium banking" />
                    </div>
                </div>
            </section>

            <section id="discover" className="discover py-3">
                <div className="row align-items-center container my-3 mx-auto">
                    <div className="img col-lg-6 col-md-6 col-12 pt-5 pb-5">
                        <img className="img-fluid" src={image2} alt="Illustration of unlimited access" />
                    </div>
                    <div className="text col-lg-6 col-md-6 col-12 pt-5 pb-5">
                        <h6>UNLIMITED ACCESS</h6>
                        <h2>Login to your account at any time</h2>
                        <p>
                            Money looks better in the bank than on your feet.
                        </p>
                        <a href="#learn-more-discover">Learn More</a>
                    </div>
                </div>
            </section>

            <section id="service" className="service py-2 pb-5">
                <div className="col mx-auto align-items-center my-2">
                    <div className="heading text-center pt-5">
                        <h2 className="fw-bolder pb-4 text-light">Our Service</h2>
                    </div>
                    <div className="row mx-auto justify-content-center align-items-center text-center container">
                        <div className="card col-lg-3 col-md-3 col-12 m-2">
                            <img className="img-fluid w-75" src={image1} alt="Service reduce expenses" />
                            <h5 className="fw-bold pt-4">Reduce Expenses</h5>
                            <p>
                                Beware of little expenses; a small leak will sink a great ship.
                            </p>
                        </div>
                        <div className="card col-lg-3 col-md-3 col-12 m-2">
                            <img className="img-fluid w-75" src={image2} alt="Service virtual offices" />
                            <h5 className="fw-bold pt-4">Virtual Offices</h5>
                            <p>
                                Virtual offices cut significant costs and provide flexibility.
                            </p>
                        </div>
                        <div className="card col-lg-3 col-md-3 col-12 m-2">
                            <img className="img-fluid w-75" src={image3} alt="Service premium benefits" />
                            <h5 className="fw-bold pt-4">Premium Benefits</h5>
                            <p>
                                Premium banking features like high-yield savings accounts and top-tier customer service.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sign Up Section */}
            <section id="signup" className="signup py-3">
                <div className="row align-items-center container my-3 mx-auto">
                    <div className="text col-lg-6 col-md-6 col-12 pt-5 pb-5">
                        <h6>JOIN OUR TEAM</h6>
                        <h2>Creating an account is extremely easy</h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum consequatur non delectus ad quasi. Consectetur necessitatibus alias eveniet corporis hic, expedita dolore quo eos tempore!
                        </p>
                        
                        {/* Using a button instead of an anchor tag for an action that does not navigate */}
                        <button 
                            className="btn" 
                            style={{ backgroundColor: 'black', border: 'none', color: 'white' }} 
                            onClick={() => window.location.href = '/signup'}
                        >
                            Start Now
                        </button>
                    </div>
                    <div className="img col-lg-6 col-md-6 col-12 pt-5 pb-5">
                        <img className="img-fluid" src={image4} alt="Illustration of joining our team" />
                    </div>
                </div>
            </section>

            <footer className="bg-dark text-center text-white">
                <div className="container p-4 pb-0">
                    <section className="mb-4">
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-instagram"></i></a>
                    </section>
                </div>
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2024 Copyright:
                    <a className="text-white" href="https://radhaBank.com/">radhaBank.com</a>
                </div>
            </footer>
        </div>
    );
}

export default HomePage;
