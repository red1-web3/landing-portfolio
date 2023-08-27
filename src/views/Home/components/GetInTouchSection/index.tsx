import Input from "@/components/Input";
import SectionTitle from "@/components/SectionTitle";
import { BsTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";

const GetInTouchSection = () => {
  return (
    <section id="get-in-touch">
      <div className="__container">
        <SectionTitle title="Get In Touch" />
        <div className="mt-8 lg:mt-16">
          <div className="min-h-[100px] p-3 rounded-xl shadow-2xl grid lg:grid-cols-3 gap-6 lg:gap-14">
            <Information />
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;

function Form() {
  return (
    <div className="lg:p-8 p-5 w-full lg:col-span-2">
      <form className="space-y-10">
        <div className="flex max-md:flex-col items-center gap-5 w-full">
          <Input label="Your Name" placeholder="Jhon doe" type="text" />
          <Input
            label="Your Email"
            placeholder="example@gmail.com"
            type="email"
          />
        </div>
        <Input label="Your Subject" placeholder="Jhon doe" type="text" />
        <div className="w-full">
          <label
            htmlFor="textArea"
            className="block text-sm font-medium opacity-70"
          >
            Your Message
          </label>
          <textarea
            id="textArea"
            className="outline-none border-b-2 border-black/20 mt-2 w-full bg-transparent duration-200 focus:border-accent py-1 resize-none"
            rows={3}
            placeholder="Write here your message"
          />
        </div>

        <button
          type="button"
          className="border-2 border-transparent hover:border-accent hover:bg-transparent hover:text-accent duration-300 px-4 h-[46px] rounded bg-accent text-white font-medium __c_all"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

function Information() {
  return (
    <div className="h-full bg-accent rounded-lg p-5 lg:p-8 relative isolate overflow-hidden">
      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
        Contact Information
      </h3>
      <p className="text-white/80 mt-2 lg:mt-5 md:text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quia!
      </p>

      <ul className="py-5 lg:py-10 space-y-5 text-white">
        <li className="flex items-center gap-x-2">
          <span className="text-xl">
            <BsTelephoneFill />
          </span>
          <p className="font-medium">9982239118</p>
        </li>
        <li className="flex items-center gap-x-2">
          <span className="text-xl">
            <IoMailSharp />
          </span>
          <p className="font-medium">pssolanki111pss@gmail.com</p>
        </li>
        <li className="flex items-center gap-x-2">
          <span className="text-xl">
            <FaLocationDot />
          </span>
          <p className="font-medium">India, New Delhi</p>
        </li>
      </ul>

      <div className="w-[300px] h-[200px] rounded-full bg-gradient-to-r from-white/30 to-transparent absolute bottom-0 right-0 rotate-45 origin-center translate-y-1/3 translate-x-1/3"></div>
    </div>
  );
}
