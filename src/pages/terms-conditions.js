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
                        Payments are processed via RBI-authorized gateways. Prices include GST. Refunds are governed by applicable laws.<br />
Sellers may host live events. The rules for how purchase interest is expressed, how the price is increased/offers are withdrawn and canceled, the conditions the Buyer must meet to purchase an item, as well as the specific conditions of sale, may change for each Live Session at the sole discretion of the seller, subject to these Terms. The seller has sole and final authority in managing the live session, including determining pricing, the sale of the Item, and the resolution of any disputes; provided that Bidnow reserves the right to cancel a Transaction if it determines in its reasonable discretion that a Buyer&apos;s purchase offer was made in error.
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
                        Returns and refunds must follow the Consumer Protection Act, 2019. Sellers must disclose return policies.

                    </p>

                    {/* 9. Seller Terms */}
<h2 className="text-2xl font-bold mt-6 mb-3 text-white">9. Seller Terms</h2>

<h3 className="text-xl font-semibold mt-4 mb-2 text-white">9.1. Seller Onboarding & Eligibility</h3>
<ul className="list-disc list-inside mb-4 pl-4">
  <li>The Seller (hereinafter referred to as &quot;Seller&quot;) affirms that Seller is legally competent to enter into this Agreement:</li>
  <li>Seller further confirms that:</li>
  <li>Seller is legally allowed to sell products in India, either as a registered business or an individual seller.</li>
  <li>All information provided during onboarding is true and valid.</li>
  <li>If Seller is a registered entity, Seller is responsible for maintaining valid licenses or permits where applicable</li>
  <li>If Seller is selling as an individual (non-registered), Seller acknowledges that Seller is responsible for complying with any applicable laws related to online selling, taxation, and product authenticity.</li>
</ul>

<h3 className="text-xl font-semibold mt-4 mb-2 text-white">9.2. Product Listings</h3>
<ul className="list-disc list-inside mb-4 pl-4">
  <li>All products listed must be genuine, owned by The Seller, and comply with Indian laws.</li>
  <li>The Seller agrees not to list counterfeit, illegal, restricted, or stolen goods. However, thrifted items, as well as handmade crafts and resold goods, are allowed as long as they are authentic, clearly described, and meet all applicable legal and safety standards. (Provision: All thrifted items, handmade crafts, and resold goods are subject to quality checks and must not be disputed in terms of their authenticity or description.)</li>
  <li>Product descriptions and visuals must be accurate and not misleading.</li>
</ul>

<h3 className="text-xl font-semibold mt-4 mb-2 text-white">9.3. Commission &amp; Payments</h3>
<ul className="list-disc list-inside mb-4 pl-4">
  <li>Bidnow will charge its commission on each successful sale.</li>
  <li>Settlements shall be initiated within 5-7 business days following successful delivery and completion of the transaction.</li>
  <li>It is Seller&apos;s responsibility to ensure that all Payment Information provided is accurate for a proper transfer to Seller&apos;s selected Payment Method. Bidnow may be unable to recover money transferred to an improper account based on the Payment Information by Sellers. In the event that the applicable Buyer disputes the applicable Transaction for any reason, Bidnow may, at its sole discretion, take corrective action including without limitation, delay the distribution of payment, request the Item be sent to Bidnow, request the Item be returned to the Seller, or issue a refund to the Buyer.</li>
  <li>Specifically:</li>
  <li>Bidnow will deduct commission per successful order as mentioned in FAQs page.</li>
  <li>Payments will be settled within 5-7 business working days of order completion. Sellers need to provide proof of order delivered if asked by Bidnow.</li>
  <li>Any applicable taxes (GST, TDS, etc.) will be handled as per Indian laws.</li>
</ul>

<h3 className="text-xl font-semibold mt-4 mb-2 text-white">9.4. Fulfillment &amp; Delivery</h3>
<p className="mb-2">The Seller confirms that:</p>
<ul className="list-disc list-inside mb-4 pl-4">
  <li>The Seller is responsible for shipping products to the buyer unless otherwise agreed.</li>
  <li>Tracking info must be provided within 24 hours of dispatch.</li>
  <li>Delays, especially repeated failures to dispatch or deliver, may result in order cancellation or penalties.</li>
</ul>

