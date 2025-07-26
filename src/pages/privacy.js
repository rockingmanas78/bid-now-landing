import React from 'react';

export default function PrivacyPolicyPage() {
    return (
        <div className="bg-[#121212] text-white min-h-[calc(100vh-160px)] flex items-center justify-center py-8 px-4">
            <div className="w-full max-w-4xl p-10 rounded-xl shadow-2xl bg-[#121212]">
                <h1 className="text-4xl font-bold text-center mb-8 text-white">Privacy Policy</h1>
                <div className="text-lg leading-relaxed text-gray-300">
                    <p className="mb-4">
                        At BIDNOW, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. Please read this policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                    </p>
                    <p className="mb-4">
                        We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the &quot;Last updated&quot; date of this Privacy Policy. You are encouraged to periodically review this Privacy Policy to stay informed of updates. You will be deemed to have been made aware of, will be subject to, and will be deemed to have accepted the changes in any revised Privacy Policy by your continued use of the Site after the date such revised Privacy Policy is posted.
                    </p>
                    <h1 className="text-2xl font-bold mt-6 mb-3 text-white">Collection of Your Information</h1>
                    <p className="mb-4">
                        We may collect information about you in a variety of ways. The information we may collect on the Site includes:
                    </p>
                    <ul className="list-disc list-inside mb-4 pl-4">
                        <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as online chat and message boards.</li>
                        <li><strong>Financial Data:</strong> information, such as data related to your payment method (e.g., valid credit card number, brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Site.</li>
                    </ul>
                    <h1 className="text-2xl font-bold mt-6 mb-3 text-white">Use of Your Information</h1>
                    <p className="mb-4">
                        Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
                    </p>
                    <ul className="list-disc list-inside mb-4 pl-4">
                        <li>Create and manage your account.</li>
                        <li>Process your transactions and send you related information, including purchase confirmations and invoices.</li>
                        <li>Enable user-to-user communications.</li>
                        <li>Generate a personal profile about you to make your visit to the Site more personalized.</li>
                        <li>Increase the efficiency and operation of the Site.</li>
                        <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
                        <li>Notify you of updates to the Site.</li>
                    </ul>
                    <p className="text-sm text-gray-400 mt-8">Last updated: July 7, 2025</p>
                </div>
            </div>
        </div>
    );
}