const experienced = [
    {
        title: "October 2021 - February 2022 | INTERN",
        company: "PATH Product and Software House",
        description: (
            <p className="mb-4 font-normal text-base-content/50">
                I worked on A&D Team and solved front-end problems. <br></br> I
                have experienced a lot of things about team working,
                responsibilities, communication skills <br></br>I have
                experienced woocommerce and shopify e-commerce system and made
                e-commerce websites.
            </p>
        ),
    },
    {
        title: "June 2021 - July 2021 | INTERN",
        company: "SNI",
        description: (
            <p className="mb-4 font-normal text-base-content/50">
                Mobile App Development <br></br> I learned things about
                fullstack developement and developed small music player mobile
                project with nodejs, express, mongodb and flutter
            </p>
        ),
    },
    {
        title: "August 2021 - August 2021 | Software Engineer",
        company: "Mimix | ITU Cekirdek Startup",
        description: (
            <p className="mb-4 font-normal text-base-content/50">
                Machine Learning Research with AWS SageMaker<br></br> Mobile App
                Development with React Native, Amazon Web Services (AWS Route52,
                Amplify)
            </p>
        ),
    },
];

export default function Experiences() {
    return (
        <section className="px-4 lg:px-24 h-screen bg-base-200 flex flex-col justify-center text-base-content font-poppins">
            <h2 className="text-4xl tracking-tight font-extrabold text-center">
                Experiences
            </h2>
            <br />
            <ol className="relative border-l border-base-content">
                {experienced.map((item) => {
                    return (
                        <>
                            <li className="mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-accent rounded mt-1.5 -left-1.5 border border-accent"></div>
                                <time className="mb-1 text-md font-bold leading-none text-primary">
                                    {item.title}
                                </time>
                                <h3 className="text-lg font-semibold">
                                    {item.company}
                                </h3>
                                {item.description}
                            </li>
                        </>
                    );
                })}
            </ol>
        </section>
    );
}
