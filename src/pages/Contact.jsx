import React from "react"

import Image_Contact from "../assets/Images/contact_page_doc.png"
import Footer from "../components/Common/Footer"
import ReviewSlider from "../components/Common/ReviewSlider"
import ContactForm from "../components/core/ContactUsPage/ContactForm"

const Contact = () => {
  return (
    <div>
      <div className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-center gap-10 text-white lg:flex-row">
        {/* Contact Details */}
        <div className="lg:w-[40%]">
          <img src={Image_Contact} />
        </div>

        {/* Contact Form */}
        <div className="lg:w-[60%]">
          <ContactForm />
        </div>
      </div>
      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        {/* Reviws from Other Learner */}
        {/* <h1 className="mt-8 text-center text-4xl font-semibold">
          Reviews from other learners
        </h1> */}
        {/* <ReviewSlider /> */}
      </div>
      <Footer />
    </div>
  )
}

export default Contact
