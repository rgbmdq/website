import Link from "next/link";
import Image from "next/image";
import burgerClosed from "../../public/images/burgerClosed.svg";
import burger from "../../public/images/burger.svg";
import { useState } from "react";

const NavLinks = [
  { name: "Home", href: "#" },
  { name: "About me", href: "#" },
  { name: "Blog", href: "#" },
  { name: "En/Es", href: "#", noShow: true },
];

export default function Header() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-gray-800 shadow">
        <div className={`justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8`}>
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
                <h2 className="text-2xl cursor-default text-pink font-bold">R.G.B</h2>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 outline-none"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image
                      priority
                      src={burgerClosed}
                      height={24}
                      width={24}
                      alt={"burger-menu"}
                    />
                  ) : (
                    <Image
                      priority
                      src={burger}
                      height={24}
                      width={24}
                      alt={"burger-menu"}
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="transition-transform items-center justify-center space-y-8 md:flex  md:space-x-6 md:space-y-0">
                {NavLinks.map((link, index) =>
                  !link.noShow ? (
                    <li>
                      <Link
                        href={link.href}
                        className=" text-pink font-bold no-underline appearance-none hover:text-violet"
                      >
                        <a className="text-pink font-bold no-underline" >{link.name}</a>
                      </Link>
                    </li>
                  ) : null
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}