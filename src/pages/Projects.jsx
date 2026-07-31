import ProjectCard from "../components/ui/ProjectCard";
import projects from "../data/projects";

function Projects() {
    return (
        <>
            <div className="max-w-5xl mx-auto px-6 py-24">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
                <p className="text-gray-500 mb-12">Things I built so far</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>

            </div>
        </>
    )
}

export default Projects