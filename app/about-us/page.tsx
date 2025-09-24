"use client";
import Image from "next/image";
import Footer from "../components/footer";
import NavSection, { TopNav } from "../components/nav-section";
import {
  BigPara,
  Heading1,
  Heading2,
  Heading4,
  Para,
} from "../components/typography";
import { useState } from "react";

export default function AboutUs() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      {navOpen && <NavSection onClose={() => setNavOpen(false)} />}
      <TopNav navOpen={navOpen} setNavOpen={setNavOpen} />
      <div className="w-full container mx-auto flex flex-col lg:flex-row justify-between lg:items-center gap-6 px-4.5">
        <div className="w-full mt-20 lg:mt-0 lg:max-w-[50%]">
          <Heading1 className="text-grey-900 lg:font-semibold lg:text-[64px] lg:leading-[120%]">
            Every child deserves the right foundation to thrive
          </Heading1>
          <BigPara className="text-grey-700 mt-6">
            Our school provides a safe and inspiring environment where every
            child can discover their potential and grow into confident leaders
            of tomorrow
          </BigPara>
        </div>
        <div className="flex w-full lg:w-auto gap-6 justify-end">
          <div className="flex gap-1 lg:block w-full lg:w-unset flex-row lg:flex-col">
            <div className="relative basis-[33.33%] grow lg:w-[199px] aspect-[116.33/243] lg:aspect-[199/284] bg-[#D9D9D9] rounded-lg">
              <Image
                src={`/about1.jpg`}
                alt="student"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative basis-[33.33%] grow lg:w-[199px] aspect-[116.33/243] lg:aspect-[199/284] bg-[#D9D9D9] lg:mt-4 rounded-lg">
              <Image
                src={`/about2.jpg`}
                alt="student"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative basis-[33.33%] grow lg:w-[199px] aspect-[116.33/243] lg:aspect-[199/284] bg-[#D9D9D9] lg:hidden rounded-lg">
              <Image
                src={`/about3.jpg`}
                alt="student"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="mt-10 hidden lg:block">
            <div className="relative w-[199px] h-[284px] bg-[#D9D9D9] rounded-lg">
              <Image
                src={`/about3.jpg`}
                alt="student"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative w-[199px] h-[284px] bg-[#D9D9D9] mt-4 rounded-lg">
              <Image
                src={`/about4.jpg`}
                alt="student"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 lg:mt-4 w-full container mx-auto mb-30 px-4.5">
        <Heading2 className="text-grey-900 mb-10 lg:text-[40px]! lg:leading-[130%]!">
          Our History
        </Heading2>
        <div className="columns-1 lg:columns-2 gap-20 mt-6 mb-10 lg:my-10! w-full">
          <Para className="text-grey-700">
            One morning, when Gregor Samsa woke from troubled dreams, he found
            himself transformed in his bed into a horrible vermin. He lay on his
            armour-like back, and if he lifted his head a little he could see
            his brown belly, slightly domed and divided by arches into stiff
            sections. The bedding was hardly able to cover it and seemed ready
            to slide off any moment. His many legs, pitifully thin compared with
            the size of the rest of him, waved about helplessly as he looked.
            &quot;What&apos;s happened to me?&quot; he thought. It wasn&apos;t a
            dream. His room, a proper human room although a little too small,
            lay peacefully between its four familiar walls. A collection of
            textile samples lay spread out on the table – Samsa was a travelling
            salesman – and above it there hung a picture that he had recently
            cut out of an illustrated magazine and housed in a nice, gilded
            frame. It showed a lady…
          </Para>
        </div>
        <div className="relative w-full h-[439px] bg-[#D9D9D9] rounded-lg">
          <Image
            src={`/environment.jpg`}
            alt="school environment"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="my-30 w-full">
          <Heading2 className="text-grey-900 mb-10 lg:text-[40px]! lg:leading-[130%]!">
            Principal’s message
          </Heading2>

          <div className="flex flex-col lg:flex-row justify-between items-stretch lg:items-start w-full">
            <div className="relative flex w-full lg:w-[42.24%] h-[83.4%] items-start">
              <div className="w-[80%] aspect-[314.74/272] lg:w-[88.16%] lg:aspect-[27/17] bg-grey-400 rounded-lg"></div>
              <div className="hidden w-[220px] lg:w-[303px] h-[231px] bg-grey-300 self-end mt-[186px] -ml-[231px] rounded-lg"></div>
            </div>
            <div className="mt-20 lg:mt-0 p-6 lg:max-w-[44.83%] bg-grey-200 rounded-lg">
              <Para className="text-grey-700">
                One morning, when Gregor Samsa woke from troubled dreams, he
                found himself transformed in his bed into a horrible vermin. He
                lay on his armour-like back, and if he lifted his head a little
                he could see his brown belly, slightly domed and divided by
                arches into stiff sections. The bedding was hardly able to cover
                it and seemed ready to slide off any moment. His many legs,
                pitifully thin compared with the size of the rest of him, waved
                about helplessly as he looked. &quot;What&apos;s happened to
                me?&quot; he thought. It wasn&apos;t a dream. His room, a proper
                human room although a little too small, lay peacefully between
                its four familiar walls. A collection of textile samples lay
                spread out on the table - Samsa was a travelling salesman - and
                above it there hung a picture that he had recently cut out of an
                illustrated magazine and housed in a nice, gilded frame. It
                showed a lady fitted out with a fur hat and fur boa who sat
                upright, raising a heavy fur muff that covered the whole of her
                lower arm towards the viewer. Gregor then turned to look out the
                window at the dull weather. Drops
              </Para>
              <Heading4 className="text-grey-800 mt-4">- John Doe</Heading4>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
