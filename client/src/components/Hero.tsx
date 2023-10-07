import Counter from "./Counter";

const Hero = () => {
  return (
    <div className="hero h-[90vh]">
      <div className="hero-content text-center">
        <div className="max-w-md -mt-20">
          <span className="flex gap-4 items-center justify-center w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              className="w-24 h-24 stroke-secondary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              />
            </svg>
            <h1 className="text-8xl font-bold font-aubette text-primary">
              DACO
            </h1>
          </span>
          <Counter />
          <p className="text-4xl font-poppins">
            New day, new problems. <br />
            <span className="font-aubette">DACO</span> <span>coming soon!</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
