import Head from 'next/head';

const TermsConditionsPage = () => {
    return (
        <div className="bg-[#121212] text-white min-h-[calc(100vh-160px)] flex items-center justify-center py-8 px-4">
            <Head>
                <title>Terms of Service - BidNow Technologies Private Limited</title>
                <meta
                    name="description"
                    content="Review the Terms of Service for Bidnow Technologies Private Limited, effective July 26, 2025. This legally binding agreement covers platform usage, payments, shipping, returns, seller & buyer obligations, IP, dispute resolution, and more."
                />
                <meta
                    name="keywords"
                    content="terms of service, user agreement, Bidnow legal, online marketplace terms, Indian law"
                />
            </Head>
            <div className="w-full max-w-4xl p-10 rounded-xl shadow-2xl bg-[#121212]">
                <h1 className="text-4xl font-bold text-center mb-4 text-white">
                    Bidnow Technologies Private Limited – Terms of Service
                </h1>
                <p className="text-center text-gray-400 mb-8">Effective Date: July 26, 2025</p>
                <div className="text-lg leading-relaxed text-gray-300">
                    <p className="mb-4">
                        These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;User&quot; or &quot;you&quot;) and Bidnow Technologies Private Limited (&quot;Bidnow&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), a company incorporated under the Companies Act, 2013, having its registered office at 84 Hehal, Ranchi, Jharkhand, 834001, India. By accessing or using our website <a href="https://www.bidnow.co.in" className="text-blue-400 hover:underline">www.bidnow.co.in</a> or the mobile application (&quot;Platform&quot;), you agree to these Terms and our Privacy Policy.
                    </p>

                    <h2 className="text-2xl font-bold mt-6 mb-3 text-white">1. About the Platform</h2>
                    <p className="mb-4">
                        Bidnow provides an online marketplace connecting buyers and sellers. Bidnow is not a party to any sale contract and does not own or control any listed products or services. All transactions are between users. Bidnow facilitates transactions using technology and payment integrations only.
                    </p>

                    <h2 className="text-2xl font-bold mt-6 mb-3 text-white">2. Applicable Law</h2>
                    <p className="mb-4">
                        These Terms are governed by the laws of India, including the Information Technology Act, 2000; Indian Contract Act, 1872; GST Act, 2017; Consumer Protection Act, 2019; and other applicable regulations.
                    </p>

                    <h2 className="text-2xl font-bold mt-6 mb-3 text-white">3. User Eligibility</h2>
                    <p className="mb-4">
                        Users must be at least 18 years old or access the Platform under guardian supervision.
                    </p>

                    <h2 className="text-2xl font-bold mt-6 mb-3 text-white">4. Account Management</h2>
                    <p className="mb-4">
                        Users are responsible for all activity under their accounts and must maintain the confidentiality of their credentials. Unauthorized access must be reported immediately.
                    </p>

                    <h2 className="text-2xl font-bold mt-6 mb-3 text-white">5. License to Use</h2>
                    <p className="mb-4">
                        We grant you a limited, revocable, non‑exclusive license to access and use the Platform in accordance with these Terms and Indian law.
                    </p>

                    <h2 className="text-2xl font-bold mt-6 mb-3 text-white">6. Payments</h2>
                    <p className="mb-4">
                        All payments are processed via RBI‑authorized gateways. Prices displayed include applicable GST. Refunds are governed by Indian consumer laws.
                    </p>
                    <p className="mb-4">
                        Sellers may host live events. Rules for expressing purchase interest, bid increments, offer withdrawals, and purchase conditions may vary by session at the seller’s sole discretion, subject to these Terms. The seller has final authority over session management, pricing, sale, and dispute resolution, except Bidnow reserves the right to cancel any transaction if a purchase offer appears erroneous.
                    </p>

                    <h2 className="text-2xl font-bold mt-6 mb-3 text-white">7. Shipping & Delivery</h2>
                    <p className="mb-4">The Seller confirms that:</p>
                    <ul className="list-disc list-inside mb-4 pl-4">
                        <li>The Seller is responsible for shipping products to the Buyer unless otherwise agreed.</li>
                        <li>Tracking information must be provided within 24 hours of dispatch.</li>
                        <li>Delays or repeated failures to dispatch/deliver may result in order cancellation or penalties.</li>
                        <li>Any disputes are subject to the Consumer Protection (E‑Commerce) Rules, 2020.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-6 mb-3 text-white">8. Returns and Cancellations</h2>
                    <p className="mb-4">
                        Returns and refunds must comply with the Consumer Protection Act, 2019. Sellers must clearly disclose their return and cancellation policies.
                    </p>

                    <h2 className="text-2xl font-bold mt-6 mb-3 text-white">9. Seller Terms</h2>

                    <h3 className="text-xl font-semibold mt-4 mb-2 text-white">9.1. Seller Onboarding & Eligibility</h3>
                    <ul className="list-disc list-inside mb-4 pl-4">
                        <li>The Seller affirms legal capacity to enter this Agreement.</li>
                        <li>Registered entities must maintain valid business licenses or permits.</li>
                        <li>Individual sellers must comply with all applicable laws on taxation and product authenticity.</li>
                    </ul>

                    <h3 className="text-xl font-semibold mt-4 mb-2 text-white">9.2. Product Listings</h3>
                    <ul className="list-disc list-inside mb-4 pl-4">
                        <li>All products must be genuine, owned by the Seller, and legal in India.</li>
                        <li>Counterfeit, illegal, restricted, or stolen goods are prohibited.</li>
                        <li>Thrifted, handmade, and resold items are allowed if authentic, accurately described, and safety‑compliant.</li>
                    </ul>

                    <h3 className="text-xl font-semibold mt-4 mb-2 text-white">9.3. Commission & Payments</h3>
                    <ul className="list-disc list-inside mb-4 pl-4">
                        <li>Bidnow deducts commission on each successful sale as specified in our FAQs.</li>
                        <li>Settlements are initiated within 5–7 business days after confirmed delivery.</li>
                        <li>Sellers must provide accurate payment details; Bidnow is not liable for transfers to incorrect accounts.</li>
                        <li>If a Buyer disputes a transaction, Bidnow may delay payment, request return of the Item, or issue a refund at its discretion.</li>
                        <li>Applicable taxes (GST, TDS, etc.) are handled per Indian law.</li>
                    </ul>

                    <h3 className="text-xl font-semibold mt-4 mb-2 text-white">9.4. Fulfillment & Delivery</h3>
                    <p className="mb-4">
                        Reiterating Shipping & Delivery (Section 7): Sellers are responsible for dispatch, tracking, and timely delivery.
                    </p>

                    <h3 className="text-xl font-semibold mt-4 mb-2 text-white">9.5. Returns, Refunds & Complaints</h3>
                    <ul className="list-disc list-inside mb-4 pl-4">
                        <li>Sellers may designate items as “No Return/No Refund” (e.g., collectibles).</li>
                        <li>Bidnow may investigate serious complaints (e.g., inauthentic or damaged items) and direct refunds or cancellations even if marked “No Return/No Refund.”</li>
                        <li>If an item is as described and marked “No Return/No Refund,” Bidnow will respect that policy.</li>
                        <li>Sellers bear any fees for return or disposal of non‑conforming Items.</li>
                        <li>No Circumvention: Sellers must use Bidnow’s payment processes and may not solicit off‑platform payments.</li>
                    </ul>

                    <h3 className="text-xl font-semibold mt-4 mb-2 text-white">9.6. Marketing & Promotions</h3>
                    <ul className="list-disc list-inside mb-4 pl-4">
                        <li>Bidnow may feature Seller products in reels, posts, live events, social media shoutouts, curated collections, and campaigns.</li>
                        <li>Inclusion is not guaranteed; priority is given to consistent, high‑quality sellers.</li>
                        <li>Sellers retain full ownership of their brand assets; Bidnow’s use is limited to promotional purposes.</li>
                    </ul>

                    <h3 className="text-xl font-semibold mt-4 mb-2 text-white">9.7. Seller Conduct</h3>
                    <ul className="list-disc list-inside mb-4 pl-4">
                        <li>Sellers must treat buyers respectfully and act in good faith.</li>
                        <li>Fraudulent or manipulative practices are prohibited.</li>
                        <li>Bidnow may suspend or blacklist violators.</li>
                    </ul>

                    <h3 className="text-xl font-semibold mt-4 mb-2 text-white">9.8. Intellectual Property</h3>
                    <ul className="list-disc list-inside mb-4 pl-4">
                        <li>Sellers retain ownership of their trademarks and content.</li>
                        <li>Sellers grant Bidnow a non‑exclusive, irrevocable, royalty‑free, worldwide license to use materials for platform operations and promotions.</li>
                        <li>Sellers may use Bidnow branding in an authorized, non‑misleading way.</li>
                    </ul>

                    <h3 className="text-xl font-semibold mt-4 mb-2 text-white">9.9. Acceptance</h3>
                    <p className="mb-4">
                        By registering and listing, the Seller confirms they have read, understood, and agreed to this Agreement, including the Privacy Policy and Terms.
                    </p>

                    <h2 className="text-2xl font-bold mt-6 mb-3 text-white">10. Buyer Terms</h2>
                    <ul className="list-disc list-inside mb-4 pl-4">
                        <li><strong>10.1 Returns & Refunds:</strong> Buyers may return products within 5 days for a full refund, including GST.</li>
                        <li><strong>10.2 Shipping:</strong> Currently managed by Sellers.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-6 mb-3 text-white">11. Prohibited Content & Conduct</h2>
                    <p className="mb-4">Users may not:</p>
                    <ul className="list-disc list-inside mb-4 pl-4">
                        <li>Violate any applicable Indian law or regulation.</li>
                        <li>Post obscene, pornographic, hateful, defamatory, or infringing content.</li>
                        <li>Facilitate gambling, lotteries, or chance-based schemes.</li>
                        <li>Commit fraud, misrepresentation, or money laundering.</li>
                        <li>Circumvent platform security or payment processes.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-6 mb-3 text-white">12. Apple App Store Provisions (iOS Users Only)</h2>
                    <ul className="list-disc list-inside mb-4 pl-4">
                        <li><strong>12.1</strong> Apple isn’t responsible for support or legal claims.</li>
                        <li><strong>12.2</strong> Apple may refund the app purchase if it doesn’t conform to warranty.</li>
                        <li><strong>12.3</strong> You confirm you’re not in a U.S. embargoed country or on a restricted list.</li>
                        <li><strong>12.4</strong> Apple and its subsidiaries are third‑party beneficiaries of these Terms.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-6 mb-3 text-white">13. Grievance Redressal Officer</h2>
                    <p className="mb-1"><strong>Bidnow Support</strong></p>
                    <p className="mb-1">Email: <a href="mailto:support@bidnow.co.in" className="text-blue-400 hover:underline">support@bidnow.co.in</a></p>
                    <p className="mb-4">Address: 84 Hehal, Ranchi, Jharkhand, 834001</p>

                    <h2 className="text-2xl font-bold mt-6 mb-3 text-white">14. Termination</h2>
                    <p className="mb-4">
                        Bidnow may suspend or terminate accounts for material breach, fraud, or serious complaints. Legal action may follow.
                    </p>

                    <h2 className="text-2xl font-bold mt-6 mb-3 text-white">15. Limitation of Liability</h2>
                    <p className="mb-4">
                        Bidnow is not liable for indirect, incidental, or consequential damages arising from your use of the Platform.
                    </p>

                    <h2 className="text-2xl font-bold mt-6 mb-3 text-white">16. Indemnity</h2>
                    <p className="mb-4">
                        You agree to indemnify and hold Bidnow harmless from any claims, losses, liabilities, or expenses (including attorney fees) arising from your breach of these Terms or your activities on the Platform.
                    </p>

                    <h2 className="text-2xl font-bold mt-6 mb-3 text-white">17. Governing Law & Dispute Resolution</h2>
                    <p className="mb-4">
                        These Terms are governed by Indian law. Courts in Ranchi, Jharkhand have exclusive jurisdiction. All disputes shall first be attempted to be resolved amicably; failing which they will be referred to arbitration under the Arbitration & Conciliation Act, 1996, at Ranchi, Jharkhand, whose decision is final.
                    </p>
                    <p className="mb-4">
                        Neither party shall be liable for delays due to causes beyond reasonable control, including natural disasters, war, terrorism, government acts, labor strikes, or internet outages.
                    </p>

                    <h2 className="text-2xl font-bold mt-6 mb-3 text-white">18. Amendments</h2>
                    <p className="mb-4">
                        We may modify these Terms at any time by posting updates. Continued use of the Platform constitutes acceptance of the revised Terms.
                    </p>

                    <h2 className="text-2xl font-bold mt-6 mb-3 text-white">19. Contact Us</h2>
                    <p className="mb-1">For any questions or concerns, email us at <a href="mailto:support@bidnow.co.in" className="text-blue-400 hover:underline">support@bidnow.co.in</a></p>
                    <p className="mb-4">Address: 84 Hehal, Ranchi, Jharkhand, 834001</p>

                    <p className="text-sm text-gray-400 mt-8">Last updated: July 26, 2025</p>
                </div>
            </div>
        </div>
    );
};

