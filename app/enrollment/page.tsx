"use client";
import {
  BigPara,
  Heading1,
  Heading3,
  Heading4,
  Para,
  SPara,
} from "../components/typography";
import { useState } from "react";
import NavSection, { TopNav } from "../components/nav-section";
import Footer from "../components/footer";
import { Input } from "../components/input";
import SelectInput from "../components/select-input";
import DatePicker from "../components/DatePicker";
import PassportUpload from "../components/passport-upload";
import Button from "../components/button";
import EnrollmentForm from "../components/EnrollmentForm";

export default function Enroll() {
  const [navOpen, setNavOpen] = useState(false);
  
  return (
    <>
      {navOpen && <NavSection onClose={() => setNavOpen(false)} />}
      <TopNav navOpen={navOpen} setNavOpen={setNavOpen} />

      <div className="container mx-auto px-4.5 mt-10 mb-30">
        <Heading1 className="mb-6">Enrollment</Heading1>
        <BigPara className="text-grey-700">
          Fill in the application form below and submit. 
        </BigPara>

        <EnrollmentForm />
      </div>

      <Footer />
    </>
  );
}
