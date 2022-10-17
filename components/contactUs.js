import React, { useState } from "react";

function header({ fontSize, fontColor, paddingRight, marginBottom, marginTop, justify }) {
  const [form, setForm] = useState(false);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [textArea, setTextArea] = useState("");

  // Email Validation
  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const submitForm = (e) => {
    if (!name) {
      console.log("Enter Name ");
    } else if (!company) {
      console.log("Enter Company Name ");
    } else if (!email) {
      console.log("Enter Email ");
    } else if (!phone) {
      console.log("Enter Phone NUmber ");
    } else if (!validateEmail(email)) {
      console.log("email wrong");
    } else {
      let sendingObj = {
        name: name,
        company: company,
        email: email,
        phone: phone,
        text: textArea,
      };
      console.log(sendingObj);
    }
  };
  return (
    <>
      <header className={`flex items-center cursor-pointer ${justify} ${paddingRight} ${marginBottom} ${marginTop}`} onClick={() => setForm(true)}>
        <p className={`${fontSize} ${fontColor} leading-none underline jarkataDisplay `}>Get in touch</p>
        <svg className={`ml-2 ${fontColor}`} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 16L19 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 8L19 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </header>
      <div className={`border-l flex justify-between border-gray-200 bg-white  fixed h-screen w-full top-0 left-[100px] dark:z-50 z-50 duration-500 ease-in-out ${form ? `translate-x-0` : `translate-x-full`}`}>
        <div className="w-full py-[125px] px-12">
          <h1 className="text-6xl font-bold leading-[61px] text-gray-900">We’re glad you’re here</h1>
          <p className="text-lg Sansmedium leading-[18px] text-gray-900 mt-12">This right here is the start of something amazing</p>
          <p className="text-xl Sansmedium mt-16 leading-5 text-gray-900 pb-2">Let’s get to it</p>
          <div className="mt-2">
            <input placeholder="Name" type="name" required={true} onChange={(e) => setName(e.target.value)} className="text-lg focus:outline-none leading-none text-gray-500 border-gray-200 border-b w-[658px] py-[18px]" />
          </div>
          <div className="mt-2">
            <input placeholder="Company" type="company" onChange={(e) => setCompany(e.target.value)} required={true} className="text-lg focus:outline-none leading-none text-gray-500 border-gray-200 border-b w-[658px] py-[18px]" />
          </div>
          <div className="mt-2">
            <input placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)} required={true} className="text-lg focus:outline-none leading-none text-gray-500 border-gray-200 border-b w-[658px] py-[18px]" />
          </div>
          <div className="mt-2">
            <input placeholder="Phone Number" onChange={(e) => setPhone(e.target.value)} type="phone number" className="text-lg focus:outline-none leading-none text-gray-500 border-gray-200 border-b w-[658px] py-[18px]" />
          </div>
          <div>
            <p className="text-xl Sansmedium leading-5 mt-[56px] text-gray-900">How can we help?</p>
            <div className="mt-2">
              <input onChange={(e) => setTextArea(e.target.value)} placeholder="Let’s deep dive into your project..." type="email" required={true} className="text-lg focus:outline-none leading-none text-gray-500 border-gray-200 border-b w-[658px] py-[18px]" />
            </div>
            <div className="mt-12 w-[658px] flex items-center justify-end">
              <button onClick={submitForm} className="text-lg border-b-2 border-gray-800 text-gray-800 Sansmedium hover:text-gray-700 focus:outline-none">
                Send
              </button>
            </div>
          </div>
        </div>
        <div className="w-2/5 flex flex-col flex-shrink-0 bg-[#0B0D13] relative right-[100px] ">
          <div className="absolute top-0 right-0 justify-end p-[28px] cursor-pointer" onClick={() => setForm(false)}>
            <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 10L10 30" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10 10L30 30" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h1 className="text-2xl px-[64px] pt-[125px] font-medium leading-10 text-white">
            4275 Executive Square
            <br />
            Suite 200
            <br />
            LA Jolla, CA 92037
          </h1>
          <div className="px-[64px] mt-[80px]">
            <p className="text-xl Sansmedium leading-5 text-gray-400">Start a conversation</p>
            <p className="text-lg Sansmedium font-medium mt-6 leading-[18px] text-white">howdy@alphasquad.tech</p>
            <p className="text-lg Sansmedium font-medium mt-6 leading-[18px] text-white">858-405-0249</p>
          </div>
          <div className="px-[64px] mt-[80px]">
            <p className="text-xl Sansmedium leading-5 text-gray-400">Connect with us</p>
            <p className="text-lg Sansmedium font-medium mt-6 leading-[18px] text-white">Twitter</p>
            <p className="text-lg Sansmedium font-medium mt-6 leading-[18px] text-white">Linkedin</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default header;
