"use client";
import Image from "next/image";
import Button from "./components/button";
import { BigPara, Heading1 } from "./components/typography";
import EventCard from "./components/event-card";
import { useState } from "react";
import NavSection, { TopNav } from "./components/nav-section";
import Footer from "./components/footer";
import Link from "next/link";

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      {navOpen && <NavSection onClose={() => setNavOpen(false)} />}
      <TopNav navOpen={navOpen} setNavOpen={setNavOpen} />

      <div className="container mx-auto px-4.5">
        <div className="w-full flex flex-col justify-center items-center py-20 gtr">
          <div className="w-fit flex items-center justify-between gap-1.5 px-5.5 py-2.5 rounded-[999px] bg-[linear-gradient(262.29deg,#E9EBF7_26.04%,#FCEDED_100%)]">
            <Image
              src="/school.svg"
              alt="school building icon"
              width={18.33}
              height={17.01}
              priority
            />
            <p className="uppercase text-grey-800 font-semibold text-base leading-none">
              oakridge academy
            </p>
          </div>

          <div>
            <div className="w-fit relative">
              <Image
                src="/hero_crown.svg"
                alt="school building icon"
                width={40.57}
                height={46.2}
                priority
                className="hidden lg:block lg:absolute -mt-[23.2px] lg:-ml-[18.57px] lg:-mt-[20.2px]"
              />

              <Image
                src="/hero_crown_thin.svg"
                alt="school building icon"
                width={26.11}
                height={31.78}
                priority
                className="lg:hidden absolute ml-[18px] -mt-[16px]"
              />
              <h1 className="font-semibold text-[40px] lg:text-[64px] text-grey-900 leading-[130%] lg:leading-[120%] text-center font-serif">
                Shaping the <br className="inline lg:hidden" /> learners
                <span className="lg:hidden"> </span>
                <br className="hidden lg:inline" />
                who
                <br className="inline lg:hidden" />{" "}
                <span className="hidden lg:inline"></span>
                inspire the world
              </h1>
            </div>
          </div>

          <div className="w-fit flex items-center rounded-full px-4 gap-4 mt-4 bg-white">
            <span className="font-serif lg:font-sans font-semibold text-xl lg:text-[32px] leading-[140%] text-grey-600">
              Nursery
            </span>
            <div className="w-2 h-2 rounded-full bg-c-red"></div>
            <span className="font-serif lg:font-sans font-semibold text-xl lg:text-[32px] leading-[140%] text-grey-600">
              Primary
            </span>
            <div className="w-2 h-2 rounded-full bg-c-red"></div>
            <span className="font-serif lg:font-sans font-semibold text-xl lg:text-[32px] leading-[140%] text-grey-600">
              Secondary
            </span>
          </div>
        </div>
      </div>

      <div className="w-full relative flex flex-wrap lg:flex-nowrap items-center justify-evenly">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="w-1/2 lg:w-1/4 h-[264px] lg:h-[485px] relative"
          >
            <Image
              key={i}
              src={`/hero${i}.jpg`}
              alt="students smiling"
              fill
              className="object-cover"
              // style={{ objectFit: "contain" }} // preserves natural height
            />
          </div>
        ))}
      </div>

      <div className="w-full py-20 px-4.5 bg-grey-900 flex flex-col items-center justify-center">
        <div className="rounded-full w-[83px] h-[83px] bg-white flex items-center justify-center">
          <Image src={`/quote.svg`} alt="quote" width={47.04} height={36.18} />
        </div>
        <Heading1 className="text-[32px]! lg:text-[40px]! max-w-[356px] lg:max-w-[598px] text-center text-white mt-6">
          Nothing is of greater importance than the right early instruction of
          youth
        </Heading1>
        <BigPara className="text-white mt-6 text-center">
          - Peter Stuyvesant
        </BigPara>
      </div>

      <div className="mt-30 px-4.5 flex flex-col lg:flex-row justify-between items-stretch lg:items-center container mx-auto">
        <div className="lg:basis-1/2">
          <h3 className="font-serif font-semibold text-[32px] leading-[130%] text-grey-900">
            Tomorrow’s leaders are built in today’s classrooms. Give your child
            the chance to learn, explore, and become the best version of
            themselves
          </h3>
          <Link href="/enrollment">
            <Button className="mt-6">Enroll Now</Button>
          </Link>
        </div>
        <div className="mt-20 lg:mt-0 relative lg:basis-1/2 flex justify-end items-start">
          <div className="relative w-[162px] h-[164px] lg:w-[267px] lg:h-[256px] bg-grey-300 -mr-[119px] z-10 self-end -mb-4 rounded-lg">
            <Image
              src={`/classroom.jpg`}
              alt="students sitted in a classroom with a teacher teaching"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative w-[267px] h-[290px] lg:w-[440px] lg:h-[451px] bg-grey-400 rounded-lg">
            <Image
              src={`/leaders1.jpg`}
              alt="students smiling"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="mt-30 container mx-auto px-4.5">
        <Heading1 className="max-w-[582px] mb-10 text-[32px]! lg:text-[40px]!">
          Facilities to help your child succeed
        </Heading1>
        <div className="flex flex-wrap gap-6 lg:flex-nowrap justify-between">
          {[
            "Science Labs",
            "Standard Classrooms",
            "Smart Boards",
            "Serene Environment",
          ].map((t, i) => (
            <div
              className="relative basis-[calc(50%_-_12px)] lg:basis-[272px] grow shrink h-auto"
              key={i}
            >
              <div className="relative w-full aspect-[272/195] bg-[#D9D9D9] rounded grow shrink">
                <div className="z-10 absolute top-2 left-2 w-9 h-9 rounded-full bg-grey-300 flex justify-center items-center">
                  <Image
                    src="/books.svg"
                    alt="sbooksk icon"
                    width={15.62}
                    height={16.25}
                    className="basis-1/4 object-contain"
                    // style={{ objectFit: "contain" }} // preserves natural height
                  />
                </div>
                <Image
                  src={`/facilities${i + 1}.jpg`}
                  alt="students smiling"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <BigPara className="text-center mt-2">{t}</BigPara>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-30 mb-30 w-full container mx-auto px-4.5">
        <div className="relative w-full aspect-[357/667] lg:aspect-[1160/664] ">
          <div className="absolute card1 inset-0 -z-10"></div>
          <div className="absolute w-full h-[57.23%] -z-50">
            <div className="relative w-full h-full lg:h-full -z-50">
              <Image
                src="/card.jpg"
                alt="students sitted in a classroom smiling"
                fill
                className="object-cover h-auto -z-50"
                // style={{ objectFit: "contain" }} // preserves natural height
              />
            </div>
          </div>

          <div className="absolute bottom-0 flex gap-10 flex-col items-center justify-between w-full py-15 lg:py-18.5">
            <Heading1 className="px-4 text-center text-white text-2xl! leading-[140%]! lg:text-[40px]! lg:leading-[130%]! lg: max-w-[896px]">
              Oakridge Academy offers programs that will help support and
              integrate newcomers and immigrant families toward realizing their
              vision and the Canadian Dream
            </Heading1>
            <Link href="/enrollment">
              <Button>Enroll Now</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden w-full bg-grey-200 mt-30 mb-30 py-30">
        <div className="container mx-auto relative px-4.5">
          <div className="w-full relative flex flex-col lg:flex-row lg:items-stretch gap-20">
            <div className="basis-1/2 shrink-0">
              <Heading1 className="mb-4">Featured news and events</Heading1>
              <BigPara className="text-grey-700">
                From our annual sport days to social events, there&apos;s never
                a dull moment at the College. We believe in fostering a strong
                sense of community, and our events are a testament to that. Stay
                updated on all the latest news and events by visiting our
                website regularly
              </BigPara>
              <Button className="mt-6">See all events</Button>
            </div>
            <div className="flex w-full snap-x snap-mandatory lg:w-auto overflow-x-hidden lg:overflow-x-visible flex-nowrap gap-[27px]">
              <EventCard />
              <EventCard />
              <EventCard />
              <EventCard />
              <EventCard />
              <EventCard />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
