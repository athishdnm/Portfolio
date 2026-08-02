import skills from '../data/skills';
import experiences from '../data/experience';

const levelColor = {
    Beginner: 'br-gray-100 text-gray-600',
    Intermediate: 'br-blue-100 text-gray-700',
    Advanced: 'br-green-100 text-gray-700'
}

function About() {
    return (
        <>
            <div className='max-w-3xl mx-auto px-6 py-24'>
                <h2 className='text-4xl font-bold text-gray-900 mb-4'>About Me</h2>

                {/** Bio */}
                <p className='text-gray-500 text-lg leading-relaxed mb-12'>
                    Frontend Engineer with 8+ years of experience building scalable web applications using React, JavaScript
and modern frontend architecture. Experienced in developing high-performance UI systems, integrating
REST and GraphQL APIs, and delivering production applications across enterprise marketing technology
and B2B distribution platforms. Strong focus on performance, flexibility and reusable component
architecture.
                </p>  

                {/** Skills */} 

                <h3 className='text-2xl font-bold text-gray-900 mb-6'>Skills</h3> 
                <div className='flex flex-wrap gap-3'>
                    {skills.map((skill, index) => (
                        <span key={index} className={`px-4 py-2 rounded-full text-sm font-medium ${levelColor[skill.level]}`}>
                            {skill.name}
                        </span>
                    ))}
                </div>

                <h3 className='text-2xl font-bold text-gray-900 mt-12 mb-6'>
                    Experience
                </h3>
                {experiences.sort((a,b) => b.rank - a.rank).map((experience, index) => (
                    <div key={index} className='border-l-2 border-gray-200 pl-6 mb-6'>
                        <div className='mb-6'>
                            <p className='text-sm text-gray-400'>{experience.year}</p>
                            <h4 className="font-bold text-gray-900">{experience.position}</h4>
                            <p className="text-gray-500 text-sm">{experience.company}</p>
                        </div>
                    </div>  
                ))}

            </div>
        </>
    )
}

export default About