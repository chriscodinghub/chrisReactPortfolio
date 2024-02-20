import React from 'react';

const Footer = () => {
    return (
        <footer className="footer d-flex flex-column align-items-center">
            <div className="container-fluid">
                <div className="social-links d-flex justify-content-around">
                    <a href="https://github.com/chriscodinghub" target="_blank" rel="noopener noreferrer">
                        <img src="github_icon.png" alt="Chris Davis GitHub" />
                    </a>
                    <a href="link_to_linkedin_profile" target="_blank" rel="noopener noreferrer">
                        <img src="linkedin_icon.png" alt="I dont have a LinkedIn" />
                    </a>
                    <a href="link_to_third_platform_profile" target="_blank" rel="noopener noreferrer">
                        <img src="third_platform_icon.png" alt="Third Platform" />
                    </a>
                </div>
                <p className="text-center">&copy; 2024 Chris Davis Portfolio</p>
            </div>
        </footer>
    );
};

export default Footer;