export default TermsConditionsPage;



// import Head from 'next/head';

// const TermsConditionsPage = () => {
//     return (
//         <div className="bg-[#121212] text-white min-h-[calc(100vh-160px)] flex items-center justify-center py-8 px-4">
//             <Head>
//                 <title>Terms of Service - BidNow Technologies Private Limited</title>
//                 <meta name="description" content="Review the Terms of Service for BidNow Technologies Private Limited, effective May 23, 2025. This legally binding agreement covers platform usage, payments, shipping, returns, and more." />
//                 <meta name="keywords" content="terms of service, user agreement, BidNow legal, online marketplace terms, Indian law" />
//             </Head>
//             <div className="w-full max-w-4xl p-10 rounded-xl shadow-2xl bg-[#121212]">
//                 <h1 className="text-4xl font-bold text-center mb-8 text-white">BidNow Technologies Private Limited – Terms of Service</h1>
//                 <p className="text-center text-gray-400 mb-8">Effective Date: 23rd May, 2025</p>
//                 <div className="text-lg leading-relaxed text-gray-300">
//                     <p className="mb-4">
//                         These Terms of Service ("Terms") constitute a legally binding agreement between you ("User" or "you") and BidNow Technologies Private Limited ("BidNow", "we", "our", or "us"), a company incorporated under the Companies Act, 2013 and having its registered office at 84 Hehal, Ranchi, Jharkhand, 834001, India. By accessing or using our website <a href="www.bidnow.co.in" className="text-blue-400 hover:underline">www.bidnow.co.in</a> or the mobile application ("Platform"), you agree to these Terms and our Privacy Policy.
//                     </p>

