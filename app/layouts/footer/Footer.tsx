"use client";

import VKIcon from "@/app/components/Icons/vk";
import TelegramIcon from "@/app/components/Icons/telegram";
import AngleIcon from "@/app/components/Icons/angle";
import { Link } from "react-scroll";

const Footer = () => {
    return (
        <footer className="w-full md:pl-0 md:pr-4 pl-4 pr-4 bg-[#45251A] text-[#fff]">
            <div className="container max-w-[1000px] mx-auto flex flex-row justify-between py-[20px]">
                <div className="w-[60%] flex flex-col justify-start items-start gap-6">
                    <div className="text-[25px] font-bold">Мои контакты</div>

                    <div className="flex flex-row items-center gap-4">
                        <a
                            href="https://vk.com/olesya.psychologist"
                            target="_blank"
                            className="transition-transform hover:translate-y-[-2px]"
                        >
                            <VKIcon width="38" height="38" />
                        </a>
                        <a
                            href="https://t.me/olesya_psyhologist"
                            target="_blank"
                            className="transition-transform hover:translate-y-[-2px]"
                        >
                            <TelegramIcon width="40" height="40" fill="#fff" />
                        </a>

                        <a
                            href="https://rutube.ru/channel/43329132/"
                            target="_blank"
                            className="font-bold text-[23px] transition-transform hover:translate-y-[-2px]"
                        >
                            RUTUBE
                        </a>
                    </div>

                    <div className="flex flex-col w-full justify-start items-start ">
                        <div className="text-[#ffffff50]">
                            ИП: Землянова Олеся Викторовна
                        </div>
                        <div className="text-[#ffffff50]">
                            ИНН: 663901269906
                        </div>
                    </div>
                </div>

                <div>
                    <Link
                        activeClass="active"
                        to="about-me"
                        spy={true}
                        smooth={true}
                        offset={-1000}
                        duration={600}
                    >
                        <div className="group transition-all w-[70px] h-[70px] bg-[#fff] rounded-full flex justify-center items-center cursor-pointer border-2 border-[#fff] hover:bg-transparent">
                            <AngleIcon className="rotate-180 fill-[#343434] group-hover:fill-[#fff]" />
                        </div>
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
