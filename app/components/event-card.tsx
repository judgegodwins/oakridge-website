import Image from "next/image";
import { Heading3, Para, SPara } from "./typography";

export default function EventCard() {
  return (
    <div className="flex flex-col w-full lg:w-[407px] min-h-[535px] bg-white border border-solid border-grey-400">
      <div className="relative w-full h-[226px]">
        <Image src="/eventcard.png" alt="event" fill className="object-cover" />
      </div>
      <div className="h-[309px] py-10 px-6 flex flex-col">
        <div className="flex justify-between items-center">
          <div className="flex flex-col py-1 px-2 border border-grey-500 border-solid">
            <Para className="text-grey-900">Dec.</Para>
            <Heading3 className="text-grey-900">28</Heading3>
          </div>
          <SPara className="text-grey-700">Add to calendar</SPara>
        </div>
        <div className="mt-6">
          <Heading3 className="text-grey-900">Winter Sports Day</Heading3>
          <Para className="mt-2 text-grey-700 line-clamp-3">
            From our annual sport days to social events, there&apos;s never a
            dull moment at the College. We believe in fostering a strong sense
            of community, and our events are a testament to that. Stay updated
            on all the latest news and events by visiting our website regularly
          </Para>
          <SPara className="text-grey-700 mt-1">See more</SPara>
        </div>
      </div>
    </div>
  );
}
