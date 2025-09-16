import React from "react";

export default function TransformLoanSection() {
    return (
        <section className="bg-gradient-to-r from-red-500 to-orange-400 rounded-[40px] flex items-center p-6 md:p-0 max-w-[1380px] mx-auto my-10 ">
            {/* Left Image */}
            <div className="relative ml-20 -mt-15 flex-shrink-0 hidden md:block">
                <img
                    src="https://www.jploft.com/img/cost_price_loan.webp"
                    alt="Loan illustration"
                    className="max-h-[356px]"
                />
            </div>

            {/* Right Text Section */}
            <div className="ml-25">
                <h2 className="text-3xl md:text-[40px] font-bold text-white mb-4">
                    Ready to Transform Loan Lending?
                </h2>
                <p className="text-white text-lg mb-6">
                    Get started today and revolutionize your financial services.
                </p>
                <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition">
                    Contact Our Team
                </button>
            </div>
        </section>
    );
}
