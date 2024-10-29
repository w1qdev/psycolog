"use client";

import Plus from "../Icons/plus";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setIsFading(true); // Запускаем анимацию исчезновения
    //         setTimeout(() => {
    //             setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    //             setIsFading(false); // Запускаем анимацию появления
    //         }, 500); // Задержка совпадает с длительностью анимации
    //     }, 10000);

    //     return () => clearInterval(interval); // Чистим интервал при размонтировании компонента
    // }, []);

    return (
        <div className="container mx-auto px-4 pt-[130px] h-[80%] max-w-[1000px] flex flex-col sm:flex-row justify-between">
            <div className="sm:w-[50 %] sm:mb-0 mb-[50px] flex flex-col justify-center">
                <div className="font-extralight text-[44px] mb-6 leading-[1.2]">
                    Привет! Меня зовут{" "}
                    <b className="font-black text-[#45251A]">Олеся Землянова</b>
                </div>
                <div className="font-light text-[18px] mb-6 leading-[1.3]">
                    И я являюсь дипломированным психологом с опытом более 10
                    лет. Специализируюсь на оказании помощи людям, столкнувшимся
                    с различными ситуациями в личной и профессиональной жизни
                </div>
                <motion.a
                    href="http://t.me/olesya_mir17"
                    whileHover={{ scale: 1.05 }}
                    className="group flex justify-center items-center gap-3 w-[234px] h-[44px] border-[1px] border-[#343434] font-light rounded-[6px] transition-colors bg-[#45251A] text-[#fff] hover:bg-[#45251ad9] hover:text-[#fff]"
                >
                    Записаться на прием
                    <Plus className="transition-colors fill-[#fff] group-hover:fill-[#fff]" />
                </motion.a>
            </div>
            <div className="sm:w-[50%] flex justify-center">
                <div className="min-h-[300px] min-w-[300px] md:min-h-[400px] md:min-w-[400px] sm:min-h-[350px] sm:min-w-[350px] md:ml-5 max-h-[400px] max-w-[400px] rounded-[70px] overflow-hidden shadow-2xl">
                    <Image
                        src={`/images/Hero_1.png`}
                        alt="Олеся Землянова"
                        width={350}
                        height={350}
                        className={`w-full h-full object-cover transition-opacity duration-500 ${
                            isFading ? "opacity-0" : "opacity-100"
                        }`}
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
