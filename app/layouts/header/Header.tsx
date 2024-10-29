"use client";

import { useState, useEffect } from "react";
import InfinityIcon from "@/app/components/Icons/Infinity";
import { Link } from "react-scroll";

const Header = () => {
    // Состояние для отслеживания, прокручена ли страница
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            setIsScrolled(scrollPosition > 5); // 5px
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`w-full h-[60px] fixed z-50 transition-all ease-in-out shadow-md backdrop-blur-md ${
                isMenuOpen ? "bg-[#FFE8D8]" : "bg-[#FFE8D8]/60"
            }`}
        >
            <div className="flex w-full h-full justify-between items-center px-4 md:px-0">
                {/* Бургер-меню для мобильных устройств */}
                <div
                    className="md:hidden cursor-pointer p-2 w-full flex flex-col justify-end"
                    onClick={() => setMenuOpen(!isMenuOpen)}
                >
                    <div
                        className="w-6 h-[2px] bg-[#45251A] mb-[5px] transition-transform duration-300 ease-in-out transform-gpu"
                        style={{
                            transform: isMenuOpen
                                ? "rotate(45deg) translate(5px, 5px)"
                                : "rotate(0)",
                        }}
                    ></div>
                    <div
                        className={`w-6 h-[2px] bg-[#45251A] transition-opacity duration-300 ${
                            isMenuOpen ? "opacity-0" : "opacity-100"
                        }`}
                    ></div>
                    <div
                        className="w-6 h-[2px] bg-[#45251A] mt-[5px] transition-transform duration-300 ease-in-out transform-gpu"
                        style={{
                            transform: isMenuOpen
                                ? "rotate(-45deg) translate(5px, -5px)"
                                : "rotate(0)",
                        }}
                    ></div>
                </div>

                {/* Навигация */}
                <nav
                    className={` flex flex-col ml-[-14px] md:flex-row items-center md:justify-center justify-center md:gap-9 gap-6 font-light text-base fixed top-[60px] w-full md:relative md:top-0 bg-[#FFE8D8] md:bg-transparent transition-all duration-300 ease-in-out ${
                        isMenuOpen
                            ? "block pt-5 pb-5 shadow-md"
                            : "hidden md:flex"
                    }`}
                >
                    <Link
                        activeClass="active"
                        to="about-me"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={600}
                        onClick={() => setMenuOpen(false)}
                    >
                        <div className="cursor-pointer relative inline-block after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[#45251A] after:transition-all after:duration-[0.5s] hover:after:w-full after:rounded-lg">
                            Немного про меня
                        </div>
                    </Link>
                    <Link
                        activeClass="active"
                        to="feedback"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={600}
                        onClick={() => setMenuOpen(false)}
                    >
                        <div className="cursor-pointer relative inline-block after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[#45251A] after:transition-all after:duration-[0.5s] hover:after:w-full after:rounded-lg">
                            Отзывы
                        </div>
                    </Link>
                    {!isMenuOpen ? <InfinityIcon /> : null}

                    <Link
                        activeClass="active"
                        to="maraphone-program"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={600}
                        onClick={() => setMenuOpen(false)}
                    >
                        <div className="cursor-pointer relative inline-block after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[#45251A] after:transition-all after:duration-[0.5s] hover:after:w-full after:rounded-lg">
                            Программа марафона
                        </div>
                    </Link>
                    <Link
                        activeClass="active"
                        to="courses"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={600}
                        onClick={() => setMenuOpen(false)}
                    >
                        <div className="cursor-pointer relative inline-block after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[#45251A] after:transition-all after:duration-[0.5s] hover:after:w-full after:rounded-lg">
                            Мои курсы
                        </div>
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
