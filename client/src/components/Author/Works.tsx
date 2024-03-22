import DacoBanner from "../../assets/auhtor/daco-banner.png";
import DaleBanner from "../../assets/auhtor/dale-banner.png";
import BigbangBanner from "../../assets/auhtor/bigbang-banner.png";

const works = [
    {
        title: "daily algorithm",
        desc: "Discover daily algorithms at daco, where new algorithms are added every day across various subjects.",
        href: "https://daco.space",
        imgUrl: DacoBanner,
    },
    {
        title: "daily course",
        desc: "A revolutionary learning platform designed for avid students and educators.",
        href: "https://github.com/tolgazorlu/dale",
        imgUrl: DaleBanner,
    },
    {
        title: "space commerce",
        desc: "Building Space Commerce using Mern and Typescript.",
        href: "https://github.com/tolgazorlu/bigbang",
        imgUrl: BigbangBanner,
    },
];

const Works = () => {
    return (
        <section className="px-8 py-8 lg:px-32 bg-base-300 flex flex-col items-center text-base-content">
            <h2 className="text-4xl tracking-tight font-extrabold text-center font-poppins">
                Works
            </h2>
            <br />
            <div className="grid lg:grid-cols-3 gap-10">
                {works.map((item) => {
                    return (
                        <>
                            <div className="hidden lg:flex card w-96 bg-base-100 text-base-content shadow-md">
                                <div className="card-body">
                                    <img src={item.imgUrl} />
                                    <br></br>
                                    <h2 className="card-title font-bandal text-4xl">
                                        {item.title}
                                    </h2>
                                    <p>{item.desc}</p>
                                    <br></br>
                                    <div className="card-actions">
                                        <a
                                            href={item.href}
                                            className="btn btn-warning"
                                        >
                                            Click More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <a
                                href="#"
                                className="flex bg-base-100 text-base-content shadow-md lg:hidden flex-col items-center rounded-lg md:flex-row md:max-w-xl font-poppins"
                            >
                                <img
                                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                                    src={item.imgUrl}
                                    alt=""
                                />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight font-bandal">
                                        {item.title}
                                    </h5>
                                    <p className="mb-3 font-normal">
                                        {item.desc}
                                    </p>
                                    <div className="card-actions">
                                        <a
                                            href={item.href}
                                            className="btn btn-sm btn-warning"
                                        >
                                            Click More
                                        </a>
                                    </div>
                                </div>
                            </a>
                        </>
                    );
                })}
            </div>
        </section>
    );
};

export default Works;
