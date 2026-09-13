import img from "../assets/logo-text.png";

const Footer = () => {
    return (
        <footer className="bg-white px-4 sm:px-6 lg:px-8">

            
            <div className="mx-auto max-w-7xl">
                <div className="divider" />
            </div>

            
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 py-8 sm:py-10 lg:grid-cols-4 lg:gap-8">

                
                <div className="text-center lg:text-left">

                    <img
                        src={img}
                        alt="Dev Stack"
                        className="mx-auto mb-4 w-32 lg:mx-0"
                    />

                    <p className="mx-auto max-w-sm text-sm leading-6 text-gray-600 lg:mx-0">
                        Curated tools, technologies, and resources for developers
                        building modern software.
                    </p>

                    
                    <div className="mt-5 flex justify-center gap-5 font-semibold text-gray-500 lg:justify-start">

                        <a
                            href="#"
                            className="hover:text-purple-500"
                        >
                            GitHub
                        </a>

                        <span className="text-gray-400 sm:hidden">
                            •
                        </span>

                        <a
                            href="#"
                            className="hover:text-purple-500"
                        >
                            Twitter
                        </a>

                        <span className="text-gray-400 sm:hidden">
                            •
                        </span>

                        <a
                            href="#"
                            className="hover:text-purple-500"
                        >
                            LinkedIn
                        </a>

                    </div>
                </div>

                
                <div className="hidden lg:block">

                    <h2 className="mb-4 font-semibold uppercase text-gray-800">
                        Product
                    </h2>

                    <ul className="flex flex-col space-y-2 text-sm text-gray-500">

                        <li>
                            <a
                                href="#home"
                                className="hover:text-purple-500"
                            >
                                Home
                            </a>
                        </li>

                        <li>
                            <a
                                href="#technologies"
                                className="hover:text-purple-500"
                            >
                                Technologies
                            </a>
                        </li>

                        <li>
                            <a
                                href="#projects"
                                className="hover:text-purple-500"
                            >
                                Projects
                            </a>
                        </li>

                    </ul>
                </div>

                
                <div className="hidden lg:block">

                    <h2 className="mb-4 font-semibold text-gray-800">
                        Company
                    </h2>

                    <ul className="flex flex-col space-y-2 text-sm text-gray-500">

                        <li>
                            <a
                                href="#about"
                                className="hover:text-purple-500"
                            >
                                About
                            </a>
                        </li>

                        <li>
                            <a
                                href="#contact"
                                className="hover:text-purple-500"
                            >
                                Contact
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="hover:text-purple-500"
                            >
                                Careers
                            </a>
                        </li>

                    </ul>
                </div>

                
                <div className="hidden lg:block">

                    <h2 className="mb-4 font-semibold text-gray-800">
                        Legal
                    </h2>

                    <ul className="flex flex-col space-y-2 text-sm text-gray-500">

                        <li>
                            <a
                                href="#"
                                className="hover:text-purple-500"
                            >
                                Privacy Policy
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="hover:text-purple-500"
                            >
                                Terms of Service
                            </a>
                        </li>

                    </ul>
                </div>

            </div>

            
            <div className="mx-auto max-w-7xl">
                <div className="divider" />
            </div>

            
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 py-4 text-center text-sm text-gray-500 sm:flex-row sm:text-left">

                <p>
                    © 2026 Dev Stack. All rights reserved.
                </p>

                <div className="flex justify-center gap-7">

                    <a
                        href="#"
                        className="hover:text-purple-500"
                    >
                        Privacy
                    </a>

                    <a
                        href="#"
                        className="hover:text-purple-500"
                    >
                        Terms
                    </a>

                </div>

            </div>

        </footer>
    );
};

export default Footer;