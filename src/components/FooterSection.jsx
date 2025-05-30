import { FacebookIcon, Instagram, Twitch, TwitterIcon } from "lucide-react";
import { AccessForm } from "../components/AccessForm";

export function FooterSection() {
  return (
    <footer className="bg-navy-950  relative mt-60">
      <div className="absolute inset-0 -top-40">
        <AccessForm/>
      </div>
      <div className="pt-50 pb-20 mx-auto max-w-7xl md:px-18 px-8">
        <div className="flex flex-col gap-6 mt-12">
          <img src="/images/logo.svg" alt="" className="h-8 w-fit" />
          <div className="grid grid-cols-1 items-start gap-12 mt-6 md:grid-cols-5">
            <div className="flex gap-4 items-start text-start justify-center">
              <img src="/images/icon-location.svg" alt="" />
              <p className="text-[10px] font-opensan-reg text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
            <div className="flex-col flex gap-6 items-start justify-center">
              <div className="flex gap-4 items-start text-start justify-center">
                <img src="/images/icon-phone.svg" alt="" />
                <p className="text-[10px] font-opensan-reg text-white">
                  +1-543-123-4567
                </p>
              </div>
              <div className="flex gap-4 items-start text-start justify-center">
                <img src="/images/icon-email.svg" alt="" />
                <p className="text-[10px] font-opensan-reg text-white">
                  example@fylo.com
                </p>
              </div>
            </div>
            <div className="flex-col flex gap-6 items-start justify-center">
              <p className="text-[10px] font-opensan-reg text-white">
                About Us
              </p>
              <p className="text-[10px] font-opensan-reg text-white">Jobs</p>
              <p className="text-[10px] font-opensan-reg text-white">Press</p>
              <p className="text-[10px] font-opensan-reg text-white">Blog</p>
            </div>
            <div className="flex-col flex gap-6 items-start justify-center">
              <p className="text-[10px] font-opensan-reg text-white">
                Contact Us
              </p>
              <p className="text-[10px] font-opensan-reg text-white">Terms</p>
              <p className="text-[10px] font-opensan-reg text-white">Privacy</p>
            </div>
            <div className="flex items-start gap-2">
   
              <a href="#" className="">
                <FacebookIcon className="text-white hover:cursor-pointer hover:text-accent-cyan" />
              </a>
              <a href="#">
                <TwitterIcon className="text-white hover:cursor-pointer hover:text-accent-cyan" />
              </a>
              <a href="#">
                <Instagram className="text-white hover:cursor-pointer hover:text-accent-cyan" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
