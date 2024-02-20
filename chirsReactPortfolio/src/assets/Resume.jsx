const ResumeSection = () => {
    const developerProficiencies = ['JavaScript', 'React', 'HTML', 'CSS', 'Node.js', 'Express', 'MongoDB'];

    return (
        <section id="resume">
            <h2>Resume</h2>
            <div className="resume-content">
                <p>Download my resume:</p>
                <a href="path_to_resume_file" download>Download Resume</a>

                <h3>Proficiencies:</h3>
                <ul>
                    {developerProficiencies.map((proficiency, index) => (
                        <li key={index}>{proficiency}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default ResumeSection;