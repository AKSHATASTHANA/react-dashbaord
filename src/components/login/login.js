import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './loginpage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from '../../footer';

function LoginPage() {
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleLogin = () => {
        // Perform login logic here
        // For demonstration purposes, navigate to dashboard upon clicking login
        navigate('/dashboard');
    };

    return (
        <div className="login-page container-fluid">
            <div className="overlay"></div>
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <div className="container">
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
                <h2>Login</h2>
                <form>
                    <input type="text" className="form-control" placeholder="Username" />
                    <input type="password" className="form-control" placeholder="Password" />
                    <button type="button" className="btn btn-primary" onClick={handleLogin}>Login</button>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default LoginPage;