<h3 className="text-xl font-semibold mt-4 mb-2 text-white">9.5. Returns, Refunds &amp; Complaints</h3>
<ul className="list-disc list-inside mb-4 pl-4">
  <li>The Seller may designate certain items as &quot;No Return/No Refund,&quot; particularly in cases involving selling products live, unique, or collectible products.</li>
  <li>Notwithstanding such designation, to maintain trust and integrity on the platform, Bidnow reserves the right to investigate buyer complaints. If, upon review, the product is found to be inauthentic, damaged, or grossly misrepresented, Bidnow may direct refunds or cancellations, even if the item was marked &quot;No Return/No Refund.&quot;</li>
  <li>Specifically:</li>
  <li>Sellers may set &quot;No Return/Refund&quot; on certain items, especially collectibles, limited-edition, or selling products live.</li>
  <li>However, Bidnow reserves the right to step in and investigate serious complaints (e.g., wrong, damaged, or inauthentic items) to ensure platform trust.</li>
  <li>If a genuine fault is found after review by Bidnow, Bidnow may facilitate a resolution, including directing a refund or cancellation, between the buyer and The Seller.</li>
  <li>If the product is found to be as described and was clearly marked &quot;No Return/Refund,&quot; Bidnow will respect The Seller&apos;s stated policy.</li>
  <li>Bidnowhas no obligation to return Items to Seller that do not conform to the Seller&apos;s description of such Items, and Seller is responsible for any fees associated with any return or disposal of the Item(s).</li>
  <li>No Circumvention. You agree to receive payments from Buyers for Transaction only in the manner determined by us through the App. This includes using the Payment Processor we choose and following any other rules we specify. You may not circumvent your payment obligations to us for Transactions by soliciting payment from a Buyer outside of our App. You agree to notify us immediately if you receive any such offer or solicitation to circumvent your payment processing obligations by contacting us at our help page.</li>
</ul>

<h3 className="text-xl font-semibold mt-4 mb-2 text-white">9.6. Marketing &amp; Promotions</h3>
<p className="mb-2">Bidnow aims to support and grow your business. As a part of our community, your products may be featured in:</p>
<ul className="list-disc list-inside mb-4 pl-4">
  <li>Reels, posts and live events</li>
  <li>Social media shoutouts</li>
  <li>Curated collections and campaigns</li>
  <li>Tagging, collaborating and mentions in Bidnow’s promotional content</li>
</ul>
<p className="mb-2">While inclusion is not guaranteed for every product, we actively highlight sellers who engage consistently and maintain product quality.</p>
<p className="mb-4">You retain ownership of your brand; Bidnow only uses your content (images, videos, product info) for promotional purposes to increase your visibility and sales.</p>

<h3 className="text-xl font-semibold mt-4 mb-2 text-white">9.7. Seller Conduct</h3>
<ul className="list-disc list-inside mb-4 pl-4">
  <li>You must treat buyers respectfully and fulfill all orders in good faith.</li>
  <li>You will not manipulate or mislead users or engage in fraudulent activity. Sellers must not bypass Bidnow for direct customer transactions.</li>
  <li>Bidnow may suspend or blacklist sellers violating this Agreement.</li>
</ul>

<h3 className="text-xl font-semibold mt-4 mb-2 text-white">9.8. Intellectual Property</h3>
<ul className="list-disc list-inside mb-4 pl-4">
  <li>The Seller retains ownership of its trademarks and content but grants Bidnow a non-exclusive, irrevocable, royalty-free, worldwide license to use such material for marketing, promotional, and Platform-related purposes.</li>
  <li>In detail:</li>
  <li>The Seller grants Bidnow the right to use The Seller&apos;s product images, logos, and brand information for marketing purposes, including on Bidnow&apos;s platform, social media, and promotional content.</li>
  <li>The Seller is permitted to use Bidnow branding (such as Bidnow&apos;s name, logo, or promotional templates) to promote The Seller&apos;s own listings or collaborations, provided such use is truthful and authorized.</li>
  <li>The Seller agrees not to use Bidnow branding in any misleading, deceptive, or unauthorized way that could harm the platform&apos;s reputation or misrepresent The Seller&apos;s association with Bidnow.</li>
  <li>Furthermore, The Seller shall not use Bidnowtrademarks or assets in a misleading, defamatory, or unauthorized manner.</li>
