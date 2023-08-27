import { gsap } from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const leftTarget = useRef(null);
  const rightTarget = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to([leftTarget.current, rightTarget.current], {
        autoAlpha: 1,
        y: 0,
        stagger: 0.1,
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section id="home" className="pt-[60px] lg:pt-[100px]">
      <div className="__container">
        <div className="grid md:grid-cols-[3fr,2fr] md:gap-x-5 items-center gap-y-6">
          <div
            ref={leftTarget}
            className="max-md:order-2 translate-y-3 opacity-0"
          >
            <h4 className="text-xl lg:text-[32px]/[33px] ml-1.5 tracking-[0.18px] font-extrabold">
              Hi, I’m
            </h4>
            <h1 className="text-4xl lg:text-[80px]/[103%] __gradient1 lg:mt-2 tracking-[0.18px] font-extrabold">
              Pankaj Singh Solanki
            </h1>

            <p className="my-4 lg:my-[30px] max-w-[595px] md:text-lg lg:text-xl">
              I’m a <strong>Software Developer</strong> with a specialization in
              <strong>Backend</strong> & <strong>DevOps</strong>,
              <strong>Infrastructure Management</strong> ,
              <strong>Solution Architecture </strong>
              and <strong>Structural Analysis</strong>.
            </p>
            <a
              href="#get-in-touch"
              className="w-fit border-2 border-transparent hover:border-accent hover:bg-transparent hover:text-accent duration-300 px-4 h-[46px] rounded bg-accent text-white font-medium __c_all"
            >
              Get In Touch
            </a>
          </div>

          <div
            ref={rightTarget}
            className="max-md:order-1 max-lg:max-w-[340px] translate-y-3 opacity-0"
          >
            <Image
              src={"/img.png"}
              alt="Image"
              height={559}
              width={547}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
