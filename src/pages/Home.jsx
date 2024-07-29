import React, {useEffect} from "react"
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
import Article1 from "../assets/homepage/articles/5fd27b74d9477cb633445cf3f105078bbc479910.jpeg"
import Article2 from "../assets/homepage/articles/bade52edc7fb158bf627216bf96c2b881a97f30c.jpeg"



// Component Imports
import Footer from "../components/Common/Footer"
import Slider from "../components/Slider"
import { apiConnector } from "../services/apiConnector"
import { courseEndpoints } from "../services/apis"
import { setdoctorData } from "../slices/doctorsSlice"
import {Pagination, Navigation, Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../components/core/HomePage/Swiper.css';

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
      <div className={"flex w-full items-center justify-center flex-row p-4 mt-[40px] mb-[10px]"}>
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
              className={"h-[80%] mt-[13px] text-[14px] text-[#14bef0] font-[400] px-[15px] py-[12px] border-[1.5px] border-[#14bef0] bg-white right-[10px] top-[22px] text-center rounded-[4px] outline-none cursor-pointer"}>View
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
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              pagination={{ clickable: true }}
              navigation
              modules={[Navigation]}
              className="mySwiper"

            >
              <SwiperSlide>
                <div className={"mt-[20px] min-w-[310px] pl-[10px]"}>
                  <div className={"flex items-start self-stretch"}>
                    <div className={"w-[280px] h-[253]px]"}>
                      {/*//Link tage Here with css-> inline-flex,flex-col,items-start*/}
                      <div className={"flex justify-center self-stretch items-start w-[280px] h-[200px]"}>
                        <div className={"flex-grow flex-shrink-0 flex-initial self-stretch "}
                        >
                        <img src={Dentist} className={"w-full h-full rounded-[4px]"}/>

                        </div>
                      </div>


                      <div className={"flex w-[280px] flex-col items-start mt-[12px]"}>
                        <div className={"flex w-[210px] flex-col items-start "}>
                          <h3 className={"text-[#414146] text-[16px] font-[700] leading-[24px]"}>Dentist</h3>
                        </div>

                        <div className={"flex w-[280px] flex-col items-start"}>
                          <div className={"flex  flex-col items-start "}>
                            <h3 className={"text-[#414146] text-[12px] font-[400]  "}>Teething troubles?
                              Schedule a dental checkup</h3>
                          </div>

                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={"mt-[20px] min-w-[310px] pl-[10px]"}>
                  <div className={"flex items-start self-stretch"}>
                    <div className={"w-[280px] h-[253]px]"}>
                      {/*//Link tage Here with css-> inline-flex,flex-col,items-start*/}
                      <div className={"flex justify-center self-stretch items-start w-[280px] h-[200px]"}>
                        <div className={"flex-grow flex-shrink-0 flex-initial self-stretch "}
                        >
                          <img src={Gynecologist} className={"w-full h-full rounded-[4px]"}/>

                        </div>
                      </div>


                      <div className={"flex w-[280px] flex-col items-start mt-[12px]"}>
                        <div className={"flex w-[210px] flex-col items-start "}>
                          <h3 className={"text-[#414146] text-[16px] font-[700] leading-[24px]"}>Gynecologist/Obstetrician</h3>
                        </div>

                        <div className={"flex w-[280px] flex-col items-start"}>
                          <div className={"flex  flex-col items-start "}>
                            <h3 className={"text-[#414146] text-[12px] font-[400]  "}>Explore for women’s health, pregnancy and infertility treatments</h3>
                          </div>

                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={"mt-[20px] min-w-[310px] pl-[10px]"}>
                  <div className={"flex items-start self-stretch"}>
                    <div className={"w-[280px] h-[253]px]"}>
                      {/*//Link tage Here with css-> inline-flex,flex-col,items-start*/}
                      <div className={"flex justify-center self-stretch items-start w-[280px] h-[200px]"}>
                        <div className={"flex-grow flex-shrink-0 flex-initial self-stretch "}
                        >
                          <img src={Dietitian} className={"w-full h-full rounded-[4px]"}/>

                        </div>
                      </div>


                      <div className={"flex w-[280px] flex-col items-start mt-[12px]"}>
                        <div className={"flex w-[210px] flex-col items-start "}>
                          <h3 className={"text-[#414146] text-[16px] font-[700] leading-[24px]"}>Dietitian/Nutrition</h3>
                        </div>

                        <div className={"flex w-[280px] flex-col items-start"}>
                          <div className={"flex  flex-col items-start "}>
                            <h3 className={"text-[#414146] text-[12px] font-[400]  "}>Get guidance on eating right, weight management and sports nutrition</h3>
                          </div>

                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={"mt-[20px] min-w-[310px] pl-[10px]"}>
                  <div className={"flex items-start self-stretch"}>
                    <div className={"w-[280px] h-[253]px]"}>
                      {/*//Link tage Here with css-> inline-flex,flex-col,items-start*/}
                      <div className={"flex justify-center self-stretch items-start w-[280px] h-[200px]"}>
                        <div className={"flex-grow flex-shrink-0 flex-initial self-stretch "}
                        >
                          <img src={Physiotherapist} className={"w-full h-full rounded-[4px]"}/>

                        </div>
                      </div>


                      <div className={"flex w-[280px] flex-col items-start mt-[12px]"}>
                        <div className={"flex w-[210px] flex-col items-start "}>
                          <h3 className={"text-[#414146] text-[16px] font-[700] leading-[24px]"}>Physiotherapist</h3>
                        </div>

                        <div className={"flex w-[280px] flex-col items-start"}>
                          <div className={"flex  flex-col items-start "}>
                            <h3 className={"text-[#414146] text-[12px] font-[400] "}>Pulled a muscle? Get it treated by a trained physiotherapist
                            </h3>
                          </div>

                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={"mt-[20px] min-w-[310px] pl-[10px]"}>
                  <div className={"flex items-start self-stretch"}>
                    <div className={"w-[280px] h-[253]px]"}>
                      {/*//Link tage Here with css-> inline-flex,flex-col,items-start*/}
                      <div className={"flex justify-center self-stretch items-start w-[280px] h-[200px]"}>
                        <div className={"flex-grow flex-shrink-0 flex-initial self-stretch "}
                        >
                          <img src={GeneralSurg} className={"w-full h-full rounded-[4px]"}/>

                        </div>
                      </div>


                      <div className={"flex w-[280px] flex-col items-start mt-[12px]"}>
                        <div className={"flex w-[210px] flex-col items-start "}>
                          <h3 className={"text-[#414146] text-[16px] font-[700] leading-[24px]"}>General surgeon</h3>
                        </div>

                        <div className={"flex w-[280px] flex-col items-start"}>
                          <div className={"flex  flex-col items-start "}>
                            <h3 className={"text-[#414146] text-[12px] font-[400] "}>Need to get operated? find the right surgeon</h3>
                          </div>

                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={"mt-[20px] min-w-[310px] pl-[10px]"}>
                  <div className={"flex items-start self-stretch"}>
                    <div className={"w-[280px] h-[253]px]"}>
                      {/*//Link tage Here with css-> inline-flex,flex-col,items-start*/}
                      <div className={"flex justify-center self-stretch items-start w-[280px] h-[200px]"}>
                        <div className={"flex-grow flex-shrink-0 flex-initial self-stretch "}
                        >
                          <img src={Orthopedist} className={"w-full h-full rounded-[4px]"}/>

                        </div>
                      </div>


                      <div className={"flex w-[280px] flex-col items-start mt-[12px]"}>
                        <div className={"flex w-[210px] flex-col items-start "}>
                          <h3 className={"text-[#414146] text-[16px] font-[700] leading-[24px]"}>Orthopedist</h3>
                        </div>

                        <div className={"flex w-[280px] flex-col items-start"}>
                          <div className={"flex  flex-col items-start "}>
                            <h3 className={"text-[#414146] text-[12px] font-[400]"}>For Bone and Joints issues, spinal injuries and more
                            </h3>
                          </div>

                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={"mt-[20px] min-w-[310px] pl-[10px]"}>
                  <div className={"flex items-start self-stretch"}>
                    <div className={"w-[280px] h-[253]px]"}>
                      {/*//Link tage Here with css-> inline-flex,flex-col,items-start*/}
                      <div className={"flex justify-center self-stretch items-start w-[280px] h-[200px]"}>
                        <div className={"flex-grow flex-shrink-0 flex-initial self-stretch "}
                        >
                          <img src={GeneralDoctor} className={"w-full h-full rounded-[4px]"}/>

                        </div>
                      </div>


                      <div className={"flex w-[280px] flex-col items-start mt-[12px]"}>
                        <div className={"flex w-[210px] flex-col items-start "}>
                          <h3 className={"text-[#414146] text-[16px] font-[700] leading-[24px]"}>General Physician</h3>
                        </div>

                        <div className={"flex w-[280px] flex-col items-start"}>
                          <div className={"flex  flex-col items-start "}>
                            <h3 className={"text-[#414146] text-[12px] font-[400] "}>Find the right family doctor in your neighborhood
                            </h3>
                          </div>

                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={"mt-[20px] min-w-[310px] pl-[10px]"}>
                  <div className={"flex items-start self-stretch"}>
                    <div className={"w-[280px] h-[253]px]"}>
                      {/*//Link tage Here with css-> inline-flex,flex-col,items-start*/}
                      <div className={"flex justify-center self-stretch items-start w-[280px] h-[200px]"}>
                        <div className={"flex-grow flex-shrink-0 flex-initial self-stretch "}
                        >
                          <img src={Pediatrician} className={"w-full h-full rounded-[4px]"}/>

                        </div>
                      </div>


                      <div className={"flex w-[280px] flex-col items-start mt-[12px]"}>
                        <div className={"flex w-[210px] flex-col items-start "}>
                          <h3 className={"text-[#414146] text-[16px] font-[700] leading-[24px]"}>Pediatrician</h3>
                        </div>

                        <div className={"flex w-[280px] flex-col items-start"}>
                          <div className={"flex  flex-col items-start "}>
                            <h3 className={"text-[#414146] text-[12px] font-[400]"}>Child Specialists and Doctors for infant
                            </h3>
                          </div>

                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>


            {/*Cards*/}

          </div>
        </div>
      </div>


      {/* Section 4 */}
      <div className="w-full flex items-center justify-center mt-[40px]">
        <div className="w-[1180px] mx-auto flex-col border-t-[1px] border-b-[1px] border-[#DFDFE5] mt-[30px] mb-[30px]">
          <div className="w-full h-[310px] flex flex-row justify-center mt-[20px]">
            <div className="w-[360px] p-[20px]">
              <h3 className="font-[500] text-[30px]">Read top articles from health experts</h3>
              <p className="mt-[5px] text-[#414146] text-[14px]">
                Health articles that keep you informed about good health practices and achieve your goals.
              </p>
              <button
                className="mt-[30px] pt-[15px] pb-[15px] pl-[30px] pr-[30px] bg-[#14bef0] cursor-pointer text-[14px] text-[#fff] rounded-[4px] text-center">
                See all articles
              </button>
            </div>

            <div className="w-[280px] flex flex-col ml-[20px] mr-[20px]">
              <div className="w-[280px]">
          <span>
            <img src={Article1} alt="Women and nurse" className="rounded-[4px] w-full h-full"/>
          </span>
              </div>
              <div className="mt-[15px] uppercase text-[#358588] font-[700] leading-[1.25px] text-[12px]">
                Coronavirus
              </div>
              <div className="mt-[5px]">
                <h6 className="text-[16px] leading-[1.5] font-[600] mt-0">
                  12 Coronavirus Myths and Facts That You Should Be Aware Of
                </h6>
              </div>
              <div className="mt-[10px] text-[14px] text-[#414146]">
                Dr. Diana Borigo
              </div>
            </div>

            <div className="w-[280px] flex flex-col">
              <div className="w-[280px]">
          <span>
            <img src={Article2} alt="Women and nurse" className="rounded-[4px] w-full h-full"/>
          </span>
              </div>
              <div className="mt-[15px] uppercase text-[#358588] font-[700] leading-[1.25px] text-[12px]">
                Vitamins and Supplements
              </div>
              <div className="mt-[5px]">
                <h6 className="text-[16px] leading-[1.5] font-[600] mt-0">
                  Eating Right to Build Immunity Against Cold and Viral Infections
                </h6>
              </div>
              <div className="mt-[10px] text-[14px] text-[#414146]">
                Dr. Diana Borigo
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Section 5*/}
      <div className={"w-full flex items-center justify-center "}>
        <div className={"w-[1180px] mx-auto flex-col "}>
          <div className={"mt-[15px] w-full flex flex-col justify-center items-center"}>
            <div className={"mb-[30px] text-[30px] font-[600]"}>What our users have to say</div>
            <div className={"flex flex-row justify-between mt-[30px] w-[580px] h-[200px]"}>
              <Swiper

                slidesPerView={1}
                spaceBetween={25}
                pagination={{ clickable: true }}


                loop={true}

                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[ Autoplay,Pagination ]}

              >
                <SwiperSlide>
                  <div className={"flex  flex-col items-center justify-center gap-3 "}>
                    <p className={"text-center text-[20px] font-[400] "}>Very helpful. Far easier than doing same things
                      on computer. Allows quick and easy search with speedy booking. Even maintains history of doctors
                      visited. </p>

                    <div className={"flex flex-row items-center gap-2"}>
                      <div className={"flex rounded-[14.15px] pt-[7px] pb-[6px] pl-[7.8px] pr-[7.8px] bg-[#e0e0e5]"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14"
                             fill="none">
                          <path
                            d="M7.36 5.74001C7.07066 5.74001 6.807 5.67001 6.569 5.53001C6.331 5.39001 6.13966 5.19868 5.995 4.95601C5.85033 4.71335 5.778 4.45201 5.778 4.17201C5.778 3.89201 5.85033 3.63068 5.995 3.38801C6.13966 3.14535 6.33333 2.95168 6.576 2.80701C6.81866 2.66235 7.08233 2.59001 7.367 2.59001C7.65166 2.59001 7.913 2.66001 8.151 2.80001C8.389 2.94001 8.58033 3.13135 8.725 3.37401C8.86966 3.61668 8.942 3.88268 8.942 4.17201C8.942 4.46135 8.872 4.72501 8.732 4.96301C8.592 5.20101 8.40066 5.39001 8.158 5.53001C7.91533 5.67001 7.64933 5.74001 7.36 5.74001ZM7.36 6.49601C7.78 6.49601 8.16966 6.39101 8.529 6.18101C8.88833 5.97101 9.173 5.68868 9.383 5.33401C9.593 4.97935 9.698 4.59201 9.698 4.17201C9.698 3.75201 9.593 3.36235 9.383 3.00301C9.173 2.64368 8.88833 2.35901 8.529 2.14901C8.16966 1.93901 7.78 1.83401 7.36 1.83401C6.94 1.83401 6.55033 1.93901 6.191 2.14901C5.83166 2.35901 5.547 2.64368 5.337 3.00301C5.127 3.36235 5.022 3.75201 5.022 4.17201C5.022 4.59201 5.127 4.97935 5.337 5.33401C5.547 5.68868 5.83166 5.97101 6.191 6.18101C6.55033 6.39101 6.94 6.49601 7.36 6.49601ZM7.36 8.23201C7.976 8.23201 8.55 8.37668 9.082 8.66601C9.614 8.95535 10.0503 9.34968 10.391 9.84901C10.7317 10.3483 10.9347 10.906 11 11.522H3.72C3.78533 10.906 3.98833 10.3483 4.329 9.84901C4.66966 9.34968 5.106 8.95535 5.638 8.66601C6.17 8.37668 6.744 8.23201 7.36 8.23201ZM2.81 11.956C2.81 12.0773 2.85433 12.18 2.943 12.264C3.03166 12.348 3.13666 12.39 3.258 12.39H11.462C11.5833 12.39 11.6883 12.348 11.777 12.264C11.8657 12.18 11.91 12.0773 11.91 11.956C11.91 11.1253 11.7047 10.3553 11.294 9.64601C10.8833 8.94601 10.3373 8.39535 9.656 7.99401C8.94666 7.57401 8.18133 7.36401 7.36 7.36401C6.53866 7.36401 5.77333 7.57401 5.064 7.99401C4.38266 8.39535 3.83666 8.94601 3.426 9.64601C3.01533 10.3553 2.81 11.1253 2.81 11.956Z"
                            fill="#787887"/>
                        </svg>
                      </div>
                      <p className={"font-[700] text-[14px]"}>Amit Sharma</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={"flex flex-col items-center justify-center gap-3"}>
                    <p className={"text-center text-[20px] font-[400]"}>Very helpful. Far easier than doing same things
                      on computer. Allows quick and easy search with speedy booking. Even maintains history of doctors
                      visited. </p>

                    <div className={"flex flex-row items-center gap-2"}>
                      <div className={"flex rounded-[14.15px] pt-[7px] pb-[6px] pl-[7.8px] pr-[7.8px] bg-[#e0e0e5]"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14"
                             fill="none">
                          <path
                            d="M7.36 5.74001C7.07066 5.74001 6.807 5.67001 6.569 5.53001C6.331 5.39001 6.13966 5.19868 5.995 4.95601C5.85033 4.71335 5.778 4.45201 5.778 4.17201C5.778 3.89201 5.85033 3.63068 5.995 3.38801C6.13966 3.14535 6.33333 2.95168 6.576 2.80701C6.81866 2.66235 7.08233 2.59001 7.367 2.59001C7.65166 2.59001 7.913 2.66001 8.151 2.80001C8.389 2.94001 8.58033 3.13135 8.725 3.37401C8.86966 3.61668 8.942 3.88268 8.942 4.17201C8.942 4.46135 8.872 4.72501 8.732 4.96301C8.592 5.20101 8.40066 5.39001 8.158 5.53001C7.91533 5.67001 7.64933 5.74001 7.36 5.74001ZM7.36 6.49601C7.78 6.49601 8.16966 6.39101 8.529 6.18101C8.88833 5.97101 9.173 5.68868 9.383 5.33401C9.593 4.97935 9.698 4.59201 9.698 4.17201C9.698 3.75201 9.593 3.36235 9.383 3.00301C9.173 2.64368 8.88833 2.35901 8.529 2.14901C8.16966 1.93901 7.78 1.83401 7.36 1.83401C6.94 1.83401 6.55033 1.93901 6.191 2.14901C5.83166 2.35901 5.547 2.64368 5.337 3.00301C5.127 3.36235 5.022 3.75201 5.022 4.17201C5.022 4.59201 5.127 4.97935 5.337 5.33401C5.547 5.68868 5.83166 5.97101 6.191 6.18101C6.55033 6.39101 6.94 6.49601 7.36 6.49601ZM7.36 8.23201C7.976 8.23201 8.55 8.37668 9.082 8.66601C9.614 8.95535 10.0503 9.34968 10.391 9.84901C10.7317 10.3483 10.9347 10.906 11 11.522H3.72C3.78533 10.906 3.98833 10.3483 4.329 9.84901C4.66966 9.34968 5.106 8.95535 5.638 8.66601C6.17 8.37668 6.744 8.23201 7.36 8.23201ZM2.81 11.956C2.81 12.0773 2.85433 12.18 2.943 12.264C3.03166 12.348 3.13666 12.39 3.258 12.39H11.462C11.5833 12.39 11.6883 12.348 11.777 12.264C11.8657 12.18 11.91 12.0773 11.91 11.956C11.91 11.1253 11.7047 10.3553 11.294 9.64601C10.8833 8.94601 10.3373 8.39535 9.656 7.99401C8.94666 7.57401 8.18133 7.36401 7.36 7.36401C6.53866 7.36401 5.77333 7.57401 5.064 7.99401C4.38266 8.39535 3.83666 8.94601 3.426 9.64601C3.01533 10.3553 2.81 11.1253 2.81 11.956Z"
                            fill="#787887"/>
                        </svg>
                      </div>
                      <p className={"font-[700] text-[14px]"}>Amit Sharma</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={"flex flex-col items-center justify-center gap-3"}>
                    <p className={"text-center text-[20px] font-[400]"}>Very helpful. Far easier than doing same things
                      on computer. Allows quick and easy search with speedy booking. Even maintains history of doctors
                      visited. </p>

                    <div className={"flex flex-row items-center gap-2"}>
                      <div className={"flex rounded-[14.15px] pt-[7px] pb-[6px] pl-[7.8px] pr-[7.8px] bg-[#e0e0e5]"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14"
                             fill="none">
                          <path
                            d="M7.36 5.74001C7.07066 5.74001 6.807 5.67001 6.569 5.53001C6.331 5.39001 6.13966 5.19868 5.995 4.95601C5.85033 4.71335 5.778 4.45201 5.778 4.17201C5.778 3.89201 5.85033 3.63068 5.995 3.38801C6.13966 3.14535 6.33333 2.95168 6.576 2.80701C6.81866 2.66235 7.08233 2.59001 7.367 2.59001C7.65166 2.59001 7.913 2.66001 8.151 2.80001C8.389 2.94001 8.58033 3.13135 8.725 3.37401C8.86966 3.61668 8.942 3.88268 8.942 4.17201C8.942 4.46135 8.872 4.72501 8.732 4.96301C8.592 5.20101 8.40066 5.39001 8.158 5.53001C7.91533 5.67001 7.64933 5.74001 7.36 5.74001ZM7.36 6.49601C7.78 6.49601 8.16966 6.39101 8.529 6.18101C8.88833 5.97101 9.173 5.68868 9.383 5.33401C9.593 4.97935 9.698 4.59201 9.698 4.17201C9.698 3.75201 9.593 3.36235 9.383 3.00301C9.173 2.64368 8.88833 2.35901 8.529 2.14901C8.16966 1.93901 7.78 1.83401 7.36 1.83401C6.94 1.83401 6.55033 1.93901 6.191 2.14901C5.83166 2.35901 5.547 2.64368 5.337 3.00301C5.127 3.36235 5.022 3.75201 5.022 4.17201C5.022 4.59201 5.127 4.97935 5.337 5.33401C5.547 5.68868 5.83166 5.97101 6.191 6.18101C6.55033 6.39101 6.94 6.49601 7.36 6.49601ZM7.36 8.23201C7.976 8.23201 8.55 8.37668 9.082 8.66601C9.614 8.95535 10.0503 9.34968 10.391 9.84901C10.7317 10.3483 10.9347 10.906 11 11.522H3.72C3.78533 10.906 3.98833 10.3483 4.329 9.84901C4.66966 9.34968 5.106 8.95535 5.638 8.66601C6.17 8.37668 6.744 8.23201 7.36 8.23201ZM2.81 11.956C2.81 12.0773 2.85433 12.18 2.943 12.264C3.03166 12.348 3.13666 12.39 3.258 12.39H11.462C11.5833 12.39 11.6883 12.348 11.777 12.264C11.8657 12.18 11.91 12.0773 11.91 11.956C11.91 11.1253 11.7047 10.3553 11.294 9.64601C10.8833 8.94601 10.3373 8.39535 9.656 7.99401C8.94666 7.57401 8.18133 7.36401 7.36 7.36401C6.53866 7.36401 5.77333 7.57401 5.064 7.99401C4.38266 8.39535 3.83666 8.94601 3.426 9.64601C3.01533 10.3553 2.81 11.1253 2.81 11.956Z"
                            fill="#787887"/>
                        </svg>
                      </div>
                      <p className={"font-[700] text-[14px]"}>Amit Sharma</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
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
