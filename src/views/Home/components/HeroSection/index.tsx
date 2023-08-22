import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="pt-[170px] pb-[114px] bg-accent">
      <div className="__container">
        <div className="grid grid-cols-[3fr,2fr] items-center">
          <div>
            <h4 className="text-[32px]/[33px] ml-1.5 tracking-[0.18px] font-extrabold">
              Hi, I’m a
            </h4>
            <h1 className="text-[80px]/[103%] mt-2 tracking-[0.18px] font-extrabold">
              Senior Backend Engineer
            </h1>

            <p className="my-[30px] max-w-[595px] text-xl">
              I’m <strong>Pankaj Singh Solanki</strong>, and a Software
              Developer with a specialization in <strong>Backend</strong> &{" "}
              <strong>DevOps</strong>,{" "}
              <strong>Infrastructure Management</strong> ,{" "}
              <strong>Solution Architecture</strong>
              and <strong>Structural Analysis</strong>.
            </p>
            <button className="border-2 border-transparent hover:border-app-black hover:bg-transparent hover:text-app-black duration-300 px-4 h-[46px] rounded bg-app-black text-white font-medium __c_all">
              Get In Touch
            </button>
          </div>

          <div>
            <Image src={"/img.png"} alt="Image" height={559} width={547} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