//                     <h2 className="text-2xl font-bold mt-6 mb-3 text-white">1. About the Platform</h2>
//                     <p className="mb-4">
//                         BidNow provides an online marketplace connecting buyers and sellers. BidNow is not a party to any sale contract and does not own or control any listed products or services. All transactions are between users. BidNow facilitates transactions using technology and payment integrations only.
//                     </p>

//                     <h2 className="text-2xl font-bold mt-6 mb-3 text-white">2. Applicable Law</h2>
//                     <p className="mb-4">
//                         These Terms are governed by the laws of India, including the IT Act, 2000; Indian Contract Act, 1872; GST Act, 2017; Consumer Protection Act, 2019; and other applicable regulations.
//                     </p>

//                     <h2 className="text-2xl font-bold mt-6 mb-3 text-white">3. User Eligibility</h2>
//                     <p className="mb-4">
//                         Users must be 18+ years or access the Platform under guardian supervision.
//                     </p>

//                     <h2 className="text-2xl font-bold mt-6 mb-3 text-white">4. Account Management</h2>
//                     <p className="mb-4">
//                         Users are responsible for activity under their accounts and must maintain confidentiality. Unauthorized access must be reported.
//                     </p>

//                     <h2 className="text-2xl font-bold mt-6 mb-3 text-white">5. License to Use</h2>
//                     <p className="mb-4">
//                         Users are granted a limited, revocable, non-exclusive license to access and use the Platform per Indian laws.
//                     </p>

