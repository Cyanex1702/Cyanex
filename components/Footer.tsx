import { companies, socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { FaRegFilePdf } from "react-icons/fa6";
import { GiTalk } from "react-icons/gi";
import React from "react";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="w-full pt-20 pb-10" id="contact">
            {/* background grid */}
            <div className="w-full absolute left-0 -bottom-72 min-h-96">
                <Image
                    src="footer-grid.svg"
                    alt="grid"
                    className="w-full h-full opacity-50 "
                    width={500}
                    height={500}
                />
            </div>

            <div className="py-3 flex flex-wrap items-center justify-center gap-3 md:gap-12 max-lg:mt-10">
                {companies.map((company) => (
                    <React.Fragment key={company.id}>
                        <div className="flex flex-col items-center md:max-w-60 max-w-32 gap-1 py-4">
                            <div
                                className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-black-700 border-4 border-black-700">
                                <Image
                                    src={company.img}
                                    alt={company.name}
                                    className="object-cover w-full h-full"
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <p className="mt-2 text-center text-xs md:text-sm">{company.name}</p>
                        </div>
                    </React.Fragment>
                ))}
            </div>

            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw]">
                    Thank you for visiting my portfolio!<span
                    className="text-yellow-400"> You have reached the end now. </span>
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">
                    If you would like to contact me or have any questions, Here is my LinkedIn!
                </p>
                <a href="https://www.linkedin.com/in/malik-saad-jalil-146985225/" target="_blank"
                   rel="noopener noreferrer">
                    <MagicButton
                        title="Let&apos;s get in touch"
                        icon={<GiTalk size={20}/>}
                        position="right"
                    />
                </a>
                {/* Resume and Cover Letter Buttons */}
                <div className="flex flex-col md:flex-row gap-3 mt-3">
                    <a href="Malik Saad Jalil (2024-A).pdf" download="Resume_Malik_Saad_Jalil.pdf">
                        <MagicButton
                            title="Malik Saad Jalil Resume"
                            icon={<FaRegFilePdf size={24} />}
                            position="right"
                        />
                    </a>
                    <a href="Malik Saad Jalil Cover Letter(2024-A).pdf" download="Cover_Letter_Malik_Saad_Jalil.pdf">
                        <MagicButton
                            title="Malik Saad Jalil Cover Letter"
                            icon={<FaRegFilePdf size={24} />}
                            position="right"
                        />
                    </a>
                </div>
            </div>
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light">
                    Copyright © 2024 Cyanex1702
                </p>

                <div className="flex items-center md:gap-3 gap-6 mt-6">
                    {socialMedia.map((info) => (
                        <a
                            key={info.id}
                            href={info.link} // Add the link here
                            target="_blank"
                            rel="noopener noreferrer" // For security best practices
                            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                        >
                            <Image src={info.img} alt="icon" width={20} height={20}/>
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
