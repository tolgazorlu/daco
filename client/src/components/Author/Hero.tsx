import TolgaZorluCV from "../../assets/TolgaZorluCV.pdf";

const Hero = () => {
    return (
        <section className="lg:grid grid-cols-2 px-8 lg:px-32">
            <div className="h-screen md:snap-start flex flex-col justify-center">
                <a
                    href="https://discord.gg/VWz8eYjtf3"
                    className="bg-neutral text-neutral-content inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm  rounded-full md:w-1/2 lg:w-2/3"
                    role="alert"
                >
                    <span className="text-xs bg-warning text-warning-content rounded-full px-4 py-1.5 mr-3">
                        New
                    </span>{" "}
                    <span className="text-sm font-medium">
                        Click here to my Youtube Channel!
                    </span>
                    <svg
                        className="ml-2 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </a>
                <span className="mb-4 text-5xl font-extrabold tracking-tight leading-none  lg:text-6xl font-bandal">
                    Tolga Zorlu
                </span>
                <span className="text-7xl font-bandal font-bold text-warning">
                    Software Engineer
                </span>
                <p className="mb-8 text-lg font-normal lg:text-2xl font-poppins">
                    I am the creator of{" "}
                    <span className="font-bandal text-primary text-4xl">
                        daco
                    </span>{" "}
                    and{" "}
                    <span className="font-bandal text-accent text-4xl">
                        dale
                    </span>
                    , where new algorithms are added every day across various
                    subjects.
                </p>
                <div className="flex flex-col mt-8 mb-8 lg:mb-16 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                    <a
                        href={TolgaZorluCV}
                        download="TolgaZorluCV"
                        target="_blank"
                        rel="noreferrer"
                        className="font-poppins font-bold inline-flex justify-center items-center py-3 px-5 text-center rounded-lg bg-warning text-warning-content shadow-md"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="mr-2 w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                            />
                        </svg>
                        Download CV
                    </a>
                    <a
                        href="mailto:tolgazorlu17@gmail.com"
                        className="font-poppins font-bold inline-flex justify-center items-center py-3 px-5 text-center rounded-lg bg-neutral text-neutral-content shadow-md"
                    >
                        Contact Me
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="ml-2 w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
