"use client";
import { BigPara, Heading1, Para } from "../components/typography";
import { useState } from "react";
import NavSection, { TopNav } from "../components/nav-section";
import Footer from "../components/footer";

export default function Enroll() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      {navOpen && <NavSection onClose={() => setNavOpen(false)} />}
      <TopNav navOpen={navOpen} setNavOpen={setNavOpen} />

      <div className="container mx-auto px-4.5 mt-10 mb-30">
        <Heading1 className="mb-6">Enrollment</Heading1>
        <BigPara className="text-grey-700">
          Digital Enrollment is coming soon. In the mean time, you can visit the
          school at 50c Int&apos;l Airport Road, Rukpokwu, Port Harcourt or call{" "}
          <a href="tel:+2348038954818">08038954818</a>
        </BigPara>
      </div>

      <Footer />
    </>
  );
}
