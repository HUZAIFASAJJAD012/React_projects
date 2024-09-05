const Header = () => {
    return (
        <nav className="mt-5 position: absolute w-[100%]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-around h-16">
              <div className="flex-shrink-0 flex items-center">
                {/* Logo */}
                <img className="h-8 w-auto" src="logo.png" alt="Logo" />
              </div>
              <div className="hidden md:flex space-x-8 py-6">
                {/* Navigation Links */}
                <a href="#" className="text-[#0B5D51] font-bold hover:text-gray-600">Home</a>
                <a href="#" className="text-[#0B5D51] font-bold hover:text-gray-600">Products</a>
                <a href="#" className="text-[#0B5D51] font-bold hover:text-gray-600">Services</a>
                <a href="#" className="text-[#0B5D51] font-bold hover:text-gray-600">Smart RFQ</a>
                <a href="#" className="text-[#0B5D51] font-bold hover:text-gray-600">Smart Contract</a>
              </div>
              <div className="flex items-center  space-x-4">
                {/* Get Started Button */}
                <button className="bg-[#0B5D51]  text-white w-[159.82px] h-[49px] rounded-[6px]  hover:bg-green-700">
                  Get Started
                </button>
                {/* Search and Profile Icons */}
                <button className="text-gray-800 hover:text-gray-600">
                  <i className="fas fa-search"></i>
                </button>
                <button className="text-gray-800 hover:text-gray-600">
                  <i className="fas fa-user"></i>
                </button>
              </div>
            </div>
          </div>
        </nav>
      );
    };
 
export default Header;