//                     <h2 className="text-2xl font-bold mt-6 mb-3 text-white">6. Payments</h2>
//                     <p className="mb-4">
//                         Payments are processed via RBI-authorized gateways. Prices include GST. Refunds are governed by applicable laws.
//                     </p>

//                     <h2 className="text-2xl font-bold mt-6 mb-3 text-white">7. Shipping & Delivery</h2>
//                     <p className="mb-4">
//                         Sellers must meet shipping timelines and disclose delivery terms. Disputes are subject to Consumer Protection (E-Commerce) Rules, 2020.
//                     </p>

//                     <h2 className="text-2xl font-bold mt-6 mb-3 text-white">8. Returns and Cancellations</h2>
//                     <p className="mb-4">
//                         Returns and refunds must follow the Consumer Protection Act, 2019. Sellers must disclose return policies.
//                     </p>

//                     <h2 className="text-2xl font-bold mt-6 mb-3 text-white">9. Disputes Between Users</h2>
//                     <p className="mb-4">
//                         Users are responsible for resolving disputes. BidNow may intervene at its discretion.
//                     </p>

//                     <h2 className="text-2xl font-bold mt-6 mb-3 text-white">10. User Content and IP</h2>
//                     <p className="mb-4">
//                         Users retain ownership of content but license it to BidNow for operations and promotions. Content must comply with Indian copyright/trademark laws.
//                     </p>

