import {Link} from 'react-router-dom';
import {userState, useState} from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className='fixed top-0 w-full bg-white border-b border-gray-100 z-50'>
                <div className='max-w-5xl mx-auto px-6 py-4 flex justify-between items-center'>
                    {/* Logo */}
                    <Link to="/" className='text-xl font-bold text-black'>
                    Athish Krishna
                    </Link>

                    <div className='hidden md:flex gap-8'>
                        <Link to="/" className='text-gray-600 hover:text-black transition-colors'>Home</Link>
                        <Link to="/about" className='text-gray-600 hover:text-black transition-colors'>About</Link>
                        <Link to="/projects" className='text-gray-600 hover:text-black transition-colors'>Projects</Link>
                        <Link to="/contact" className='text-gray-600 hover:text-black transition-colors'>Contact</Link>
                    </div>

                    <button onClick={() => setIsOpen(!isOpen)} className='md:hidden text-gray-600'>
                        {isOpen ? 'X' : '='}
                    </button>
                </div>
                {isOpen && (
                    <div className='md:hidden flex flex-col gap-4 px-6 pb-4 bg-white'>
                        <Link to="/" onClick={() => {setIsOpen(false)}} className='text-gray-600'>Home</Link>
                        <Link to="/about" onClick={() => {setIsOpen(false)}} className='text-gray-600'>About</Link>
                        <Link to="/projects" onClick={() => {setIsOpen(false)}} className='text-gray-600'>Projects</Link>
                        <Link to="/contact" onClick={() => {setIsOpen(false)}} className='text-gray-600'>Contact</Link>
                    </div>
                )}
            </nav>
        </>
    )
}

export default Navbar