"use client"
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Carousel() {
    const [scrollIndex, setScrollIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [image, setImage] = useState('/gl-1.jpg');
    const carouselRef = useRef<HTMLDivElement>(null);
    const y = window.innerWidth >= 1024 ? 198 : 278.66;
    const x = 390;

    const images = [
        { image_url: '/gl-1.jpg' },
        { image_url: '/gl-2.jpg' },
        { image_url: '/gl-3.jpg' },
        { image_url: '/gl-4.jpg' },
        { image_url: '/gl-5.jpg' }
    ]


    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const smoothScroll = (targetPosition: number, axis: 'x' | 'y') => {
        if (carouselRef.current) {
            const startPosition = axis === 'y' ? carouselRef.current.scrollTop : carouselRef.current.scrollLeft;
            const distance = targetPosition - startPosition;
            const duration = 300;
            let startTime: number | null = null;

            const animation = (currentTime: number) => {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const run = ease(timeElapsed, startPosition, distance, duration);
                if (carouselRef.current) {
                    if (axis === 'y') {
                        carouselRef.current.scrollTop = run;
                    } else {
                        carouselRef.current.scrollLeft = run;
                    }
                }
                if (timeElapsed < duration) requestAnimationFrame(animation);
            };

            const ease = (t: number, b: number, c: number, d: number) => {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            };

            requestAnimationFrame(animation);
        }
    };

    const handleDown = () => {
        if (carouselRef.current) {
            const visibleItemsCount = isMobile ? 1 : 3;
            const maxIndex = images.length - visibleItemsCount;
            setScrollIndex(prevIndex => {
                const newIndex = Math.min(prevIndex + 1, maxIndex);
                smoothScroll(newIndex * (isMobile ? x : y), isMobile ? 'x' : 'y');
                return newIndex;
            });
        }
    };

    const handleUp = () => {
        if (carouselRef.current) {
            setScrollIndex(prevIndex => {
                const newIndex = Math.max(prevIndex - 1, 0);
                smoothScroll(newIndex * (isMobile ? x : y), isMobile ? 'x' : 'y');
                return newIndex;
            });
        }
    };

    return (
        <div className="w-full flex lg:gap-3">
            <div className="lg:w-9/12 md:hidden">
                <Image
                    src={image}
                    width={825}
                    height={589}
                    alt="image"
                />
            </div>
            <div className="lg:w-3/12 md:w-full relative">
                <button
                    className="absolute z-10 lg:top-0 lg:left-1/2 lg:-translate-x-1/2 lg:w-20 md:top-1/2 md:-translate-y-1/2 md:left-0 md:h-20 py-2 px-4 bg-white text-zinc-400 text-lg flex items-center justify-center"
                    onClick={() => handleUp()}
                >
                    <FaChevronUp className="md:-rotate-90" />
                </button>
                <div className="w-full">
                    <div
                        ref={carouselRef}
                        className="lg:h-custom-carousel md:flex"
                        style={{
                            overflowY: isMobile ? 'hidden' : 'hidden',
                            overflowX: isMobile ? 'scroll' : 'hidden',
                            flexDirection: isMobile ? 'row' : 'column',
                            position: 'relative'
                        }}
                    >
                        {images.map((image, index) => (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img 
                            key={index} 
                            src={image.image_url}
                            alt={`Image ${index + 1}`} 
                            style={{ 
                                height: isMobile ? 'auto' : `${y}px`,
                                width: isMobile ? `${x}px` : 'auto'
                             }} 
                            className="lg:mb-3 cursor-pointer md:w-full"
                            onClick={(e) => setImage(image.image_url)}
                             />
                        ))}
                    </div>
                </div>
            <button
                className="absolute z-10 lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2 lg:w-20 md:right-0 md:top-1/2 md:-translate-y-1/2 md:h-20 py-2 px-4  bg-white text-zinc-400 text-lg flex items-center justify-center"
                onClick={() => handleDown()}
            >
                <FaChevronDown className="md:-rotate-90" />
            </button>
            </div>
        </div >
    );
}