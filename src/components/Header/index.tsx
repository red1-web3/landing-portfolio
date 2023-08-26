import { Slant as Hamburger } from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { useClickAway } from "react-use";

const navItems = [
  {
    label: "Home",
    url: "#home",
  },
  {
    label: "Skills",
    url: "#skills",
  },
  {
    label: "Experiance",
    url: "#experiance",
  },
  {
    label: "Community",
    url: "#community",
  },
  {
    label: "Education",
    url: "#education",
  },
  {
    label: "FAQ",
    url: "#faq",
  },
  {
    label: "Get In Touch",
    url: "#get-in-touch",
  },
];

const Header = () => {
  const mobileNav = useRef(null);
  const [showNav, setShowNav] = useState(false);

  useClickAway(mobileNav, () => {
    setShowNav(false);
  });

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-[99]">
      <div className="__container py-2 lg:py-6">
        <div className="flex items-center justify-between">
          <Link href={"/"} className="max-lg:max-w-[130px]">
            <Image width={177} height={44} alt="Logo Image" src={"/logo.svg"} />
          </Link>

          {/* Monbile Nav */}
          <div className="lg:hidden" ref={mobileNav}>
            <button
              onClick={() => setShowNav((p) => !p)}
              className="relative z-[99]"
            >
              <Hamburger
                color={showNav ? "#fff" : "#313131"}
                size={26}
                toggled={showNav}
              />
            </button>

            <div
              className="fixed top-0 right-0 w-full h-full bg-accent shadow-md z-[98] p-6 duration-[400ms] __c_all text-center ease-in-out"
              style={{
                clipPath: showNav
                  ? "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)"
                  : "polygon(100% 0, 100% 0%, 100% 100%, 100% 100%)",
              }}
            >
              <div>
                <div className="flex flex-col gap-y-7">
                  {navItems.map(({ label, url }, i) => (
                    <Link
                      href={url}
                      key={i}
                      className="text-xl font-medium text-white"
                      onClick={() => setShowNav(false)}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="max-lg:hidden">
            <ul className="flex items-center gap-x-[30px]">
              {navItems.map(({ label, url }, i) => (
                <li key={i}>
                  <Link
                    href={url}
                    className="relative py-1.5 px-5 hover:text-white duration-300 before:duration-300 rounded before:absolute before:bottom-0 before:left-0 before:h-0 before:w-full before:bg-accent hover:before:h-full before:z-[-1] before:ease-in-out"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
