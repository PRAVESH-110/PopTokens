import React from 'react'
import GlowButton from '../components/ui/GlowButton'
import { FaRocket, FaShieldAlt, FaBolt, FaMagic } from 'react-icons/fa'

const About = () => {
    return (
        <div className="min-h-screen text-white pt-10 md:pt-20 pb-10 px-6 max-w-[1200px] mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16 space-y-6 animate-fade-in-up">
                <h1 className="text-5xl md:text-7xl font-bold font-poppins bg-gradient-to-r from-fuchsia-500 via-purple-500 to-sky-500 bg-clip-text text-transparent drop-shadow-sm">
                    PopTokens
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-montserrat font-light leading-relaxed">
                    A Premier <span className="font-semibold text-white">No-Code</span> Token Launchpad on Sei Network.
                </p>
                <p className="text-xl md:text-xl text-gray-300  mx-auto font-montserrat font-light leading-relaxed">
                    Instantly launch your own token on any Network of your choice with PopTokens
                </p>
                <div className="flex justify-center gap-2 text-sm md:text-base text-sky-400 font-mono tracking-widest uppercase">
                    <span>Create</span> • <span>Deploy</span> • <span>Trade</span>
                </div>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-20">
                <FeatureCard
                    icon={<FaRocket className="text-fuchsia-500 text-3xl md:text-4xl" />}
                    title="Instant Launch"
                    desc="Deploy your own token in seconds with no coding required. Just a few clicks and you are live on the blockchain."
                    delay="0"
                />
                <FeatureCard
                    icon={<FaMagic className="text-sky-500 text-3xl md:text-4xl" />}
                    title="AI Powered"
                    desc="Stuck on ideas? Use our advanced AI tools to generate unique names, symbols, and logos for your brand instantly."
                    delay="100"
                />
                <FeatureCard
                    icon={<FaShieldAlt className="text-green-400 text-3xl md:text-4xl" />}
                    title="100% Secure"
                    desc="Ensuring fully audited contracts, lightning fast transactions, and battle-tested security."
                    delay="200"
                />
                <FeatureCard
                    icon={<FaBolt className="text-yellow-400 text-3xl md:text-4xl" />}
                    title="Lightning Fast"
                    desc="Enjoy seamless trading, instant confirmations, and zero downtime."
                    delay="300"
                />
            </div>

            {/* Mission Statement */}
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-black/80 backdrop-blur-xl rounded-2xl p-8 md:p-12 mb-16 border border-white/10 box-border">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-poppins">
                        Our Mission
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-lg font-light">
                        PopTokens is designed to democratize access to the crypto ecosystem. We believe that launching a community token shouldn't require a degree in Solidity or complex infrastructure setup.
                        <br /><br />
                        By combining the unparalleled speed of <strong className="text-white">Sei Network</strong> with intuitive <strong className="text-white">No-Code tools</strong> and <strong className="text-white">Generative AI</strong>, we empower creators, artists, and communities to bring their vision to life.
                    </p>
                </div>
            </div>

            {/* Call to Action */}
            <div className="text-center space-y-8 pb-10">
                <h3 className="text-2xl font-bold text-white font-poppins">Ready to start your journey?</h3>
                <div className="transform hover:scale-105 transition-transform duration-300 inline-block">
                    <GlowButton path="/addCoins" text="Launch Token Now" />
                </div>
            </div>
        </div>
    )
}

const FeatureCard = ({ icon, title, desc, delay }) => (
    <div
        className="p-6 md:p-8 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] group hover:-translate-y-1"
        style={{ animationDelay: `${delay}ms` }}
    >
        <div className="mb-5 p-3 bg-white/5 rounded-lg inline-block group-hover:scale-110 group-hover:bg-white/10 transition-transform duration-300">
            {icon}
        </div>
        <h3 className="text-2xl font-bold mb-3 font-poppins text-white">{title}</h3>
        <p className="text-gray-400 leading-relaxed font-sans text-base">{desc}</p>
    </div>
)

export default About