//                     <h2 className="text-2xl font-bold mt-6 mb-3 text-white">11. Prohibited Use</h2>
//                     <p className="mb-4">Users may not:</p>
//                     <ul className="list-disc list-inside mb-4 pl-4">
//                         <li>Violate Indian laws</li>
//                         <li>Misrepresent or commit fraud</li>
//                         <li>Infringe intellectual property</li>
//                         <li>Circumvent Platform processes or misuse payments</li>
//                     </ul>

//                     <h2 className="text-2xl font-bold mt-6 mb-3 text-white">12. Seller Terms</h2>
//                     <ul className="list-disc list-inside mb-4 pl-4">
//                         <li><strong>12.1 Licensing Responsibility:</strong> Sellers must ensure licensing compliance. BidNow does not provide any licenses. </li>
//                         <li><strong>12.2 Shipping Responsibility:</strong> Shipping currently lies with the seller. BidNow may take over in future.</li>
//                         <li><strong>12.3 Payment Schedule:</strong> Payments are released a few days after confirmed delivery. </li>
//                         <li><strong>12.4 Return Compliance:</strong> Sellers must honor buyer returns within 6 days of delivery.</li>
//                         <li><strong>12.5 Platform Exclusivity:</strong> Sellers must not bypass BidNow for direct customer transactions. </li>
//                         <li><strong>12.6 Commission:</strong> BidNow charges a commission per transaction. Rates are shown at listing and in seller agreements.</li>
//                     </ul>

//                     <h2 className="text-2xl font-bold mt-6 mb-3 text-white">13. Buyer Terms</h2>
//                     <ul className="list-disc list-inside mb-4 pl-4">
//                         <li><strong>13.1 Returns and Refunds:</strong> Buyers can return products within 6 days. Full refunds including GST will be issued. </li>
//                         <li><strong>13.2 Shipping:</strong> Managed by sellers at present.</li>
//                     </ul>

//                     <h2 className="text-2xl font-bold mt-6 mb-3 text-white">14. Prohibited Content and Conduct</h2>
//                     <p className="mb-4">
//                         Products or content that are explicit, illegal, stolen, fraudulent, or infringing will be banned immediately.
//                     </p>

