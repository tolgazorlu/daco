const FeaturedIn = () => {
  return (
    <section className="md:h-screen md:snap-start py-8 px-4 mx-auto max-w-screen-xl lg:px-6 flex flex-col justify-center">
      <div className="mx-auto max-w-screen-sm text-center mb-8">
        <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold">
          Top Daily Courses
        </h2>
        <p className="font-light sm:text-xl">
          We use an agile approach to test assumptions and connect with the
          needs of your audience early and often.
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-3">
        <article className="p-4 rounded-lg border shadow-md flex flex-col gap-3">
          <a href="#">
            <img
              className="rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops.png"
              alt="office laptop working"
            />
          </a>
          <span className="badge bg-primary-content text-primary">Article</span>
          <h2 className="text-2xl font-bold">
            <a href="#">Full Stack Development</a>
          </h2>
          <p className="font-light tracking-wide">
            Over the past year, Volosoft has undergone many changes! After
            months of preparation and some hard work, we moved to our new
            office.
          </p>
          <div className="flex gap-4">
            <img
              className="w-12 h-12 rounded-full ring ring-primary"
              src="https://www.tolg.dev/assets/tolgazorlu-deb18970.jpg"
              alt="Jese Leos avatar"
            />
            <div>
              <span className="font-bold">Tolga Zorlu</span>
              <div>Software Engineer at DALE</div>
            </div>
          </div>
        </article>
        <article className="p-4 rounded-lg border shadow-md flex flex-col gap-3">
          <a href="#">
            <img
              className="rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops.png"
              alt="office laptop working"
            />
          </a>
          <span className="badge bg-primary-content text-primary">Article</span>
          <h2 className="text-2xl font-bold">
            <a href="#">Full Stack Development</a>
          </h2>
          <p className="font-light tracking-wide">
            Over the past year, Volosoft has undergone many changes! After
            months of preparation and some hard work, we moved to our new
            office.
          </p>
          <div className="flex gap-4">
            <img
              className="w-12 h-12 rounded-full ring ring-primary"
              src="https://www.tolg.dev/assets/tolgazorlu-deb18970.jpg"
              alt="Jese Leos avatar"
            />
            <div>
              <span className="font-bold">Tolga Zorlu</span>
              <div>Software Engineer at DALE</div>
            </div>
          </div>
        </article>
        <article className="p-4 rounded-lg border shadow-md flex flex-col gap-3">
          <a href="#">
            <img
              className="rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops.png"
              alt="office laptop working"
            />
          </a>
          <span className="badge bg-primary-content text-primary">Article</span>
          <h2 className="text-2xl font-bold">
            <a href="#">Full Stack Development</a>
          </h2>
          <p className="font-light tracking-wide">
            Over the past year, Volosoft has undergone many changes! After
            months of preparation and some hard work, we moved to our new
            office.
          </p>
          <div className="flex gap-4">
            <img
              className="w-12 h-12 rounded-full ring ring-primary"
              src="https://www.tolg.dev/assets/tolgazorlu-deb18970.jpg"
              alt="Jese Leos avatar"
            />
            <div>
              <span className="font-bold">Tolga Zorlu</span>
              <div>Software Engineer at DALE</div>
            </div>
          </div>
        </article>
        {/* <article className="p-6 rounded-lg border shadow-md ">
            <div className="flex justify-between items-center mb-5">
              <span className="text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
                <svg
                  className="mr-1 w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                </svg>
                Tutorial
              </span>
              <span className="text-sm">14 days ago</span>
            </div>
            <h2 className="mb-2 text-2xl font-bold tracking-tight ">
              <a href="#">How to quickly deploy a static website</a>
            </h2>
            <p className="mb-5 font-light ">
              Static websites are now used to bootstrap lots of websites and are
              becoming the basis for a variety of tools that even influence both
              web designers and developers influence both web designers and
              developers.
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <img
                  className="w-7 h-7 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                  alt="Jese Leos avatar"
                />
                <span className="font-medium">Jese Leos</span>
              </div>
              <a
                href="#"
                className="inline-flex items-center font-medium text-primary hover:underline"
              >
                Read more
                <svg
                  className="ml-2 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </article> */}
      </div>
    </section>
  );
};

export default FeaturedIn;
