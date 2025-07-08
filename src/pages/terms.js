import React from 'react';

export default function TermsConditionsPage() {
    return (
        <div className="bg-[#121212] text-white min-h-[calc(100vh-160px)] flex items-center justify-center py-8 px-4">
            <div className="w-full max-w-4xl p-10 rounded-xl shadow-2xl bg-[#121212]">
                <h1 className="text-4xl font-bold text-center mb-8 text-white">Terms & Conditions</h1>
                <div className="text-lg leading-relaxed text-gray-300">
                    <p className="mb-4">
                        Welcome to BIDNOW! These terms and conditions outline the rules and regulations for the use of BIDNOW's Website, located at [Your Website URL].
                    </p>
                    <p className="mb-4">
                        By accessing this website we assume you accept these terms and conditions. Do not continue to use BIDNOW if you do not agree to take all of the terms and conditions stated on this page.
                    </p>
                    <h1 className="text-2xl font-bold mt-6 mb-3 text-white">Cookies</h1>
                    <p className="mb-4">
                        We employ the use of cookies. By accessing BIDNOW, you agreed to use cookies in agreement with the BIDNOW's Privacy Policy.
                    </p>
                    <p className="mb-4">
                        Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
                    </p>
                    <h1 className="text-2xl font-bold mt-6 mb-3 text-white">License</h1>
                    <p className="mb-4">
                        Unless otherwise stated, BIDNOW and/or its licensors own the intellectual property rights for all material on BIDNOW. All intellectual property rights are reserved. You may access this from BIDNOW for your own personal use subjected to restrictions set in these terms and conditions.
                    </p>
                    <p className="mb-4">You must not:</p>
                    <ul className="list-disc list-inside mb-4 pl-4">
                        <li>Republish material from BIDNOW</li>
                        <li>Sell, rent or sub-license material from BIDNOW</li>
                        <li>Reproduce, duplicate or copy material from BIDNOW</li>
                        <li>Redistribute content from BIDNOW</li>
                    </ul>
                    <p className="mb-4">
                        This Agreement shall begin on the date hereof. Our Terms and Conditions were created with the help of the <a href="https://www.privacypolicyonline.com/terms-conditions-generator/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Terms And Conditions Generator</a>.
                    </p>
                    <h1 className="text-2xl font-bold mt-6 mb-3 text-white">Hyperlinking to our Content</h1>
                    <p className="mb-4">
                        The following organizations may link to our Website without prior written approval:
                    </p>
                    <ul className="list-disc list-inside mb-4 pl-4">
                        <li>Government agencies;</li>
                        <li>Search engines;</li>
                        <li>News organizations;</li>
                        <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</li>
                        <li>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
                    </ul>
                    <p className="text-sm text-gray-400 mt-8">Last updated: July 7, 2025</p>
                </div>
            </div>
        </div>
    );
}