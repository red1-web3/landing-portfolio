import SectionTitle from "@/components/SectionTitle";
import { experiances } from "@/config/constant/experiance";
import clsx from "clsx";
import { AiOutlineCaretRight } from "react-icons/ai";

const ExperianceSection = () => {
  return (
    <section className="pb-[116px]">
      <div className="__container">
        <SectionTitle title="Experiance" subTitle="Journey of my career" />

        <div className="mt-20 w-[1240px] relative">
          <div className="space-y-16">
            {experiances.map(({ companyNameAndTime, lists, rule }, i) => (
              <div
                className="grid grid-cols-2 items-center h-[280px]"
                key={i}
                style={{ direction: i % 2 ? "rtl" : "ltr" }}
              >
                <div className="__c_all flex-col h-full">
                  <h3 className="text-3xl -tracking-[.18px] font-extrabold text-secondary">
                    {rule}
                  </h3>
                  <div className="mt-1.5 text-lg -tracking-[.18px]">
                    {companyNameAndTime}
                  </div>
                </div>
                <div
                  className={clsx(
                    "__c_all h-full shadow-xl pl-8",
                    i % 2
                      ? "rounded-tl-[90px] rounded-bl-2xl bg-gradient-to-br from-accent/80 to-accent/30"
                      : "rounded-tr-[90px] bg-gradient-to-bl rounded-br-2xl from-accent/80 to-accent/30"
                  )}
                >
                  <ul
                    className="p-5 pr-7 space-y-3"
                    style={{ direction: "ltr" }}
                  >
                    {lists.map((list, i) => (
                      <li key={i} className="flex gap-x-2">
                        <div className="shrink-0 translate-y-1">
                          <AiOutlineCaretRight />
                        </div>
                        <div className="text-lg">{list}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-full bg-accent"></div>
        </div>
      </div>
    </section>
  );
};

export default ExperianceSection;
