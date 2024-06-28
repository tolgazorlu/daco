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

const PopularCourses = () => {
    return (
        <div className="px-4 lg:px-24 py-10">
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
    );
};

export default PopularCourses;
