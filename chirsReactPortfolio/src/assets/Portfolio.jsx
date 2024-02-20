import convo from './images/convo.png'
import carPro from './images/carPro.png'
import chittyChat from './images/cool-french-bulldog.jpg'
import weatherForecast from './images/weather-forecast.png'
import scheduler from './images/scheduler.png'
import pwGen from './images/pw-gen.png'

const PortfolioSection = () => {
    const projects = [
        {
            title: 'instant-message',
            image: convo,
            deployedLink: 'https://convo-6318dc911188.herokuapp.com/',
            githubLink: 'https://github.com/chriscodinghub/instant-message'
        },
        {
            title: 'CarPro-Reports',
            image: carPro,
            deployedLink: 'https://chriscodinghub.github.io/CarPro-Reports/',
            githubLink: 'https://github.com/chriscodinghub/CarPro-Reports'
        },
        {
            title: 'chitty-chat backend only',
            image: chittyChat,
            githubLink: 'https://github.com/chriscodinghub/chitty-chat'
        },
        {
            title: 'weather-forecast',
            image: weatherForecast,
            deployedLink: 'https://chriscodinghub.github.io/weather-forecast/',
            githubLink: 'https://github.com/chriscodinghub/weather-forecast'
        },
        {
            title: 'work-day-scheduler',
            image: scheduler,
            deployedLink: 'https://chriscodinghub.github.io/Work-Day-Scheduler/',
            githubLink: 'https://github.com/chriscodinghub/Work-Day-Scheduler'
        },
        {
            title: 'pw-generator',
            image: pwGen,
            deployedLink: 'https://chriscodinghub.github.io/pw-generator/',
            githubLink: 'https://github.com/chriscodinghub/pw-generator'
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
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PortfolioSection;