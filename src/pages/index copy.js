    import Head from 'next/head';
    import Image from 'next/image';

    const HERO_SECTION_IMAGE = "/images/bidnow_app_view_1.png";
    const GET_THEM_ALL_IMAGE = "/images/jackets_lined_up.png";
    const GET_WHAT_YOU_WANT_IMAGE = "/images/air_jordan_1_retro_chicago.jpg";

    const HomePage = () => {
        return (
            <div className="bg-[#121212] text-white">
                <Head>
                    <title>BidNow - The Live Stream Shopping</title>
                    <meta name="description" content="Your trusted Live shopping marketplace for buyers and sellers. Join live auctions, place bids, and grab the best deals in real-time!" />
                    <meta name="keywords" content="live shopping, online auction, marketplace, fashion, gadgets, home decor, real-time bidding, BidNow" />
                </Head>

                {/* Hero Section */}
                <section className="text-center py-16 px-4">
                    <h1 className="text-4xl font-bold mb-2">The Live Stream Shopping</h1>
                    <p className="text-lg text-gray-400 mb-4">Your trusted Live shopping marketplace for buyers and sellers</p>
                    <div className="mt-4 flex justify-center">
                        <Image src={HERO_SECTION_IMAGE} alt="Woman displaying products on phone" width={500} height={300} className="rounded-md w-full max-w-md object-cover" priority />
                    </div>
                </section>

                {/* Section: Jump into action */}
                <section className="bg-black py-16 px-4 flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto rounded-xl shadow-lg mb-8">
                    <Image src="https://images.unsplash.com/photo-1619983081563-d9f41b1a4f20" alt="Boy in drip" width={500} height={300} className="w-full md:w-1/2 rounded-md mb-4 md:mb-0 md:mr-8 object-cover" />
                    <div className="text-center md:text-left flex-1">
                        <h1 className="text-2xl font-bold mb-4 text-orange-500">JUMP INTO ACTION</h1>
                        <h3 className="text-gray-300 text-lg">Join live auctions, place bids, and grab the best deals in real-time!</h3>
                    </div>
                </section>

                {/* Section: Get all you want */}
                <section className="bg-[#121212] py-16 px-4 flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto rounded-xl shadow-lg mb-8">
                    <div className="text-center md:text-left flex-1 md:mr-8 order-2 md:order-1">
                        <h1 className="text-2xl font-bold mb-4 text-white">GET THEM ALL</h1>
                        <h3 className="text-gray-300 text-lg">Find exclusive fashion, gadgets, home décor, and more through live streams.</h3>
                    </div>
                    <Image src={GET_THEM_ALL_IMAGE} alt="Jackets lined up" width={500} height={300} className="w-full md:w-1/2 rounded-md order-1 md:order-2 mb-4 md:mb-0 object-cover" />
                </section>

                {/* Custom Third Section */}
                <section className="bg-black py-16 px-4 flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto rounded-xl shadow-lg mb-8">
                    <Image src={GET_WHAT_YOU_WANT_IMAGE} alt="Air Jordan shoes" width={500} height={300} className="w-full md:w-1/2 rounded-md mb-4 md:mb-0 md:mr-8 object-cover" />
                    <div className="text-center md:text-left flex-1">
                        <h1 className="text-2xl font-bold mb-4 text-orange-500">GET WHAT YOU WANT</h1>
                        <h3 className="text-gray-300 text-lg">Experience the thrill of shopping like never before. There's always a deal waiting for you.</h3>
                    </div>
                </section>

                {/* App Store Links */}
                <section className="bg-[#121212] py-12 flex justify-center gap-6">
                    <a href="https://play.google.com/store/apps/details?id=com.bidnow.mainapp&hl=en-US" target="_blank" rel="noopener noreferrer">
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" width={160} height={48} className="h-12 w-auto" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <Image src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" width={160} height={48} className="h-12 w-auto" />
                    </a>
                </section>
            </div>
        );
    };

    export default HomePage;