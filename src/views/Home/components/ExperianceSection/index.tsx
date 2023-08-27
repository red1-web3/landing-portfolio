import SectionTitle from "@/components/SectionTitle";
import { experiances } from "@/config/constant/experiance";
import clsx from "clsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ReactNode, useEffect, useRef } from "react";
import { AiOutlineCaretRight } from "react-icons/ai";

const ExperianceSection = () => {
  return (
    <section id="experiance">
      <div className="__container">
        <SectionTitle title="Experiance" />

        <div className="mt-8 lg:mt-16 lg:w-[1240px] relative">
          <div className="space-y-8 lg:space-y-16">
            {experiances.map((data, i) => (
              <Flow {...data} key={i} i={i} />
            ))}
          </div>
          <div className="max-lg:hidden absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-app-black/20"></div>
        </div>
      </div>
    </section>
  );
};

export default ExperianceSection;

function Flow({
  companyNameAndTime,
  i,
  lists,
  rule,
}: {
  rule: string;
  companyNameAndTime: string;
  lists: ReactNode[];
  i: number;
}) {
  gsap.registerPlugin(ScrollTrigger);
  const flow = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(flow.current, {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: flow.current,
          start: "bottom bottom",
        },
      });
    });
    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <div
      ref={flow}
      className="grid lg:grid-cols-2 items-center lg:h-[280px] gap-y-5 opacity-0"
      style={{ direction: i % 2 ? "rtl" : "ltr" }}
    >
      <div className="__c_all flex-col h-full">
        <h3 className="text-xl md:text-2xl lg:text-3xl -tracking-[.18px] font-extrabold">
          {rule}
        </h3>
        <div className="md:mt-1.5 text-sm md:text-lg -tracking-[.18px]">
          {companyNameAndTime}
        </div>
      </div>
      <div className={clsx("__c_all h-full lg:pl-5 relative isolate group")}>
        <ul
          className={clsx(
            "p-5 pr-7 space-y-3 group-hover:translate-x-0 group-hover:translate-y-0 duration-[400ms]",
            i % 2
              ? "lg:-translate-x-5 lg:translate-y-5"
              : "lg:translate-x-5 lg:translate-y-5"
          )}
          style={{ direction: "ltr" }}
        >
          {lists.map((list, i) => (
            <li
              key={i}
              className="flex gap-x-2 lg:group-hover:-translate-y-2 duration-[200ms]"
              style={{
                transitionDelay: `${i * 50}ms`,
              }}
            >
              <div className="shrink-0 translate-y-1 text-sm md:text-base">
                <AiOutlineCaretRight />
              </div>
              <div className="text-sm md:text-lg">{list}</div>
            </li>
          ))}
        </ul>

        <div
          className={clsx(
            "absolute max-lg:hidden inset-0 z-[-1] opacity-10 group-hover:translate-x-0 group-hover:translate-y-0 duration-[400ms]",
            i % 2
              ? "-translate-x-5 translate-y-5"
              : "translate-x-5 translate-y-5"
          )}
          style={{ backgroundColor: `hsl(${i * 100}, 100%, 60%)` }}
        ></div>
        <div
          className="absolute inset-0 z-[-1] opacity-10"
          style={{ backgroundColor: `hsl(${i * 100}, 100%, 60%)` }}
        ></div>
      </div>
    </div>
  );
}
