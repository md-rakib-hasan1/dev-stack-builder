import banner from "../assets/banner-stack.png"


const Hero = () => {
    return (
        <section className="bg-white">
            <div className="mx-auto grid min-h-[calc(100vh-64px)] max-w-7xl items-center gap-12 px-4 py-8 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-10">

                <div className="order-1">


                    <h1 className="max-w-2xl text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
                        Build Your Ideal{" "}
                       <span className="gradient-text">
                            Development Stack
                        </span>

                    </h1>


                    <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits your
                        next project.
                    </p>

                    <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                        <a
                            href="#technologies"
                            className="gradient-theme inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                        >
                            Explore Technologies
                            <span className="ml-2">→</span>
                        </a>


                        <a
                            href="#about"
                            className="inline-flex items-center justify-center rounded-full border border-pink-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition duration-300 hover:border-pink-500 hover:text-pink-500"
                        >
                            Learn More
                        </a>

                    </div>
                </div>


                <div className="order-2 flex justify-center lg:justify-end">
                    <img
                        src={banner}
                        alt="Developer technology illustration"
                        className="w-full max-w-md object-contain sm:max-w-lg lg:max-w-xl"
                    />
                </div>

            </div>
        </section>
    );
};

export default Hero;