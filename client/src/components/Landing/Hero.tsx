const Hero = () => {
    return (
        <div className="h-screen md:snap-start flex flex-col justify-center">
            <a
                href="https://discord.gg/VWz8eYjtf3"
                className="bg-neutral text-neutral-content inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm rounded-xl md:w-1/2 lg:w-2/3"
                role="alert"
            >
                <span className="text-xs bg-neutral text-neutral-content rounded-lg px-4 py-1.5 mr-3 border">
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

            <span className="text-6xl lg:text-8xl font-extrabold tracking-tight leading-none  font-bandal">
                dacospace
            </span>
            <h1 className="font-title font-bandal text-[clamp(2rem,6vw,4.2rem)] font-black leading-[1.1] [word-break:auto-phrase] xl:w-[115%] xl:text-start [:root[dir=rtl]_&amp;]:leading-[1.35]">
                <span className="inline-grid">
                    <span
                        className="text-3xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-5xl font-poppins pointer-events-none col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.success)_47%,theme(colors.accent)_100%)] bg-clip-text blur-xl [-webkit-text-fill-color:transparent] [transform:translate3d(0,0,0)] before:content-[attr(data-text)] [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]"
                        aria-hidden="true"
                        data-text="Don't Break The Chain!"
                    ></span>
                    <span className="mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-5xl font-poppins [&amp;::selection]:text-base-content relative col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.success)_47%,theme(colors.accent)_100%)] bg-clip-text [-webkit-text-fill-color:transparent] [&amp;::selection]:bg-blue-700/20 [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]">
                        Don't Break The Chain!
                    </span>
                </span>
            </h1>
            <p className="mb-8 text-lg font-normal lg:text-xl font-poppins">
                Discover daily problems at{" "}
                <span className="font-bandal font-bold text-3xl">
                    dacospace
                </span>
                , where new algorithms are added every day across various
                subjects.
            </p>
            <div className="flex flex-col mt-8 mb-8 lg:mb-16 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <a
                    href="/login"
                    className="font-poppins inline-flex justify-center items-center py-3 px-5 font-medium text-center rounded bg-primary text-primary-content"
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
                    className="font-poppins inline-flex justify-center items-center py-3 px-5 font-medium text-center rounded bg-neutral-content text-neutral border border-neutral"
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
    );
};

export default Hero;