</ul>

<h3 className="text-xl font-semibold mt-4 mb-2 text-white">9.9. Acceptance</h3>
<p className="mb-4">By registering and listing on Bidnow, The Seller agrees to be bound by the terms of this Agreement, including the Privacy Policy and Terms of Use.</p>
<p className="mb-4">Furthermore, by listing or selling on Bidnow, The Seller explicitly confirms that The Seller has read, understood, and agreed to this entire Seller Agreement.</p>

{/* 10. Buyer Terms */}
<h2 className="text-2xl font-bold mt-6 mb-3 text-white">10. Buyer Terms</h2>
<ul className="list-disc list-inside mb-4 pl-4">
  <li><strong>10.1 Returns and Refunds:</strong> Buyers can return products within 5 days. Full refunds including GST will be issued.</li>
  <li><strong>10.2 Shipping:</strong> Managed by sellers at present.</li>
</ul>

{/* 11. Prohibited Content and Conduct */}
<h2 className="text-2xl font-bold mt-6 mb-3 text-white">11. Prohibited Content and Conduct</h2>
<p className="mb-2">User of the Platform may not:</p>
<ul className="list-disc list-inside mb-4 pl-4">
  <li>11.1. Violate Applicable Laws: Post, transmit, or engage in any activity that violates any applicable Indian laws, statutes, ordinances, or regulations. Products or content that are explicit, illegal, stolen, fraudulent, or infringing will be banned immediately.</li>
  <li>11.2. Prohibited Content: Post, display, upload, modify, publish, transmit, store, update, share, or otherwise make available any content that is:
    <ul className="list-disc list-inside mb-4 pl-6">
      <li>Obscene, pornographic, sexually explicit, or indecent.</li>
      <li>Depicts children in sexually explicit acts or contains child sexual abuse material (CSAM).</li>
      <li>Harmful to minors.</li>
      <li>Defamatory, libelous, or maliciously false.</li>
      <li>Hate speech, discriminatory, or promote violence or hatred against any group or individual.</li>
      <li>Threatening, harassing, or invasive of another&apos;s privacy.</li>
      <li>Gambling and Chance-Based Schemes: Engage in, promote, or facilitate any form of betting, gambling, lottery, or any game of pure chance or luck where a stake or consideration is involved, in violation of the Public Gambling Act, 1867, state-specific gambling laws, the Prize Competitions Act, 1955, the Prize Chits and Money Circulation Schemes (Banning) Act, 1978, or any other applicable law.</li>
      <li>Infringe intellectual property.</li>
      <li>Fraud and Misrepresentation: Misrepresent identity, make false, misleading, or fraudulent representations, or commit any act of fraud or deception against the Platform, other users, or third parties.</li>
      <li>Intellectual Property Infringement: Infringe upon the intellectual property rights of others, including but not limited to copyrights, trademarks, patents, and trade secrets.</li>
    </ul>
  </li>
  <li>11.3. Platform Integrity &amp; Misuse:
    <ul className="list-disc list-inside mb-4 pl-6">
      <li>Circumvent, disable, or otherwise interfere with any security-related features of the Platform or features that prevent or restrict use or copying of any content or enforce limitations on use of the Platform or the content therein.</li>
      <li>Misuse payment instruments or financial accounts, engage in money laundering, or otherwise misuse payment processes or systems on the Platform.</li>
      <li>Interfere with or disrupt the integrity or performance of the Platform or its data.</li>
    </ul>
  </li>
</ul>

{/* 12. Apple App Store Provisions */}
<h2 className="text-2xl font-bold mt-6 mb-3 text-white">12. Apple App Store Provisions (iOS Users Only)</h2>
<ul className="list-disc list-inside mb-4 pl-4">
  <li><strong>12.1</strong> Apple is not liable for support or legal claims.</li>
  <li><strong>12.2</strong> Apple will refund the app price if it fails to conform to warranty.</li>
  <li><strong>12.3</strong> You affirm you are not in a U.S. embargoed country or on a restricted list.</li>
  <li><strong>12.4</strong> Apple and its subsidiaries are third-party beneficiaries of these Terms.</li>
</ul>

