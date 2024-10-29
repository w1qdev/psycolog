import Image from "next/image";
import SectionTitle from "../SectionTitle/SectionTitle";
import Text from "../Text/text";

const AboutMe = () => {
    return (
        <div id="about-me" className="container mx-auto px-4 max-w-[1000px]">
            <SectionTitle>
                <div>
                    Немного про <b className="font-black">меня</b>
                </div>
            </SectionTitle>

            <div className="flex md:flex-row justify-between flex-wrap flex-col">
                <div className="flex flex-col md:w-[45%] leading-[1.3] font-light mb-10 w-[100%] md:items-start items-center">
                    <Image
                        src="/images/goal.png"
                        alt="Основная цель"
                        width={50}
                        height={50}
                    />
                    <div className="mt-5 mb-3 font-black text-[20px] w-full md:text-start text-center">
                        Моя основная цель
                    </div>
                    <div>
                        Помочь женщинам раскрыть свой потенциал,
                        <Text bgColor="green">преодолеть трудности</Text> и
                        достичь своих целей. В своей работе я использую
                        индивидуальный подход и современные методы, чтобы
                        обеспечить
                        <Text bgColor="green">
                            максимально эффективную помощь каждой из вас.
                        </Text>
                    </div>
                </div>

                <div className="flex flex-col md:w-[45%] leading-[1.3] font-light mb-10 w-[100%] md:items-start items-center">
                    <Image
                        src="/images/goal.png"
                        alt=""
                        width={50}
                        height={50}
                    />
                    <div className="mt-5 mb-3 font-black text-[20px] w-full md:text-start text-center">
                        Со мной
                    </div>
                    <div>
                        Более
                        <Text bgColor="yellow">
                            1000 женщин обрели свою целостность, любовь к себе,
                        </Text>
                        уверенность. Выстроили гармоничные отношения в семье.
                        <Text bgColor="yellow">
                            Нашли путь в призвании и предназначение.
                        </Text>
                    </div>
                </div>

                <div className="flex flex-col md:w-[45%] leading-[1.3] font-light w-[100%] md:items-start items-center">
                    <Image
                        src="/images/lock.png"
                        alt="Конфиденциальность"
                        width={50}
                        height={50}
                    />
                    <div className="mt-5 mb-3 font-black text-[20px] w-full md:text-start text-center">
                        Конфиденциальность
                    </div>
                    <div>
                        <Text bgColor="blue">
                            Я гарантирую конфиденциальность
                        </Text>
                        всех своих клиентов. Ваши проблемы останутся
                        <Text bgColor="blue">между вами и мной</Text>, и никакая
                        информация <Text bgColor="blue">не будет передана</Text>
                        третьим лицам без вашего согласия.
                    </div>
                </div>

                <div className="flex flex-col md:w-[45%] leading-[1.3] font-light w-[100%] md:mt-0 mt-6 md:items-start items-center">
                    <Image
                        src="/images/lock.png"
                        alt=""
                        width={50}
                        height={50}
                    />
                    <div className="mt-5 mb-3 font-black text-[20px] w-full md:text-start text-center">
                        Профессионализм
                    </div>
                    <div>
                        Являюсь
                        <Text bgColor="purple">
                            дипломированным психологом, арт
                        </Text>
                        -терапевтом, консультантом,
                        <Text bgColor="purple">женским коучем</Text>. В своей
                        <Text bgColor="purple">
                            области постоянно совершенствую свои навыки и знания
                        </Text>
                        , чтобы быть в курсе последних тенденций и методов в
                        психологии.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
