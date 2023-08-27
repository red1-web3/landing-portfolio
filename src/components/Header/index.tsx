import clsx from "clsx";
import { Expo, gsap } from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { Slant as Hamburger } from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
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

gsap.registerPlugin(ScrollToPlugin);
const Header = () => {
  const mobileNav = useRef(null);
  const [showNav, setShowNav] = useState(false);
  const router = useRouter();

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
                    <button
                      key={i}
                      className="text-xl font-medium text-white"
                      onClick={() => {
                        setShowNav(false);
                        gsap.to(window, {
                          scrollTo: {
                            y: url,
                            offsetY: 90,
                          },
                          duration: 0.5,
                          ease: Expo.easeInOut,
                        });
                      }}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="max-lg:hidden">
            <ul className="flex items-center gap-x-2.5">
              {navItems.map(({ label, url }, i) => (
                <li key={i}>
                  <button
                    onClick={() => {
                      gsap.to(window, {
                        scrollTo: {
                          y: url,
                          offsetY: 120,
                        },
                        duration: 0.5,
                        ease: Expo.easeInOut,
                      });
                    }}
                    className={clsx(
                      "relative font-semibold py-1.5 px-5 duration-300 rounded hover:text-accent",
                      router.asPath === `/${url}` && "text-accent"
                    )}
                  >
                    {label}
                  </button>
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
