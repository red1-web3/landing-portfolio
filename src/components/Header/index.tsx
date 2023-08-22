import Image from "next/image";
import Link from "next/link";

const navItems = [
  {
    label: "Skills",
    url: "#",
  },
  {
    label: "Experiance",
    url: "#",
  },
  {
    label: "Community",
    url: "#",
  },
  {
    label: "About",
    url: "#",
  },
  {
    label: "FAQ",
    url: "#",
  },
  {
    label: "Get In Touch",
    url: "#",
  },
];

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-accent z-[99] border-b border-black/10">
      <div className="__container py-6">
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            <Image width={177} height={44} alt="Logo Image" src={"/logo.svg"} />
          </Link>

          <nav>
            <ul className="flex items-center gap-x-[30px]">
              {navItems.map(({ label, url }, i) => (
                <li key={i}>
                  <Link
                    href={url}
                    className="relative py-1.5 px-5 hover:text-white duration-300 before:duration-300 rounded before:absolute before:bottom-0 before:left-0 before:h-0 before:w-full before:bg-app-black hover:before:h-full before:z-[-1] before:ease-in-out"
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
