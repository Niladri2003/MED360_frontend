import { useEffect } from "react"
import { useDispatch } from "react-redux"
import VideoConsultImg from "../assets/homepage/HomeCard/dweb_instant_video_consulation.png"
import FindDocsNear from "../assets/homepage/HomeCard/dweb_find_doctors.png"
import Surgeris from "../assets/homepage/HomeCard/dweb_surgeries.png"
import Period from "../assets/homepage/symtoms_icons/irregular-painful+period.png"
import Acne from "../assets/homepage/symtoms_icons/Acne.png"
import Perfomance from "../assets/homepage/symtoms_icons/top-speciality-sexology.svg"
import Cold from "../assets/homepage/symtoms_icons/coughing.png"
import Child from "../assets/homepage/symtoms_icons/top-speciality-pediatric.svg"
import Depression from "../assets/homepage/symtoms_icons/12-mental-wellness.png"
import Dentist from "../assets/homepage/sp-dentist@2x.jpg"
import Gynecologist from "../assets/homepage/sp-gynecologist@2x.jpg"
import Dietitian from "../assets/homepage/sp-dietitian@2x.jpg"
import Physiotherapist from "../assets/homepage/sp-physiotherapist@2x.jpg"
import GeneralSurg from "../assets/homepage/sp-general-surgeon@2x.jpg"
import Orthopedist from "../assets/homepage/sp-orthopedist@2x.jpg"
import Gastrologist from "../assets/homepage/sp-gastroenterologist@2x (1).jpg"
import Pediatrician from "../assets/homepage/sp-pediatrician@2x.jpg"
import GeneralDoctor from "../assets/homepage/sp-general-doctor@2x.jpg"


import hero_img2 from "../assets/Images/hero_gif2.gif"
import hero_img from "../assets/Images/hero_gif.gif"
// Component Imports
import Footer from "../components/Common/Footer"
import HomeCardGroup from "../components/Common/HomeCardGroup"
import Slider from "../components/Slider"
import CTAButton from "../components/core/HomePage/Button"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import HighlightText from "../components/core/HomePage/HighlightText"
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection"
import { apiConnector } from "../services/apiConnector"
import { courseEndpoints } from "../services/apis"
import { setdoctorData } from "../slices/doctorsSlice"

