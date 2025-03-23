import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50 px-8 py-4 md:py-12">
      <div className="container mx-auto flex flex-col justify-between md:flex-row md:space-x-10">
        {/* Text Content */}
        <div className="mb-12 max-w-2xl md:mb-0 md:w-1/2">
          
          <h1 className="animate-fadeInUp text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Master Competitive and Boards Exams
            </span> 
            <br />
            With Expert Guidance 
          </h1>
          <p className="mt-6 text-lg text-gray-600 md:text-xl">
            With over 25 years of experience, our expert instructors provide
            high-quality coaching for JEE, NEET, and other competitive exams.
            Transform your preparation with personalized mentorship!
          </p>
          <div className="mt-8 flex space-x-4">
            <Button
              variant="default"
              className="transform rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:ring-4 focus:ring-indigo-300"
            >
              📅 Book Free Consultation
            </Button>
          </div>
        </div>

        {/* Illustration */}
        <div className="relative md:w-1/2">
          <div className="animate-float relative mx-auto max-w-md">
            <img
              src="/hero-image.jpg"
              alt="Students learning with educators"
              className="z-10 rounded-2xl shadow-2xl"
            />
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-blue-200/30"></div>
            <div className="absolute -right-4 -bottom-4 h-32 w-32 rounded-full bg-indigo-200/30"></div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -left-8 top-16 hidden h-16 w-16 animate-pulse rounded-full bg-yellow-400/20 md:block"></div>
          <div className="absolute -right-8 bottom-24 hidden h-24 w-24 animate-pulse rounded-full bg-green-400/20 md:block"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;