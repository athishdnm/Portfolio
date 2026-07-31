import {useState} from 'react';

function Contact() {
    const [submitted, setSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        const [name, value] = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // For now just log - later connect to EmailJS or Firebase
        console.log('Message:', formData)
        setSubmitted(true)
    }

    return (
        <>
            <div className='max-w-xl mx-auto px-6 py-24'>
                <h2 className='text-4xl font-bold text-gray-900 mb-4'> Contact Me</h2>
                <p className="text-gray-500 mb-12">Have an opportunity or just want to chat? Send me a message.</p>

                {submitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                        <p className="text-green-700 font-medium">Message sent! I'll get back to you soon.</p>
                    </div>
                ) : (
                    <form action="" onSubmit={handleSubmit} className='flex-flex-col gap-4'>    
                        <input type="text" name='name' placeholder='Your Name' value={formData.name} onChange={handleChange} className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-black transition-colors' />

                        <input type="email" name='email' placeholder='Your Email' value={formData.email} onChange={handleChange} className='w-full border border-gray-300 rounded-lg mt-5 px-4 py-3 focus:outline-none focus:border-black transition-colors'  />

                        <textarea name="message" id="userMessage" placeholder='Your Feedback' rows={5} value={formData.message} onChange={handleChange} className='w-full border border-gray-300 rounded-lg mt-5 px-4 py-3 focus:outline-none focus:border-black transition-colors resize-none'></textarea>

                        <button type='submit' className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium">Send Message</button>
                    </form>
                )}

            </div>
        </>
    )
}

export default Contact