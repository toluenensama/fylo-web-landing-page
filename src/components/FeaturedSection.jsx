import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export function AnimatedFeature({ children, from = "left" ,delay = 0}) {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { threshold: 0.3 });

  const directionX = from === "left" ? -100 : from === "right" ? 100 : 0;
  const directionY = from === "bottom" ? 100 : 0;

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0, y: 0, transition: { duration: 0.6,delay } });
    } else {
      controls.start({ opacity: 0, x: directionX, y: directionY });
    }
  }, [inView, controls, directionX, directionY, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: directionX, y: directionY }}
      animate={controls}
      className="flex flex-col gap-4 items-center justify-center"
    >
      {children}
    </motion.div>
  );
}

export function FeaturedSection() {
  return (
    <section className="py-22 bg-navy-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <AnimatedFeature from="left">
          <img src="/images/icon-access-anywhere.svg" alt="" />
          <p className="text-xl font-raleway-bold mt-6 text-white">
            Access your files, anywhere
          </p>
          <p className="text-md font-opensan-reg text-white px-8">
            The ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </AnimatedFeature>

        <AnimatedFeature from="right" delay={0.1}>
          <img src="/images/icon-security.svg" alt="" />
          <p className="text-xl font-raleway-bold mt-6 text-white">
            Security you can trust
          </p>
          <p className="text-md font-opensan-reg text-white px-8">
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure your files.
          </p>
        </AnimatedFeature>

        <AnimatedFeature from="bottom" delay={0.2}>
          <img src="/images/icon-collaboration.svg" alt="" />
          <p className="text-xl font-raleway-bold mt-6 text-white">
            Real-time collaboration
          </p>
          <p className="text-md font-opensan-reg text-white px-8">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </AnimatedFeature>

        <AnimatedFeature from="bottom" delay={0.4}>
          <img src="/images/icon-any-file.svg" alt="" />
          <p className="text-xl font-raleway-bold mt-6 text-white">
            Store any type of file
          </p>
          <p className="text-md font-opensan-reg text-white px-8">
            Whether you're sharing holiday photos or work documents, Fylo has
            you covered allowing for all file types to be securely stored and
            shared.
          </p>
        </AnimatedFeature>
      </div>
    </section>
  );
}