function Home() {
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const reslt = await apiConnector(
          "GET",
          courseEndpoints.GET_ALL_DOCTORS_API
        )
        dispatch(setdoctorData(reslt.data.data))
      } catch (error) {
        console.log("Could not fetch Doctors.", error)
      }
    }
    fetchDoctors()
  }, [])

  return (
    <div className={" text-black"}>
      {/* Section 1 */}
      <Slider/>
      <div className={"flex w-full items-center justify-center flex-row p-4"}>
        <div
          className={"w-[200px] h-[290px] relative  rounded-[24px] cursor-pointer border-[1px] border-[#f0f0f5] shadow-custom-light  bg-white mr-[10px]"}>
          <div className={"pt-[12px] pl-[35px] pr-[35px] pb-[0px] w-[200px] h-[170px] rounded-t-[24px] bg-[#AFCFED]"}>
                <span>
                  <img className={"w-full h-full"} src={VideoConsultImg}
                       alt={"Video consult image "}/>
                </span>
          </div>

          <div className={"pt-[20px] pl-[16px] pr-[16px] "}>
            <p className={"text-[20px] font-[700] pb-[8px] text-[#2d2d32]"}>Instant Video Consultation</p>
            <p className={"text-[13px] font-[400] text-[#787887]"}>Connect within 60 secs</p>
          </div>
        </div>

        <div
          className={"w-[200px] h-[290px] relative  rounded-[24px] cursor-pointer border-[1px] border-[#f0f0f5] shadow-custom-light  bg-white mr-[10px] ml-[10px]"}>
          <div className={"pt-[4px] pl-[20px] pr-[20px] pb-[0px] w-[200px] h-[170px] rounded-t-[24px] bg-[#98CBD6]"}>
                <span>
                  <img className={"w-full h-full"} src={FindDocsNear}
                       alt={"Video consult image "}/>
                </span>
          </div>

          <div className={"pt-[20px] pl-[16px] pr-[16px] "}>
            <p className={"text-[20px] font-[700] pb-[8px] text-[#2d2d32]"}>Find Doctors Near You</p>
            <p className={"text-[13px] font-[400] text-[#787887]"}>Confirmed appointments</p>
          </div>
        </div>

        <div
          className={"w-[200px] h-[290px] relative  rounded-[24px] cursor-pointer border-[1px] border-[#f0f0f5] shadow-custom-light  bg-white ml-[10px]"}>
          <div className={"pt-[16px] pl-[14px] pr-[20px] pb-[0px] w-[200px] h-[170px] rounded-t-[24px] bg-[#D5D8FC]"}>
                <span>
                  <img className={"w-full h-full"} src={Surgeris}
                       alt={"Video consult image "}/>
                </span>
          </div>

          <div className={"pt-[20px] pl-[16px] pr-[16px] "}>
            <p className={"text-[20px] font-[700] pb-[8px] text-[#2d2d32]"}>Surgeries</p>
            <p className={"text-[13px] font-[400] text-[#787887]"}>Safe and trusted surgery centers</p>
          </div>
        </div>

      </div>
      {/* Section 2 */}
      <div className={"w-full flex items-center justify-center "}>
        <div className={"w-[1180px] mx-auto flex-col "}>
          <div className={"mt-[15px] w-full flex flex-row justify-between"}>
            <div>
              <h2 className={"text-[24px] font-[700] mt-[15px]"}>Consult top doctors online for any health concern</h2>
              <div className={"text-[#414146] text-[14px] mt-[5px]"}>Private online consultations with verified doctors
                in all specialists
              </div>
            </div>
            <button
              className={"h-[80%] text-[14px] text-[#14bef0] font-[400] px-[15px] py-[12px] border-[1.5px] border-[#14bef0] bg-white right-[10px] top-[22px] text-center rounded-[4px] outline-none cursor-pointer"}>View
              All Specialities
            </button>
          </div>

          <div className={"flex flex-row justify-between"}>
            <div className={"mt-[20px]"}>
              <div className={"mr-[10px]"}>
                <div className={"p-[30px] w-[180px] text-center relative block"}>
                  <div className={"w-[120px] h-[120px]"}>
                  <span>
                    <img className={"w-full h-full"} src={Period}/>
                  </span>

                  </div>
                  <div className={"mt-[12px] text-[#414146] font-[700] text-[14px]"}>
                    Period doubts or Pregnancy
                  </div>
                  <div className={"font-[700] text-[12px] text-[#14bef0] mt-[10px] leading-[1.25px] uppercase"}>
                    CONSULT NOW
                  </div>

                </div>

              </div>

            </div>
            <div className={"mt-[20px]"}>
              <div className={"mr-[10px]"}>
                <div className={"p-[30px] w-[180px] text-center relative block"}>
                  <div className={"w-[120px] h-[120px]"}>
                  <span>
                    <img className={"w-full h-full"} src={Acne}/>
                  </span>

                  </div>
                  <div className={"mt-[12px] text-[#414146] font-[700] text-[14px]"}>
                    Acne,pimple or skin issues
                  </div>
                  <div className={"font-[700] text-[12px] text-[#14bef0] mt-[10px] leading-[1.25px] uppercase"}>
                    CONSULT NOW
                  </div>

                </div>

              </div>

            </div>
            <div className={"mt-[20px]"}>
              <div className={"mr-[10px]"}>
                <div className={"p-[30px] w-[180px] text-center relative block"}>
                  <div className={"w-[120px] h-[120px]"}>
                  <span>
                    <img className={"w-full h-full"} src={Perfomance}/>
                  </span>

                  </div>
                  <div className={"mt-[12px] text-[#414146] font-[700] text-[14px]"}>
                    Performance issues in bed
                  </div>
                  <div className={"font-[700] text-[12px] text-[#14bef0] mt-[10px] leading-[1.25px] uppercase"}>
                    CONSULT NOW
                  </div>

                </div>

              </div>

            </div>
            <div className={"mt-[20px]"}>
              <div className={"mr-[10px]"}>
                <div className={"p-[30px] w-[180px] text-center relative block"}>
                  <div className={"w-[120px] h-[120px]"}>
                  <span>
                    <img className={"w-full h-full"} src={Cold}/>
                  </span>

                  </div>
                  <div className={"mt-[12px] text-[#414146] font-[700] text-[14px]"}>
                    Cold, cough or fever
                  </div>
                  <div className={"font-[700] text-[12px] text-[#14bef0] mt-[10px] leading-[1.25px] uppercase"}>
                    CONSULT NOW
                  </div>

                </div>

              </div>

            </div>
            <div className={"mt-[20px]"}>
              <div className={"mr-[10px]"}>
                <div className={"p-[30px] w-[180px] text-center relative block"}>
                  <div className={"w-[120px] h-[120px]"}>
                  <span>
                    <img className={"w-full h-full"} src={Child}/>
                  </span>

                  </div>
                  <div className={"mt-[12px] text-[#414146] font-[700] text-[14px]"}>
                    Child not feeling well
                  </div>
                  <div className={"font-[700] text-[12px] text-[#14bef0] mt-[10px] leading-[1.25px] uppercase"}>
                    CONSULT NOW
                  </div>

                </div>

              </div>

            </div>
            <div className={"mt-[20px]"}>
              <div className={"mr-[10px]"}>
                <div className={"p-[30px] w-[180px] text-center relative block"}>
                  <div className={"w-[120px] h-[120px]"}>
                  <span>
                    <img className={"w-full h-full"} src={Depression}/>
                  </span>

                  </div>
                  <div className={"mt-[12px] text-[#414146] font-[700] text-[14px]"}>
                    Depression or anxiety
                  </div>
                  <div className={"font-[700] text-[12px] text-[#14bef0] mt-[10px] leading-[1.25px] uppercase"}>
                    CONSULT NOW
                  </div>

                </div>

              </div>

            </div>

          </div>


        </div>

      </div>

      {/*Section 3*/}
      <div className={"w-full flex items-center justify-center "}>
        <div className={"w-[1180px] mx-auto flex-col "}>
          <div className={"mt-[15px] w-full flex flex-row justify-between"}>
            <div>
              <h2 className={"text-[24px] font-[700] mt-[15px]"}>Book an appointment for an in-clinic consultation</h2>
              <div className={"text-[#414146] text-[14px] mt-[5px]"}>Find experienced doctors across all specialties
              </div>
            </div>

          </div>

          <div className={"flex flex-row justify-between"}>


            <div className={"mt-[20px] min-w-[310px] pl-[10px]"}>
              <div className={"flex items-start self-stretch"}>
                  <div className={"w-[280px] h-[253]px]"}>
                    {/*//Link tage Here with css-> inline-flex,flex-col,items-start*/}
                    <div className={"flex justify-center self-stretch items-start w-[280px] h-[200px]"}>
                      <div className={"flex-grow flex-shrink-0 flex-initial self-stretch "}
                      >
                        <img src={Dentist} className={"w-full h-full rounded-[4px]"} />

                      </div>
                    </div>


                    <div className={"flex w-[280px] flex-col items-start mt-[12px]"}>
                      <div className={"flex w-[210px] flex-col items-start "}>
                        <h3 className={"text-[#414146] text-[16px] font-[700] leading-[24px]"}>Dentist</h3>
                      </div>

                      <div className={"flex w-[280px] flex-col items-start"}>
                        <div className={"flex  flex-col items-start "}>
                          <h3 className={"text-[#414146] text-[12px] font-[400] leading-[24px] "}>Teething troubles? Schedule a dental checkup</h3>
                        </div>

                    </div>

                  </div>
              </div>
              </div>



            </div>


            </div>

          </div>




      </div>
      {/* Section 2 */}
      <div className="bg-pure-greys-5 text-richblack-700 mt-10">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">
          <LearningLanguageSection/>
        </div>
      </div>

      {/* Section 3 */}
      <div
        className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white"></div>

      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default Home
