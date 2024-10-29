"use client";

import SectionTitle from "../SectionTitle/SectionTitle";
import Image from "next/image";
import { motion } from "framer-motion";

const IfYou = () => {
    return (
        <div className="container mx-auto px-4 max-w-[1000px]">
            <SectionTitle>
                <div className="text-center">
                    Этот марафона <b className="font-black">для тебя</b> если
                    ты...
                </div>
            </SectionTitle>

            <div className="w-full grid grid-cols-1 grid-rows-3 gap-4 md:grid-cols-3 sm:grid-cols-2">
                <div className="flex flex-col items-center p-4 rounded-lg transition-shadow duration-500 hover:shadow-[#EEB7F7] hover:shadow-2xl">
                    <Image
                        src="/images/women/woman_variant_1.png"
                        alt=""
                        width={60}
                        height={60}
                        className="mb-3"
                    />
                    <div className="text-center leading-5 font-light text-[18px]">
                        Чувствуешь тревогу, сомнения, неуверенность в себе
                    </div>
                </div>

                <div className="flex flex-col items-center p-4 rounded-lg transition-shadow duration-500 hover:shadow-[#BCEAF7] hover:shadow-2xl">
                    <Image
                        src="/images/women/woman_variant_2.png"
                        alt=""
                        width={60}
                        height={60}
                        className="mb-3"
                    />
                    <div className="text-center leading-5 font-light text-[18px]">
                        Сравниваешь себя с другими и зависишь от мнения
                        окружающих, ждёшь поддержку и одобрения
                    </div>
                </div>

                <div className="flex flex-col items-center p-4 rounded-lg transition-shadow duration-500 hover:shadow-[#ACFF91] hover:shadow-2xl">
                    <Image
                        src="/images/women/woman_variant_3.png"
                        alt=""
                        width={50}
                        height={50}
                        className="mb-3"
                    />
                    <div className="text-center leading-5 font-light text-[18px]">
                        Боишься критики и осуждения и расстраиваешься, когда её
                        слышишь в свой адрес
                    </div>
                </div>

                <div className="flex flex-col items-center p-4 rounded-lg transition-shadow duration-500 hover:shadow-[#EEB7F7] hover:shadow-2xl">
                    <Image
                        src="/images/women/woman_variant_1.png"
                        alt=""
                        width={60}
                        height={60}
                        className="mb-3"
                    />
                    <div className="text-center leading-5 font-light text-[18px]">
                        Экономишь на себе
                    </div>
                </div>

                <div className="flex flex-col items-center p-4 rounded-lg transition-shadow duration-500 hover:shadow-[#ACFF91] hover:shadow-2xl">
                    <Image
                        src="/images/women/woman_variant_4.png"
                        alt=""
                        width={60}
                        height={60}
                        className="mb-3"
                    />
                    <div className="text-center leading-5 font-light text-[18px]">
                        Чувствуешь в теле напряжение, усталость, лень, отсутвие
                        энергии и не можешь расслабиться
                    </div>
                </div>

                <div className="flex flex-col items-center p-4 rounded-lg transition-shadow duration-500 hover:shadow-[#BCEAF7] hover:shadow-2xl">
                    <Image
                        src="/images/women/woman_variant_1.png"
                        alt=""
                        width={60}
                        height={60}
                        className="mb-3"
                    />
                    <div className="text-center leading-5 font-light text-[18px]">
                        Тяжело решаешься на перемены и испытываешь зависть, в то
                        время, как у других жизнь полна изобилия и счастья
                    </div>
                </div>

                <div className="flex flex-col items-center p-4 rounded-lg transition-shadow duration-500 hover:shadow-[#BCEAF7] hover:shadow-2xl">
                    <Image
                        src="/images/women/woman_variant_3.png"
                        alt=""
                        width={50}
                        height={50}
                        className="mb-3"
                    />
                    <div className="text-center leading-5 font-light text-[18px]">
                        Комплексуешь из-за внешности, недовольна собой и
                        испытываешь страх и неуверенность проявляться
                    </div>
                </div>

                <div className="flex flex-col items-center p-4 rounded-lg transition-shadow duration-500 hover:shadow-[#ACFF91] hover:shadow-2xl">
                    <Image
                        src="/images/women/woman_variant_1.png"
                        alt=""
                        width={60}
                        height={60}
                        className="mb-3"
                    />
                    <div className="text-center leading-5 font-light text-[18px]">
                        Не умеешь отстаивать личные границы, чувствуешь
                        неловкость в конфликтных ситуациях
                    </div>
                </div>

                <div className="flex flex-col items-center p-4 rounded-lg transition-shadow duration-500 hover:shadow-[#EEB7F7] hover:shadow-2xl">
                    <Image
                        src="/images/women/woman_variant_4.png"
                        alt=""
                        width={60}
                        height={60}
                        className="mb-3"
                    />
                    <div className="text-center leading-5 font-light text-[18px]">
                        Выстраиваешь коммуникацию через манипуляции, крики,
                        обиды, молчание, неловкость.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IfYou;
