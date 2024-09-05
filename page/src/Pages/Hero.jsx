
import heroimage from '../component/images/HeroSection.png'
const Hero = () => {
    return ( <section class="bg-[#DEEEF7] h-[528px]">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 h-full">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-[#010F52]">
            World’s First one-stop unified Service and execution company
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            powering your purchase, Sales, and business            </p>
        </div>
        <div class="hidden lg:mt-0  lg:col-span-5 lg:flex">
            <img src={heroimage} alt="mockup" />
        </div>                
    </div>
</section>
 );
}
 
export default Hero;