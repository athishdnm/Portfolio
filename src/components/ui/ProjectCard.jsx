function ProjectCard({title, description, tech, github, live}) {
    return (
        <>
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm mb-4">{description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {tech.map((t, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                            {t}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4">
                    <a href={github} target="_blank" rel="noreferrer" className="text-sm text-gray-600 hover:text-black underline transition-colors">GitHub</a>
                    <a href={live} target="_blank" rel="noreferrer" className="text-sm text-gray-600 hover:text-black underline transition-colors">Live Demo</a>
                </div>

            </div>
        </>
    );
}

export default ProjectCard;