import SectionTitle from "@/components/SectionTitle";
import { experiances } from "@/config/constant/experiance";
import clsx from "clsx";
import { AiOutlineCaretRight } from "react-icons/ai";

const ExperianceSection = () => {
  return (
    <section className="pb-[116px]">
      <div className="__container">
        <SectionTitle title="Experiance" subTitle="Journey of my career" />

        <div className="mt-16 w-[1240px] relative">
          <div className="space-y-16">
            {experiances.map(({ companyNameAndTime, lists, rule }, i) => (
              <div
                className="grid grid-cols-2 items-center h-[280px]"
                key={i}
                style={{ direction: i % 2 ? "rtl" : "ltr" }}
              >
                <div className="__c_all flex-col h-full">
                  <h3 className="text-3xl -tracking-[.18px] font-extrabold">
                    {rule}
                  </h3>
                  <div className="mt-1.5 text-lg -tracking-[.18px]">
                    {companyNameAndTime}
                  </div>
                </div>
                <div
                  className={clsx("__c_all h-full pl-5 relative isolate group")}
                >
                  <ul
                    className={clsx(
                      "p-5 pr-7 space-y-3 group-hover:translate-x-0 group-hover:translate-y-0 duration-[400ms]",
                      i % 2
                        ? "-translate-x-5 translate-y-5"
                        : "translate-x-5 translate-y-5"
                    )}
                    style={{ direction: "ltr" }}
                  >
                    {lists.map((list, i) => (
                      <li
                        key={i}
                        className="flex gap-x-2 group-hover:-translate-y-2 duration-[200ms]"
                        style={{
                          transitionDelay: `${i * 50}ms`,
                        }}
                      >
                        <div className="shrink-0 translate-y-1">
                          <AiOutlineCaretRight />
                        </div>
                        <div className="text-lg">{list}</div>
                      </li>
                    ))}
                  </ul>

                  <div
                    className={clsx(
                      "absolute inset-0 z-[-1] opacity-10 group-hover:translate-x-0 group-hover:translate-y-0 duration-[400ms]",
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
            ))}
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-app-black/20"></div>
        </div>
      </div>
    </section>
  );
};

export default ExperianceSection;