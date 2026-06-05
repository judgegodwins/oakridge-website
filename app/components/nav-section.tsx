import Image from "next/image";
import Link from "next/link";
import { Para, paraClassName } from "./typography";
import Button from "./button";

function CloseIcon({ onClose }: { onClose: (() => void) | undefined }) {
  return (
    <div
      className="flex flex-col justify-center items-center cursor-pointer"
      onClick={onClose}
    >
      <Image
        src="/cancel.svg"
        alt="close icon"
        priority
        width={30}
        height={30}
      />
      <p className="font-normal text-lg leading-[100%] text-black">Close</p>
    </div>
  );
}

function OpenIcon({ onClick }: { onClick: () => void | undefined }) {
  return (
    <div className="flex flex-col gap-1 cursor-pointer" onClick={onClick}>
      <Image src="/nav.svg" alt="nav icon" width={42} height={12} priority />
      <span className="text-lg leading-[100%]">Menu</span>
    </div>
  );
}

export default function NavSection({ onClose }: { onClose?: () => void }) {
  return (
    <div className="fixed z-50 bg-white mt-24 lg:mt-0 h-[calc(100vh-96px)] lg:h-screen w-screen">
      <div className="w-full container h-full flex mx-auto px-4.5">
        <div className="hidden lg:block w-[27.5%] h-full relative">
          <Image
            src="/about2.jpg"
            alt="nav image"
            priority
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col grow h-full">
          <div className="hidden lg:flex pt-8 pb-19 w-full justify-end">
            <CloseIcon onClose={onClose} />
          </div>
          <div className="flex grow flex-col lg:flex-row justify-between mb-20">
            <div className="mt-20 lg:mt-0 lg:ml-30">
              <ul className="flex flex-col gap-6 lg:gap-10">
                {[
                  { name: "Home", path: "/" },
                  { name: "About us", path: "/about-us" },
                  { name: "News & Events", path: "#" },
                  { name: "Enrollment", path: "/enrollment" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className="font-semibold lg:font-bold text-2xl lg:text-[40px] leading-[100%] text-grey-700 hover:text-c-red cursor-pointer focus:text-c-red"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Image
                src="/oakridge.png"
                alt="Oakridge Academy logo"
                width={80}
                height={80}
                priority
                className="hidden lg:block"
              />

              <div className="flex flex-col mt-10">
                <div className="flex gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded bg-[#D9D9D9]"></div>
                  ))}
                </div>
                <div className="flex gap-4 mt-6">
                  <a
                    href="tel:+2348038954818"
                    className={`${paraClassName()} text-grey-700`}
                  >
                    08038954818
                  </a>
                  <a
                    href="tel:+2348038954818"
                    className={`${paraClassName()} text-grey-700`}
                  >
                    08038954818
                  </a>
                </div>
                <a
                  href="mailto:contact@oakridge.ac"
                  className={`${paraClassName()} text-grey-700 mt-2`}
                >
                  contact@oakridge.ac
                </a>
                <Para className="text-grey-700 mt-2">
                  50c Int&apos;l Airport Road, Rukpokwu, Port Harcourt, Rivers,
                  NG
                </Para>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TopNav({
  navOpen,
  setNavOpen,
}: {
  navOpen: boolean;
  setNavOpen: (open: boolean) => void;
}) {
  return (
    <div className="container mx-auto py-4.5 px-4.5 flex justify-between">
      <Link href="/" className="hidden lg:block">
        <Image
          src="/florence.png"
          alt="Florence Memorial College logo"
          width={80}
          height={80}
          priority
          className=""
        />
      </Link>

      <Link href="/" className="lg:hidden">
        <Image
          src="/oakridge.png"
          alt="Oakridge Academy logo"
          width={64}
          height={64}
          priority
          className=""
        />
      </Link>

      <div className="flex items-center justify-between gap-6 lg:gap-10">
        <Link href="/enrollment">
          <Button>Enroll now</Button>
        </Link>
        {navOpen ? (
          <CloseIcon onClose={() => setNavOpen(false)} />
        ) : (
          <OpenIcon onClick={() => setNavOpen(true)} />
        )}
      </div>
    </div>
  );
}
