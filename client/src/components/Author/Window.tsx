import TolgaZorluCV from "../../assets/auhtor/TolgaZorluCV.pdf";
const Window = () => {
    return (
        <div className="md:h-screen lg:flex flex-col justify-center col-span-2">
            <div className="mt-20 mockup-window bg-[#e7e7e7] shadow-2xl">
                <div className="p-4 md:px-16 md:py-8">
                    <code className="whitespace-pre-wrap bg-[#e7e7e7]">
                        <span className="text-base-content hover:text-base-content  italic ">
                            // Author: Tolga Zorlu
                        </span>
                        <br />
                        <span className="text-base-content hover:text-base-content italic">
                            // Job: Software Engineer
                        </span>
                        <br />
                        <br />
                        <span className="text-primary">package</span>{" "}
                        <span className="text-black">author</span>
                        <br />
                        <br />
                        <span className="text-primary">import</span>{" "}
                        <span className="text-success">"fmt"</span>
                        <br />
                        <br />
                        <span className="text-primary">func</span>
                        <span className="text-black">
                            {" "}
                            main&#40;&#41; &#10100;{" "}
                        </span>
                        <br />
                        <a
                            href={TolgaZorluCV}
                            download="TolgaZorluCV"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-secondary"
                        >
                            <span className="text-black">
                                &#160;&#160;&#160;fmt.Println&#40;
                            </span>
                            <span className="text-success hover:text-warning">
                                "Download My CV!"
                            </span>
                            <span className="text-black">&#41;</span>
                        </a>
                        <br />
                        <a
                            href="mailto:tolgazorlu17@gmail.com"
                            className="hover:text-secondary"
                        >
                            <span className="text-black">
                                &#160;&#160;&#160;fmt.Println&#40;
                            </span>
                            <span className="text-success hover:text-warning">
                                "Contact Me!"
                            </span>
                            <span className="text-black">&#41;</span>
                        </a>
                        <br />
                        <span className="text-black">&#10101;</span>
                        <br />
                        <br />
                        <span className="text-base-content italic ">
                            /* Output
                            <br />
                            <a
                                href={TolgaZorluCV}
                                download="TolgaZorluCV"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-warning"
                            >
                                * Download My CV!
                            </a>
                            <br />
                            <a
                                href="mailto:tolgazorlu17@gmail.com"
                                className="hover:text-warning"
                            >
                                * Contact Me!
                            </a>
                            <br />
                            */
                        </span>
                    </code>
                    <br />
                    <br />
                </div>
            </div>
        </div>
    );
};

export default Window;
