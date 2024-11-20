"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import Image from 'next/image';
const RecentProjects = () => {
    const handleClick = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="py-23" id="projects">
            <h1 className="heading">
                A small selection of{" "}
                <span className="text-purple">notable projects</span>
            </h1>
            <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-28 mt-10">
                {projects.map((item) => (
                    <div
                        className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
                        key={item.id}
                    >
                        <PinContainer
                            title={item.link}
                            href={item.link}
                        >
                            <div
                                className="relative flex  items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[22vh] lg:h-[38vh] mb-10 ">
                                <div
                                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                                    style={{ backgroundColor: "#13162D" }}
                                >
                                    <Image src="/bg.png" alt="bg.img" width={500} height={500} />
                                </div>
                                {/* Updated image with specific size and position */}
                                <Image
                                    src={item.img}
                                    alt="cover"
                                    className="absolute w-full h-full object-cover rounded-2xl object-top"
                                    width={500}
                                    height={1000}
                                />
                            </div>

                            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-2 underline decoration-1 underline-offset-4">
                                {item.title}
                            </h1>

                            <p
                                className="lg:text-xl lg:font-normal font-light text-sm text-justify tracking-tight line-clamp-4"
                                style={{
                                    color: "#BEC1DD",
                                    margin: "1vh 0",
                                }}
                            >
                                {item.des}
                            </p>

                            <div className="flex items-center justify-between mt-7 mb-3">
                                <div className="flex items-center">
                                    {item.iconLists.map((icon, index) => (
                                        <div
                                            key={index}
                                            className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                            style={{
                                                transform: `translateX(-${5 * index + 2}px)`,
                                            }}
                                        >
                                            <Image src={icon} alt="icon5" className="p-2" width={150} height={150} />
                                        </div>
                                    ))}
                                </div>

                                <button onClick={() => handleClick(item.link)} className="flex items-center">
                                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                                        Check It Out
                                    </p>
                                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                                </button>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentProjects;
