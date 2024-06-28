import { useGetFAQsQuery } from "../../hooks/faqHook";

const Faq = () => {
    const { data: faqs } = useGetFAQsQuery();

    return (
        <>
            {/* FAQ */}
            <div className="px-4 lg:px-24 py-10">
                {/* Title */}
                <h2 className="text-2xl font-semibold">
                    Frequently Asked Questions
                </h2>
                {/* End Title */}
                {/* Grid */}
                <div className="mt-3 grid sm:grid-cols-2 gap-6 md:gap-12">
                    {faqs?.map((faq, index) => (
                        <div key={index}>
                            <h3 className="text-lg font-semibold ">
                                {faq.title}
                            </h3>
                            <p className="mt-2 ">{faq.description}</p>
                        </div>
                    ))}
                </div>
                {/* End Grid */}
            </div>
            {/* End FAQ */}
        </>
    );
};

export default Faq;
