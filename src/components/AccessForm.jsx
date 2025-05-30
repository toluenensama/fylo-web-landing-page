import { useState } from "react";
import { cn } from "../lib/utils";
import { AnimatedFeature } from "./FeaturedSection";

export function AccessForm() {
  const [emailInput, setEmailInput] = useState("");
  const [isValid, setIsValid] = useState(true);

  function handleChange(e) {
    e.preventDefault();
    setEmailInput(e.target.value);
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!isValidEmail(emailInput)) {
        setIsValid(false)
    } else {
        setIsValid(true)
    }
  }

  return (
    <AnimatedFeature from="bottom">
    <div className={cn("bg-navy-800 flex flex-col gap-6 items-center justify-center ",
    "rounded-md py-12 px-6 md:px-8 mx-auto text-white max-w-[320px] md:max-w-5xl",
    "")}>
      <p className="text-2xl font-raleway-bold md:text-5xl ">
        Get early access today
      </p>
      <p className="text-sm font-opensan-reg text-white md:text-lg">
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <form
        className="grid grid-cols-1 md:grid-cols-3 md:px-8 gap-4 w-full mx-auto"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="email"
          className="md:col-span-2 bg-white text-navy-950 text-lg focus:outline-0 rounded-full px-8 py-3"
          placeholder="example@email.com"
          value={emailInput}
          onChange={handleChange}
        />
        <p
          className={cn(
            "text-start px-8 py-2 text-[12px] text-accent-red font-opensan-reg md:order-last",
            isValid && "hidden"
          )}
        >
          Please enter a valid email address
        </p>

        <button
          type="submit"
          className="py-3 text-sm font-opensan-reg w-full text-white rounded-full mx-auto bg-accent-teal hover:cursor-pointer"
        >
          {" "}
          Get Started For Free{" "}
        </button>
      </form>
    </div>
    </AnimatedFeature>

  );
}
