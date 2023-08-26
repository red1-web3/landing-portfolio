import SectionTitle from "@/components/SectionTitle";
import { skills } from "@/config/constant/skills";
import { ReactNode } from "react";

const SkillsSection = () => {
  return (
    <section id="skills">
      <div className="__container">
        <SectionTitle title="Skills" />
        <div className="mt-8 lg:mt-16">
          <div className="flex flex-wrap justify-center">
            {skills.map((skill, i) => (
              <Card key={i} {...skill} index={i} />
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
  index,
}: {
  description: string;
  title: string;
  icon: ReactNode;
  index: number;
}) {
  return (
    <div className="group duration-[400ms] hover:shadow-xl p-6 lg:py-6 lg:pr-6 bg-white lg:pl-10 border border-black/5 md:w-1/2 lg:w-[33%] relative isolate">
      <div className="space-y-3 md:space-y-5">
        <div
          className="text-3xl h-12 aspect-square __c_all rounded-full text-white group-hover:shadow-md duration-[400ms] group-hover:-translate-y-1.5"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(255, 0, 0, 0.1), hsl(${
              index * 100
            }, 50%, 50%))`,
          }}
        >
          {icon}
        </div>
        <h5
          className="text-xl md:text-2xl font-extrabold duration-[400ms] delay-[50ms] group-hover:-translate-y-1.5"
          style={{ color: `hsl(${index * 100}, 50%, 50%)` }}
        >
          {title}
        </h5>
      </div>

      <div className="relative mt-2 md:mt-3">
        <p className="-tracking-[0.18 px] md:text-lg leading-[113.6%] delay-100 duration-[400ms] group-hover:-translate-y-1.5">
          {description}
        </p>
      </div>

      <div
        className="absolute inset-0 z-[-1] opacity-0 group-hover:opacity-10 duration-[400ms]"
        style={{ backgroundColor: `hsl(${index * 100}, 100%, 60%)` }}
      ></div>
    </div>
  );
}
