    import Link from 'next/link';
    import Image from 'next/image';
    import { useRouter } from 'next/router';

    const BIDNOW_WORDMARK_LOGO = "/images/wordmark_primary.png";

    const Header = () => {
        const router = useRouter();
        const currentPage = router.pathname;

        return (
            <header className="flex justify-between items-center p-4 border-b border-gray-700 bg-black">
                {/* Logo - Always navigates to Home */}
                <Link href="/" passHref>
                    <Image src={BIDNOW_WORDMARK_LOGO} alt="BidNow Logo" width={150} height={32} className="h-8 w-auto cursor-pointer" />
                </Link>
                {/* Navigation Button - Changes based on current page */}
                <nav>
                    {currentPage === '/' ? (
                        <Link href="/become-seller" passHref>
                            <button
                                className="px-4 py-2 border border-white rounded-lg text-white hover:bg-orange-500 hover:text-black transition duration-300 ease-in-out"
                            >
                                Become a Seller
                            </button>
                        </Link>
                    ) : (
                        <Link href="/" passHref>
                            <button
                                className="px-4 py-2 border border-white rounded-lg text-white hover:bg-orange-500 hover:text-black transition duration-300 ease-in-out"
                            >
                                Home
                            </button>
                        </Link>
                    )}
                </nav>
            </header>
        );
    };

    export default Header;