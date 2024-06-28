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

const CourseCategories = () => {
    return (
        <div className="px-4 lg:px-24 py-10 bg-base-200">
            <h1 className="text-2xl font-semibold mb-4">
                What do you want to learn?
            </h1>
            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="h-36 sm:h-56 flex flex-col justify-center border border-base-300 rounded-lg text-center p-4 md:p-5 bg-base-100"
                    >
                        {/* Icon */}
                        <div className="flex justify-center p-6 items-center size-12 bg-primary rounded-lg mx-auto">
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
    );
};

export default CourseCategories;
