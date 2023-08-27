import { social } from "@/config/constant/social";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-accent py-6 lg:py-10">
      <div className="__container">
        <div className="flex items-center justify-between flex-wrap max-md:justify-center gap-5">
          <Link href={"/"} className="max-lg:max-w-[130px]">
            <Image
              width={177}
              height={44}
              alt="Logo Image"
              src={"/logo-white.svg"}
            />
          </Link>

          <p className="text-white/60">©pankaj sing solanki</p>

          <div className="flex items-center text-2xl text-white gap-x-5">
            {social.map(({ icon, url }, i) => (
              <a
                key={i}
                href={url}
                className="hover:scale-110 duration-300 inline-block"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
