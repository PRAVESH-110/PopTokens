import React from 'react'

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen text-white pt-10 md:pt-20 pb-10 px-6 max-w-[1000px] mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
                <h1 className="text-4xl md:text-6xl font-bold font-poppins bg-gradient-to-r from-fuchsia-500 via-purple-500 to-sky-500 bg-clip-text text-transparent drop-shadow-sm mb-4">
                    Privacy Policy
                </h1>
                <p className="text-gray-400 font-montserrat text-sm tracking-widest uppercase">
                    Last Updated: December 2024
                </p>
            </div>

            <div className="space-y-10 font-light leading-relaxed text-gray-300 text-lg">
                <section className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-colors duration-300">
                    <h2 className="text-2xl font-bold text-white mb-4 font-poppins">1. Introduction</h2>
                    <p>
                        Welcome to PopTokens. We value your privacy and are committed to protecting your personal data.
                        This privacy policy explains how we collect, use, and safeguard your information when you visit our
                        decentralized application (dApp) and use our services.
                    </p>
                </section>

                <section className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-colors duration-300">
                    <h2 className="text-2xl font-bold text-white mb-4 font-poppins">2. Information We Collect</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>
                            <strong className="text-white">Wallet Address:</strong> We collect your public wallet address to facilitate transactions on the Sei Network.
                        </li>
                        <li>
                            <strong className="text-white">Transaction Data:</strong> Public blockchain data regarding tokens you create or trade.
                        </li>
                        <li>
                            <strong className="text-white">Usage Data:</strong> Anonymous analytics to help us improve the PopTokens experience.
                        </li>
                    </ul>
                </section>

                <section className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-colors duration-300">
                    <h2 className="text-2xl font-bold text-white mb-4 font-poppins">3. How We Use Your Data</h2>
                    <p>
                        We use the collected information solely to:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                        <li>Facilitate token creation and deployment.</li>
                        <li>Display your transaction history and balances.</li>
                        <li>Maintain the security and performance of the dApp.</li>
                    </ul>
                </section>

                <section className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-colors duration-300">
                    <h2 className="text-2xl font-bold text-white mb-4 font-poppins">4. Security</h2>
                    <p>
                        PopTokens is a non-custodial platform. We do not have access to your private keys or funds.
                        While we implement industry-standard security measures for our interface, please remember that
                        blockchain transactions are irreversible and public.
                    </p>
                </section>

                <section className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-colors duration-300">
                    <h2 className="text-2xl font-bold text-white mb-4 font-poppins">5. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us via our support channels or community links.
                    </p>
                </section>
            </div>
        </div>
    )
}

export default PrivacyPolicy