//                     <h2 className="text-2xl font-bold mt-6 mb-3 text-white">15. Apple App Store Provisions (iOS Users Only)</h2>
//                     <ul className="list-disc list-inside mb-4 pl-4">
//                         <li><strong>15.1</strong> Apple is not liable for support or legal claims. </li>
//                         <li><strong>15.2</strong> Apple will refund the app price if it fails to conform to warranty. </li>
//                         <li><strong>15.3</strong> You affirm you are not in a U.S. embargoed country or on a restricted list. </li>
//                         <li><strong>15.4</strong> Apple and its subsidiaries are third-party beneficiaries of these Terms.</li>
//                     </ul>

//                     <h2 className="text-2xl font-bold mt-6 mb-3 text-white">16. Data Protection (Privacy Policy)</h2>
//                     <p className="mb-4">As per the IT (Reasonable Security Practices) Rules, 2011:</p>
//                     <ul className="list-disc list-inside mb-4 pl-4">
//                         <li>We collect: name, contact, payment info, usage data.</li>
//                         <li>We use: to process transactions, legal compliance, support.</li>
//                         <li>No data sale. Shared only with legal/regulatory bodies or partners when needed.</li>
//                         <li>Rights: Users can access, correct, delete data.</li>
//                         <li>Cookies used for operations and analytics.</li>
//                         <li>Data retained as long as needed or by law.</li>
//                     </ul>

//                     <h2 className="text-2xl font-bold mt-6 mb-3 text-white">17. Grievance Redressal Officer:</h2>
//                     <p className="mb-1"><strong>Bidnow Support</strong></p>
//                     <p className="mb-1">Email: <a href="mailto:support@bidnow.co.in" className="text-blue-400 hover:underline">support@bidnow.co.in</a></p>
//                     <p className="mb-4">Address: 84 Hehal, Ranchi, Jharkhand, 834001</p>

//                     <h2 className="text-2xl font-bold mt-6 mb-3 text-white">18. Termination</h2>
//                     <p className="mb-4">
//                         BidNow may suspend/terminate accounts for Terms violations. Legal action may be taken.
//                     </p>

//                     <h2 className="text-2xl font-bold mt-6 mb-3 text-white">19. Limitation of Liability</h2>
//                     <p className="mb-4">
//                         BidNow is not liable for indirect or incidental damages.
//                     </p>

//                     <h2 className="text-2xl font-bold mt-6 mb-3 text-white">20. Indemnity</h2>
//                     <p className="mb-4">
//                         You agree to indemnify BidNow from claims or losses due to misuse.
//                     </p>

//                     <h2 className="text-2xl font-bold mt-6 mb-3 text-white">21. Governing Law & Jurisdiction</h2>
//                     <p className="mb-4">
//                         Terms governed by Indian law. Courts of Ranchi, Jharkhand shall have exclusive jurisdiction.
//                     </p>

//                     <h2 className="text-2xl font-bold mt-6 mb-3 text-white">22. Arbitration</h2>
//                     <p className="mb-4">
//                         Disputes are subject to arbitration per Arbitration and Conciliation Act, 1996. Venue: Ranchi, Jharkhand.
//                     </p>

//                     <h2 className="text-2xl font-bold mt-6 mb-3 text-white">23. Amendments</h2>
//                     <p className="mb-4">
//                         Terms may be updated. Continued use implies agreement.
//                     </p>

//                     <h2 className="text-2xl font-bold mt-6 mb-3 text-white">24. Contact Us</h2>
//                     <p className="mb-1">Email: <a href="mailto:support@bidnow.co.in" className="text-blue-400 hover:underline">support@bidnow.co.in</a></p>
//                     <p className="mb-4">Address: 84 Hehal, Ranchi, Jharkhand, 834001</p>

//                     <p className="mb-4">
//                         By using the Platform, you confirm you have read and agreed to these Terms.
//                     </p>
//                     <p className="text-sm text-gray-400 mt-8">Last updated: May 23, 2025</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default TermsConditionsPage;