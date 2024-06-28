const popularCourses = [
    {
        title: "Preline becomes an official Instagram Marketing Partner",
        description:
            "We're excited to announce that Preline is now an official Instagram Marketing Partner.",
        link: "#",
        image: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        isSponsored: false,
    },
    {
        title: "Preline becomes an official Instagram Marketing Partner",
        description:
            "We're excited to announce that Preline is now an official Instagram Marketing Partner.",
        link: "#",
        image: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        isSponsored: true,
    },
];

const categories = [
    {
        title: "Languages",
        value: "languages",
        icon: (
            <svg
                className="flex-shrink-0 size-7 text-white"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="m5 8 6 6" />
                <path d="m4 14 6-6 2-3" />
                <path d="M2 5h12" />
                <path d="M7 2h1" />
                <path d="m22 22-5-10-5 10" />
                <path d="M14 18h6" />
            </svg>
        ),
    },
    {
        title: "Algorithms",
        value: "algorithms",
        icon: (
            <svg
                className="flex-shrink-0 size-7 text-white"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="12" cy="4.5" r="2.5" />
                <path d="m10.2 6.3-3.9 3.9" />
                <circle cx="4.5" cy="12" r="2.5" />
                <path d="M7 12h10" />
                <circle cx="19.5" cy="12" r="2.5" />
                <path d="m13.8 17.7 3.9-3.9" />
                <circle cx="12" cy="19.5" r="2.5" />
            </svg>
        ),
    },
    {
        title: "Software Engineering",
        value: "software-engineering",
        icon: (
            <svg
                className="flex-shrink-0 size-7 text-white"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <rect x="14" y="14" width="4" height="6" rx="2" />
                <rect x="6" y="4" width="4" height="6" rx="2" />
                <path d="M6 20h4" />
                <path d="M14 10h4" />
                <path d="M6 14h2v6" />
                <path d="M14 4h2v6" />
            </svg>
        ),
    },
];

const Hero = () => {
    return (
        <div className="px-4 lg:px-24 py-10 mt-16 mx-auto flex flex-col gap-10">
            {/* Hero */}
            <div>
                <div>
                    <h1 className="font-semibold text-5xl md:text-6xl text-base-content/70">
                        <span className="text-base-content">Dacospace:</span>{" "}
                        Learning platform for who wants to learn learning!
                    </h1>
                    <div className="max-w-4xl">
                        <p className="mt-5 text-lg">
                            Every day, we present you with two brand-new
                            algorithm questions carefully crafted to challenge
                            your mind and hone your problem-solving abilities.
                            Whether you're a beginner eager to learn the basics
                            or a seasoned coder aiming to refine your expertise,
                            our daily challenges cater to all levels of
                            proficiency.
                        </p>
                    </div>
                </div>
                <a
                    data-sveltekit-preload-data=""
                    href="/home"
                    className="inline-flex bg-neutral/90 px-6 py-3 rounded-lg text-neutral-content hover:bg-neutral mt-5"
                >
                    <span className="hidden sm:flex items-center justify-center">
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
                    </span>{" "}
                    <span className="inline sm:hidden">Start Here!</span>
                </a>{" "}
                <a
                    data-sveltekit-preload-data=""
                    href="/home"
                    className="inline-flex bg-neutral-content/90 hover:bg-neutral-content  px-6 py-3 rounded-lg text-neutral mt-5"
                >
                    <span className="hidden sm:flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="mr-2 w-5 h-5"
                        >
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                            <path d="M6 8h2" />
                            <path d="M6 12h2" />
                            <path d="M16 8h2" />
                            <path d="M16 12h2" />
                        </svg>
                        Learn More
                    </span>{" "}
                    <span className="inline sm:hidden">Learn More!</span>
                </a>{" "}
            </div>
            {/* End Hero */}

            {/* Card Blog */}
            <div>
                {/* Title */}
                <h1 className="text-2xl font-semibold mb-4">Popular Courses</h1>
                {/* End Title */}
                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card */}
                    {popularCourses.map((course, index) => (
                        <a className="group" href="#" key={index}>
                            <div className="relative pt-[50%] sm:pt-[70%] rounded-lg overflow-hidden">
                                <img
                                    className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-lg"
                                    src={course.image}
                                    alt="Image Description"
                                />
                                {course.isSponsored && (
                                    <span className="absolute top-0 end-0 rounded-se-lg rounded-es-lg text-xs bg-warning text-warning-content font-medium py-1.5 px-3">
                                        Sponsored
                                    </span>
                                )}
                            </div>
                            <div className="mt-7">
                                <h3 className="text-xl font-semibold ">
                                    {course.title}
                                </h3>
                                <p className="mt-3 ">{course.description}</p>
                                <p className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
                                    Visit Course
                                    <svg
                                        className="flex-shrink-0 size-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </p>
                            </div>
                        </a>
                    ))}

                    {/* End Card */}
                </div>
                {/* End Grid */}
            </div>
            {/* End Card Blog */}

            <div>
                <h1 className="text-2xl font-semibold mb-4">
                    What do you want to learn?
                </h1>
                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="h-36 sm:h-56 flex flex-col justify-center border border-base-300 rounded-lg text-center p-4 md:p-5 bg-base-200"
                        >
                            {/* Icon */}
                            <div className="flex justify-center p-6 items-center size-12 bg-success rounded-lg mx-auto">
                                {category.icon}
                            </div>
                            {/* End Icon */}
                            <div className="mt-3">
                                <h3 className="text-sm sm:text-lg font-semibold">
                                    {category.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
                {/* End Grid */}
            </div>
        </div>
    );
};

export default Hero;
