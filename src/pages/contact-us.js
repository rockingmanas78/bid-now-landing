import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactUsPage() {
    return (
        <div className="bg-[#121212] text-white min-h-[calc(100vh-160px)] flex items-center justify-center py-8 px-4">
            <div className="w-full max-w-2xl p-10 rounded-xl shadow-2xl bg-[#121212]">
                <h1 className="text-4xl font-bold text-center mb-10 text-white">Contact Us</h1>

                <p className="text-lg text-center text-gray-300 mb-8">
                    Have questions or need assistance? We're here to help! Reach out to us through the following channels:
                </p>

                <div className="space-y-6">
                    <div className="flex items-center justify-center p-4 bg-gray-800 rounded-lg shadow-md">
                        <Mail className="h-6 w-6 text-orange-500 mr-4" />
                        <div>
                            <h2 className="text-xl font-semibold mb-1">Email Support</h2>
                            <p className="text-gray-300">
                                For general inquiries, support, and feedback, email us at:
                            </p>
                            <a href="mailto:support@bidnow.co.in" className="text-orange-400 hover:underline text-lg font-medium">
                                support@bidnow.co.in
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center justify-center p-4 bg-gray-800 rounded-lg shadow-md">
                        <Phone className="h-6 w-6 text-orange-500 mr-4" />
                        <div>
                            <h2 className="text-xl font-semibold mb-1">Phone Support</h2>
                            <p className="text-gray-300">
                                Our support team is available during business hours(9-6).
                            </p>
                            <p className="text-orange-400 text-lg font-medium">
                                +91-7258938842
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center justify-center p-4 bg-gray-800 rounded-lg shadow-md">
                        <MapPin className="h-6 w-6 text-orange-500 mr-4" />
                        <div>
                            <h2 className="text-xl font-semibold mb-1">Our Office</h2>
                            <p className="text-gray-300">
                                Bidnow Headquarters (For correspondence only):
                            </p>
                            <p className="text-orange-400 text-lg font-medium">
                                84, Kaju Bagan, Hehal, Ranchi, Jharkhand, 834005
                            </p>
                        </div>
                    </div>
                </div>

                <p className="text-center text-gray-400 mt-8 text-sm">
                    We aim to respond to all inquiries within 24-48 working hours.
                </p>
            </div>
        </div>
    );
}