import React from 'react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="border-b border-gray-700 py-4">
            <button
                className="flex justify-between items-center w-full text-lg font-semibold text-white focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                {question}
                <span className="ml-2 text-orange-500">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && (
                <p className="mt-2 text-gray-300 text-base leading-relaxed">
                    {answer}
                </p>
            )}
        </div>
    );
};

export default function FAQsPage() {
    const faqs = [
        {
            question: "What is BidNow?",
            answer: "BidNow is a live shopping marketplace where you can discover products in real-time, directly from sellers' live broadcasts. It's an interactive way to shop and engage with sellers."
        },
        {
            question: "How do I become a seller on BidNow?",
            answer: "To become a seller, download the app and start your seller joirney or navigate to the 'Become a Seller' page (link in the header/footer) and fill out the contact form. Our team will review your application and get in touch with you."
        },
        {
            question: "How do I participate in a live shopping?",
            answer: "Simply join a live show that has an active session. When the seller displys a product, you'll see an option to place your order. Ensure your payment information is up to date."
        },
        {
            question: "What kind of products can I find on BidNow?",
            answer: "You can find a wide range of products including fashion, home décor, collectibles, and more. Our platform hosts diverse sellers offering unique items."
        },
        {
            question: "Is my payment information secure?",
            answer: "Yes, BidNow uses industry-standard encryption and security protocols to protect your payment information. We partner with secure payment gateways to ensure your transactions are safe."
        },
        {
            question: "How are shipping and returns handled?",
            answer: "Shipping and return policies are typically managed by individual sellers. Please refer to the specific seller's profile or product listing for details on their shipping times, costs, and return procedures. BidNow provides a platform for these transactions."
        }
    ];

    return (
        <div className="bg-[#121212] text-white min-h-[calc(100vh-160px)] flex items-center justify-center py-8 px-4">
            <div className="w-full max-w-4xl p-10 rounded-xl shadow-2xl bg-[#121212]">
                <h1 className="text-4xl font-bold text-center mb-10 text-white">Frequently Asked Questions</h1>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </div>
    );
}
