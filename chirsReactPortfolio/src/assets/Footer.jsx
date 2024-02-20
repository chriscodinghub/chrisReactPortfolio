import React from 'react';

const Footer = () => {
    return (
        <footer className="footer d-flex flex-column align-items-center">
            <div className="footer-wrapper">
                <div className="container-fluid">
                    <div className="social-links d-flex justify-content-around">
                        <a href="https://github.com/chriscodinghub" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/chris-davis-389476290/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://twitter.com/ChrisDavis0526" target="_blank" rel="noopener noreferrer">
                            <i className='fab fa-twitter'></i>
                        </a>
                    </div>
                    <p className="text-center">&copy; 2024 Chris Davis Portfolio</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
