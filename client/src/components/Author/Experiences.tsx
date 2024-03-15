export default function Experiences() {
    return (
        <section className="px-8 lg:px-32 h-screen bg-base-200 flex flex-col justify-center text-base-content font-poppins">
            <h2 className="text-4xl tracking-tight font-extrabold text-center">
                Experiences
            </h2>
            <br />
            <ol className="relative border-l border-base-content">
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-accent rounded-full mt-1.5 -left-1.5 border border-accent"></div>
                    <time className="mb-1 text-xl font-bold leading-none text-primary">
                        October 2021 - February 2022 | INTERN
                    </time>
                    <h3 className="text-lg font-bold">
                        PATH Product and Software House
                    </h3>
                    <p className="mb-4 font-normal text-base-content/50">
                        I worked on A&D Team and solved front-end problems.{" "}
                        <br></br> I have experienced a lot of things about team
                        working, responsibilities, communication skills{" "}
                        <br></br>I have experienced woocommerce and shopify
                        e-commerce system and made e-commerce websites.
                    </p>
                </li>

                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-accent rounded-full mt-1.5 -left-1.5 border border-accent"></div>
                    <time className="mb-1 text-md font-bold leading-none text-primary">
                        June 2021 - July 2021 | INTERN
                    </time>
                    <h3 className="text-lg font-semibold">SNI</h3>
                    <p className="mb-4 font-normal text-base-content/50">
                        Mobile App Development <br></br> I learned things about
                        fullstack developement and developed small music player
                        mobile project with nodejs, express, mongodb and flutter
                    </p>
                </li>

                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-accent rounded-full mt-1.5 -left-1.5 border border-accent"></div>
                    <time className="mb-1 text-md font-bold leading-none text-primary">
                        August 2021 - August 2021 | Junior Software Engineer
                    </time>
                    <h3 className="text-lg font-semibold">
                        Mimix | ITU Cekirdek Startup
                    </h3>
                    <p className="mb-4 font-normal text-base-content/50">
                        Machine Learning Research with AWS SageMaker<br></br>{" "}
                        Mobile App Development with React Native, Amazon Web
                        Services (AWS Route52, Amplify)
                    </p>
                </li>
            </ol>
        </section>
    );
}