{/* 13. Grievance Redressal Officer */}
<h2 className="text-2xl font-bold mt-6 mb-3 text-white">13. Grievance Redressal Officer</h2>
<p className="mb-1"><strong>Bidnow Support</strong></p>
<p className="mb-1">Email: <a href="mailto:support@Bidnow.co.in" className="text-blue-400 hover:underline">support@Bidnow.co.in</a></p>
<p className="mb-4">Address: 84 Hehal, Ranchi, Jharkhand, 834001</p>

{/* 14. Termination */}
<h2 className="text-2xl font-bold mt-6 mb-3 text-white">14. Termination</h2>
<p className="mb-4">Bidnow reserves the right to immediately suspend or terminate account(s) or access to the platform for material breach of this Agreement, fraud, or violation of Platform policies, or in response to serious complaints. Legal action may be taken.</p>

{/* 15. Limitation of Liability */}
<h2 className="text-2xl font-bold mt-6 mb-3 text-white">15. Limitation of Liability</h2>
<p className="mb-4">Bidnow is not liable for indirect or incidental damages.</p>

{/* 16. Indemnity */}
<h2 className="text-2xl font-bold mt-6 mb-3 text-white">16. Indemnity</h2>
<p className="mb-4">Seller shall indemnify and hold harmless Bidnow, its affiliates, directors, employees, and agents from any claims, losses, liabilities, penalties, or legal actions (including reasonable attorneys&apos; fees) arising out of:</p>
<ul className="list-disc list-inside mb-4 pl-4">
  <li>Seller’s breach of this Agreement.</li>
  <li>The listing or sale of prohibited or non-compliant goods by the Seller.</li>
  <li>Third-party claims, including but not limited to intellectual property infringement or consumer protection violations related to the Seller&apos;s activities.</li>
</ul>
<p className="mb-4">In simpler terms, The Seller agrees to indemnify and hold Bidnow harmless against any legal claims, penalties, or losses resulting from:</p>
<ul className="list-disc list-inside mb-4 pl-4">
  <li>Seller&apos;s product listings (ensuring compliance and authenticity).</li>
  <li>Seller&apos;s violations of applicable laws.</li>
  <li>Seller&apos;s breach of buyer trust or other obligations under this Agreement.</li>
</ul>

{/* 17. Governing Law & Dispute Resolution */}
<h2 className="text-2xl font-bold mt-6 mb-3 text-white">17. Governing Law &amp; Dispute Resolution</h2>
<p className="mb-4">This Agreement shall be governed by the laws of India.</p>
<p className="mb-4">Any disputes arising under this Agreement will be subject to the jurisdiction of the courts in Ranchi, India.</p>
<p className="mb-4">Dispute Resolution through Arbitration: All disputes, controversies, or claims arising out of or relating to this Agreement, or the breach, termination, or invalidity thereof, shall first be attempted to be resolved amicably. Failing such amicable resolution within [Number] days, the dispute shall be referred to arbitration by a sole arbitrator appointed by Bidnow. The arbitration proceedings shall be conducted in accordance with the provisions of the Arbitration and Conciliation Act, 1996. The seat and venue of the arbitration shall be Ranchi, Jharkhand, India. The decision of the arbitrator shall be final and binding on both parties.</p>
<p className="mb-4">Force Majeure: Neither party shall be liable for any delay or failure in performance due to causes beyond their reasonable control, including but not limited to natural disasters, war, terrorism, acts of government, labor strikes, or internet outages.</p>

{/* 18. Amendments */}
<h2 className="text-2xl font-bold mt-6 mb-3 text-white">18. Amendments</h2>
<p className="mb-4">Bidnow reserves the right to modify or update these Terms and Conditions from time to time. Any changes will be effective immediately upon posting the updated Terms on the Platform. Your continued use of the Platform following the posting of revised Terms constitutes your acceptance of those changes and your agreement to be bound by the updated Terms.</p>

{/* 19. Contact Us */}
<h2 className="text-2xl font-bold mt-6 mb-3 text-white">19. Contact Us</h2>
<p className="mb-1">Email: <a href="mailto:support@Bidnow.co.in" className="text-blue-400 hover:underline">support@Bidnow.co.in</a></p>
<p className="mb-4">Address: 84 Hehal, Ranchi, Jharkhand, 834001</p>

<p className="text-sm text-gray-400">Last updated: July 28, 2025</p>
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