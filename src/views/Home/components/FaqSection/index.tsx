import SectionTitle from "@/components/SectionTitle";
import clsx from "clsx";
import { useState } from "react";
import Collapsible from "react-collapsible";
import { CgChevronDown } from "react-icons/cg";

const FaqSection = () => {
  return (
    <section>
      <div className="__container">
        <SectionTitle title="Faq" />
        <div className="mt-8 lg:mt-16"> </div>{" "}
      </div>{" "}
    </section>
  );
};

export default FaqSection;

function CollapsibleColumn({
  description,
  title,
}: {
  title: string;
  description: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={clsx(
        "border border-[#C3C3C3] rounded-lg duration-200",
        isOpen && "border-dark"
      )}
    >
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center justify-between cursor-pointer py-7 px-8"
      >
        <h3 className="text-[19px]/[22.5px] font-medium font-space-grotesk">
          {title}
        </h3>
        <span
          className={clsx("inline-block duration-200", isOpen && "-rotate-180")}
        >
          <CgChevronDown />
        </span>
      </div>
      <Collapsible trigger="" open={isOpen} transitionTime={200}>
        <p className="pb-7 px-8">{description}</p>
      </Collapsible>
    </div>
  );
}
