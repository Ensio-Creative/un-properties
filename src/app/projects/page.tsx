import ProjectCard from '@/components/ProjectCard';
import RegisterInterest from '@/components/RegisterInterest';
import React from 'react';
import { projects } from "@/utils/projects";

const ProjectsPage = () => {
    return (
        <main className='max-w-7xl mx-auto'>
            <section className='lg:px-0 px-4'>
                <div className='lg:max-w-4xl mx-auto my-32 text-center'>
                    <p className='lg:text-[90px] text-6xl text-[#370FAF] font-bold'>Our Curated Projects</p>
                    <p className='lg:w-1/2 mx-auto mt-4 text-[#333333]'>Discover a collection of our turnkey projects, each crafted for
                        an exceptional experience.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {projects.map((item) => <ProjectCard img={item.img} title={item.title} text={item.text} type={item.type} />)}
                </div>
            </section>

            <RegisterInterest />
        </main>
    );
};

export default ProjectsPage;