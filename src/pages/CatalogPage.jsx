import React, {useEffect} from "react"
import ConsultHero from "../assets/consultPage/homepage-hero-image-web-v1.png"
import DigitalPrescription from "../assets/consultPage/svgIcon/483836bd6c5efcb1615d190a6b7462e8.png"
import DoctorIcon1 from "../assets/consultPage/svgIcon/11f6a1512d80fe763670b5a70318f93d.jpeg"
import DoctorIcon2 from "../assets/consultPage/svgIcon/7d3e6291c4d0e9d72af669c1c5340e71.jpeg"
import DoctorIcon3 from "../assets/consultPage/svgIcon/748e792352d6d3b48c98d91db8bb7657.jpeg"
import Mental from "../assets/consultPage/specialityIcon/12-mental-wellness.png"
import Dermatology from "../assets/consultPage/specialityIcon/top-speciality-dermatologist.svg"
import topSpeciality from "../assets/consultPage/specialityIcon/top-speciality-dermatologist.svg"
import Gynecologist from "../assets/consultPage/specialityIcon/top-speciality-gynaecologist.svg"
import Kidney from "../assets/consultPage/specialityIcon/top-speciality-kidney.svg"
import Pediatric from "../assets/consultPage/specialityIcon/top-speciality-pediatric.svg"
import Sexology from "../assets/consultPage/specialityIcon/top-speciality-sexology.svg"
import Stomach from "../assets/consultPage/specialityIcon/top-speciality-stomach.svg"
import Cough from "../assets/consultPage/SymtomsImage/cough-cold-v1.jpg"
import PeriodProblem from "../assets/consultPage/SymtomsImage/period-problems-v1.jpg"
import Perofomance from "../assets/consultPage/SymtomsImage/performance-issues-bed-v1.jpg"
import Skin from "../assets/consultPage/SymtomsImage/sick-kid-v1.jpg"
import Anxiety from "../assets/consultPage/SymtomsImage/depression-anxiety-v1.jpg"
import WeightLose from "../assets/consultPage/SymtomsImage/lose-weight-v1.jpg"
import StomachIssue from "../assets/consultPage/SymtomsImage/stomach-issues-v1.jpg"
import VaginalInfection from "../assets/consultPage/SymtomsImage/vaginal-infections-v1.jpg"
import  SickKid from "../assets/consultPage/SymtomsImage/sick-kid-v1.jpg"
import Testimonial from "../assets/consultPage/testimonial/59718a0948ebd78d99325234239f0a5d.png"
import {Navigation} from "swiper";
import Dentist from "../assets/homepage/sp-dentist@2x.jpg";
import {Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../components/core/HomePage/Swiper.css'

const CatalogPage = () => {

  return <div className="w-full flex flex-col items-center justify-center">
    <div className="bg-[#f8e9e6] flex items-center justify-center w-full">
      <div className="mb-[16px] pt-[60px] pb-[0px] pr-[68px] pl-[50px] max-w-[1280px] w-[100%] relative bg-[#f8e9e6]">
        <div className="flex flex-row items-center">
          <div className="flex flex-col">
            <h1 className="text-[36px] font-bold leading-[1.2]">Skip the travel!<br/>Take Online Doctor Consultation
            </h1>
            <p className="mt-[20px] text-[20px] text-[#414146]">Private consultation + Audio call · Starts at just
              ₹199</p>
            <div className="flex items-center mt-[20px]">
              <img src={DoctorIcon1} alt="Doctor 1"
                   className="rounded-full w-[40px] h-[40px] border-[2px] border-white"/>
              <img src={DoctorIcon2} alt="Doctor 2"
                   className="rounded-full w-[40px] h-[40px] border-[2px] border-white ml-[-10px]"/>
              <img src={DoctorIcon3} alt="Doctor 3"
                   className="rounded-full w-[40px] h-[40px] border-[2px] border-white ml-[-10px]"/>
              <span className="ml-[10px] text-[14px]">+103 Doctors are online <span className="text-[#00c853]">•</span></span>
            </div>
            <button
              className=" w-[50%] mt-[20px] pt-[15px] pb-[15px] pl-[30px] pr-[30px] bg-[#14bef0] cursor-pointer text-[19px] font-[600] text-[#fff] rounded-[4px] text-center">Consult
              Now
            </button>
            <div className="flex items-center mt-[10px] space-x-[20px] mt-[48px]">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="18" viewBox="0 0 12 18" fill="none">
                  <path
                    d="M5.50001 11.66C6.50001 11.66 7.42001 11.4134 8.26001 10.92C9.10001 10.4267 9.76668 9.76002 10.26 8.92002C10.7533 8.08002 11 7.16002 11 6.16002C11 5.16002 10.7533 4.24002 10.26 3.40002C9.76668 2.56002 9.10001 1.89335 8.26001 1.40002C7.42001 0.906689 6.50001 0.660021 5.50001 0.660021C4.50001 0.660021 3.58001 0.906689 2.74001 1.40002C1.90001 1.89335 1.23335 2.56002 0.740014 3.40002C0.24668 4.24002 1.35871e-05 5.16002 1.35871e-05 6.16002C1.35871e-05 7.16002 0.24668 8.08002 0.740014 8.92002C1.23335 9.76002 1.90001 10.4267 2.74001 10.92C3.58001 11.4134 4.50001 11.66 5.50001 11.66ZM5.50001 10.66C4.68668 10.66 3.93668 10.4567 3.25001 10.05C2.56335 9.64335 2.01668 9.09669 1.61001 8.41002C1.20335 7.72335 1.00001 6.97335 1.00001 6.16002C1.00001 5.34669 1.20335 4.59669 1.61001 3.91002C2.01668 3.22335 2.56335 2.67669 3.25001 2.27002C3.93668 1.86335 4.68668 1.66002 5.50001 1.66002C6.31335 1.66002 7.06335 1.86335 7.75001 2.27002C8.43668 2.67669 8.98335 3.22335 9.39001 3.91002C9.79668 4.59669 10 5.34669 10 6.16002C10 6.97335 9.79668 7.72335 9.39001 8.41002C8.98335 9.09669 8.43668 9.64335 7.75001 10.05C7.06335 10.4567 6.31335 10.66 5.50001 10.66ZM5.50001 8.32002C5.90001 8.32002 6.26335 8.22335 6.59001 8.03002C6.91668 7.83669 7.17668 7.57669 7.37001 7.25002C7.56335 6.92335 7.66001 6.56002 7.66001 6.16002C7.66001 5.76002 7.56335 5.39669 7.37001 5.07002C7.17668 4.74335 6.91668 4.48335 6.59001 4.29002C6.26335 4.09669 5.90001 4.00002 5.50001 4.00002C5.10001 4.00002 4.73668 4.09669 4.41001 4.29002C4.08335 4.48335 3.82335 4.74335 3.63001 5.07002C3.43668 5.39669 3.34001 5.76002 3.34001 6.16002C3.34001 6.56002 3.43668 6.92335 3.63001 7.25002C3.82335 7.57669 4.08335 7.83669 4.41001 8.03002C4.73668 8.22335 5.10001 8.32002 5.50001 8.32002ZM5.50001 7.32002C5.18001 7.32002 4.90668 7.20669 4.68001 6.98002C4.45335 6.75335 4.34001 6.48002 4.34001 6.16002C4.34001 5.84002 4.45335 5.56669 4.68001 5.34002C4.90668 5.11335 5.18001 5.00002 5.50001 5.00002C5.82001 5.00002 6.09335 5.11335 6.32001 5.34002C6.54668 5.56669 6.66001 5.84002 6.66001 6.16002C6.66001 6.48002 6.54668 6.75335 6.32001 6.98002C6.09335 7.20669 5.82001 7.32002 5.50001 7.32002ZM3.56001 16.88C3.68001 17.0534 3.84335 17.1234 4.05001 17.09C4.25668 17.0567 4.39335 16.9467 4.46001 16.76L6.12001 11.66C6.16001 11.5267 6.15001 11.4 6.09001 11.28C6.03001 11.16 5.93335 11.08 5.80001 11.04L2.16001 9.76002C2.02668 9.72002 1.90001 9.73002 1.78001 9.79002C1.66001 9.85002 1.58001 9.94669 1.54001 10.08L0.0200136 14.36C-0.0333197 14.5334 -0.00998641 14.69 0.0900136 14.83C0.190014 14.97 0.32668 15.04 0.500014 15.04H2.34001L3.56001 16.88ZM5.02001 11.82L3.84001 15.46L3.04001 14.26C2.93335 14.1134 2.79335 14.04 2.62001 14.04H1.20001L2.32001 10.88L5.02001 11.82ZM10.22 14.04H8.74001C8.66001 14.04 8.58001 14.06 8.50001 14.1C8.42001 14.14 8.36001 14.2 8.32001 14.28L7.62001 15.42L6.36001 11.64L8.82001 10.86L10.22 14.04ZM10.98 15.04C11.1533 15.04 11.29 14.9634 11.39 14.81C11.49 14.6567 11.5067 14.5 11.44 14.34L9.56001 10.04C9.50668 9.92002 9.42001 9.83669 9.30001 9.79002C9.18001 9.74335 9.06001 9.73335 8.94001 9.76002L5.56001 10.84C5.42668 10.88 5.33001 10.96 5.27001 11.08C5.21001 11.2 5.20001 11.3334 5.24001 11.48L7.02001 16.76C7.08668 16.96 7.22668 17.07 7.44001 17.09C7.65335 17.11 7.81335 17.0334 7.92001 16.86L9.02001 15.04H10.98Z"
                    fill="#2D2D32"/>
                </svg>
                <span className="ml-[5px] text-[14px] text-[#414146]">Verified Doctors</span>
              </div>
              <div className="flex items-center">
                <img src={DigitalPrescription} alt="Digital Prescription" className="w-[17px] h-[17px]"/>
                <span className="ml-[5px] text-[14px] text-[#414146]">Digital Prescription</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M6.02501 11.617C6.02501 11.5037 5.98251 11.4045 5.89751 11.3195C5.81251 11.2345 5.71335 11.192 5.60001 11.192H3.91701C3.74701 11.192 3.59401 11.158 3.45801 11.09C3.32201 11.022 3.22285 10.9314 3.16051 10.818C3.09818 10.7047 3.06701 10.5517 3.06701 10.359C3.05568 10.0417 3.05001 8.94804 3.05001 7.07804V3.95004C3.05001 3.72338 3.05568 3.58738 3.06701 3.54204C3.06701 3.19071 3.19735 2.94704 3.45801 2.81104C3.61668 2.73171 3.76968 2.69204 3.91701 2.69204H14.1C14.2473 2.69204 14.4003 2.73171 14.559 2.81104C14.831 2.93571 14.9613 3.17371 14.95 3.52504L14.984 10.376C14.984 10.5574 14.95 10.7047 14.882 10.818C14.814 10.9314 14.712 11.022 14.576 11.09C14.44 11.158 14.2813 11.192 14.1 11.192H9.49301C9.40235 11.192 9.31168 11.226 9.22101 11.294L6.02501 14.082V11.617ZM5.17501 15.017C5.17501 15.1417 5.21468 15.2437 5.29401 15.323C5.37335 15.4024 5.46968 15.4449 5.58301 15.4505C5.69635 15.4562 5.79835 15.4194 5.88901 15.34L9.66301 12.042H14.1C14.406 12.042 14.6837 11.9797 14.933 11.855C15.2163 11.7304 15.4373 11.5405 15.596 11.2855C15.7547 11.0305 15.834 10.7217 15.834 10.359L15.8 3.54204C15.8113 3.19071 15.7405 2.88754 15.5875 2.63254C15.4345 2.37754 15.2192 2.18204 14.9415 2.04604C14.6638 1.91004 14.389 1.84204 14.117 1.84204H3.91701C3.62235 1.84204 3.34185 1.91288 3.07551 2.05454C2.80918 2.19621 2.59951 2.39171 2.44651 2.64104C2.29351 2.89038 2.21701 3.19071 2.21701 3.54204C2.20568 3.58738 2.20001 3.72338 2.20001 3.95004V7.07804C2.20001 8.94804 2.20285 10.053 2.20851 10.393C2.21418 10.733 2.29351 11.0249 2.44651 11.2685C2.59951 11.5122 2.81201 11.702 3.08401 11.838C3.35601 11.974 3.63368 12.042 3.91701 12.042H5.17501V15.017ZM5.60001 6.09204H12.4C12.5247 6.09204 12.6267 6.04954 12.706 5.96454C12.7853 5.87954 12.825 5.77754 12.825 5.65854C12.825 5.53954 12.7853 5.44038 12.706 5.36104C12.6267 5.28171 12.5247 5.24204 12.4 5.24204H5.60001C5.48668 5.24204 5.38751 5.28171 5.30251 5.36104C5.21751 5.44038 5.17501 5.53954 5.17501 5.65854C5.17501 5.77754 5.21751 5.87954 5.30251 5.96454C5.38751 6.04954 5.48668 6.09204 5.60001 6.09204ZM5.60001 8.64204H12.4C12.5247 8.64204 12.6267 8.59954 12.706 8.51454C12.7853 8.42954 12.825 8.32754 12.825 8.20854C12.825 8.08954 12.7853 7.99038 12.706 7.91104C12.6267 7.83171 12.5247 7.79204 12.4 7.79204H5.60001C5.48668 7.79204 5.38751 7.83171 5.30251 7.91104C5.21751 7.99038 5.17501 8.08954 5.17501 8.20854C5.17501 8.32754 5.21751 8.42954 5.30251 8.51454C5.38751 8.59954 5.48668 8.64204 5.60001 8.64204Z"
                    fill="#2D2D32"/>
                </svg>
                <span className="ml-[5px] text-[14px] text-[#414146]">Free Followup</span>
              </div>
            </div>
          </div>
          <img src={ConsultHero} alt="Consultation Hero" className="absolute h-[316px] mt-[40px] block right-0"/>
        </div>
      </div>
    </div>
    {/*Section 2*/}
    <div className="w-full flex items-center justify-center mt-[25px]">
      <div className="w-[1180px] mx-auto flex-col">
        <div className="mt-[15px] w-full flex flex-row justify-between">
          <div>
            <h2 className="text-[24px] font-[700] mt-[15px]">25+ Specialities</h2>
            <div className="text-[#414146] text-[14px] mt-[5px]">
              Consult with top doctors across specialities
            </div>
          </div>
          <button
            className="h-[80%] mt-[13px] text-[14px] text-black font-[400] px-[15px] py-[12px] border-[1.5px] border-black bg-white right-[10px] top-[22px] text-center rounded-[4px] outline-none cursor-pointer">
            See All Specialities
          </button>
        </div>

        <div className="flex flex-row justify-between">
          <Swiper
            slidesPerView={6}
            spaceBetween={2}
            pagination={{clickable: true}}
            navigation
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="mt-[20px] w-[186px] h-[248px] pr-[15px] flex flex-col items-center justify-center">
                <div className="w-[170px] h-[248px] flex flex-col items-start">
                  <div className="flex pl-[2px] pr-[2px] pt-[3px] pb-[6px]">
                    <div
                      className="flex w-[166px] flex-col rounded-[4px] bg-transparent shadow-[0px_3px_6px_0px_rgba(45,45,51,0.08)]">
                      <div className="flex w-full pt-[27px] pb-[18px] pl-[34px] pr-[34px] flex-col items-center">
                        <img src={Gynecologist} alt="Gynecology"/>
                      </div>
                      <div className="flex flex-col items-center pb-[21px]">
                        <p className={"font-[600] text-[16px] text-[2s2s32]"}>Gynecology</p>
                        <p className={"text-[14px] font-[400] text-[#787887]"}>₹499</p>
                        <div className={"flex flex-row items-center justify-center gap-1 mt-[5px]"}>
                          <p className={"text-[#199fd9] text-[14px] font-[600] "}>Consult Now</p>
                          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"
                               fill="none">
                            <path
                              d="M5.07198 4.54003C4.95998 4.42803 4.90398 4.2927 4.90398 4.13403C4.90398 3.97536 4.95998 3.83536 5.07198 3.71403C5.18398 3.5927 5.32164 3.53436 5.48498 3.53903C5.64831 3.5437 5.78598 3.60203 5.89798 3.71403L9.92998 7.74603L5.88398 11.638C5.77198 11.75 5.63431 11.806 5.47098 11.806C5.30764 11.806 5.16998 11.7454 5.05798 11.624C4.94598 11.5027 4.89231 11.3627 4.89698 11.204C4.90164 11.0454 4.95998 10.91 5.07198 10.798L8.26398 7.73203L5.07198 4.54003Z"
                              fill="#199FD9"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mt-[20px] w-[186px] h-[248px] pr-[15px] flex flex-col items-center justify-center">
                <div className="w-[170px] h-[248px] flex flex-col items-start">
                  <div className="flex pl-[2px] pr-[2px] pt-[3px] pb-[6px]">
                    <div
                      className="flex w-[166px] flex-col rounded-[4px] bg-transparent shadow-[0px_3px_6px_0px_rgba(45,45,51,0.08)]">
                      <div className="flex w-full pt-[27px] pb-[18px] pl-[34px] pr-[34px] flex-col items-center">
                        <img src={Sexology} alt="Gynecology"/>
                      </div>
                      <div className="flex flex-col items-center pb-[21px]">
                        <p className={"font-[600] text-[16px] text-[2s2s32]"}>Sexology</p>
                        <p className={"text-[14px] font-[400] text-[#787887]"}>₹599</p>
                        <div className={"flex flex-row items-center justify-center gap-1 mt-[5px]"}>
                          <p className={"text-[#199fd9] text-[14px] font-[600] "}>Consult Now</p>
                          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"
                               fill="none">
                            <path
                              d="M5.07198 4.54003C4.95998 4.42803 4.90398 4.2927 4.90398 4.13403C4.90398 3.97536 4.95998 3.83536 5.07198 3.71403C5.18398 3.5927 5.32164 3.53436 5.48498 3.53903C5.64831 3.5437 5.78598 3.60203 5.89798 3.71403L9.92998 7.74603L5.88398 11.638C5.77198 11.75 5.63431 11.806 5.47098 11.806C5.30764 11.806 5.16998 11.7454 5.05798 11.624C4.94598 11.5027 4.89231 11.3627 4.89698 11.204C4.90164 11.0454 4.95998 10.91 5.07198 10.798L8.26398 7.73203L5.07198 4.54003Z"
                              fill="#199FD9"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mt-[20px] w-[186px] h-[248px] pr-[15px] flex flex-col items-center justify-center">
                <div className="w-[170px] h-[248px] flex flex-col items-start">
                  <div className="flex pl-[2px] pr-[2px] pt-[3px] pb-[6px]">
                    <div
                      className="flex w-[166px] flex-col rounded-[4px] bg-transparent shadow-[0px_3px_6px_0px_rgba(45,45,51,0.08)]">
                      <div className="flex w-full pt-[27px] pb-[18px] pl-[34px] pr-[34px] flex-col items-center">
                        <img src={topSpeciality} alt="Top Speciality"/>
                      </div>
                      <div className="flex flex-col items-center pb-[21px]">
                        <p className={"font-[600] text-[16px] text-[2s2s32]"}>General Physician</p>
                        <p className={"text-[14px] font-[400] text-[#787887]"}>₹499</p>
                        <div className={"flex flex-row items-center justify-center gap-1 mt-[5px]"}>
                          <p className={"text-[#199fd9] text-[14px] font-[600] "}>Consult Now</p>
                          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"
                               fill="none">
                            <path
                              d="M5.07198 4.54003C4.95998 4.42803 4.90398 4.2927 4.90398 4.13403C4.90398 3.97536 4.95998 3.83536 5.07198 3.71403C5.18398 3.5927 5.32164 3.53436 5.48498 3.53903C5.64831 3.5437 5.78598 3.60203 5.89798 3.71403L9.92998 7.74603L5.88398 11.638C5.77198 11.75 5.63431 11.806 5.47098 11.806C5.30764 11.806 5.16998 11.7454 5.05798 11.624C4.94598 11.5027 4.89231 11.3627 4.89698 11.204C4.90164 11.0454 4.95998 10.91 5.07198 10.798L8.26398 7.73203L5.07198 4.54003Z"
                              fill="#199FD9"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mt-[20px] w-[186px] h-[248px] pr-[15px] flex flex-col items-center justify-center">
                <div className="w-[170px] h-[248px] flex flex-col items-start">
                  <div className="flex pl-[2px] pr-[2px] pt-[3px] pb-[6px]">
                    <div
                      className="flex w-[166px] flex-col rounded-[4px] bg-transparent shadow-[0px_3px_6px_0px_rgba(45,45,51,0.08)]">
                      <div className="flex w-full pt-[27px] pb-[18px] pl-[34px] pr-[34px] flex-col items-center">
                        <img src={Dermatology} alt="Gynecology"/>
                      </div>
                      <div className="flex flex-col items-center pb-[21px]">
                        <p className={"font-[600] text-[16px] text-[2s2s32]"}>Dermatology</p>
                        <p className={"text-[14px] font-[400] text-[#787887]"}>₹549</p>
                        <div className={"flex flex-row items-center justify-center gap-1 mt-[5px]"}>
                          <p className={"text-[#199fd9] text-[14px] font-[600] "}>Consult Now</p>
                          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"
                               fill="none">
                            <path
                              d="M5.07198 4.54003C4.95998 4.42803 4.90398 4.2927 4.90398 4.13403C4.90398 3.97536 4.95998 3.83536 5.07198 3.71403C5.18398 3.5927 5.32164 3.53436 5.48498 3.53903C5.64831 3.5437 5.78598 3.60203 5.89798 3.71403L9.92998 7.74603L5.88398 11.638C5.77198 11.75 5.63431 11.806 5.47098 11.806C5.30764 11.806 5.16998 11.7454 5.05798 11.624C4.94598 11.5027 4.89231 11.3627 4.89698 11.204C4.90164 11.0454 4.95998 10.91 5.07198 10.798L8.26398 7.73203L5.07198 4.54003Z"
                              fill="#199FD9"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mt-[20px] w-[186px] h-[248px] pr-[15px] flex flex-col items-center justify-center">
                <div className="w-[170px] h-[248px] flex flex-col items-start">
                  <div className="flex pl-[2px] pr-[2px] pt-[3px] pb-[6px]">
                    <div
                      className="flex w-[166px] flex-col rounded-[4px] bg-transparent shadow-[0px_3px_6px_0px_rgba(45,45,51,0.08)]">
                      <div className="flex w-full pt-[27px] pb-[18px] pl-[34px] pr-[34px] flex-col items-center">
                        <img src={Mental} alt="Gynecology"/>
                      </div>
                      <div className="flex flex-col items-center pb-[21px]">
                        <p className={"font-[600] text-[16px] text-[2s2s32]"}>Psychiatry</p>
                        <p className={"text-[14px] font-[400] text-[#787887]"}>₹599</p>
                        <div className={"flex flex-row items-center justify-center gap-1 mt-[5px]"}>
                          <p className={"text-[#199fd9] text-[14px] font-[600] "}>Consult Now</p>
                          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"
                               fill="none">
                            <path
                              d="M5.07198 4.54003C4.95998 4.42803 4.90398 4.2927 4.90398 4.13403C4.90398 3.97536 4.95998 3.83536 5.07198 3.71403C5.18398 3.5927 5.32164 3.53436 5.48498 3.53903C5.64831 3.5437 5.78598 3.60203 5.89798 3.71403L9.92998 7.74603L5.88398 11.638C5.77198 11.75 5.63431 11.806 5.47098 11.806C5.30764 11.806 5.16998 11.7454 5.05798 11.624C4.94598 11.5027 4.89231 11.3627 4.89698 11.204C4.90164 11.0454 4.95998 10.91 5.07198 10.798L8.26398 7.73203L5.07198 4.54003Z"
                              fill="#199FD9"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mt-[20px] w-[186px] h-[248px] pr-[15px] flex flex-col items-center justify-center">
                <div className="w-[170px] h-[248px] flex flex-col items-start">
                  <div className="flex pl-[2px] pr-[2px] pt-[3px] pb-[6px]">
                    <div
                      className="flex w-[166px] flex-col rounded-[4px] bg-transparent shadow-[0px_3px_6px_0px_rgba(45,45,51,0.08)]">
                      <div className="flex w-full pt-[27px] pb-[18px] pl-[34px] pr-[34px] flex-col items-center">
                        <img src={Stomach} alt="Gynecology"/>
                      </div>
                      <div className="flex flex-col items-center pb-[21px]">
                        <p className={"font-[600] text-[16px] text-[2s2s32] text-center"}>Stomach</p>
                        <p className={"text-[14px] font-[400] text-[#787887]"}>₹499</p>
                        <div className={"flex flex-row items-center justify-center gap-1 mt-[5px]"}>
                          <p className={"text-[#199fd9] text-[14px] font-[600] "}>Consult Now</p>
                          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"
                               fill="none">
                            <path
                              d="M5.07198 4.54003C4.95998 4.42803 4.90398 4.2927 4.90398 4.13403C4.90398 3.97536 4.95998 3.83536 5.07198 3.71403C5.18398 3.5927 5.32164 3.53436 5.48498 3.53903C5.64831 3.5437 5.78598 3.60203 5.89798 3.71403L9.92998 7.74603L5.88398 11.638C5.77198 11.75 5.63431 11.806 5.47098 11.806C5.30764 11.806 5.16998 11.7454 5.05798 11.624C4.94598 11.5027 4.89231 11.3627 4.89698 11.204C4.90164 11.0454 4.95998 10.91 5.07198 10.798L8.26398 7.73203L5.07198 4.54003Z"
                              fill="#199FD9"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mt-[20px] w-[186px] h-[248px] pr-[15px] flex flex-col items-center justify-center">
                <div className="w-[170px] h-[248px] flex flex-col items-start">
                  <div className="flex pl-[2px] pr-[2px] pt-[3px] pb-[6px]">
                    <div
                      className="flex w-[166px] flex-col rounded-[4px] bg-transparent shadow-[0px_3px_6px_0px_rgba(45,45,51,0.08)]">
                      <div className="flex w-full pt-[27px] pb-[18px] pl-[34px] pr-[34px] flex-col items-center">
                        <img src={Pediatric} alt="Gynecology"/>
                      </div>
                      <div className="flex flex-col items-center pb-[21px]">
                        <p className={"font-[600] text-[16px] text-[2s2s32]"}>Pediatrics</p>
                        <p className={"text-[14px] font-[400] text-[#787887]"}>₹599</p>
                        <div className={"flex flex-row items-center justify-center gap-1 mt-[5px]"}>
                          <p className={"text-[#199fd9] text-[14px] font-[600] "}>Consult Now</p>
                          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"
                               fill="none">
                            <path
                              d="M5.07198 4.54003C4.95998 4.42803 4.90398 4.2927 4.90398 4.13403C4.90398 3.97536 4.95998 3.83536 5.07198 3.71403C5.18398 3.5927 5.32164 3.53436 5.48498 3.53903C5.64831 3.5437 5.78598 3.60203 5.89798 3.71403L9.92998 7.74603L5.88398 11.638C5.77198 11.75 5.63431 11.806 5.47098 11.806C5.30764 11.806 5.16998 11.7454 5.05798 11.624C4.94598 11.5027 4.89231 11.3627 4.89698 11.204C4.90164 11.0454 4.95998 10.91 5.07198 10.798L8.26398 7.73203L5.07198 4.54003Z"
                              fill="#199FD9"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mt-[20px] w-[186px] h-[248px] pr-[15px] flex flex-col items-center justify-center">
                <div className="w-[170px] h-[248px] flex flex-col items-start">
                  <div className="flex pl-[2px] pr-[2px] pt-[3px] pb-[6px]">
                    <div
                      className="flex w-[166px] flex-col rounded-[4px] bg-transparent shadow-[0px_3px_6px_0px_rgba(45,45,51,0.08)]">
                      <div className="flex w-full pt-[27px] pb-[18px] pl-[34px] pr-[34px] flex-col items-center">
                        <img src={Kidney} alt="Gynecology"/>
                      </div>
                      <div className="flex flex-col items-center pb-[21px]">
                        <p className={"font-[600] text-[16px] text-[2s2s32]"}>Urology</p>
                        <p className={"text-[14px] font-[400] text-[#787887]"}>₹599</p>
                        <div className={"flex flex-row items-center justify-center gap-1 mt-[5px]"}>
                          <p className={"text-[#199fd9] text-[14px] font-[600] "}>Consult Now</p>
                          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"
                               fill="none">
                            <path
                              d="M5.07198 4.54003C4.95998 4.42803 4.90398 4.2927 4.90398 4.13403C4.90398 3.97536 4.95998 3.83536 5.07198 3.71403C5.18398 3.5927 5.32164 3.53436 5.48498 3.53903C5.64831 3.5437 5.78598 3.60203 5.89798 3.71403L9.92998 7.74603L5.88398 11.638C5.77198 11.75 5.63431 11.806 5.47098 11.806C5.30764 11.806 5.16998 11.7454 5.05798 11.624C4.94598 11.5027 4.89231 11.3627 4.89698 11.204C4.90164 11.0454 4.95998 10.91 5.07198 10.798L8.26398 7.73203L5.07198 4.54003Z"
                              fill="#199FD9"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* Add more SwiperSlides as needed */}
          </Swiper>
        </div>
      </div>
    </div>
    {/*Section 3*/}
    <div className="w-full flex items-center justify-center mt-[25px]">
      <div className="w-[1180px] mx-auto flex-col">
        <div className="mt-[15px] w-full flex flex-row justify-between">
          <div>
            <h2 className="text-[24px] font-[700] mt-[10px]">Common Health Concerns</h2>
            <div className="text-[#414146] text-[14px] mt-[5px]">
              Consult with a doctor online for any health issue
            </div>
          </div>
          <button
            className="h-[80%] mt-[5px] text-[14px] text-black font-[400] px-[15px] py-[12px] border-[1.5px] border-black bg-white right-[10px] top-[22px] text-center rounded-[4px] outline-none cursor-pointer">
            See All Symptoms
          </button>
        </div>

        <div className="flex flex-row justify-between mb-[21px] mt-[26px]">
          <Swiper
            slidesPerView={4}
            spaceBetween={4}
            pagination={{clickable: true}}
            navigation
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="mt-[10px] w-[287px] h-[248px] pr-[16px] flex flex-col items-center justify-center">
                <div className="w-[271px] h-[298.88px] flex flex-col items-start">
                  <div className="flex  pb-[6px]">
                    <div
                      className="flex w-[271px] min-h-[190px] p-1 flex-col gap-2 rounded-[7.5px] border-[1px] border-[#f0f0f5] bg-transparent shadow-[0px_3px_6px_0px_rgba(45,45,51,0.08)]">
                      <div className="flex w-full flex-col items-center">
                        <img src={Cough} alt="Cough and Cold"/>
                      </div>
                      <div className="flex flex-col items-start pb-[10px] pl-[16px]">
                        <p className={"font-[600] text-[16px] text-[2s2s32]"}>Cough & Cold ?</p>
                        <p className={"text-[14px] font-[400] text-[#787887]"}>₹499</p>
                        <div className={"flex flex-row items-center justify-center gap-1 mt-[5px]"}>
                          <p className={"text-[#199fd9] text-[14px] font-[600] "}>Consult Now</p>
                          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"
                               fill="none">
                            <path
                              d="M5.07198 4.54003C4.95998 4.42803 4.90398 4.2927 4.90398 4.13403C4.90398 3.97536 4.95998 3.83536 5.07198 3.71403C5.18398 3.5927 5.32164 3.53436 5.48498 3.53903C5.64831 3.5437 5.78598 3.60203 5.89798 3.71403L9.92998 7.74603L5.88398 11.638C5.77198 11.75 5.63431 11.806 5.47098 11.806C5.30764 11.806 5.16998 11.7454 5.05798 11.624C4.94598 11.5027 4.89231 11.3627 4.89698 11.204C4.90164 11.0454 4.95998 10.91 5.07198 10.798L8.26398 7.73203L5.07198 4.54003Z"
                              fill="#199FD9"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mt-[10px] w-[287px] h-[248px] pr-[16px] flex flex-col items-center justify-center">
                <div className="w-[271px] h-[298.88px] flex flex-col items-start">
                  <div className="flex  pb-[6px]">
                    <div
                      className="flex w-[271px] min-h-[190px] p-1 flex-col gap-2 rounded-[7.5px] border-[1px] border-[#f0f0f5] bg-transparent shadow-[0px_3px_6px_0px_rgba(45,45,51,0.08)]">
                      <div className="flex w-full flex-col items-center">
                        <img src={PeriodProblem} alt="Cough and Cold"/>
                      </div>
                      <div className="flex flex-col items-start pb-[10px] pl-[16px]">
                        <p className={"font-[600] text-[16px] text-[2s2s32]"}>Period Problems ?</p>
                        <p className={"text-[14px] font-[400] text-[#787887]"}>₹599</p>
                        <div className={"flex flex-row items-center justify-center gap-1 mt-[5px]"}>
                          <p className={"text-[#199fd9] text-[14px] font-[600] "}>Consult Now</p>
                          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"
                               fill="none">
                            <path
                              d="M5.07198 4.54003C4.95998 4.42803 4.90398 4.2927 4.90398 4.13403C4.90398 3.97536 4.95998 3.83536 5.07198 3.71403C5.18398 3.5927 5.32164 3.53436 5.48498 3.53903C5.64831 3.5437 5.78598 3.60203 5.89798 3.71403L9.92998 7.74603L5.88398 11.638C5.77198 11.75 5.63431 11.806 5.47098 11.806C5.30764 11.806 5.16998 11.7454 5.05798 11.624C4.94598 11.5027 4.89231 11.3627 4.89698 11.204C4.90164 11.0454 4.95998 10.91 5.07198 10.798L8.26398 7.73203L5.07198 4.54003Z"
                              fill="#199FD9"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mt-[10px] w-[287px] h-[248px] pr-[16px] flex flex-col items-center justify-center">
                <div className="w-[271px] h-[298.88px] flex flex-col items-start">
                  <div className="flex  pb-[6px]">
                    <div
                      className="flex w-[271px] min-h-[190px] p-1 flex-col gap-2 rounded-[7.5px] border-[1px] border-[#f0f0f5] bg-transparent shadow-[0px_3px_6px_0px_rgba(45,45,51,0.08)]">
                      <div className="flex w-full flex-col items-center">
                        <img src={PeriodProblem} alt="Cough and Cold"/>
                      </div>
                      <div className="flex flex-col items-start pb-[10px] pl-[16px]">
                        <p className={"font-[600] text-[16px] text-[2s2s32]"}>Performance issues in bed?</p>
                        <p className={"text-[14px] font-[400] text-[#787887]"}>₹599</p>
                        <div className={"flex flex-row items-center justify-center gap-1 mt-[5px]"}>
                          <p className={"text-[#199fd9] text-[14px] font-[600] "}>Consult Now</p>
                          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"
                               fill="none">
                            <path
                              d="M5.07198 4.54003C4.95998 4.42803 4.90398 4.2927 4.90398 4.13403C4.90398 3.97536 4.95998 3.83536 5.07198 3.71403C5.18398 3.5927 5.32164 3.53436 5.48498 3.53903C5.64831 3.5437 5.78598 3.60203 5.89798 3.71403L9.92998 7.74603L5.88398 11.638C5.77198 11.75 5.63431 11.806 5.47098 11.806C5.30764 11.806 5.16998 11.7454 5.05798 11.624C4.94598 11.5027 4.89231 11.3627 4.89698 11.204C4.90164 11.0454 4.95998 10.91 5.07198 10.798L8.26398 7.73203L5.07198 4.54003Z"
                              fill="#199FD9"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mt-[10px] w-[287px] h-[248px] pr-[16px] flex flex-col items-center justify-center">
                <div className="w-[271px] h-[298.88px] flex flex-col items-start">
                  <div className="flex  pb-[6px]">
                    <div
                      className="flex w-[271px] min-h-[190px] p-1 flex-col gap-2 rounded-[7.5px] border-[1px] border-[#f0f0f5] bg-transparent shadow-[0px_3px_6px_0px_rgba(45,45,51,0.08)]">
                      <div className="flex w-full flex-col items-center">
                        <img src={Skin} alt="Cough and Cold"/>
                      </div>
                      <div className="flex flex-col items-start pb-[10px] pl-[16px]">
                        <p className={"font-[600] text-[16px] text-[2s2s32]"}>Skin Problems?</p>
                        <p className={"text-[14px] font-[400] text-[#787887]"}>₹549</p>
                        <div className={"flex flex-row items-center justify-center gap-1 mt-[5px]"}>
                          <p className={"text-[#199fd9] text-[14px] font-[600] "}>Consult Now</p>
                          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"
                               fill="none">
                            <path
                              d="M5.07198 4.54003C4.95998 4.42803 4.90398 4.2927 4.90398 4.13403C4.90398 3.97536 4.95998 3.83536 5.07198 3.71403C5.18398 3.5927 5.32164 3.53436 5.48498 3.53903C5.64831 3.5437 5.78598 3.60203 5.89798 3.71403L9.92998 7.74603L5.88398 11.638C5.77198 11.75 5.63431 11.806 5.47098 11.806C5.30764 11.806 5.16998 11.7454 5.05798 11.624C4.94598 11.5027 4.89231 11.3627 4.89698 11.204C4.90164 11.0454 4.95998 10.91 5.07198 10.798L8.26398 7.73203L5.07198 4.54003Z"
                              fill="#199FD9"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mt-[10px] w-[287px] h-[248px] pr-[16px] flex flex-col items-center justify-center">
                <div className="w-[271px] h-[298.88px] flex flex-col items-start">
                  <div className="flex  pb-[6px]">
                    <div
                      className="flex w-[271px] min-h-[190px] p-1 flex-col gap-2 rounded-[7.5px] border-[1px] border-[#f0f0f5] bg-transparent shadow-[0px_3px_6px_0px_rgba(45,45,51,0.08)]">
                      <div className="flex w-full flex-col items-center">
                        <img src={Anxiety} alt="Cough and Cold"/>
                      </div>
                      <div className="flex flex-col items-start pb-[10px] pl-[16px]">
                        <p className={"font-[600] text-[16px] text-[2s2s32]"}>Depression or Anxiety?</p>
                        <p className={"text-[14px] font-[400] text-[#787887]"}>₹499</p>
                        <div className={"flex flex-row items-center justify-center gap-1 mt-[5px]"}>
                          <p className={"text-[#199fd9] text-[14px] font-[600] "}>Consult Now</p>
                          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"
                               fill="none">
                            <path
                              d="M5.07198 4.54003C4.95998 4.42803 4.90398 4.2927 4.90398 4.13403C4.90398 3.97536 4.95998 3.83536 5.07198 3.71403C5.18398 3.5927 5.32164 3.53436 5.48498 3.53903C5.64831 3.5437 5.78598 3.60203 5.89798 3.71403L9.92998 7.74603L5.88398 11.638C5.77198 11.75 5.63431 11.806 5.47098 11.806C5.30764 11.806 5.16998 11.7454 5.05798 11.624C4.94598 11.5027 4.89231 11.3627 4.89698 11.204C4.90164 11.0454 4.95998 10.91 5.07198 10.798L8.26398 7.73203L5.07198 4.54003Z"
                              fill="#199FD9"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mt-[10px] w-[287px] h-[248px] pr-[16px] flex flex-col items-center justify-center">
                <div className="w-[271px] h-[298.88px] flex flex-col items-start">
                  <div className="flex  pb-[6px]">
                    <div
                      className="flex w-[271px] min-h-[190px] p-1 flex-col gap-2 rounded-[7.5px] border-[1px] border-[#f0f0f5] bg-transparent shadow-[0px_3px_6px_0px_rgba(45,45,51,0.08)]">
                      <div className="flex w-full flex-col items-center">
                        <img src={WeightLose} alt="Cough and Cold"/>
                      </div>
                      <div className="flex flex-col items-start pb-[10px] pl-[16px]">
                        <p className={"font-[600] text-[16px] text-[2s2s32]"}>Want to lose weight?</p>
                        <p className={"text-[14px] font-[400] text-[#787887]"}>₹499</p>
                        <div className={"flex flex-row items-center justify-center gap-1 mt-[5px]"}>
                          <p className={"text-[#199fd9] text-[14px] font-[600] "}>Consult Now</p>
                          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"
                               fill="none">
                            <path
                              d="M5.07198 4.54003C4.95998 4.42803 4.90398 4.2927 4.90398 4.13403C4.90398 3.97536 4.95998 3.83536 5.07198 3.71403C5.18398 3.5927 5.32164 3.53436 5.48498 3.53903C5.64831 3.5437 5.78598 3.60203 5.89798 3.71403L9.92998 7.74603L5.88398 11.638C5.77198 11.75 5.63431 11.806 5.47098 11.806C5.30764 11.806 5.16998 11.7454 5.05798 11.624C4.94598 11.5027 4.89231 11.3627 4.89698 11.204C4.90164 11.0454 4.95998 10.91 5.07198 10.798L8.26398 7.73203L5.07198 4.54003Z"
                              fill="#199FD9"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mt-[10px] w-[287px] h-[248px] pr-[16px] flex flex-col items-center justify-center">
                <div className="w-[271px] h-[298.88px] flex flex-col items-start">
                  <div className="flex  pb-[6px]">
                    <div
                      className="flex w-[271px] min-h-[190px] p-1 flex-col gap-2 rounded-[7.5px] border-[1px] border-[#f0f0f5] bg-transparent shadow-[0px_3px_6px_0px_rgba(45,45,51,0.08)]">
                      <div className="flex w-full flex-col items-center">
                        <img src={StomachIssue} alt="Cough and Cold"/>
                      </div>
                      <div className="flex flex-col items-start pb-[10px] pl-[16px]">
                        <p className={"font-[600] text-[16px] text-[2s2s32]"}>Stomach issues</p>
                        <p className={"text-[14px] font-[400] text-[#787887]"}>₹499</p>
                        <div className={"flex flex-row items-center justify-center gap-1 mt-[5px]"}>
                          <p className={"text-[#199fd9] text-[14px] font-[600] "}>Consult Now</p>
                          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"
                               fill="none">
                            <path
                              d="M5.07198 4.54003C4.95998 4.42803 4.90398 4.2927 4.90398 4.13403C4.90398 3.97536 4.95998 3.83536 5.07198 3.71403C5.18398 3.5927 5.32164 3.53436 5.48498 3.53903C5.64831 3.5437 5.78598 3.60203 5.89798 3.71403L9.92998 7.74603L5.88398 11.638C5.77198 11.75 5.63431 11.806 5.47098 11.806C5.30764 11.806 5.16998 11.7454 5.05798 11.624C4.94598 11.5027 4.89231 11.3627 4.89698 11.204C4.90164 11.0454 4.95998 10.91 5.07198 10.798L8.26398 7.73203L5.07198 4.54003Z"
                              fill="#199FD9"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mt-[10px] w-[287px] h-[248px] pr-[16px] flex flex-col items-center justify-center">
                <div className="w-[271px] h-[298.88px] flex flex-col items-start">
                  <div className="flex  pb-[6px]">
                    <div
                      className="flex w-[271px] min-h-[190px] p-1 flex-col gap-2 rounded-[7.5px] border-[1px] border-[#f0f0f5] bg-transparent shadow-[0px_3px_6px_0px_rgba(45,45,51,0.08)]">
                      <div className="flex w-full flex-col items-center">
                        <img src={VaginalInfection} alt="Cough and Cold"/>
                      </div>
                      <div className="flex flex-col items-start pb-[10px] pl-[16px]">
                        <p className={"font-[600] text-[16px] text-[2s2s32]"}>Vaginal Infections?</p>
                        <p className={"text-[14px] font-[400] text-[#787887]"}>₹499</p>
                        <div className={"flex flex-row items-center justify-center gap-1 mt-[5px]"}>
                          <p className={"text-[#199fd9] text-[14px] font-[600] "}>Consult Now</p>
                          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"
                               fill="none">
                            <path
                              d="M5.07198 4.54003C4.95998 4.42803 4.90398 4.2927 4.90398 4.13403C4.90398 3.97536 4.95998 3.83536 5.07198 3.71403C5.18398 3.5927 5.32164 3.53436 5.48498 3.53903C5.64831 3.5437 5.78598 3.60203 5.89798 3.71403L9.92998 7.74603L5.88398 11.638C5.77198 11.75 5.63431 11.806 5.47098 11.806C5.30764 11.806 5.16998 11.7454 5.05798 11.624C4.94598 11.5027 4.89231 11.3627 4.89698 11.204C4.90164 11.0454 4.95998 10.91 5.07198 10.798L8.26398 7.73203L5.07198 4.54003Z"
                              fill="#199FD9"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mt-[20px] w-[287px] h-[248px] pr-[16px] flex flex-col items-center justify-center">
                <div className="w-[271px] h-[298.88px] flex flex-col items-start">
                  <div className="flex  pb-[6px]">
                    <div
                      className="flex w-[271px] min-h-[190px] p-1 flex-col gap-2 rounded-[7.5px] border-[1px] border-[#f0f0f5] bg-transparent shadow-[0px_3px_6px_0px_rgba(45,45,51,0.08)]">
                      <div className="flex w-full flex-col items-center">
                        <img src={SickKid} alt="Cough and Cold"/>
                      </div>
                      <div className="flex flex-col items-start pb-[10px] pl-[16px]">
                        <p className={"font-[600] text-[16px] text-[2s2s32]"}>Sick kid?</p>
                        <p className={"text-[14px] font-[400] text-[#787887]"}>₹499</p>
                        <div className={"flex flex-row items-center justify-center gap-1 mt-[5px]"}>
                          <p className={"text-[#199fd9] text-[14px] font-[600] "}>Consult Now</p>
                          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"
                               fill="none">
                            <path
                              d="M5.07198 4.54003C4.95998 4.42803 4.90398 4.2927 4.90398 4.13403C4.90398 3.97536 4.95998 3.83536 5.07198 3.71403C5.18398 3.5927 5.32164 3.53436 5.48498 3.53903C5.64831 3.5437 5.78598 3.60203 5.89798 3.71403L9.92998 7.74603L5.88398 11.638C5.77198 11.75 5.63431 11.806 5.47098 11.806C5.30764 11.806 5.16998 11.7454 5.05798 11.624C4.94598 11.5027 4.89231 11.3627 4.89698 11.204C4.90164 11.0454 4.95998 10.91 5.07198 10.798L8.26398 7.73203L5.07198 4.54003Z"
                              fill="#199FD9"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* Add more SwiperSlides as needed */}
          </Swiper>
        </div>
      </div>
    </div>

    {/*Section 4*/}
    <div className="w-full flex items-center justify-center mt-[25px] mb-[20px]">
      <div className="w-[1180px] mx-auto flex-col">
        <div className="mt-[15px] w-full flex flex-col justify-between items-start">
          <h2 className="text-[24px] font-[700] mt-[15px] mb-[10px]">Offers</h2>
          <div className="flex flex-row justify-between gap-4 ">
            <div
              className={"w-[574px] h-[180px] flex flex-col gap-2 items-start justify-center rounded-[4px]  bg-[#96d3bf] p-[20px]"}>
              <div className={"flex flex-col items-start rounded-[2px] bg-[#fff]"}><p
                className={" pl-[7px] pr-[7px] text-[#2E6F5A] uppercase text-[14px] leading-[27px]"}>Offer</p></div>
              <h4 className={"font-[600] text-[24px] leading-[34px]"}>Book appointment now & get <br/> 200 HealthCash
              </h4>
              <div className={"flex flex-row items-center justify-center gap-2"}>
                <p className={"font-[600] leading-[20px]"}>Book Now</p>
                <div className={"flex w-[16px] items-start rounded-[16px] bg-[#1e1e28]"}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                    <path
                      d="M6.17279 5.08609C6.04799 4.9613 5.98559 4.81049 5.98559 4.63369C5.98559 4.45689 6.04799 4.30089 6.17279 4.1657C6.29759 4.03049 6.45099 3.9655 6.63299 3.97069C6.81499 3.97589 6.96839 4.04089 7.09319 4.1657L11.586 8.65849L7.07759 12.9953C6.95279 13.1201 6.79939 13.1825 6.61739 13.1825C6.43539 13.1825 6.28199 13.1149 6.15719 12.9797C6.03239 12.8445 5.97259 12.6885 5.97779 12.5117C5.98299 12.3349 6.04799 12.1841 6.17279 12.0593L9.72959 8.64289L6.17279 5.08609Z"
                      fill="white"/>
                  </svg>

                </div>
              </div>
            </div>
            <div
              className={"w-[574px] h-[180px] flex flex-col gap-2 items-start justify-center rounded-[4px]  bg-[#FEBA7F] p-[20px]"}>
              <div className={"flex flex-col items-start rounded-[2px] bg-[#fff]"}><p
                className={" pl-[7px] pr-[7px] text-[#2E6F5A] uppercase text-[14px] leading-[27px]"}>Offer</p></div>
              <h4 className={"font-[600] text-[24px] leading-[34px]"}>Consult with specialists at <br/>
                just ₹199
              </h4>
              <div className={"flex flex-row items-center justify-center gap-2"}>
                <p className={"font-[600] leading-[20px]"}>Consult Now</p>
                <div className={"flex w-[16px] items-start rounded-[16px] bg-[#1e1e28]"}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                    <path
                      d="M6.17279 5.08609C6.04799 4.9613 5.98559 4.81049 5.98559 4.63369C5.98559 4.45689 6.04799 4.30089 6.17279 4.1657C6.29759 4.03049 6.45099 3.9655 6.63299 3.97069C6.81499 3.97589 6.96839 4.04089 7.09319 4.1657L11.586 8.65849L7.07759 12.9953C6.95279 13.1201 6.79939 13.1825 6.61739 13.1825C6.43539 13.1825 6.28199 13.1149 6.15719 12.9797C6.03239 12.8445 5.97259 12.6885 5.97779 12.5117C5.98299 12.3349 6.04799 12.1841 6.17279 12.0593L9.72959 8.64289L6.17279 5.08609Z"
                      fill="white"/>
                  </svg>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    {/*Section 5*/}
    <div className="w-full flex items-center justify-center mt-[30px] mb-[40px]">
      <div className="w-[1180px] mx-auto flex-col">
        <div className="mt-[15px] w-full flex flex-col justify-between items-center">
          <p className="text-[#2d2d32] text-center text-[30px] font-[700] leading-[45px]">How it Works</p>
        </div>
        <div className="flex justify-between items-center mt-[40px] relative">
          <div className={"w-[68%] h-[2px] top-[38px] left-[14.5%] bg-[#eaeaea] absolute"}></div>
          <div className="flex flex-col items-center z-10 ml-10">
            <div className="w-[64px] h-[64px] flex items-center justify-center bg-[#f0f0f0] rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                <path
                  d="M15.2657 15.116L24.0337 22.124H19.2017C18.967 22.124 18.775 22.22 18.6257 22.412L15.2657 26.796V15.116ZM25.9857 23.532C26.199 23.532 26.375 23.4573 26.5137 23.308C26.6524 23.1586 26.7164 22.9826 26.7057 22.78C26.695 22.5773 26.6044 22.412 26.4337 22.284L15.0097 13.1C14.775 12.9293 14.5297 12.908 14.2737 13.036C14.0177 13.164 13.8897 13.3666 13.8897 13.644V28.844C13.8897 29.0573 13.9644 29.228 14.1137 29.356C14.263 29.484 14.439 29.5426 14.6417 29.532C14.8444 29.5213 15.0097 29.4306 15.1377 29.26L19.5217 23.532H25.9857ZM10.7217 13.068H6.5297C6.3377 13.068 6.1777 13.132 6.0497 13.26C5.9217 13.388 5.8577 13.548 5.8577 13.74C5.8577 13.932 5.9217 14.0973 6.0497 14.236C6.1777 14.3746 6.3377 14.444 6.5297 14.444H10.7217C10.9137 14.444 11.0737 14.3746 11.2017 14.236C11.3297 14.0973 11.3937 13.932 11.3937 13.74C11.3937 13.548 11.3297 13.388 11.2017 13.26C11.0737 13.132 10.9137 13.068 10.7217 13.068ZM23.2337 13.068H19.0737C18.8817 13.068 18.7164 13.132 18.5777 13.26C18.439 13.388 18.3697 13.548 18.3697 13.74C18.3697 13.932 18.439 14.0973 18.5777 14.236C18.7164 14.3746 18.8817 14.444 19.0737 14.444H23.2337C23.4257 14.444 23.591 14.3746 23.7297 14.236C23.8684 14.0973 23.9377 13.932 23.9377 13.74C23.9377 13.548 23.8684 13.388 23.7297 13.26C23.591 13.132 23.4257 13.068 23.2337 13.068ZM12.1617 9.96397L9.1857 7.05197C9.03636 6.92397 8.8657 6.85997 8.6737 6.85997C8.4817 6.85997 8.3217 6.93464 8.1937 7.08397C8.0657 7.2333 8.0017 7.39864 8.0017 7.57997C8.0017 7.7613 8.0657 7.91597 8.1937 8.04397L11.2017 10.956C11.351 11.084 11.5217 11.148 11.7137 11.148C11.9057 11.148 12.0657 11.084 12.1937 10.956C12.3217 10.828 12.3857 10.6626 12.3857 10.46C12.3857 10.2573 12.311 10.092 12.1617 9.96397ZM15.4897 9.22797V5.03597C15.4897 4.84397 15.4204 4.68397 15.2817 4.55597C15.143 4.42797 14.9777 4.36397 14.7857 4.36397C14.5937 4.36397 14.4284 4.42797 14.2897 4.55597C14.151 4.68397 14.0817 4.84397 14.0817 5.03597V9.22797C14.0817 9.41997 14.151 9.5853 14.2897 9.72397C14.4284 9.86264 14.5937 9.93197 14.7857 9.93197C14.9777 9.93197 15.143 9.86264 15.2817 9.72397C15.4204 9.5853 15.4897 9.41997 15.4897 9.22797ZM18.2737 10.956L21.2177 8.01197C21.367 7.86264 21.4417 7.69197 21.4417 7.49997C21.4417 7.30797 21.367 7.14797 21.2177 7.01997C21.0684 6.89197 20.903 6.82264 20.7217 6.81197C20.5404 6.80131 20.3857 6.87064 20.2577 7.01997L17.2817 9.96397C17.1537 10.1133 17.0897 10.2786 17.0897 10.46C17.0897 10.6413 17.1537 10.8066 17.2817 10.956C17.4097 11.1053 17.575 11.1746 17.7777 11.164C17.9804 11.1533 18.1457 11.084 18.2737 10.956ZM11.1697 16.012L8.1617 18.924C8.01236 19.052 7.9377 19.212 7.9377 19.404C7.9377 19.596 8.01236 19.7666 8.1617 19.916C8.31103 20.0653 8.47636 20.1346 8.6577 20.124C8.83903 20.1133 8.9937 20.044 9.1217 19.916L12.1297 17.036C12.279 16.8866 12.3537 16.716 12.3537 16.524C12.3537 16.332 12.2897 16.172 12.1617 16.044C12.0337 15.916 11.8737 15.8466 11.6817 15.836C11.4897 15.8253 11.319 15.884 11.1697 16.012Z"
                  fill="#787887"/>
              </svg>
            </div>
            <p className="text-center text-[14px] mt-[10px]">Select a speciality or symptom</p>
          </div>

          <div className="flex flex-col items-center z-10">
            <div className="w-[64px] h-[64px] flex items-center justify-center bg-[#f0f0f0] rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                <path
                  d="M15.077 19.3399C14.885 19.3399 14.725 19.4039 14.597 19.5319L9.637 23.8839V20.0759C9.637 19.8625 9.56233 19.6865 9.413 19.5479C9.26367 19.4092 9.093 19.3399 8.901 19.3399L6.149 19.3719C5.957 19.3719 5.733 19.3079 5.477 19.1799C5.26367 19.0732 5.109 18.9345 5.013 18.7639C4.917 18.5932 4.85833 18.3692 4.837 18.0919V7.30787C4.85833 6.79587 5.07167 6.42254 5.477 6.18787C5.69033 6.08121 5.91433 6.02787 6.149 6.02787H13.925L21.701 5.99587C21.893 5.99587 22.117 6.05987 22.373 6.18787C22.7997 6.37987 23.0023 6.74254 22.981 7.27587L23.013 18.0919C23.013 18.3905 22.965 18.6199 22.869 18.7799C22.773 18.9399 22.6183 19.0732 22.405 19.1799C22.1277 19.3079 21.893 19.3719 21.701 19.3719L15.077 19.3399ZM8.197 25.4519C8.197 25.7505 8.33567 25.9692 8.613 26.1079C8.89033 26.2465 9.14633 26.2092 9.381 25.9959L15.365 20.7799L21.669 20.8119C22.117 20.8119 22.5703 20.7052 23.029 20.4919C23.4877 20.2785 23.845 19.9692 24.101 19.5639C24.357 19.1585 24.4743 18.6679 24.453 18.0919L24.421 7.30787C24.4423 6.75321 24.3303 6.26787 24.085 5.85187C23.8397 5.43587 23.4823 5.11054 23.013 4.87587C22.629 4.70521 22.1917 4.59854 21.701 4.55587C20.3997 4.57721 17.8077 4.58787 13.925 4.58787H6.149C5.67967 4.58787 5.23167 4.69454 4.805 4.90787C3.88767 5.39854 3.41833 6.19854 3.397 7.30787V18.1239C3.41833 18.6785 3.55167 19.1532 3.797 19.5479C4.04233 19.9425 4.37833 20.2465 4.805 20.4599C5.27433 20.6945 5.72233 20.8119 6.149 20.8119H8.197V25.4519ZM9.445 11.0519H19.365C19.557 11.0519 19.7277 10.9825 19.877 10.8439C20.0263 10.7052 20.101 10.5345 20.101 10.3319C20.101 10.1292 20.0263 9.95854 19.877 9.81987C19.7277 9.68121 19.557 9.61187 19.365 9.61187H9.445C9.253 9.61187 9.08767 9.68121 8.949 9.81987C8.81033 9.95854 8.741 10.1239 8.741 10.3159C8.741 10.5079 8.81033 10.6785 8.949 10.8279C9.08767 10.9772 9.253 11.0519 9.445 11.0519ZM9.445 15.3719H19.365C19.557 15.3719 19.7277 15.3025 19.877 15.1639C20.0263 15.0252 20.101 14.8545 20.101 14.6519C20.101 14.4492 20.0263 14.2785 19.877 14.1399C19.7277 14.0012 19.557 13.9319 19.365 13.9319H9.445C9.253 13.9319 9.08767 14.0012 8.949 14.1399C8.81033 14.2785 8.741 14.4439 8.741 14.6359C8.741 14.8279 8.81033 14.9985 8.949 15.1479C9.08767 15.2972 9.253 15.3719 9.445 15.3719ZM24.197 25.7079L19.973 22.1239C19.8237 22.0172 19.6743 21.9639 19.525 21.9639H16.709C16.4957 21.9639 16.3197 22.0332 16.181 22.1719C16.0423 22.3105 15.973 22.4759 15.973 22.6679C15.973 22.8599 16.0423 23.0305 16.181 23.1799C16.3197 23.3292 16.4957 23.4039 16.709 23.4039H19.237L24.453 27.8199C24.6877 28.0119 24.9437 28.0439 25.221 27.9159C25.4983 27.7879 25.637 27.5639 25.637 27.2439V23.4039H27.813C28.6663 23.4039 29.3277 23.0305 29.797 22.2839C29.989 21.9212 30.1063 21.5692 30.149 21.2279C30.1703 20.2252 30.181 18.2945 30.181 15.4359V10.4439C30.181 8.58787 29.1677 7.57454 27.141 7.40387C26.9277 7.38254 26.5757 7.37187 26.085 7.37187C25.8717 7.37187 25.6957 7.44121 25.557 7.57987C25.4183 7.71854 25.349 7.89454 25.349 8.10787C25.349 8.32121 25.4183 8.49187 25.557 8.61987C25.6957 8.74787 25.8717 8.81187 26.085 8.81187C26.533 8.81187 26.8423 8.82254 27.013 8.84387C27.6317 8.88654 28.0743 9.02521 28.341 9.25987C28.6077 9.49454 28.741 9.88921 28.741 10.4439V21.1319C28.741 21.1319 28.7303 21.1639 28.709 21.2279C28.645 21.3772 28.5917 21.4839 28.549 21.5479C28.3783 21.8252 28.133 21.9639 27.813 21.9639H24.933C24.7197 21.9639 24.5437 22.0332 24.405 22.1719C24.2663 22.3105 24.197 22.4759 24.197 22.6679V25.7079Z"
                  fill="#787887"/>
              </svg>
            </div>
            <p className="text-center text-[14px] mt-[10px]">Audio/video call with a verified doctor</p>
          </div>

          <div className="flex flex-col items-center z-10 mr-10">
            <div className="w-[64px] h-[64px] flex items-center justify-center bg-[#f0f0f0] rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                <path
                  d="M15.0043 18.2521C16.0923 18.2094 17.1643 17.9161 18.2203 17.3721C19.2763 16.8281 20.0816 16.0867 20.6363 15.1481C21.2123 14.1454 21.5003 12.9561 21.5003 11.5801C21.5003 10.2041 21.1909 9.03608 20.5723 8.07608C19.9963 7.18008 19.1643 6.49741 18.0763 6.02808C17.1163 5.60141 16.0389 5.38808 14.8443 5.38808C14.8016 5.38808 14.7803 5.39875 14.7803 5.42008L9.85228 5.38808C9.63894 5.38808 9.45228 5.46808 9.29228 5.62808C9.13228 5.78808 9.05228 5.97475 9.05228 6.18808V23.2121C9.05228 23.4254 9.13228 23.6121 9.29228 23.7721C9.45228 23.9321 9.64428 24.0121 9.86828 24.0121C10.0923 24.0121 10.2789 23.9321 10.4283 23.7721C10.5776 23.6121 10.6523 23.4254 10.6523 23.2121V18.2521H15.0043ZM10.6523 6.98808H14.8123H14.8763C15.8363 6.98808 16.6896 7.14808 17.4363 7.46808C19.0789 8.17208 19.9003 9.54808 19.9003 11.5961C19.9003 13.6441 19.1003 15.0947 17.5003 15.9481C16.9456 16.2254 16.3589 16.4281 15.7403 16.5561C15.6123 16.5774 15.4416 16.5987 15.2283 16.6201L14.9723 16.6521H10.6523V6.98808ZM23.1003 26.4441L16.7003 17.2921C16.5723 17.1214 16.3963 17.0147 16.1723 16.9721C15.9483 16.9294 15.7509 16.9721 15.5803 17.1001C15.4096 17.2281 15.3029 17.4041 15.2603 17.6281C15.2176 17.8521 15.2603 18.0494 15.3883 18.2201L21.7883 27.3721C21.8949 27.5427 22.0603 27.6494 22.2843 27.6921C22.5083 27.7347 22.7056 27.6921 22.8763 27.5641C23.0469 27.4361 23.1536 27.2601 23.1963 27.0361C23.2389 26.8121 23.2069 26.6147 23.1003 26.4441ZM16.6363 27.4041L23.0363 19.7881C23.1856 19.6174 23.2496 19.4254 23.2283 19.2121C23.2069 18.9987 23.1109 18.8174 22.9403 18.6681C22.7696 18.5187 22.5776 18.4547 22.3643 18.4761C22.1509 18.4974 21.9696 18.5934 21.8203 18.7641L15.4203 26.3801C15.2709 26.5507 15.2069 26.7481 15.2283 26.9721C15.2496 27.1961 15.3456 27.3827 15.5163 27.5321C15.6869 27.6814 15.8789 27.7401 16.0923 27.7081C16.3056 27.6761 16.4869 27.5747 16.6363 27.4041Z"
                  fill="#787887"/>
              </svg>
            </div>
            <p className="text-center text-[14px] mt-[10px]">Get a digital prescription & a free follow-up</p>
          </div>
        </div>
      </div>
    </div>
    {/*Section 6*/}
    <div className={"w-full flex items-center justify-center bg-[#2d2d32]"}>
      <div className={"w-[1180px] mx-auto flex flex-row items-center justify-around p-4"}>
        <div className={"flex flex-col items-center justify-center"}>
          <p className={"text-[22px] font-[600] text-white"}>2,00,000+</p>
          <p className={"text-[14px] mt-[5px] text-white"}>Happy Users</p>
        </div>
        <div className={"flex flex-col items-center justify-center"}>
          <p className={"text-[22px] font-[600] text-white"}>2,000+</p>
          <p className={"text-[14px] mt-[5px] text-white"}>Verified Doctors</p>
        </div>
        <div className={"flex flex-col items-center justify-center"}>
          <p className={"text-[22px] font-[600] text-white"}>25+</p>
          <p className={"text-[14px] mt-[5px] text-white"}>Specialities</p>
        </div>
        <div className={"flex flex-col items-center justify-center"}>
          <p className={"text-[22px] font-[600] text-white"}>4.5/5</p>
          <p className={"text-[14px] mt-[5px] text-white"}>Ratings</p>
        </div>

      </div>
    </div>

    {/*Section 7*/}
    <div className="w-full flex items-center justify-center mt-[25px] mb-[20px]">
      <div className="w-[1180px] mx-auto flex-col">
        <div className="mt-[15px] w-full flex flex-col justify-between items-start">
          <h2 className="text-[24px] font-[700] mt-[15px] mb-[10px]">Benefits of Online Consultation</h2>
          <div className="grid grid-cols-3 justify-between items-start gap-4 p-8 border-[1px] border-[#F0F0F5] ">
            <div className={"flex flex-col items-start justify-center p-4"}>
              <div className={"flex flex-row items-center justify-center"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                  <path
                    d="M9.02001 13.9501C8.82001 13.7701 8.55001 13.7001 8.21001 13.7401C7.87001 13.7801 7.59001 13.9001 7.37001 14.1001C7.15001 14.3001 7.03501 14.5601 7.02501 14.8801C7.01501 15.2001 7.11001 15.4601 7.31001 15.6601L12.2 20.7901C12.42 20.9901 12.675 21.0901 12.965 21.0901C13.255 21.0901 13.5 20.9901 13.7 20.7901L23.9 10.8001C24.1 10.6001 24.18 10.3351 24.14 10.0051C24.1 9.67509 23.975 9.40009 23.765 9.18009C23.555 8.96009 23.27 8.85009 22.91 8.85009C22.55 8.85009 22.27 8.96009 22.07 9.18009L13.01 18.1501L9.02001 13.9501Z"
                    fill="#414146"/>
                </svg>
                <p className={"text-[20px] font-[600] leading-[20px]"}>Consult Top Doctors 24x7</p>
              </div>
              <p className={"text-[16px] font-[400] leading-[20px] mt-[16px]"}>Connect instantly with a 24x7 specialist
                or
                choose to video visit a particular doctor.</p>
            </div>
            <div className={"flex flex-col items-start justify-center p-4"}>
              <div className={"flex flex-row items-center justify-center"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                  <path
                    d="M9.02001 13.9501C8.82001 13.7701 8.55001 13.7001 8.21001 13.7401C7.87001 13.7801 7.59001 13.9001 7.37001 14.1001C7.15001 14.3001 7.03501 14.5601 7.02501 14.8801C7.01501 15.2001 7.11001 15.4601 7.31001 15.6601L12.2 20.7901C12.42 20.9901 12.675 21.0901 12.965 21.0901C13.255 21.0901 13.5 20.9901 13.7 20.7901L23.9 10.8001C24.1 10.6001 24.18 10.3351 24.14 10.0051C24.1 9.67509 23.975 9.40009 23.765 9.18009C23.555 8.96009 23.27 8.85009 22.91 8.85009C22.55 8.85009 22.27 8.96009 22.07 9.18009L13.01 18.1501L9.02001 13.9501Z"
                    fill="#414146"/>
                </svg>
                <p className={"text-[20px] font-[600] leading-[20px]"}>Convenient and Easy</p>
              </div>
              <p className={"text-[16px] font-[400] leading-[20px] mt-[16px]"}>Start an instant consultation within 2
                minutes
                or do video consultation at the scheduled time.</p>
            </div>
            <div className={"flex flex-col items-start justify-center p-4"}>
              <div className={"flex flex-row items-center justify-center"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                  <path
                    d="M9.02001 13.9501C8.82001 13.7701 8.55001 13.7001 8.21001 13.7401C7.87001 13.7801 7.59001 13.9001 7.37001 14.1001C7.15001 14.3001 7.03501 14.5601 7.02501 14.8801C7.01501 15.2001 7.11001 15.4601 7.31001 15.6601L12.2 20.7901C12.42 20.9901 12.675 21.0901 12.965 21.0901C13.255 21.0901 13.5 20.9901 13.7 20.7901L23.9 10.8001C24.1 10.6001 24.18 10.3351 24.14 10.0051C24.1 9.67509 23.975 9.40009 23.765 9.18009C23.555 8.96009 23.27 8.85009 22.91 8.85009C22.55 8.85009 22.27 8.96009 22.07 9.18009L13.01 18.1501L9.02001 13.9501Z"
                    fill="#414146"/>
                </svg>
                <p className={"text-[20px] font-[600] leading-[20px]"}>100% Safe Consultations</p>
              </div>
              <p className={"text-[16px] font-[400] leading-[20px] mt-[16px]"}>Be assured that your online consultation
                will be
                fully private and secured.</p>
            </div>
            <div className={"flex flex-col items-start justify-center p-4"}>
              <div className={"flex flex-row items-center justify-center"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                  <path
                    d="M9.02001 13.9501C8.82001 13.7701 8.55001 13.7001 8.21001 13.7401C7.87001 13.7801 7.59001 13.9001 7.37001 14.1001C7.15001 14.3001 7.03501 14.5601 7.02501 14.8801C7.01501 15.2001 7.11001 15.4601 7.31001 15.6601L12.2 20.7901C12.42 20.9901 12.675 21.0901 12.965 21.0901C13.255 21.0901 13.5 20.9901 13.7 20.7901L23.9 10.8001C24.1 10.6001 24.18 10.3351 24.14 10.0051C24.1 9.67509 23.975 9.40009 23.765 9.18009C23.555 8.96009 23.27 8.85009 22.91 8.85009C22.55 8.85009 22.27 8.96009 22.07 9.18009L13.01 18.1501L9.02001 13.9501Z"
                    fill="#414146"/>
                </svg>
                <p className={"text-[20px] font-[600] leading-[20px]"}>Similar Clinic Experience</p>
              </div>
              <p className={"text-[16px] font-[400] leading-[20px] mt-[16px]"}>Experience clinic-like consultation
                through a video call
                video call with the doctor. Video consultation is
                available only on the Med360 app.</p>
            </div>

            <div className={"flex flex-col items-start justify-center p-4"}>
              <div className={"flex flex-row items-center justify-center"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                  <path
                    d="M9.02001 13.9501C8.82001 13.7701 8.55001 13.7001 8.21001 13.7401C7.87001 13.7801 7.59001 13.9001 7.37001 14.1001C7.15001 14.3001 7.03501 14.5601 7.02501 14.8801C7.01501 15.2001 7.11001 15.4601 7.31001 15.6601L12.2 20.7901C12.42 20.9901 12.675 21.0901 12.965 21.0901C13.255 21.0901 13.5 20.9901 13.7 20.7901L23.9 10.8001C24.1 10.6001 24.18 10.3351 24.14 10.0051C24.1 9.67509 23.975 9.40009 23.765 9.18009C23.555 8.96009 23.27 8.85009 22.91 8.85009C22.55 8.85009 22.27 8.96009 22.07 9.18009L13.01 18.1501L9.02001 13.9501Z"
                    fill="#414146"/>
                </svg>
                <p className={"text-[20px] font-[600] leading-[20px]"}>Free Follow-up</p>
              </div>
              <p className={"text-[16px] font-[400] leading-[20px] mt-[16px]"}>Get a valid digital prescription and a
                7-day, free
                follow-up for further clarifications.</p>
            </div>

          </div>
        </div>
      </div>
    </div>
    {/*Section 8*/}
    <div className="w-full flex items-center justify-center mt-[25px]">
      <div className="w-[1180px] mx-auto flex-col">
        <div className="mt-[15px] w-full flex flex-row items-start">
          <div>
            <h2 className="text-[24px] font-[700] mt-[10px]">What our users say about their online consultation
              experience</h2>

          </div>

        </div>

        <div className="flex flex-row justify-between mb-[21px] mt-[26px]">
          <Swiper
            slidesPerView={3}
            spaceBetween={4}
            pagination={{clickable: true}}
            navigation={{
              nextEl: '.swiper-button-next1',
              prevEl: '.swiper-button-prev1',
            }}
            modules={[Navigation]}
            className="mySwiper"
            // prevButton={<div className="swiper-button-prev1"></div>}
            // nextButton={<div className="swiper-button-next1"></div>}
          >
            <SwiperSlide>
              <div className="mt-[10px] w-[388px]   pr-[16px] flex flex-col items-center justify-center ml-[10px]">
                <div className="w-[372px]  flex flex-col items-start">
                  <div className="flex  pb-[6px] w-[372px]">
                    <div
                      className="flex  p-[17px] flex-col gap-[16px] rounded-[4px] border-[1px] border-[#f0f0f5] bg-transparent shadow-[0px_3px_6px_0px_rgba(45,45,51,0.08)]">
                      <div className="flex w-full flex-row items-center gap-2">
                        <div className={"w-[48px] flex items-center justify-center rounded-[24px]"}>
                          <img src={Testimonial} className={"w-[48px] h-[50px]"} alt="Cough and Cold"/>
                        </div>

                        <div className={"flex flex-col items-start justify-center"}>
                          <p className={"text-[#2d2d32] text-[16px] font-[600] leading-[24px]"}>Abhy</p>
                          <p className={"text-[#2d2d32] text-[14px] font-[300] leading-[19px]"}>33 yr old IT
                            Professional</p>

                        </div>
                      </div>
                      <div className="flex flex-col items-start pb-[10px] pl-[16px]">
                        I was really sick and couldn’t get out of bed. I talked to
                        the doctor through MEd360 and he shared a
                        prescription in 10 minutes. I even got the medicines delivered on the same day through Med360,
                        just a WOW experience
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mt-[10px] w-[388px]   pr-[16px] flex flex-col items-center justify-center ml-[10px]">
                <div className="w-[372px]  flex flex-col items-start">
                  <div className="flex  pb-[6px] w-[372px]">
                    <div
                      className="flex  p-[17px] flex-col gap-[16px] rounded-[4px] border-[1px] border-[#f0f0f5] bg-transparent shadow-[0px_3px_6px_0px_rgba(45,45,51,0.08)]">
                      <div className="flex w-full flex-row items-center gap-2">
                        <div className={"w-[48px] flex items-center justify-center rounded-[24px]"}>
                          <img src={Testimonial} className={"w-[48px] h-[50px]"} alt="Cough and Cold"/>
                        </div>

                        <div className={"flex flex-col items-start justify-center"}>
                          <p className={"text-[#2d2d32] text-[16px] font-[600] leading-[24px]"}>Abhy</p>
                          <p className={"text-[#2d2d32] text-[14px] font-[300] leading-[19px]"}>33 yr old IT
                            Professional</p>

                        </div>
                      </div>
                      <div className="flex flex-col items-start pb-[10px] pl-[16px]">
                        I was really sick and couldn’t get out of bed. I talked to
                        the doctor through MEd360 and he shared a
                        prescription in 10 minutes. I even got the medicines delivered on the same day through Med360,
                        just a WOW experience
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mt-[10px] w-[388px]   pr-[16px] flex flex-col items-center justify-center ml-[10px]">
                <div className="w-[372px]  flex flex-col items-start">
                  <div className="flex  pb-[6px] w-[372px]">
                    <div
                      className="flex  p-[17px] flex-col gap-[16px] rounded-[4px] border-[1px] border-[#f0f0f5] bg-transparent shadow-[0px_3px_6px_0px_rgba(45,45,51,0.08)]">
                      <div className="flex w-full flex-row items-center gap-2">
                        <div className={"w-[48px] flex items-center justify-center rounded-[24px]"}>
                          <img src={Testimonial} className={"w-[48px] h-[50px]"} alt="Cough and Cold"/>
                        </div>

                        <div className={"flex flex-col items-start justify-center"}>
                          <p className={"text-[#2d2d32] text-[16px] font-[600] leading-[24px]"}>Abhy</p>
                          <p className={"text-[#2d2d32] text-[14px] font-[300] leading-[19px]"}>33 yr old IT
                            Professional</p>

                        </div>
                      </div>
                      <div className="flex flex-col items-start pb-[10px] pl-[16px]">
                        I was really sick and couldn’t get out of bed. I talked to
                        the doctor through MEd360 and he shared a
                        prescription in 10 minutes. I even got the medicines delivered on the same day through Med360,
                        just a WOW experience
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mt-[10px] w-[388px]   pr-[16px] flex flex-col items-center justify-center ml-[10px]">
                <div className="w-[372px]  flex flex-col items-start">
                  <div className="flex  pb-[6px] w-[372px]">
                    <div
                      className="flex  p-[17px] flex-col gap-[16px] rounded-[4px] border-[1px] border-[#f0f0f5] bg-transparent shadow-[0px_3px_6px_0px_rgba(45,45,51,0.08)]">
                      <div className="flex w-full flex-row items-center gap-2">
                        <div className={"w-[48px] flex items-center justify-center rounded-[24px]"}>
                          <img src={Testimonial} className={"w-[48px] h-[50px]"} alt="Cough and Cold"/>
                        </div>

                        <div className={"flex flex-col items-start justify-center"}>
                          <p className={"text-[#2d2d32] text-[16px] font-[600] leading-[24px]"}>Abhy</p>
                          <p className={"text-[#2d2d32] text-[14px] font-[300] leading-[19px]"}>33 yr old IT
                            Professional</p>

                        </div>
                      </div>
                      <div className="flex flex-col items-start pb-[10px] pl-[16px]">
                        I was really sick and couldn’t get out of bed. I talked to
                        the doctor through MEd360 and he shared a
                        prescription in 10 minutes. I even got the medicines delivered on the same day through Med360,
                        just a WOW experience
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mt-[10px] w-[388px]   pr-[16px] flex flex-col items-center justify-center ml-[10px]">
                <div className="w-[372px]  flex flex-col items-start">
                  <div className="flex  pb-[6px] w-[372px]">
                    <div
                      className="flex  p-[17px] flex-col gap-[16px] rounded-[4px] border-[1px] border-[#f0f0f5] bg-transparent shadow-[0px_3px_6px_0px_rgba(45,45,51,0.08)]">
                      <div className="flex w-full flex-row items-center gap-2">
                        <div className={"w-[48px] flex items-center justify-center rounded-[24px]"}>
                          <img src={Testimonial} className={"w-[48px] h-[50px]"} alt="Cough and Cold"/>
                        </div>

                        <div className={"flex flex-col items-start justify-center"}>
                          <p className={"text-[#2d2d32] text-[16px] font-[600] leading-[24px]"}>Abhy</p>
                          <p className={"text-[#2d2d32] text-[14px] font-[300] leading-[19px]"}>33 yr old IT
                            Professional</p>

                        </div>
                      </div>
                      <div className="flex flex-col items-start pb-[10px] pl-[16px]">
                        I was really sick and couldn’t get out of bed. I talked to
                        the doctor through MEd360 and he shared a
                        prescription in 10 minutes. I even got the medicines delivered on the same day through Med360,
                        just a WOW experience
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Add more SwiperSlides as needed */}
            <div className="swiper-button-next1">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                <path
                  d="M7.25998 6.17029C7.09998 6.01029 7.01998 5.81696 7.01998 5.59029C7.01998 5.36363 7.09998 5.16363 7.25998 4.99029C7.41998 4.81696 7.61665 4.73363 7.84998 4.74029C8.08332 4.74696 8.27998 4.83029 8.43998 4.99029L14.2 10.7503L8.41998 16.3103C8.25998 16.4703 8.06332 16.5503 7.82998 16.5503C7.59665 16.5503 7.39998 16.4636 7.23998 16.2903C7.07998 16.117 7.00332 15.917 7.00998 15.6903C7.01665 15.4636 7.09998 15.2703 7.25998 15.1103L11.82 10.7303L7.25998 6.17029Z"
                  fill="#B4B4BE"/>
              </svg>
            </div>
            <div className="swiper-button-prev1">
              <svg className={"rotate-180"} xmlns="http://www.w3.org/2000/svg" width="21" height="21"
                   viewBox="0 0 21 21" fill="none">
                <path
                  d="M7.25998 6.17029C7.09998 6.01029 7.01998 5.81696 7.01998 5.59029C7.01998 5.36363 7.09998 5.16363 7.25998 4.99029C7.41998 4.81696 7.61665 4.73363 7.84998 4.74029C8.08332 4.74696 8.27998 4.83029 8.43998 4.99029L14.2 10.7503L8.41998 16.3103C8.25998 16.4703 8.06332 16.5503 7.82998 16.5503C7.59665 16.5503 7.39998 16.4636 7.23998 16.2903C7.07998 16.117 7.00332 15.917 7.00998 15.6903C7.01665 15.4636 7.09998 15.2703 7.25998 15.1103L11.82 10.7303L7.25998 6.17029Z"
                  fill="#B4B4BE"/>
              </svg>
            </div>
          </Swiper>
        </div>
      </div>
    </div>

    <div className={"w-full flex items-center justify-center bg-[#2d2d32]"}>
      <div className={"w-[1180px] mx-auto flex flex-row items-center justify-between p-6"}>

        <div className={"flex flex-col items-center justify-center gap-4"}>
          <p className={"text-[22px] font-[600] text-white"}>Still delaying your health concerns?</p>
          <p className={"text-[14px] mt-[5px] text-white"}>Connect With india's top doctors online</p>
        </div>

        <div className={"flex flex-col items-center justify-center"}>
          <button
            className=" w-full mt-[20px] pt-[15px] pb-[15px] pl-[30px] pr-[30px] bg-[#14bef0] cursor-pointer text-[19px] font-[600] text-[#fff] rounded-[4px] text-center">Consult
            Now
          </button>

        </div>

      </div>
    </div>

  </div>
}

export default CatalogPage
