// Icons Import
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"
import hero_img from "../assets/Images/hero_gif.gif"
import hero_img2 from "../assets/Images/hero_gif2.gif"

// Image and Video Import
import Banner from "../assets/Images/banner.mp4"
// Component Imports
import Footer from "../components/Common/Footer"
import HomeCardGroup from "../components/Common/HomeCardGroup"
import ReviewSlider from "../components/Common/ReviewSlider"
import Slider from "../components/Slider"
import CTAButton from "../components/core/HomePage/Button"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import ExploreMore from "../components/core/HomePage/ExploreMore"
import HighlightText from "../components/core/HomePage/HighlightText"
import InstructorSection from "../components/core/HomePage/InstructorSection"
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection"
import TimelineSection from "../components/core/HomePage/Timeline"

function Home() {
  return (
    <div>
      {/* Section 1 */}
      <Slider />
      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white">
        {/* Become a Instructor Button */}
        {/* <Link to={"/signup"}>
          <div className="group mx-auto mt-16 w-fit rounded-full bg-richblack-800 p-1 font-bold text-richblack-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none">
            <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link> */}
        <p>Trending section</p>
        <HomeCardGroup />

        {/* Heading */}
        <div className="text-center text-4xl font-semibold">
          Your New Smile
          
          <HighlightText text={"Starts From Here"} />
        </div>

        {/* Sub Heading */}
        <div className="-mt-3 w-[90%] text-center text-lg font-bold text-richblack-300">
        Your journey to a healthier smile begins right here. With our online doctor consultation app, you can access expert advice and personalized care from the comfort of your home.Take the first step towards a brighter, healthier you by connecting with experienced doctors through our user-friendly online platform.
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-row gap-7">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
          <CTAButton active={false} linkto={"/login"}>
            Book a Demo
          </CTAButton>
        </div>

        {/* Video */}
        {/* <div className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
          <video
            className="shadow-[20px_20px_rgba(255,255,255)]"
            muted
            loop
            autoPlay
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div> */}

        {/* Code Section 1  */}
        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Meet with our our  <HighlightText text={"Co-Founder"} /> Arnab Maity
              </div>
            }
            subheading={
              "Highly experienced and motivated Co Founder with a track record of success in business management. Proven ability to develop and execute strategies to drive growth and profitability."
            }
            ctabtn1={{
              btnText: "Try it Yourself",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}

            image1={hero_img}

          />
        </div>

        {/* Code Section 2 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                Start
                <HighlightText text={"coding in seconds"} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}

            image2={hero_img2}

          // codeColor={"text-white"}
          // codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
          // backgroundGradient={<div className="codeblock2 absolute"></div>}


          />
        </div>

        {/* Explore Section */}
        <ExploreMore />
      </div>

      {/* Section 2 */}
      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg h-[320px]">
          {/* Explore Full Catagory Section */}
          <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
            <div className="lg:h-[150px]"></div>
            <div className="flex flex-row gap-7 text-white lg:mt-8">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-2">
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/login"}>
                Learn More
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">
          {/* Job that is in Demand - Section 1 */}
          <div className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
            <div className="text-4xl font-semibold lg:w-[45%] ">
              Steps to be followed to {" "}
              <br/>
              <HighlightText text={" sign up "} />
            </div>
            <div className="flex flex-col items-start gap-10 lg:w-[40%]">
              <div className="text-[16px]">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>
              <CTAButton active={true} linkto={"/signup"}>
                <div className="">Learn More</div>
              </CTAButton>
            </div>
          </div>

          {/* Timeline Section - Section 2 */}
          <TimelineSection />

          {/* Learning Language Section - Section 3 */}
          <LearningLanguageSection />
        </div>
      </div>

      {/* Section 3 */}
      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        {/* Become a instructor section */}
        <InstructorSection />

        {/* Reviws from Other Learner */}
        {/* <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other learners
        </h1>
        <ReviewSlider /> */}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home


// <!DOCTYPE html>
// <html>
// 	<head>
// 		<meta charset='UTF-8'>
// 			<title>XML To HTML using codebeautify.org</title>
// 		</head>
// 		<body>
// 			<table border=1>
// 				<thead>
// 					<tr>
// 						<th>TextExpression.NamespacesForImplementation.List.String.0.__prefix</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.0.__text</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.0.toString</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.1.__prefix</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.1.__text</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.1.toString</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.2.__prefix</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.2.__text</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.2.toString</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.3.__prefix</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.3.__text</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.3.toString</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.4.__prefix</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.4.__text</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.4.toString</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.5.__prefix</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.5.__text</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.5.toString</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.6.__prefix</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.6.__text</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.6.toString</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.7.__prefix</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.7.__text</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.7.toString</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.8.__prefix</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.8.__text</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.8.toString</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.9.__prefix</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.9.__text</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.9.toString</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.10.__prefix</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.10.__text</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.10.toString</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.11.__prefix</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.11.__text</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.11.toString</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.12.__prefix</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.12.__text</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.12.toString</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.13.__prefix</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.13.__text</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.13.toString</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.14.__prefix</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.14.__text</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.14.toString</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.15.__prefix</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.15.__text</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.15.toString</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.16.__prefix</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.16.__text</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.16.toString</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.17.__prefix</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.17.__text</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.17.toString</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.18.__prefix</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.18.__text</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.18.toString</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.19.__prefix</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.19.__text</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.19.toString</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.20.__prefix</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.20.__text</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.20.toString</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.21.__prefix</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.21.__text</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.21.toString</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.22.__prefix</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.22.__text</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.22.toString</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.23.__prefix</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.23.__text</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.23.toString</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.24.__prefix</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.24.__text</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.24.toString</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.25.__prefix</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.25.__text</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.25.toString</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.26.__prefix</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.26.__text</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.26.toString</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.27.__prefix</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.27.__text</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.27.toString</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.28.__prefix</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.28.__text</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.28.toString</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.29.__prefix</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.29.__text</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.29.toString</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.30.__prefix</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.30.__text</th>
// 						<th>TextExpression.NamespacesForImplementation.List.String.30.toString</th>
// 						<th>TextExpression.NamespacesForImplementation.List._x:TypeArguments</th>
// 						<th>TextExpression.NamespacesForImplementation.List._Capacity</th>
// 						<th>TextExpression.NamespacesForImplementation.List.__prefix</th>
// 						<th>TextExpression.ReferencesForImplementation.List.AssemblyReference.0</th>
// 						<th>TextExpression.ReferencesForImplementation.List.AssemblyReference.1</th>
// 						<th>TextExpression.ReferencesForImplementation.List.AssemblyReference.2</th>
// 						<th>TextExpression.ReferencesForImplementation.List.AssemblyReference.3</th>
// 						<th>TextExpression.ReferencesForImplementation.List.AssemblyReference.4</th>
// 						<th>TextExpression.ReferencesForImplementation.List.AssemblyReference.5</th>
// 						<th>TextExpression.ReferencesForImplementation.List.AssemblyReference.6</th>
// 						<th>TextExpression.ReferencesForImplementation.List.AssemblyReference.7</th>
// 						<th>TextExpression.ReferencesForImplementation.List.AssemblyReference.8</th>
// 						<th>TextExpression.ReferencesForImplementation.List.AssemblyReference.9</th>
// 						<th>TextExpression.ReferencesForImplementation.List.AssemblyReference.10</th>
// 						<th>TextExpression.ReferencesForImplementation.List.AssemblyReference.11</th>
// 						<th>TextExpression.ReferencesForImplementation.List.AssemblyReference.12</th>
// 						<th>TextExpression.ReferencesForImplementation.List.AssemblyReference.13</th>
// 						<th>TextExpression.ReferencesForImplementation.List.AssemblyReference.14</th>
// 						<th>TextExpression.ReferencesForImplementation.List.AssemblyReference.15</th>
// 						<th>TextExpression.ReferencesForImplementation.List.AssemblyReference.16</th>
// 						<th>TextExpression.ReferencesForImplementation.List.AssemblyReference.17</th>
// 						<th>TextExpression.ReferencesForImplementation.List.AssemblyReference.18</th>
// 						<th>TextExpression.ReferencesForImplementation.List.AssemblyReference.19</th>
// 						<th>TextExpression.ReferencesForImplementation.List.AssemblyReference.20</th>
// 						<th>TextExpression.ReferencesForImplementation.List.AssemblyReference.21</th>
// 						<th>TextExpression.ReferencesForImplementation.List.AssemblyReference.22</th>
// 						<th>TextExpression.ReferencesForImplementation.List.AssemblyReference.23</th>
// 						<th>TextExpression.ReferencesForImplementation.List.AssemblyReference.24</th>
// 						<th>TextExpression.ReferencesForImplementation.List.AssemblyReference.25</th>
// 						<th>TextExpression.ReferencesForImplementation.List.AssemblyReference.26</th>
// 						<th>TextExpression.ReferencesForImplementation.List.AssemblyReference.27</th>
// 						<th>TextExpression.ReferencesForImplementation.List.AssemblyReference.28</th>
// 						<th>TextExpression.ReferencesForImplementation.List.AssemblyReference.29</th>
// 						<th>TextExpression.ReferencesForImplementation.List.AssemblyReference.30</th>
// 						<th>TextExpression.ReferencesForImplementation.List._x:TypeArguments</th>
// 						<th>TextExpression.ReferencesForImplementation.List._Capacity</th>
// 						<th>TextExpression.ReferencesForImplementation.List.__prefix</th>
// 						<th>Sequence.Sequence.Variables.Variable.0._x:TypeArguments</th>
// 						<th>Sequence.Sequence.Variables.Variable.0._Name</th>
// 						<th>Sequence.Sequence.Variables.Variable.1._x:TypeArguments</th>
// 						<th>Sequence.Sequence.Variables.Variable.1._Name</th>
// 						<th>Sequence.WorkflowViewStateService.ViewState.Dictionary.Boolean._x:Key</th>
// 						<th>Sequence.WorkflowViewStateService.ViewState.Dictionary.Boolean.__prefix</th>
// 						<th>Sequence.WorkflowViewStateService.ViewState.Dictionary.Boolean.__text</th>
// 						<th>Sequence.WorkflowViewStateService.ViewState.Dictionary.Boolean.toString</th>
// 						<th>Sequence.WorkflowViewStateService.ViewState.Dictionary._x:TypeArguments</th>
// 						<th>Sequence.WorkflowViewStateService.ViewState.Dictionary.__prefix</th>
// 						<th>Sequence.WorkflowViewStateService.ViewState.__prefix</th>
// 						<th>Sequence.Assign.0.Assign.To.OutArgument._x:TypeArguments</th>
// 						<th>Sequence.Assign.0.Assign.To.OutArgument.__text</th>
// 						<th>Sequence.Assign.0.Assign.To.OutArgument.toString</th>
// 						<th>Sequence.Assign.0.Assign.Value.InArgument._x:TypeArguments</th>
// 						<th>Sequence.Assign.0.Assign.Value.InArgument.__text</th>
// 						<th>Sequence.Assign.0.Assign.Value.InArgument.toString</th>
// 						<th>Sequence.Assign.0._sap:VirtualizedContainerService.HintSize</th>
// 						<th>Sequence.Assign.0._sap2010:WorkflowViewState.IdRef</th>
// 						<th>Sequence.Assign.1.Assign.To.OutArgument._x:TypeArguments</th>
// 						<th>Sequence.Assign.1.Assign.To.OutArgument.__text</th>
// 						<th>Sequence.Assign.1.Assign.To.OutArgument.toString</th>
// 						<th>Sequence.Assign.1.Assign.Value.InArgument._x:TypeArguments</th>
// 						<th>Sequence.Assign.1.Assign.Value.InArgument.__text</th>
// 						<th>Sequence.Assign.1.Assign.Value.InArgument.toString</th>
// 						<th>Sequence.Assign.1._sap:VirtualizedContainerService.HintSize</th>
// 						<th>Sequence.Assign.1._sap2010:WorkflowViewState.IdRef</th>
// 						<th>Sequence.ReadTextFile._File</th>
// 						<th>Sequence.ReadTextFile._Content</th>
// 						<th>Sequence.ReadTextFile._DisplayName</th>
// 						<th>Sequence.ReadTextFile._FileName</th>
// 						<th>Sequence.ReadTextFile._sap:VirtualizedContainerService.HintSize</th>
// 						<th>Sequence.ReadTextFile._sap2010:WorkflowViewState.IdRef</th>
// 						<th>Sequence.ReadTextFile.__prefix</th>
// 						<th>Sequence.SendMail.SendMail.Files.List._x:TypeArguments</th>
// 						<th>Sequence.SendMail.SendMail.Files.List._Capacity</th>
// 						<th>Sequence.SendMail.SendMail.Files.List.__prefix</th>
// 						<th>Sequence.SendMail.SendMail.Files.__prefix</th>
// 						<th>Sequence.SendMail._Bcc</th>
// 						<th>Sequence.SendMail._Cc</th>
// 						<th>Sequence.SendMail._MailMessage</th>
// 						<th>Sequence.SendMail._ReplyTo</th>
// 						<th>Sequence.SendMail._SecurePassword</th>
// 						<th>Sequence.SendMail._TimeoutMS</th>
// 						<th>Sequence.SendMail._Body</th>
// 						<th>Sequence.SendMail._DisplayName</th>
// 						<th>Sequence.SendMail._Email</th>
// 						<th>Sequence.SendMail._EnableSSL</th>
// 						<th>Sequence.SendMail._From</th>
// 						<th>Sequence.SendMail._sap:VirtualizedContainerService.HintSize</th>
// 						<th>Sequence.SendMail._sap2010:WorkflowViewState.IdRef</th>
// 						<th>Sequence.SendMail._IsBodyHtml</th>
// 						<th>Sequence.SendMail._Name</th>
// 						<th>Sequence.SendMail._Password</th>
// 						<th>Sequence.SendMail._Port</th>
// 						<th>Sequence.SendMail._SecureConnection</th>
// 						<th>Sequence.SendMail._Server</th>
// 						<th>Sequence.SendMail._Subject</th>
// 						<th>Sequence.SendMail._To</th>
// 						<th>Sequence.SendMail.__prefix</th>
// 						<th>Sequence.MessageBox._Caption</th>
// 						<th>Sequence.MessageBox._ChosenButton</th>
// 						<th>Sequence.MessageBox._AutoCloseAfter</th>
// 						<th>Sequence.MessageBox._DisplayName</th>
// 						<th>Sequence.MessageBox._sap:VirtualizedContainerService.HintSize</th>
// 						<th>Sequence.MessageBox._sap2010:WorkflowViewState.IdRef</th>
// 						<th>Sequence.MessageBox._Text</th>
// 						<th>Sequence.MessageBox.__prefix</th>
// 						<th>Sequence._DisplayName</th>
// 						<th>Sequence._sap:VirtualizedContainerService.HintSize</th>
// 						<th>Sequence._sap2010:WorkflowViewState.IdRef</th>
// 						<th>_xmlns</th>
// 						<th>_
// 							xmlns:mc
// 						</th>
// 						<th>_
// 							xmlns:mva
// 						</th>
// 						<th>_
// 							xmlns:sap
// 						</th>
// 						<th>_
// 							xmlns:sap2010
// 						</th>
// 						<th>_
// 							xmlns:scg
// 						</th>
// 						<th>_
// 							xmlns:ui
// 						</th>
// 						<th>_
// 							xmlns:x
// 						</th>
// 						<th>_mc:Ignorable</th>
// 						<th>_x:Class</th>
// 						<th>_mva:VisualBasic.Settings</th>
// 						<th>_sap:VirtualizedContainerService.HintSize</th>
// 						<th>_sap2010:WorkflowViewState.IdRef</th>
// 					</tr>
// 				</thead>
// 				<tbody>
// 					<tr>
// 						<td>x</td>
// 						<td>System.Activities</td>
// 						<td></td>
// 						<td>x</td>
// 						<td>System.Activities.Statements</td>
// 						<td></td>
// 						<td>x</td>
// 						<td>System.Activities.Expressions</td>
// 						<td></td>
// 						<td>x</td>
// 						<td>System.Activities.Validation</td>
// 						<td></td>
// 						<td>x</td>
// 						<td>System.Activities.XamlIntegration</td>
// 						<td></td>
// 						<td>x</td>
// 						<td>Microsoft.VisualBasic</td>
// 						<td></td>
// 						<td>x</td>
// 						<td>Microsoft.VisualBasic.Activities</td>
// 						<td></td>
// 						<td>x</td>
// 						<td>System</td>
// 						<td></td>
// 						<td>x</td>
// 						<td>System.Collections</td>
// 						<td></td>
// 						<td>x</td>
// 						<td>System.Collections.Generic</td>
// 						<td></td>
// 						<td>x</td>
// 						<td>System.Data</td>
// 						<td></td>
// 						<td>x</td>
// 						<td>System.Diagnostics</td>
// 						<td></td>
// 						<td>x</td>
// 						<td>System.Drawing</td>
// 						<td></td>
// 						<td>x</td>
// 						<td>System.IO</td>
// 						<td></td>
// 						<td>x</td>
// 						<td>System.Linq</td>
// 						<td></td>
// 						<td>x</td>
// 						<td>System.Net.Mail</td>
// 						<td></td>
// 						<td>x</td>
// 						<td>System.Xml</td>
// 						<td></td>
// 						<td>x</td>
// 						<td>System.Xml.Linq</td>
// 						<td></td>
// 						<td>x</td>
// 						<td>UiPath.Core</td>
// 						<td></td>
// 						<td>x</td>
// 						<td>UiPath.Core.Activities</td>
// 						<td></td>
// 						<td>x</td>
// 						<td>System.Windows.Markup</td>
// 						<td></td>
// 						<td>x</td>
// 						<td>System.Collections.ObjectModel</td>
// 						<td></td>
// 						<td>x</td>
// 						<td>System.Activities.DynamicUpdate</td>
// 						<td></td>
// 						<td>x</td>
// 						<td>UiPath.Platform.ResourceHandling</td>
// 						<td></td>
// 						<td>x</td>
// 						<td>System.Reflection</td>
// 						<td></td>
// 						<td>x</td>
// 						<td>System.Runtime.InteropServices</td>
// 						<td></td>
// 						<td>x</td>
// 						<td>System.Security</td>
// 						<td></td>
// 						<td>x</td>
// 						<td>UiPath.Mail</td>
// 						<td></td>
// 						<td>x</td>
// 						<td>UiPath.Mail.SMTP.Activities</td>
// 						<td></td>
// 						<td>x</td>
// 						<td>UiPath.Mail.Activities</td>
// 						<td></td>
// 						<td>x</td>
// 						<td>UiPath.Shared.Activities</td>
// 						<td></td>
// 						<td>x:String</td>
// 						<td>31</td>
// 						<td>scg</td>
// 						<td>System.Activities</td>
// 						<td>Microsoft.VisualBasic</td>
// 						<td>mscorlib</td>
// 						<td>System.Data</td>
// 						<td>System</td>
// 						<td>System.Drawing</td>
// 						<td>System.Core</td>
// 						<td>System.Xml</td>
// 						<td>System.Xml.Linq</td>
// 						<td>PresentationFramework</td>
// 						<td>WindowsBase</td>
// 						<td>PresentationCore</td>
// 						<td>System.Xaml</td>
// 						<td>UiPath.System.Activities</td>
// 						<td>UiPath.UiAutomation.Activities</td>
// 						<td>System.Data.DataSetExtensions</td>
// 						<td>UiPath.System.Activities.Design</td>
// 						<td>System.ServiceModel</td>
// 						<td>Microsoft.Bcl.AsyncInterfaces</td>
// 						<td>System.ValueTuple</td>
// 						<td>System.ComponentModel.Composition</td>
// 						<td>System.Memory</td>
// 						<td>NPOI</td>
// 						<td>UiPath.Platform</td>
// 						<td>System.Reflection.Metadata</td>
// 						<td>UiPath.Mail.Activities</td>
// 						<td>UiPath.Mail</td>
// 						<td>UiPath.Mail.Activities.Design</td>
// 						<td>UiPath.Excel.Activities</td>
// 						<td>UiPath.OCR.Activities</td>
// 						<td>UiPath.UIAutomationCore</td>
// 						<td>AssemblyReference</td>
// 						<td>31</td>
// 						<td>scg</td>
// 						<td>x:String</td>
// 						<td>strOTP</td>
// 						<td>x:String</td>
// 						<td>strTemplate</td>
// 						<td>IsExpanded</td>
// 						<td>x</td>
// 						<td>True</td>
// 						<td></td>
// 						<td>x:String, x:Object</td>
// 						<td>scg</td>
// 						<td>sap</td>
// 						<td>x:String</td>
// 						<td>[strOTP]</td>
// 						<td></td>
// 						<td>x:String</td>
// 						<td>[GUID.NewGuid().ToString.ToUpper.Substring(0,6)]</td>
// 						<td></td>
// 						<td>434,60</td>
// 						<td>Assign_3</td>
// 						<td>x:String</td>
// 						<td>[strTemplate]</td>
// 						<td></td>
// 						<td>x:String</td>
// 						<td>[strTemplate.Replace("#OTP#",strOTP)]</td>
// 						<td></td>
// 						<td>434,60</td>
// 						<td>Assign_4</td>
// 						<td>{x:Null}</td>
// 						<td>[strTemplate]</td>
// 						<td>Read Text File</td>
// 						<td>Template\OTP.html</td>
// 						<td>434,79</td>
// 						<td>ReadTextFile_3</td>
// 						<td>ui</td>
// 						<td>InArgument(x:String)</td>
// 						<td>0</td>
// 						<td>scg</td>
// 						<td>ui</td>
// 						<td>{x:Null}</td>
// 						<td>{x:Null}</td>
// 						<td>{x:Null}</td>
// 						<td>{x:Null}</td>
// 						<td>{x:Null}</td>
// 						<td>{x:Null}</td>
// 						<td>[strTemplate]</td>
// 						<td>Send SMTP Mail Message</td>
// 						<td>codehuntershere@gmail.com</td>
// 						<td>True</td>
// 						<td>codehuntershere@gmail.com</td>
// 						<td>434,148</td>
// 						<td>SendMail_1</td>
// 						<td>True</td>
// 						<td>Codehunters</td>
// 						<td>cingvdxbemspvpxc</td>
// 						<td>587</td>
// 						<td>Auto</td>
// 						<td>smtp.gmail.com</td>
// 						<td>Verify your Email Address</td>
// 						<td>codehuntershere@gmail.com</td>
// 						<td>ui</td>
// 						<td>{x:Null}</td>
// 						<td>{x:Null}</td>
// 						<td>00:00:00</td>
// 						<td>Message Box</td>
// 						<td>434,84</td>
// 						<td>MessageBox_2</td>
// 						<td>["Email Sent"]</td>
// 						<td>ui</td>
// 						<td>Generate OTP</td>
// 						<td>476,683</td>
// 						<td>Sequence_3</td>
// 						<td>http://schemas.microsoft.com/netfx/2009/xaml/activities</td>
// 						<td>http://schemas.openxmlformats.org/markup-compatibility/2006</td>
// 						<td>clr-namespace:Microsoft.VisualBasic.Activities;assembly=System.Activities</td>
// 						<td>http://schemas.microsoft.com/netfx/2009/xaml/activities/presentation</td>
// 						<td>http://schemas.microsoft.com/netfx/2010/xaml/activities/presentation</td>
// 						<td>clr-namespace:System.Collections.Generic;assembly=mscorlib</td>
// 						<td>http://schemas.uipath.com/workflow/activities</td>
// 						<td>http://schemas.microsoft.com/winfx/2006/xaml</td>
// 						<td>sap sap2010</td>
// 						<td>Main</td>
// 						<td>{x:Null}</td>
// 						<td>466,748</td>
// 						<td>ActivityBuilder_1</td>
// 					</tr>
// 					<tr>
// 						<td></td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 						<td>&nbsp</td>
// 					</tr>
// 				</tbody>
// 			</table>
// 		</body>
// 	</html>