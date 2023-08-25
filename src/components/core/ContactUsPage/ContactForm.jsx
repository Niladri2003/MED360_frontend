import React from "react"

import ContactUsForm from "./ContactUsForm"

const ContactForm = () => {
  return (
    <div className="flex flex-col gap-3 rounded-xl border-[1px] border-white p-7 text-richblack-300 shadow-md shadow-black lg:p-14">
      <h1 className="text-4xl font-semibold leading-10 text-richblack-5">
        Have a specific question or message?
      </h1>
      <p className="text-white">
        Use the contact form below to get in touch with us. Please provide your
        name, email address, and a detailed message, and we'll respond to you as
        soon as possible
      </p>

      <div className="mt-7">
        <ContactUsForm />
      </div>
    </div>
  )
}

export default ContactForm
