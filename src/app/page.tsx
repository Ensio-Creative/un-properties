'use client'

import ProjectCard from "@/components/ProjectCard";
import RegisterInterest from "@/components/RegisterInterest";
import { projects } from "@/utils/projects";

import { SwiperSlide, Swiper } from "swiper/react";
import 'swiper/css';
import SwiperNavButtons from "@/components/SwiperNavButtons";
import Link from "next/link";

export default function Home() {

  const services = [
    {
      image: "/images/service/un-properties-design-and-construction-services.jpg",
      title: "Design & Construction"
    },
    {
      image: "/images/service/un-properties-sales-and-marketing-services.jpg",
      title: "Sales & Marketing"
    },
    {
      image: "/images/service/un-properties-investment-services.jpg",
      title: "Real Estate Investment"
    },
    {
      image: "/images/service/un-properties-consultancy-services.jpg",
      title: "Real Estate Consultancy"
    }
  ]
  return (
    <main>
      {/* Hero Section */}
      <section className="relative lg:h-[95vh] h-[80vh] text-white py-24 mt-20 flex bg-[#0E062B] items-end overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/images/un-properties-video_062208.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="max-w-7xl mx-auto px-4 w-full relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-[80px] font-bold mb-8 lg:leading-20">
              Ambitious Team. Exceptional Results.
            </h1>
            <div className="flex gap-4 flex-wrap">
              <button className="bg-[#370FAF] lg:w-auto w-full text-white px-8 py-3 font-medium transition">
                EXPLORE PROJECTS
              </button>
              <button className="border lg:w-auto w-full border-white hover:bg-white hover:text-slate-900 text-white px-8 py-3 font-medium transition">
                OUR SERVICES
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto lg:px-0 px-4">
          <h2 className="lg:text-5xl text-3xl font-bold text-[#370FAF] mb-12">Featured Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {projects.slice(0, 3).map((item) => <ProjectCard img={item.img} title={item.title} text={item.text} type={item.type} />)}
          </div>

          <div className="flex w-full justify-center lg:mt-20 mt-10 mx-auto text-center">
            <Link href={'/projects'} className="lg:w-[32%] rounded-sm w-full border-1 text-sm border-[#370FAF]">
              <button className="text-[#370FAF] cursor-pointer py-3">
                EXPLORE ALL PROJECTS
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="">
        <div className="lg:ml-20 mx-auto lg:px-0 px-4">
          <h2 className="lg:text-5xl text-3xl font-bold text-[#370FAF] mb-12">Our Services</h2>

          <div className="relative">
            <Swiper spaceBetween={30} breakpoints={{
              640: {
                slidesPerView: 1.2,
              },
              1024: {
                slidesPerView: 2.2,
              },
            }}>
              {services.map((service) => (
                <SwiperSlide key={service.title}>
                  <div className="bg-[#F5F5F5]">
                    <img src={service.image} alt={service.title} className="w-full h-80 object-cover" />
                    <div className="p-6">
                      <h3 className="text-[#370FAF] lg:text-xl font-bold">{service.title}</h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <SwiperNavButtons />
            </Swiper>
          </div>

        </div>
      </section>

      {/* Beyond the Brick and Mortar */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto lg:px-0 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            {/* Left Content */}
            <div className="bg-[#F5F5F5] h-full lg:px-10 px-5 lg:py-20 py-10">
              <h2 className="lg:text-5xl text-3xl font-bold text-[#370FAF] mb-12">Beyond the Brick<br />and Mortar</h2>
              <p className="text-gray-600 lg:my-20 my-10 leading-relaxed">
                With a proven track record across residential, commercial, and investment properties like expertise, precision, and dedication we bring smart every project is handled with the highest standards.
              </p>
              <Link href={'/about'}>
                <button className="border-1 rounded-sm border-[#370FAF] text-[#370FAF] text-sm px-8 py-3 font-medium">
                  LEARN ABOUT US
                </button>
              </Link>
            </div>

            {/* Right Image */}
            <img src="/images/home-about.jpg" alt="" />
          </div>
        </div>
      </section>
      <RegisterInterest />
    </main>
  );
}
