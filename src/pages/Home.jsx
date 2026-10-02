import {Link} from 'react-router-dom';
import profileImage from '../assets/athish.webp';

function Home() {
    return (
        <>
            <div className='min-h-screen flex flex-col items-center justify-center px-6 text-center'>
                <img src={profileImage} alt="Athish Krishna" className='w-32 h-32 rounded-full object-cover mb-6 border-4 border-gray-100'/>

                {/* Intro */}
                
                <h1 className="text-5xl font-bold text-gray-900 mb-4">Hi, I'm Athish Krishna</h1>
                <p className="text-xl text-gray-500 max-w-xl mb-8">
                    Software Developer building clean, reliable web applications, from React front ends to PHP and MySQL back ends.
                </p>

                <div className='flex gap-4'>
                    <Link to="/projects" className='bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium'>View My Work</Link>
                    <Link to="/contact" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-black transition-colors font-medium" > Contact Me </Link>
                </div>

                <div className="flex gap-6 mt-12 text-gray-400">
                    <a href="https://github.com/athishdnm"   target="_blank" rel="noreferrer" className="hover:text-black transition-colors">GitHub</a>
                    <a href="https://www.linkedin.com/in/athish-krishna/"  target="_blank" rel="noreferrer" className="hover:text-black transition-colors">LinkedIn</a>
                    <a href="mailto:athish.krishna90@outlook.com"                                               className="hover:text-black transition-colors">Email</a>
                </div>

            </div>
        </>
    );
}

export default Home;