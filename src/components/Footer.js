    import Link from 'next/link';
    import Image from 'next/image';
    import { Instagram, Linkedin } from 'lucide-react';

    const BIDNOW_PRIMARY_LOGO = "/images/wordmark_primary.png"; // Using the same logo for primary as wordmark

    const Footer = () => {
        return (
            <footer className="bg-black border-t border-gray-700 py-8 px-4 text-sm">
                <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start max-w-6xl mx-auto">
                    {/* Footer Logo */}
                    <Link href="/" passHref>
                        <Image src={BIDNOW_PRIMARY_LOGO} alt="BidNow Logo" width={100} height={40} className="h-10 w-auto mb-4 sm:mb-0 sm:mr-auto cursor-pointer" />
                    </Link>
                    <div className="text-center sm:text-left">
                        {/* Social Media Links */}
                        <div className="flex gap-4 justify-center sm:justify-end mb-2">
                            <a href="https://www.instagram.com/bidnowindia/#" target="_blank" rel="noopener noreferrer">
                                <Instagram className="h-5 w-5 text-white hover:text-orange-500 transition duration-300" />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <Linkedin className="h-5 w-5 text-white hover:text-orange-500 transition duration-300" />
                            </a>
                        </div>
                        {/* Navigation Links */}
                        <div className="grid grid-cols-2 gap-2">
                            <Link href="/become-seller" passHref><button className="text-white text-left hover:text-orange-500 transition duration-300">Become a Seller</button></Link>
                            <Link href="/terms-conditions" passHref><button className="text-white text-left hover:text-orange-500 transition duration-300">Terms & Conditions</button></Link>
                            <Link href="/privacy-policy" passHref><button className="text-white text-left hover:text-orange-500 transition duration-300">Privacy Policy</button></Link>
                            <a href="#" className="text-white text-left hover:text-orange-500 transition duration-300">FAQ</a> {/* Placeholder for FAQ */}
                        </div>
                    </div>
                </div>
                <p className="text-center text-gray-500 mt-4">© BidNow. All rights reserved.</p>
            </footer>
        );
    };

    export default Footer;