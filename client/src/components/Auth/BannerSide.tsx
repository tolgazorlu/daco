const BannerSide = () => {
    return (
        <div className="hidden lg:grid grid-cols-1 border-r border-primary/30 w-full bg-base-200 font-bandal">
            <div className=" flex justify-center items-end">
                <span className="text-8xl font-extrabold font-bandal text-neutral absolute">
                    dacospace
                </span>
                <span className="text-8xl font-extrabold font-bandal text-base-content absolute mb-3 mr-3">
                    dacospace
                </span>
                <span className="text-8xl font-extrabold font-bandal text-primary absolute mb-1.5 mr-1.5">
                    dacospace
                </span>
            </div>
            <div className=" flex justify-center px-24 text-center text-2xl">
                <span>
                    <span className="text-warning">Welcome back!</span> We're
                    delighted to have you here. Please enter your credentials to
                    access your account and begin your journey with{" "}
                    <span className="text-primary">dacospace</span>.
                </span>
            </div>
        </div>
    );
};

export default BannerSide;
