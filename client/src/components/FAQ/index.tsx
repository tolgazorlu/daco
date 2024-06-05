import { useGetFAQsQuery } from "../../hooks/faqHook";

const Faq = () => {
    const { data: faqs } = useGetFAQsQuery();

    return (
        <>
            {/* FAQ */}
            <section className="px-4 lg:px-24 py-10 sm:px-6 lg:py-14 mx-auto bg-base-200">
                {/* Title */}
                <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                    <h2 className="text-2xl font-bold md:text-3xl md:leading-tight text-base-content">
                        Frequently Asked Questions
                    </h2>
                </div>
                {/* End Title */}
                <div className="mx-auto">
                    {/* Grid */}
                    <div className="grid sm:grid-cols-2 gap-6 md:gap-12">
                        {faqs?.map((item) => {
                            return (
                                <div key={item._id}>
                                    <h3 className="text-lg font-semibold text-base-content">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 text-base-content/60">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}

                        {/* End Col */}
                    </div>
                    {/* End Grid */}
                </div>
            </section>
            {/* End FAQ */}
        </>
    );
};

export default Faq;
