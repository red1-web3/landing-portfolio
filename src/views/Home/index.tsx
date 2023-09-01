import EducationSection from "@/views/Home/components/EducationSection";
import ExperianceSection from "@/views/Home/components/ExperianceSection";
import FaqSection from "@/views/Home/components/FaqSection";
import GetInTouchSection from "@/views/Home/components/GetInTouchSection";
import HeroSection from "@/views/Home/components/HeroSection";
import SkillsSection from "@/views/Home/components/SkillsSection";

const Home = () => {
  return (
    <div className="py-10 lg:py-20 space-y-[60px] md:space-y-[90px] lg:space-y-[200px]">
      <HeroSection />
      <SkillsSection />
      <ExperianceSection />
      {/* <CommunitySection /> */}
      <EducationSection />
      <FaqSection />
      <GetInTouchSection />
    </div>
  );
};

export default Home;
