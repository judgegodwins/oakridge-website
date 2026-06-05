import Image from "next/image";
import { BigPara, Heading1, Para, paraClassName } from "./typography";
import { NewsletterInput } from "./input";

export default function Footer() {
  return (
    <div className="w-full bg-grey-900">
      <div className="container mx-auto pt-20 pb-10 lg:py-30! px-4.5">
        <div className="flex justify-center items-center flex-col w-full border-b border-grey-700 pb-20">
          <Heading1 className="text-white text-center text-[32px]! lg:text-[40px]! max-w-[626px]">
            Stay up-to-date with what&apos;s happening around the school.
          </Heading1>
          <NewsletterInput className="mt-10 max-w-full" />
        </div>
        <div className="mt-20">
          <div className="flex flex-col items-start lg:flex-row justify-between lg:items-stretch gap-10">
            <div className="flex flex-col items-start lg:items-center">
              <Image
                src="/florence.png"
                alt="Florence Memorial College badge"
                width={80}
                height={80}
                priority
              />
              <p className="font-serif lg:text-center text-white font-semibold text-base leading-[100%] mt-2">
                Florence Memorial
                <br />
                College
              </p>
              <p className="text-xs lg:text-center leading-[100%] text-grey-300 font-medium mt-1">
                Since 2000
              </p>
            </div>
            <div className="">
              <BigPara className="text-white">Quick links</BigPara>
              <ul className="mt-6">
                {["About us", "News & Events", "Enrolment"].map((link) => (
                  <li key={link} className="mt-2">
                    <a
                      href="#"
                      className={`${paraClassName()} underline text-grey-400`}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col lg:items-end">
              <div className="flex gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded bg-[#D9D9D9]"></div>
                ))}
              </div>
              <div className="flex gap-4 mt-6">
                <a
                  href="tel:+2348038954818"
                  className={`${paraClassName()} text-grey-400`}
                >
                  08038954818
                </a>
                <a
                  href="tel:+2348152339396"
                  className={`${paraClassName()} text-grey-400`}
                >
                  08152339396
                </a>
              </div>
              <a
                href="mailto:contact@oakridge.ac"
                className={`${paraClassName()} text-grey-400 mt-2`}
              >
                contact@oakridge.ac
              </a>
              <Para className="text-grey-400 mt-2">
                50c Int&apos;l Airport Road, Rukpokwu, Port Harcourt, Rivers, NG
              </Para>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
