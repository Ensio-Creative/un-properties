import React from 'react';

const ProjectCard = ({ img, title, text }: { img: string, title: string, text: string }) => {
    return (
        <div>
            <img src={`/images/projects/${img}.jpg`} alt="" />
            <p className='text-[#370FAF] mt-3 font-medium text-lg'>{title}</p>
            <p className='text-[#666666] text-sm'>{text}</p>
        </div>
    );
};

export default ProjectCard;