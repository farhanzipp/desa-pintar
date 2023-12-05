import FaqItem from "./FaqItem";

const Faqs = () => {
	return (
		<div id="faqs" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
			<div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
				<div>
					<p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
						FAQS
					</p>
				</div>
				<h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
					Any Questions?
				</h2>
				<p className="text-base text-gray-700 md:text-lg">
					Dive into our blog for expert perspectives, industry trends, and practical tips. Stay informed about the latest advancements, best practices, and success stories in the dynamic world of smart farming.
				</p>
			</div>
			<div className="max-w-xl sm:mx-auto lg:max-w-2xl">
				<div className="space-y-4">
					<FaqItem title="The quick, brown fox jumps over a lazy dog?">
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque rem aperiam, eaque ipsa quae.
					</FaqItem>
					<FaqItem title="The first mate and his Skipper too will do?">
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque rem aperiam, eaque ipsa quae.
					</FaqItem>
					<FaqItem title="Is the Space Pope reptilian!?">
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque rem aperiam, eaque ipsa quae.
					</FaqItem>
					<FaqItem title="How much money you got on you?">
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque rem aperiam, eaque ipsa quae.
					</FaqItem>
				</div>
			</div>
		</div>
	);
};

export default Faqs