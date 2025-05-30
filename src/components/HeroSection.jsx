import { AnimatedFeature } from "./FeaturedSection";

export function HeroSection() {
  return (
    <section className="bg-[url(./assets/images/bg-curvy-mobile.svg)] relative md:bg-[url(./assets/images/bg-curvy-desktop.svg)]  bg-no-repeat bg-contain bg-bottom bg-navy-800">
      <div className="flex flex-col pt-25 items-center justify-center container max-w-5xl mx-auto  px-6">
        <AnimatedFeature from="bottom">
          <img src="/images/illustration-intro.png" alt="" className="" />
        </AnimatedFeature>

        <div className="flex flex-col gap-8 my-7">
          <AnimatedFeature from="left" delay={0.3}>
            <p className="text-white font-raleway-bold text-center text-[28px] md:text-5xl mx-auto ">
              All your files in one secure location, accessible anywhere.
            </p>
          </AnimatedFeature>
          <AnimatedFeature from="right" delay={0.6}>
            <p className="text-white font-opensan-reg text-md md:text-3xl mx-auto ">
              Fylo stores all your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends
              family, and co-workers.
            </p>
          </AnimatedFeature>
          <AnimatedFeature from="bottom" delay={0.9}>
            <button className="py-3 mt-4 text-md hover:cursor-pointer font-opensan-reg px-20  text-white rounded-full mx-auto bg-accent-teal">
              Get Started
            </button>
          </AnimatedFeature>
        </div>
      </div>
    </section>
  );
}
