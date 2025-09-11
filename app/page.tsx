import Image from "next/image";
import Button from "./components/button";
import {
  BigPara,
  Heading1,
  Heading3,
  Para,
  SPara,
} from "./components/typography";
import EventCard from "./components/event-card";

export default function Home() {
  return (
    <>
      <div className="container mx-auto py-4.5 flex justify-between">
        <Image
          src="/oakridge.png"
          alt="Next.js logo"
          width={80}
          height={80}
          priority
        />

        <div className="flex items-center justify-between gap-10">
          <Button>Enroll now</Button>

          <div className="flex flex-col gap-1">
            <Image
              src="/nav.svg"
              alt="nav icon"
              width={42}
              height={12}
              priority
            />
            <span className="text-lg leading-[100%]">Menu</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
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
                className="absolute -ml-[18.57px] -mt-[20.2px]"
              />
              <h1 className="font-semibold text-[64px] text-grey-900 leading-[120%] text-center font-serif">
                Shaping the learners
                <br />
                who inspire the world
              </h1>
            </div>
          </div>

          <div className="w-fit flex items-center rounded-full px-4 gap-4 mt-4 bg-white">
            <span className="font-semibold text-[32px] leading-[140%] text-grey-600">
              Nursery
            </span>
            <div className="w-2 h-2 rounded-full bg-c-red"></div>
            <span className="font-semibold text-[32px] leading-[140%] text-grey-600">
              Primary
            </span>
            <div className="w-2 h-2 rounded-full bg-c-red"></div>
            <span className="font-semibold text-[32px] leading-[140%] text-grey-600">
              Secondary
            </span>
          </div>
        </div>
      </div>

      <div className="w-full relative flex items-center justify-evenly">
        {[1, 2, 3, 4].map((i) => (
          <Image
            key={i}
            src={`/rectangle${i}.png`}
            alt="school building icon"
            width={360}
            height={485}
            className="basis-1/4 object-contain"
            // style={{ objectFit: "contain" }} // preserves natural height
          />
        ))}
      </div>

      <div className="w-full py-20 bg-grey-900 flex flex-col items-center justify-center">
        <div className="rounded-full w-[83px] h-[83px] bg-white flex items-center justify-center">
          <Image src={`/quote.svg`} alt="quote" width={47.04} height={36.18} />
        </div>
        <Heading1 className="text-center text-white mt-6">
          Nothing is of greater
          <br />
          importance than the right early
          <br />
          instruction of youth
        </Heading1>
        <p className="text-white mt-6 font-medium text-xl leading-[140%] text-center">
          - Peter Stuyvesant
        </p>
      </div>

      <div className="mt-30 flex justify-between items-center container mx-auto">
        <div className="basis-1/2">
          <h3 className="font-serif font-semibold text-[32px] leading-[130%] text-grey-900">
            Tomorrow’s leaders are built in today’s classrooms. Give your child
            the chance to learn, explore, and become the best version of
            themselves
          </h3>
          <Button className="mt-6">Enroll Now</Button>
        </div>
        <div className="relative basis-1/2 flex justify-end items-start">
          <div className="w-[267px] h-[256px] bg-grey-300 -mr-[119px] z-10 self-end -mb-4"></div>
          <div className="w-[440px] h-[451px] bg-grey-400 "></div>
        </div>
      </div>

      <div className="mt-30 container mx-auto">
        <Heading1 className="max-w-1/2 mb-10">
          World-class facilities to help you succeed
        </Heading1>
        <div className="flex gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div className="relative w-[272px] h-auto grow shrink" key={i}>
              <div className="w-full h-[195px] bg-[#D9D9D9] rounded">
                <div className="absolute top-2 left-2 w-9 h-9 rounded-full bg-grey-300 flex justify-center items-center">
                  <Image
                    src="/books.svg"
                    alt="sbooksk icon"
                    width={15.62}
                    height={16.25}
                    className="basis-1/4 object-contain"
                    // style={{ objectFit: "contain" }} // preserves natural height
                  />
                </div>
              </div>
              <BigPara className="text-center">e-library</BigPara>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-30 w-full container mx-auto">
        <div className="relative w-full h-[258px]">
          <Image
            src="/students1.png"
            alt="sbooksk icon"
            fill
            className="object-cover h-auto"
            // style={{ objectFit: "contain" }} // preserves natural height
          />
        </div>
        <div className="flex gap-10 flex-col items-center justify-between w-full py-18.5 bg-grey-900 ">
          <Heading1 className="text-center text-white max-w-[896px]">
            Oakridge Academy offers programs that will help support and
            integrate newcomers and immigrant families toward realizing their
            vision and the Canadian Dream
          </Heading1>
          <Button>Enroll now</Button>
        </div>
      </div>

      <div className="w-full bg-grey-300 mt-30 mb-30 py-30">
        <div className=" container mx-auto relative">
          <div className="w-full relative flex gap-20">
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
            <div className="flex basis-1/2 overflow-x-visible flex-nowrap gap-[27px]">
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
    </>
  );
}
