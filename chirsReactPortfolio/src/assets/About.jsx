import developerPhoto from './images/chris1.jpg';

const AboutSection = () => {
    return (
        <section id="about" className="d-flex flex-column align-items-center">
            <h2>About Me</h2>
            <div className="about-content d-flex justify-content-center align-items-center">
                <img src={developerPhoto} alt="Developer Photo" />
                <p>
                    Insert short bio about the developer here. This can include information about their background, skills, interests, etc.
                </p>
            </div>
        </section>
    );
};

export default AboutSection;