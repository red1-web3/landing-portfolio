import SectionTitle from "@/components/SectionTitle";
import { community } from "@/config/constant/community";
import { BiLinkExternal } from "react-icons/bi";

const CommunitySection = () => {
  return (
    <section>
      <div className="__container">
        <SectionTitle title="Community" />

        <div className="mt-16">
          <div className="grid lg:grid-cols-2 gap-5">
            {community.map(({ title, url }, i) => (
              <div
                key={i}
                className="min-h-[300px] p-9 relative isolate group shadow-lg hover:shadow-2xl duration-[400ms] bg-white rounded-lg overflow-hidden"
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-black">
                    {title}
                  </h3>

                  <a
                    className="text-xl inline-block translate-y-2.5"
                    href={url}
                  >
                    <BiLinkExternal />
                  </a>
                </div>

                <div
                  className="absolute inset-0 z-[-1] opacity-0 group-hover:opacity-10 duration-[400ms]"
                  style={{ backgroundColor: `hsl(${i * 200}, 100%, 60%)` }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;

{
  /* <section className="pb-[116px]">
      <div className="__container">
        <SectionTitle title="Community" subTitle="Journey of my career" />

        <div className="mt-20"></div>
      </div>
    </section> */
}
