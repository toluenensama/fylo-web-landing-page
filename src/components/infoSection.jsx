import { AnimatedFeature } from "./FeaturedSection";

export function InfoSection() {
  return (
    <section className="bg-navy-900 py-20 mx-auto">
      <div className=" max-w-7xl md:px-18 px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <AnimatedFeature from="left">
          <img src="/images/illustration-stay-productive.png" alt="" />
          </AnimatedFeature>
          <AnimatedFeature from="right">
          <div className="text-white my-auto text-start flex flex-col items-start gap-4">
            <div className="text-2xl font-raleway-bold md:text-5xl ">
              Stay productive, wherever you are
            </div>
            <p className="text-sm font-opensan-reg text-start md:text-lg">
              Never let location be an issue when accessing your files.Fylo has
              you covered for all of your file storage needs.
            </p>
            <p className="text-sm font-opensan-reg text-start md:text-lg">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
            <div className="flex items-center gap-2 justify-center md:text-lg border-b border-accent-cyan">
              <p className="text-accent-cyan py-2"> See how Fylo works</p>
              <img src="/images/icon-arrow.svg" alt="" />
            </div>
          </div>
          </AnimatedFeature>

        </div>
      </div>
    </section>
  );
}
