import FeatureCard from "./FeatureCard"



const Features = () => {
    const iconDefault = <svg
    className="w-12 h-12 text-deep-purple-accent-400"
    stroke="currentColor"
    viewBox="0 0 52 52"
>
    <polygon
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        points="29 13 14 29 25 29 23 39 38 23 27 23"
    />
</svg>;
    return (
        <section>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-14">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                            Features
                        </p>
                    </div>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        quick, brown fox jumps over a lazy dog
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque rem aperiam, eaque ipsa quae.
                    </p>
                </div>
                <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    <FeatureCard 
                        icon={iconDefault} 
                        title="Precision Crop Management" 
                        description="Optimize planting, irrigation, and harvesting with GPS and sensor technologies. Make data-driven decisions for sustainable and efficient farming practices." 
                    />
                    <FeatureCard 
                        icon={iconDefault} 
                        title="Real-time Crop Insights" 
                        description="Access instant data on soil, temperature, and crop health from anywhere. Stay informed, make smart decisions, and transform your farming experience with IoT connectivity." 
                    />
                    <FeatureCard 
                        icon={iconDefault} 
                        title=" Automated Irrigation" 
                        description="Revolutionize water management with automated irrigation. Customize schedules remotely, conserve water, and maximize crop yield while minimizing operational costs." 
                    />
                    <FeatureCard 
                        icon={iconDefault} 
                        title=" Crop Health Analytics" 
                        description="Detect diseases, pests, and nutrient deficiencies early with advanced analytics. Safeguard your crops, ensure a bountiful harvest, and proactively manage crop health." 
                    />
                </div>
            </div>
        </section>
    )
}

export default Features