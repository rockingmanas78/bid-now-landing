import React, { useState } from 'react';
import { Mail, Phone, User, Instagram } from 'lucide-react';

export default function BecomeSellerPage() {
    const [formData, setFormData] = useState({ name: '', phone: '', email: '', insta: '', message: '' });
    const isFormValid = formData.name && formData.phone && formData.email;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:support@bidnow.co.in?subject=Become a Seller&body=Name: ${encodeURIComponent(formData.name)}%0D%0APhone: ${encodeURIComponent(formData.phone)}%0D%0AEmail: ${encodeURIComponent(formData.email)}%0D%0AInstagram: ${encodeURIComponent(formData.insta)}%0D%0AMessage: ${encodeURIComponent(formData.message)}`;
        
        window.location.href = mailtoLink;
        
        setFormData({ name: '', phone: '', email: '', insta: '', message: '' });
    };

    return (
        <div className="bg-[#121212] text-white min-h-[calc(100vh-160px)] flex items-center justify-center py-8 px-4">
            <div className="w-full max-w-2xl p-10 rounded-xl shadow-2xl bg-[#121212]">
                <h1 className="text-4xl font-bold text-center mb-10 text-white">Become a Seller</h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-white text-sm font-semibold mb-2">
                            <User className="inline-block mr-2 h-4 w-4" />Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="shadow appearance-none border border-gray-700 bg-gray-800 rounded-lg w-full py-3 px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-white text-sm font-semibold mb-2">
                            <Mail className="inline-block mr-2 h-4 w-4" />Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="shadow appearance-none border border-gray-700 bg-gray-800 rounded-lg w-full py-3 px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-white text-sm font-semibold mb-2">
                            <Phone className="inline-block mr-2 h-4 w-4" />Phone <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="+91 234567890"
                            value={formData.phone}
                            onChange={handleChange}
                            className="shadow appearance-none border border-gray-700 bg-gray-800 rounded-lg w-full py-3 px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="insta" className="block text-white text-sm font-semibold mb-2">
                            <Instagram className="inline-block mr-2 h-4 w-4" />Instagram (Optional)
                        </label>
                        <input
                            type="text"
                            id="insta"
                            name="insta"
                            placeholder="@yourinstagram"
                            value={formData.insta}
                            onChange={handleChange}
                            className="shadow appearance-none border border-gray-700 bg-gray-800 rounded-lg w-full py-3 px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-white text-sm font-semibold mb-2">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={6}
                            placeholder="Tell us about your products or services..."
                            value={formData.message}
                            onChange={handleChange}
                            className="shadow appearance-none border border-gray-700 bg-gray-800 rounded-lg w-full py-3 px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-y"
                        ></textarea>
                    </div>

                    <div className="flex items-center justify-center pt-4">
                        <button
                            type="submit"
                            disabled={!isFormValid}
                            className={`bg-white text-black font-bold py-3 px-8 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 ease-in-out
                                ${isFormValid ? 'hover:bg-gray-200' : 'opacity-50 cursor-not-allowed'}`}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

// import React, { useState } from 'react';
    // import Head from 'next/head';
    // import { Mail, Phone, User, Instagram } from 'lucide-react';

    // const BecomeSellerPage = () => {
    //     const [formData, setFormData] = useState({ name: '', phone: '', email: '', insta: '', message: '' });
    //     const isFormValid = formData.name && formData.phone && formData.email;

    //     const handleChange = (e) => {
    //         const { name, value } = e.target;
    //         setFormData((prev) => ({ ...prev, [name]: value }));
    //     };

    //     const handleSubmit = (e) => {
    //         e.preventDefault();
    //         const mailtoLink = `mailto:support@bidnow.co.in?subject=Become a Seller&body=Name: ${encodeURIComponent(formData.name)}%0D%0APhone: ${encodeURIComponent(formData.phone)}%0D%0AEmail: ${encodeURIComponent(formData.email)}%0D%0AInstagram: ${encodeURIComponent(formData.insta)}%0D%0AMessage: ${encodeURIComponent(formData.message)}`;
    //         window.location.href = mailtoLink;
    //         setFormData({ name: '', phone: '', email: '', insta: '', message: '' });
    //     };

    //     return (
    //         <div className="bg-[#121212] text-white min-h-[calc(100vh-160px)] flex items-center justify-center py-8 px-4">
    //             <Head>
    //                 <title>Become a Seller - BidNow</title>
    //                 <meta name="description" content="Partner with BidNow and become a seller on our live stream shopping platform. Reach a wider audience and sell your products in real-time." />
    //                 <meta name="keywords" content="sell online, live stream seller, e-commerce partner, BidNow seller, online business" />
    //             </Head>
    //             <div className="w-full max-w-2xl p-10 rounded-xl shadow-2xl bg-[#121212]">
    //                 <h1 className="text-4xl font-bold text-center mb-10 text-white">Become a Seller</h1>

    //                 <form onSubmit={handleSubmit} className="space-y-6">
    //                     <div>
    //                         <label htmlFor="name" className="block text-white text-sm font-semibold mb-2">
    //                             <User className="inline-block mr-2 h-4 w-4" />Name <span className="text-red-500">*</span>
    //                         </label>
    //                         <input
    //                             type="text"
    //                             id="name"
    //                             name="name"
    //                             placeholder="Your Full Name"
    //                             value={formData.name}
    //                             onChange={handleChange}
    //                             className="shadow appearance-none border border-gray-700 bg-gray-800 rounded-lg w-full py-3 px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
    //                             required
    //                         />
    //                     </div>

    //                     <div>
    //                         <label htmlFor="email" className="block text-white text-sm font-semibold mb-2">
    //                             <Mail className="inline-block mr-2 h-4 w-4" />Email <span className="text-red-500">*</span>
    //                         </label>
    //                         <input
    //                             type="email"
    //                             id="email"
    //                             name="email"
    //                             placeholder="you@example.com"
    //                             value={formData.email}
    //                             onChange={handleChange}
    //                             className="shadow appearance-none border border-gray-700 bg-gray-800 rounded-lg w-full py-3 px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
    //                             required
    //                         />
    //                     </div>

    //                     <div>
    //                         <label htmlFor="phone" className="block text-white text-sm font-semibold mb-2">
    //                             <Phone className="inline-block mr-2 h-4 w-4" />Phone <span className="text-red-500">*</span>
    //                         </label>
    //                         <input
    //                             type="tel"
    //                             id="phone"
    //                             name="phone"
    //                             placeholder="+1234567890"
    //                             value={formData.phone}
    //                             onChange={handleChange}
    //                             className="shadow appearance-none border border-gray-700 bg-gray-800 rounded-lg w-full py-3 px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
    //                             required
    //                         />
    //                     </div>

    //                     <div>
    //                         <label htmlFor="insta" className="block text-white text-sm font-semibold mb-2">
    //                             <Instagram className="inline-block mr-2 h-4 w-4" />Instagram (Optional)
    //                         </label>
    //                         <input
    //                             type="text"
    //                             id="insta"
    //                             name="insta"
    //                             placeholder="@yourinstagram"
    //                             value={formData.insta}
    //                             onChange={handleChange}
    //                             className="shadow appearance-none border border-gray-700 bg-gray-800 rounded-lg w-full py-3 px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
    //                         />
    //                     </div>

    //                     <div>
    //                         <label htmlFor="message" className="block text-white text-sm font-semibold mb-2">Message</label>
    //                         <textarea
    //                             id="message"
    //                             name="message"
    //                             rows="6"
    //                             placeholder="Tell us about your products or services..."
    //                             value={formData.message}
    //                             onChange={handleChange}
    //                             className="shadow appearance-none border border-gray-700 bg-gray-800 rounded-lg w-full py-3 px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-y"
    //                         ></textarea>
    //                     </div>

    //                     <div className="flex items-center justify-center pt-4">
    //                         <button
    //                             type="submit"
    //                             disabled={!isFormValid}
    //                             className={`bg-white text-black font-bold py-3 px-8 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 ease-in-out
    //                                 ${isFormValid ? 'hover:bg-gray-200' : 'opacity-50 cursor-not-allowed'}`}
    //                         >
    //                             Submit
    //                         </button>
    //                     </div>
    //                 </form>
    //             </div>
    //         </div>
    //     );
    // };

    // export default BecomeSellerPage;