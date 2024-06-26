import convo from './images/convo.png'
import carPro from './images/carPro.png'
import chittyChat from './images/cool-french-bulldog.jpg'
import weatherForecast from './images/weather-forecast.png'
import scheduler from './images/scheduler.png'
import fluffers from './images/fluffers.png'

const PortfolioSection = () => {
    const projects = [
        {
            title: 'Roles and Render',
            image: fluffers,
            deployedLink: 'https://dd-char-gen-8x1b.onrender.com',
            githubLink: 'https://github.com/chriscodinghub/dd-char-gen',
            readmeLink: 'https://github.com/chriscodinghub/dd-char-gen/blob/main/README.md'
        },
        {
            title: 'instant-message',
            image: convo,
            deployedLink: 'https://convo-6318dc911188.herokuapp.com/',
            githubLink: 'https://github.com/chriscodinghub/instant-message',
            readmeLink: 'https://github.com/chriscodinghub/instant-message/blob/main/README.md'
            
        },
        {
            title: 'CarPro-Reports',
            image: carPro,
            deployedLink: 'https://chriscodinghub.github.io/CarPro-Reports/',
            githubLink: 'https://github.com/chriscodinghub/CarPro-Reports',
            readmeLink: 'https://github.com/chriscodinghub/CarPro-Reports/blob/main/README.md'
        },
        {
            title: 'chitty-chat backend only',
            image: chittyChat,
            githubLink: 'https://github.com/chriscodinghub/chitty-chat',
            readmeLink: 'https://github.com/chriscodinghub/chitty-chat/blob/main/README.md'
        },
        {
            title: 'weather-forecast',
            image: weatherForecast,
            deployedLink: 'https://chriscodinghub.github.io/weather-forecast/',
            githubLink: 'https://github.com/chriscodinghub/weather-forecast',
            readmeLink: 'https://github.com/chriscodinghub/weather-forecast/blob/main/README.md'
        },
        {
            title: 'work-day-scheduler',
            image: scheduler,
            deployedLink: 'https://chriscodinghub.github.io/Work-Day-Scheduler/',
            githubLink: 'https://github.com/chriscodinghub/Work-Day-Scheduler',
            readmeLink: 'https://github.com/chriscodinghub/Work-Day-Scheduler/blob/main/README.md'
        },
        // Add more project objects for the remaining projects
    ];

    return (
        <section id="portfolio">
            <h2>Portfolio</h2>
            <div className="portfolio-content">
                {projects.map((project, index) => (
                    <div key={index} className="project-item">
                        <img src={project.image} alt={project.title} />
                        <h3>{project.title}</h3>
                        <div>
                            <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">Deployed App</a>
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                            <a href={project.readmeLink} target="_blank" rel="noopener noreferrer">Readme file</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PortfolioSection;