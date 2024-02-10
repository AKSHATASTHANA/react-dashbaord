import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './loginpage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from '../../footer';

function LoginPage() {
    const navigate = useNavigate();

    const handleLogin = () => {
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
            <div className="login-box p-20">
                <h2 className='text-center'>Logg inn</h2>
                <form className='mb-10'>
                    <label htmlFor="username" className="form-label">Skriv inn din email adresse</label>
                    <input type="text" id="username" className="form-control" placeholder="Username" />
                    <label htmlFor="password" className="form-label">Skriv inn ditt passord</label>
                    <input type="password" id="password" className="form-control" placeholder="Password" />
                    <div className="form-check mb-3">
                        <input type="checkbox" className="form-check-input" id="forgotPassword" />
                        <label className="form-check-label" htmlFor="forgotPassword">Forgot Password?</label>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={handleLogin}>Login</button>
                    <div className="mt-3 text-center">
                        <div className="d-flex justify-content-between">
                            <div><p><Link to="/register" className='text-black text-decoration-none'>Registrer deg</Link></p></div>
                            <div className="ml-3"><p><Link to="/forgot-password" className='text-black text-decoration-none'>Glemt passord?</Link></p></div>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default LoginPage;
