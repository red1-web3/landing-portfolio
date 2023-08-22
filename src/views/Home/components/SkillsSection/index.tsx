import SectionTitle from "@/components/SectionTitle";
import { skills } from "@/config/constant/skills";
import { ReactNode } from "react";
import { AiOutlineCaretRight } from "react-icons/ai";

const SkillsSection = () => {
  return (
    <section className="py-[117px]">
      <div className="__container">
        <SectionTitle title="Skills" subTitle="technologies I know" />
        <div className="mt-11">
          <div className="flex flex-wrap gap-5 justify-center">
            {skills.map((skill, i) => (
              <Card key={i} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

function Card({
  description,
  icon,
  title,
}: {
  description: string;
  title: string;
  icon: ReactNode;
}) {
  return (
    <div className="py-4 pr-5 pl-9 rounded shadow w-[32%]">
      <div className="flex items-center gap-x-3">
        <h5 className="text-2xl font-extrabold">{title}</h5>
        {icon}
      </div>

      <div className="relative mt-3">
        <p className="-tracking-[0.18 px] leading-[113.6%]">{description}</p>
        <div className="absolute left-0 top-0 -translate-x-[140%]">
          <AiOutlineCaretRight />
        </div>
      </div>
    </div>
  );
}
