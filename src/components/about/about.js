import React from 'react';
import { Link } from 'react-router-dom';
import './about.css';

function AboutPage() {
    return (
        <div className="login-page">
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={require('../login/2.png')} alt="Logo" style={{ width: '50px', height: 'auto' }} />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/dashboard">Dashboard</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="login-box">
                <h2>Terms</h2>
                <div className="about-content">
                    <p>
                        BY clicking on Invoicing Now, you choose to download according to the information you have entered and the terms here, and at the same time accept the terms here.
                    </p>
                    <p>
                        You can use the program FREE for 14 days.
                    </p>
                    <p>
                        LettFaktura is so easy and self-explanatory that the chance that you will end up needing support is minimal, but if you should need support, we are here for you, with our office staffed most of the day. After the trial period, the subscription continues and costs NOK 99, for example. VAT per month, which is invoiced annually. If you do not wish to keep the program, simply cancel the trial period by notifying us within 14 days of downloading.
                    </p>
                    {/* Add more paragraphs here as needed */}
                </div>
                <button type="button" className="btn btn-primary">Accept</button>
            </div>
        </div>
    );
}

export default AboutPage;
