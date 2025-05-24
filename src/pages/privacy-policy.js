import Head from 'next/head';

const PrivacyPolicyPage = () => {
    return (
        <div className="bg-[#121212] text-white min-h-[calc(100vh-160px)] flex items-center justify-center py-8 px-4">
            <Head>
                <title>Privacy Policy - BidNow</title>
                <meta name="description" content="Read BidNow's Privacy Policy to understand how we collect, use, and protect your personal information on our live stream shopping platform as per IT (Reasonable Security Practices) Rules, 2011." />
                <meta name="keywords" content="privacy policy, data protection, IT Rules 2011, BidNow privacy, user data, grievance officer" />
            </Head>
            <div className="w-full max-w-4xl p-10 rounded-xl shadow-2xl bg-[#121212]">
                <h1 className="text-4xl font-bold text-center mb-8 text-white">Privacy Policy</h1>
                <div className="text-lg leading-relaxed text-gray-300">
                    <h2 className="text-2xl font-bold mt-6 mb-3 text-white">1. Data Protection (Privacy Policy)</h2>
                    <p className="mb-4">As per the IT (Reasonable Security Practices) Rules, 2011:</p>
                    <ul className="list-disc list-inside mb-4 pl-4">
                        <li>We collect: name, contact, payment info, usage data.</li>
                        <li>We use: to process transactions, legal compliance, support.</li>
                        <li>No data sale. Shared only with legal/regulatory bodies or partners when needed.</li>
                        <li>Rights: Users can access, correct, delete data.</li>
                        <li>Cookies used for operations and analytics.</li>
                        <li>Data retained as long as needed or by law.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-6 mb-3 text-white">2. Grievance Redressal Officer:</h2>
                    <p className="mb-1"><strong>Bidnow Support</strong></p>
                    <p className="mb-1">Email: <a href="mailto:support@bidnow.co.in" className="text-blue-400 hover:underline">support@bidnow.co.in</a></p>
                    <p className="mb-4">Address: 84 Hehal, Ranchi, Jharkhand, 834001</p>

                    <p className="text-sm text-gray-400 mt-8">Last updated: May 23, 2025</p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;