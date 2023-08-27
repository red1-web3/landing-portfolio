import SectionTitle from "@/components/SectionTitle";
import { faqs } from "@/config/constant/faqs";
import clsx from "clsx";
import dynamic from "next/dynamic";
import { useState } from "react";
import { CgChevronDown } from "react-icons/cg";

const Collapsible = dynamic(() => import("react-collapsible"), { ssr: false });

const FaqSection = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleClick = (i: number) => {
    setActiveFaq((prev) => (prev === i ? null : i));
  };

  return (
    <section id="faq">
      <div className="__container">
        <SectionTitle title="Faq" />
        <div className="mt-8 lg:mt-16">
          {faqs.map((data, i) => (
            <CollapsibleColumn
              {...data}
              key={i}
              onClick={() => handleClick(i)}
              isOpen={i === activeFaq}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

function CollapsibleColumn({
  description,
  title,
  onClick,
  isOpen,
}: {
  title: string;
  description: string;
  onClick: () => void;
  isOpen: boolean;
}) {
  return (
    <div
      className={clsx(
        "group border border-black/5 bg-white hover:shadow-lg rounded duration-[400ms] relative isolate",
        isOpen && "shadow-lg"
      )}
    >
      <div
        onClick={onClick}
        className="flex items-center justify-between cursor-pointer p-4 md:p-5 lg:py-7 lg:px-8"
      >
        <h3 className="text-base md:text-lg lg:text-xl font-medium font-space-grotesk">
          {title}
        </h3>
        <span
          className={clsx(
            "inline-block duration-200 text-xl",
            isOpen && "-rotate-180"
          )}
        >
          <CgChevronDown />
        </span>
      </div>
      <Collapsible trigger="" open={isOpen} transitionTime={200}>
        <p className="pb-7 px-8">{description}</p>
      </Collapsible>

      {/* <div
        className={clsx(
          "absolute inset-0 z-[-1] opacity-0 group-hover:opacity-10 duration-[400ms]",
          isOpen && "opacity-10"
        )}
        style={{ backgroundColor: `hsl(${index * 100}, 100%, 60%)` }}
      ></div> */}
    </div>
  );
}
