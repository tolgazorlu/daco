import Layout from "../Layouts";
import Image from "./illustration.svg";

const index = () => {
    return (
        <>
            <Layout />
            <section className="lg:grid grid-cols-2 px-8 lg:px-32">
                <div className="h-screen md:snap-start flex flex-col justify-center">
                    <a
                        href="https://discord.gg/VWz8eYjtf3"
                        className="bg-neutral text-neutral-content inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm  rounded-full md:w-1/2 lg:w-2/3"
                        role="alert"
                    >
                        <span className="text-xs bg-primary text-primary-content rounded-full px-4 py-1.5 mr-3">
                            Discord
                        </span>{" "}
                        <span className="text-sm font-medium">
                            Let's join the server!
                        </span>
                        <svg
                            className="ml-2 w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </a>
                    <span className="text-9xl font-bandal font-bold text-primary">
                        daco
                    </span>
                    <span className="mb-4 text-xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl font-poppins">
                        Don't Break The Chain
                    </span>
                    <p className="mb-8 text-lg font-normal lg:text-xl font-poppins">
                        Discover daily algorithms at{" "}
                        <span className="font-bandal text-primary text-3xl">
                            daco
                        </span>
                        , where new algorithms are added every day across
                        various subjects.
                    </p>
                    <div className="flex flex-col mt-8 mb-8 lg:mb-16 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                        <a
                            href="/login"
                            className="font-poppins inline-flex justify-center items-center py-3 px-5 font-medium text-center rounded-lg bg-primary text-primary-content"
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
                                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                                />
                            </svg>
                            Start Here!
                        </a>
                        <a
                            href="https://github.com/tolgazorlu/daco"
                            className="font-poppins inline-flex justify-center items-center py-3 px-5 font-medium text-center rounded-lg bg-primary-content text-primary border border-primary"
                        >
                            Learn more
                            <svg
                                className="ml-2 -mr-1 w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="hidden md:h-screen lg:flex flex-col justify-center p-6">
                    <img src={Image} />
                </div>
            </section>
        </>
    );
};

export default index;
