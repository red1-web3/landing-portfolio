import SectionTitle from "@/components/SectionTitle";
import { community } from "@/config/constant/community";
import { BiLinkExternal } from "react-icons/bi";

const CommunitySection = () => {
  return (
    <section className="pb-[116px]">
      <div className="__container">
        <SectionTitle title="Community" subTitle="Journey of my career" />

        <div className="mt-20">
          <div className="grid lg:grid-cols-2 gap-5">
            {community.map(({ title, url }, i) => (
              <div
                key={i}
                className="min-h-[300px] bg-gradient-to-br from-[#262085] to-secondary rounded-xl p-7"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-3xl font-black text-white">{title}</h3>

                  <button className="text-xl text-white">
                    <BiLinkExternal />
                  </button>
                </div>
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
