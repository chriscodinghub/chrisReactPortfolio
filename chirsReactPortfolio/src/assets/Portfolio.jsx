const PortfolioSection = () => {
    const projects = [
        {
            title: 'Project 1',
            image: 'path_to_project1_image',
            deployedLink: 'link_to_deployed_project1',
            githubLink: 'link_to_github_project1'
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