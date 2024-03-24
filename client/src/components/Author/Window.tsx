import TolgaZorluCV from "../../assets/auhtor/TolgaZorluCV.pdf";
const Window = () => {
    return (
        <div className="hidden md:h-screen lg:flex flex-col justify-center p-6 w-[100vh]">
            <div className="mockup-window bg-base-200 shadow-2xl">
                <div className="px-16 py-8">
                    <code className="whitespace-pre-wrap bg-base-200">
                        <span className="text-base-content/50 hover:text-base-content  italic ">
                            // Author: Tolga Zorlu
                        </span>
                        <br />
                        <span className="text-base-content/50 hover:text-base-content italic">
                            // Job: Software Engineer
                        </span>
                        <br />
                        <br />
                        <span className="text-primary">package</span>{" "}
                        <span>main</span>
                        <br />
                        <br />
                        <span className="text-primary">import</span>{" "}
                        <span className="text-success">"fmt"</span>
                        <br />
                        <br />
                        <span className="text-primary">func</span>
                        <span> main&#40;&#41; &#10100; </span>
                        <br />
                        <a
                            href={TolgaZorluCV}
                            download="TolgaZorluCV"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-secondary"
                        >
                            <span>&#160;&#160;&#160;fmt.Println&#40;</span>
                            <span className="text-success hover:text-warning">
                                "Download My CV!"
                            </span>
                            <span>&#41;</span>
                        </a>
                        <br />
                        <a
                            href="mailto:tolgazorlu17@gmail.com"
                            className="hover:text-secondary"
                        >
                            <span>&#160;&#160;&#160;fmt.Println&#40;</span>
                            <span className="text-success hover:text-warning">
                                "Contact Me!"
                            </span>
                            <span>&#41;</span>
                        </a>
                        <br />
                        <span>&#10101;</span>
                        <br />
                        <br />
                        <span className="text-base-content/50 italic ">
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
