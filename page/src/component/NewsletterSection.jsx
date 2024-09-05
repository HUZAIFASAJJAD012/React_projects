import Letter from "../component/images/Letter.png";

const Newsletter = () => {
  return (
    <div class="bg-[#F5F5F5] py-16 px-6 font-[sans-serif] rounded-[20px]">
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 items-center md:gap-6 gap-12">
        <div class="max-md:order-1">
          <h2 class="text-gray-800 text-4xl font-extrabold mb-6">
            Subscribe to Our Newsletter
          </h2>
          <p class="text-base text-gray-600">
          You need a teacher! I can show you the ways of the Force! The Force. Lieutenant, get back to your station! 
          </p>

          <div class="mt-12 flex max-sm:flex-col sm:gap-4 gap-6">
            <input
              type="email"
              placeholder="Enter your email"
              class="w-full bg-gray-50 py-3.5 px-4 text-[#333] text-base focus:outline-none rounded"
            />
            <button class="bg-gray-800 hover:bg-gray-700 text-white text-base font-semibold py-3.5 px-6 rounded focus:outline-none">
              Subscribe
            </button>
          </div>
        </div>
        <div class="text-center">
          <div class="hidden lg:mt-0  lg:col-span-5 lg:flex ml-[25%] ">
            <img src={Letter} alt="mockup" className="w-[391px] h-[391px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
