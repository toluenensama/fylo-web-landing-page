import { AnimatedFeature } from "./FeaturedSection";

export function TestimonialSection() {
  return (
    <section className="bg-navy-900 py-20 ">
      <div className="max-w-7xl md:px-18 px-8 mx-auto bg-[url(./assets/images/bg-quotes.svg)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedFeature from="bottom">
          <div className="bg-navy-800 rounded-md shadow-2xl p-6 text-sm text-white font-opensan-reg text-start">
            <div className="flex flex-col items-start gap-6">
              <p>
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </p>
              <div className="flex items-center justify-center gap-3">
                <img
                  src="/images/profile-1.jpg"
                  alt=""
                  className="rounded-full h-12 w-12"
                />
                <div className="flex flex-col gap-1">
                  <p className="font-opensan-bold text-[16px]">Satish Patel</p>
                  <p className="text-sm">Founder & CEO, Huddle</p>
                </div>
              </div>
            </div>
          </div>
          </AnimatedFeature>
          <AnimatedFeature from="bottom" delay={0.4}>
          <div className="bg-navy-800 rounded-md shadow-2xl p-6 text-sm text-white font-opensan-reg text-start">
            <div className="flex flex-col items-start gap-6">
              <p>
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </p>
              <div className="flex items-center justify-center gap-3">
                <img
                  src="/images/profile-3.jpg"
                  alt=""
                  className="rounded-full h-12 w-12"
                />
                <div className="flex flex-col gap-1">
                  <p className="font-opensan-bold text-[16px]">Iva Boyd</p>
                  <p className="text-sm">Founder & CEO, Huddle</p>
                </div>
              </div>
            </div>
          </div>
          </AnimatedFeature>
          <AnimatedFeature from="bottom" delay={0.8}>
          <div className="bg-navy-800 rounded-md shadow-2xl p-6 text-sm text-white font-opensan-reg text-start">
            <div className="flex flex-col items-start gap-6">
              <p>
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </p>
              <div className="flex items-center justify-center gap-3">
                <img
                  src="/images/profile-2.jpg"
                  alt=""
                  className="rounded-full h-12 w-12"
                />
                <div className="flex flex-col gap-1">
                  <p className="font-opensan-bold text-[16px]">Bruce McKenzie</p>
                  <p className="text-sm">Founder & CEO, Huddle</p>
                </div>
              </div>
            </div>
          </div>
          </AnimatedFeature>

        </div>
      </div>
    </section>
  );
}
