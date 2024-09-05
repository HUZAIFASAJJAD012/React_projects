const Footer = () => {
    return ( <footer class="w-full bg-[#243A73]">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8  ">
           
            <div class="flex justify-between flex-col py-14 gap-14 lg:gap-20 min-[1124px]:flex-row">
                
                <div class="flex flex-col items-center sm:items-start min-[530px]:flex-row max-[1124px]:w-full max-[1124px]:justify-between gap-12 xl:gap-24 max-[1124px]:max-w-2xl max-[1124px]:mx-auto">
                   <div class="block">
                        <h4 class="text-lg text-gray-900 font-medium mb-7 text-center lg:text-left">Pagedone</h4>
                        <ul class="grid gap-6 text-center lg:text-left">
                            <li><a href="javascript:;"  class="text-gray-600 hover:text-gray-900">Home</a></li>
                            <li><a href="javascript:;"  class="text-gray-600 hover:text-gray-900">About</a></li>
                            <li><a href="javascript:;"  class="text-gray-600 hover:text-gray-900">Pricing</a></li>
                            <li><a href="javascript:;"  class="text-gray-600 hover:text-gray-900">Pro Version</a></li>
                        </ul>
                   </div>
                   <div class="block">
                        <h4 class="text-lg text-gray-900 font-medium mb-7 text-center lg:text-left">Pagedone</h4>
                        <ul class="grid gap-6 text-center lg:text-left">
                            <li><a href="javascript:;"  class="text-gray-600 hover:text-gray-900">Home</a></li>
                            <li><a href="javascript:;"  class="text-gray-600 hover:text-gray-900">About</a></li>
                            <li><a href="javascript:;"  class="text-gray-600 hover:text-gray-900">Pricing</a></li>
                            <li><a href="javascript:;"  class="text-gray-600 hover:text-gray-900">Pro Version</a></li>
                        </ul>
                   </div>
                   <div class="block">
                    <h4 class="text-lg text-gray-900 font-medium mb-7 text-center lg:text-left">Products</h4>
                    <ul class="grid gap-6 text-center lg:text-left" >
                        <li><a href="javascript:;"  class="text-gray-600 hover:text-gray-900">Figma UI System</a></li>
                        <li><a href="javascript:;"  class="text-gray-600 hover:text-gray-900">Icons Assets</a></li>
                        <li><a href="javascript:;"  class="text-gray-600 hover:text-gray-900">Responsive Blocks</a></li>
                        <li><a href="javascript:;"  class="text-gray-600 hover:text-gray-900">Components Library</a></li>
                    </ul>
                  </div>
                  <div class="block">
                    <h4 class="text-lg text-gray-900 font-medium mb-7 text-center lg:text-left">Support</h4>
                    <ul class="grid gap-6 text-center lg:text-left">
                        <li><a href="javascript:;"  class="text-gray-600 hover:text-gray-900">Customer Support</a></li>
                        <li><a href="javascript:;"  class="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
                        <li><a href="javascript:;"  class="text-gray-600 hover:text-gray-900">License</a></li>
                        <li><a href="javascript:;"  class="text-gray-600 hover:text-gray-900">Terms & Conditions</a></li>
                    </ul>
                  </div>
                  <div class="block  xl:max-w-lg">
                   
                    <p class="text-lg text-gray-500 mb-12 text-center min-[1124px]:text-left">Subscribe Us </p>
                    <div class="relative lg:flex-row gap-3 flex-col flex items-center justify-between max-[1124px]:max-w-2xl max-[1124px]:mx-auto ">
                        <span class="absolute left-5 top-4 lg:top-5"><svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.25201 4L7.15881 7.89529C9.26862 9.16117 10.3235 9.79412 11.4825 9.76654C12.6416 9.73896 13.6652 9.05656 15.7124 7.69175L20.748 4M9 17H13C16.7712 17 18.6569 17 19.8284 15.8284C21 14.6569 21 12.7712 21 9C21 5.22876 21 3.34315 19.8284 2.17157C18.6569 1 16.7712 1 13 1H9C5.22876 1 3.34315 1 2.17157 2.17157C1 3.34315 1 5.22876 1 9C1 12.7712 1 14.6569 2.17157 15.8284C3.34315 17 5.22876 17 9 17Z" stroke="#4F46E5" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                            </span>
                        <input type="text" name="email" class="py-3 px-5 h-14 pl-14 border border-gray-300 rounded-full text-lg text-gray-900 placeholder:text-gray-400 focus:outline-none flex-1 w-full " placeholder="Contact"/>
                        <button type="submit" class="h-14 py-3.5 px-7 bg-indigo-600 transition-all duration-500 shadow-md rounded-full text-white font-semibold hover:bg-indigo-700">Subscribe</button>
                    </div>
                </div>
                </div>
               
            </div>
         
        </div>   
    </footer> );
}
 
export default Footer;