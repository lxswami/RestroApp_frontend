import React from "react";
import TopSection from "../Components/AboutPage/TopSection";
import OurStorySection from "../Components/AboutPage/OurStorySection";
import CulinarySection from "../Components/AboutPage/CulinarySection";
import Pledge from "../Components/AboutPage/Pledge";
import ExperienceTextSection from "../Components/AboutPage/ExperienceTextSection";

export default function About() {
    return (
        <div className="flex flex-col">
            <TopSection />
            <OurStorySection />
            <CulinarySection />
            <Pledge />
            <ExperienceTextSection />



            {/* Values or Team */}
            <section className="max-w-7xl mx-auto px-4 py-12 space-y-8 text-center">
                <h3 className="text-2xl md:text-4xl font-semibold text-gray-800">Our Values</h3>
                <div className="grid md:grid-cols-3 gap-8 text-left">
                    <div>
                        <h4 className="text-xl font-semibold text-gray-700">Quality</h4>
                        <p className="text-gray-600 mt-2">
                            We source only the freshest, highest-quality ingredients to craft every dish.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-gray-700">Innovation</h4>
                        <p className="text-gray-600 mt-2">
                            Blending tradition with creativity, our chefs constantly push culinary boundaries.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-gray-700">Hospitality</h4>
                        <p className="text-gray-600 mt-2">
                            We believe every guest deserves exceptional service and memorable experiences.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
