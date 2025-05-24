    import Head from 'next/head';
    import '../styles/globals.css';
    import Header from '../components/Header';
    import Footer from '../components/Footer';

    function MyApp({ Component, pageProps }) {
      return (
        <div className="bg-[#121212] text-white font-sans min-h-screen flex flex-col">
          <Head>
            <title>BidNow - Live Stream Shopping</title>
            <meta name="description" content="Your trusted Live shopping marketplace for buyers and sellers" />
            <meta name="keywords" content="live shopping, online auction, marketplace, fashion, gadgets, home decor, real-time bidding, BidNow" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta property="og:title" content="BidNow - The Live Stream Shopping" />
            <meta property="og:description" content="Your trusted Live shopping marketplace for buyers and sellers" />
            <meta property="og:type" content="website" />
            {/* Add more Open Graph tags as needed, e.g., og:image, og:url */}
          </Head>
          <Header />
          <main className="flex-grow">
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      );
    }

    export default MyApp;

// import "@/styles/globals.css";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }
