import CheckIcon from "@/components/Icons/CheckIcon";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";

const EducationSection = () => {
  return (
    <section id="education">
      <div className="__container">
        <SectionTitle title="Education" />
        <div className="mt-8 lg:mt-16">
          <div className="grid lg:grid-cols-[60%,40%] gap-5 lg:gap-8 w-full">
            <div className="bg-lime-200/40 rounded-lg p-7 md:p-9">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
                Bachelor Of Technology (Computer Science)
              </h2>
              <a
                href="https://www.rtu.ac.in/index/"
                className="text-lg md:text-xl inline-block lg:text-2xl font-semibold mt-2 italic underline"
              >
                Rajasthan Technical University
              </a>

              <ul className="pt-10 space-y-3">
                <li className="flex items-center gap-x-3">
                  <div className="shrink-0">
                    <CheckIcon />
                  </div>
                  <p>Bachelors degree focused on Cloud Computing</p>
                </li>
                <li className="flex items-center gap-x-3">
                  <div className="shrink-0">
                    <CheckIcon />
                  </div>
                  <p>Data Structures</p>
                </li>
                <li className="flex items-center gap-x-3">
                  <div className="shrink-0">
                    <CheckIcon />
                  </div>
                  <p>
                    Structures, Algorithms, Software Development Life Cycle,
                  </p>
                </li>
                <li className="flex items-center gap-x-3">
                  <div className="shrink-0">
                    <CheckIcon />
                  </div>
                  <p>
                    Big Data Analytics with a <strong>9.5 CGPA</strong>
                  </p>
                </li>
              </ul>
            </div>
            <Image
              src={"/education_card.jpg"}
              height={1277}
              width={1920}
              alt="Education Image"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
