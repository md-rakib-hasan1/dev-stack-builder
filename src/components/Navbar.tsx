import logo from "../assets/logo-text.png";
const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

    
        <button
          className="text-2xl text-gray-700 md:hidden"
          aria-label="Open menu"
        >
          ☰
        </button>

                <img src={logo} alt="dev stack logo" className="w-28 sm:w-32 md:w-36" />
                <ul className="hidden items-center gap-6 md:flex">
                    <li><a href="#" className="text-sm font-medium text-gray-700 hover:text-pink-500">Home</a></li>
                    <li><a href="#technologies" className="text-sm font-medium text-gray-700 hover:text-pink-500">Technologies</a></li>
                    <li><a href="#projects" className="text-sm font-medium text-gray-700 hover:text-pink-500">Projects</a></li>
                    <li><a href="#about" className="text-sm font-medium text-gray-700 hover:text-pink-500">About</a></li>
                    <li><a href="#contact" className="text-sm font-medium text-gray-700 hover:text-pink-500">Contact</a></li>
                </ul>
                <div className="flex items-center gap-1 sm:gap-3">
                    <button className="text-sm font-medium text-gray-700 hover:text-pink-500">Sign In</button>
                    <button className="btn btn-secondary rounded-full px-3 py-2 text-xs sm:px-4 sm:text-sm">Sign Up</button>
                </div>
            </div>

        </nav>

    );
};

export default Navbar;
