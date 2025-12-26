import React from 'react'
import GlowButton from '../components/ui/GlowButton'
import {FaGithub, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
    return (
        <div className="min-h-screen text-white pt-10 md:pt-20 pb-10 px-6 max-w-[1200px] mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
                <h1 className="text-5xl md:text-7xl font-bold font-poppins bg-gradient-to-r from-fuchsia-500 via-purple-500 to-sky-500 bg-clip-text text-transparent drop-shadow-sm mb-6">
                    Get in Touch
                </h1>
                <p className="text-xl text-gray-300 font-light font-montserrat">
                    Have questions? We'd love to hear from you.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-300">
                {/* Contact Info Section */}
                <div className="space-y-8">
                    <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10">
                        <h2 className="text-2xl font-bold text-white mb-6 font-poppins">Connect with Us</h2>
                        <p className="mb-8 font-light text-lg">
                            Whether you need help with your first token launch or have a partnership inquiry, our team is ready to assist.
                        </p>

                        <div className="space-y-6">
                            <ContactItem
                                icon={<FaEnvelope className="text-sky-500" />}
                                title="Email Us"
                                info="pravdhakal110@gmail.com"
                                href="mailto:pravdhakal110@gmail.com"
                            />
                            <ContactItem
                                icon={<FaGithub className="text-blue-400" />}
                                title="Github"
                                info="PRAVESH-110"
                                href="https://github.com/PRAVESH-110/PopTokens"
                            />
                        </div>
                    </div>
                </div>

                {/* Form Section */}
                <div className="bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-white/10 relative overflow-hidden">
                    {/* Decorative background element */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px] -z-10 pointer-events-none"></div>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2 tracking-wider uppercase font-montserrat">Name</label>
                            <input
                                type="text"
                                className="w-full bg-black/40 border border-white/10 rounded-lg p-4 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-600"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2 tracking-wider uppercase font-montserrat">Email</label>
                            <input
                                type="email"
                                className="w-full bg-black/40 border border-white/10 rounded-lg p-4 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-600"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2 tracking-wider uppercase font-montserrat">Message</label>
                            <textarea
                                rows="4"
                                className="w-full bg-black/40 border border-white/10 rounded-lg p-4 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-600 resize-none"
                                placeholder="How can we help you?"
                            ></textarea>
                        </div>

                        <div className="pt-2">
                            <GlowButton text="Send Message" className="w-full justify-center" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

const ContactItem = ({ icon, title, info, href }) => (
    <a href={href} className="flex items-center space-x-4 p-4 rounded-xl hover:bg-white/5 transition-colors duration-200 group">
        <div className="text-2xl p-3 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
            {icon}
        </div>
        <div>
            <h3 className="text-white font-semibold font-poppins">{title}</h3>
            <p className="text-sm text-gray-400 group-hover:text-sky-400 transition-colors">{info}</p>
        </div>
    </a>
)

export default Contact
