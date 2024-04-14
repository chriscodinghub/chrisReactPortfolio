import developerPhoto from './images/chris1.jpg';

const AboutSection = () => {
    return (
        <section id="about" className="d-flex flex-column align-items-center">
            <h2>About Me</h2>
            <div className="about-content d-flex justify-content-center align-items-center">
                <img src={developerPhoto} alt="Developer Photo" />
                <p className="bio-text">
                    Hi there! My name is Chris Davis! I am very excited to showcase the skills I have aquired throughout my fullstack web development course! <br></br>
                    A few things about myself are that I am happily married to my beautiful wife Katelyn,<br></br>
                    I enjoy spending my freetime learning more about new technologies related to web development and playing various video games! <br></br>
                    A simple quote I strive to live by is "The day you stop learning is the day you should retire."
                </p>
            </div>
        </section>
    );
};

export default AboutSection;