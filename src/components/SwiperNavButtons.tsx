import { useSwiper } from 'swiper/react';

export default function SwiperNavButtons() {
    const swiper = useSwiper();
    return (
        <div className="flex justify-between gap-4 w-32 ml-auto mt-6">
            <button
                aria-label="Previous"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[#370FAF] text-[#370FAF] hover:bg-[#370FAF] hover:text-white transition"
                onClick={() => swiper.slidePrev()}
                type="button"
            >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                aria-label="Next"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[#370FAF] text-[#370FAF] hover:bg-[#370FAF] hover:text-white transition"
                onClick={() => swiper.slideNext()}
                type="button"
            >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
}
