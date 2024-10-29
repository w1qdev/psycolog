import SectionTitle from "../SectionTitle/SectionTitle";
import ArtPracticeIcon from "../Icons/art-practice";
import BrainIcon from "../Icons/brain";
import CardsIcon from "../Icons/cards";
import FemaleDanceIcon from "../Icons/female-dance";
import LungsIcon from "../Icons/lungs";
import MeditationIcon from "../Icons/meditation";

const MaraphoneProgram = () => {
    return (
        <div
            id="maraphone-program"
            className="container mx-auto px-4 max-w-[1000px] text-[#45251A]"
        >
            <SectionTitle>
                <div>
                    <b className="font-black">Программа</b> марафона
                </div>
            </SectionTitle>

            <div className="w-full text-center font-light mb-6 text-[20px]">
                <b className="text-[25px] font-black">5</b> недель мы будем
                уделять внимание {"  "}
                <b className="text-[25px] font-black">3</b> большим аспектам
            </div>

            <div className="w-full flex flex-col items-center justify-center px-10 mb-5">
                <div className="w-full flex flex-col">
                    <div className="text-[28px] font-bold">Тело</div>
                    <div className="text-[20px] leading-6 font-light">
                        Исцеление блоков/зажимов. Создаём любимое, раслабленное,
                        ресурсное, сконцентрированное тело при помощи медитаций,
                        дыхательных практик, двигательных интуитивных
                        упражнений.
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col items-center justify-center px-10 mb-5">
                <div className="w-full flex flex-col">
                    <div className="text-[28px] font-bold">Сознание</div>
                    <div className="text-[20px] leading-6 font-light">
                        Делаем наш ум ясным, осознанным. Повышаем мотивацию.
                        Высвобождаем ограничения/убеждения, исцеляем негативные
                        эмоции, расширяем мышление через метафорические
                        ассоциативные карты, коучинговые инструменты, медитации,
                        световые сеансы.
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col items-center justify-center px-10">
                <div className="w-full flex flex-col">
                    <div className="text-[28px] font-bold">Состояние</div>
                    <div className="text-[20px] leading-6 font-light">
                        Взращиваем любовь, благодарность, ценность себя,
                        радость, удовольствие. Раскрываем истинную женскую
                        природу, снимаем маски и распределяем роли через
                        трансформационные практики, медитации, арт-терапию.
                    </div>
                </div>
            </div>

            <div className="w-full text-center flex items-center justify-center mt-[100px] mb-10 text-[30px] font-light">
                Тебя
                <b className="font-black ml-2">уже ждут</b>
            </div>

            <div className="w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid-rows-2 gap-4 text-[18px] font-light px-10">
                <div className="flex flex-col justify-center items-center">
                    <CardsIcon className="mb-3" />
                    <div className="text-center leading-5">
                        25 практик с метафорическими ассициативными картами
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <MeditationIcon className="mb-3" />
                    <div className="text-center leading-5">10 медитаций</div>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <ArtPracticeIcon className="mb-3" />
                    <div className="text-center leading-5">10 арт-практик</div>
                </div>

                <div className="flex flex-col justify-center items-center mt-10">
                    <LungsIcon className="mb-3" />
                    <div className="text-center leading-5">
                        5 дыхательных техник
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center mt-10">
                    <FemaleDanceIcon className="mb-3" />
                    <div className="text-center leading-5">
                        Двигательные интуитивные упражнения
                    </div>
                </div>

                <div className=" flex flex-col justify-center border-[1px] border-transparent items-center mt-10">
                    <BrainIcon className="mb-3" />
                    <div className="text-center leading-5">
                        Коучинговые техники
                    </div>
                </div>
            </div>

            <div className="w-full text-center flex items-center justify-center mt-[100px] mb-10 md:text-[30px] text-[25px] font-light">
                <b className="font-black mr-2"> 5 </b> прямых{" "}
                <b className="font-black mr-2 ml-2"> эфиров </b> на темы...
            </div>

            <div className="w-full grid md:grid-cols-2 grid-cols-1 grid-rows-3 gap-4 text-[18px] font-light px-10">
                <div className="flex flex-row justify-between items-start p-2 shadow-[0px_0px_20px_5px_#D68C5624] rounded-lg">
                    <div className="md:w-[45px] md:h-[45px] w-[40px] h-[40px] rounded-full bg-[#45251A] flex justify-center items-center text-[#fff] font-bold md:mr-0 mr-4">
                        1
                    </div>
                    <div className="w-[85%] md:text-[20px] text-[17px] leading-6">
                        Знакомство. Диагностика внутреннего состояния. Эмоции.
                        Тело. Медитация «Женская сила, любовь к себе»
                    </div>
                </div>

                <div className="flex flex-row justify-between items-start p-2 shadow-[0px_0px_20px_5px_#D68C5624] rounded-lg">
                    <div className="md:w-[45px] md:h-[45px] w-[40px] h-[40px] rounded-full bg-[#45251A] flex justify-center items-center text-[#fff] font-bold md:mr-0 mr-4">
                        2
                    </div>
                    <div className="w-[85%] md:text-[20px] text-[17px] leading-6">
                        Личные границы. Коммуникация. Я и семья. Практики «Я и
                        мои роли», «Если люблю себя, то как меня видят другие»
                    </div>
                </div>

                <div className="flex flex-row justify-between items-start p-2 shadow-[0px_0px_20px_5px_#D68C5624] rounded-lg">
                    <div className="md:w-[45px] md:h-[45px] w-[40px] h-[40px] rounded-full bg-[#45251A] flex justify-center items-center text-[#fff] font-bold md:mr-0 mr-4">
                        3
                    </div>
                    <div className="w-[85%] md:text-[20px] text-[17px] leading-6">
                        Мои сильные и слабые стороны. Предназначение.
                        Арт-практика «Счастье внутри меня»
                    </div>
                </div>

                <div className="flex flex-row justify-between items-start p-2 shadow-[0px_0px_20px_5px_#D68C5624] rounded-lg">
                    <div className="md:w-[45px] md:h-[45px] w-[40px] h-[40px] rounded-full bg-[#45251A] flex justify-center items-center text-[#fff] font-bold md:mr-0 mr-4">
                        4
                    </div>
                    <div className="w-[85%] md:text-[20px] text-[17px] leading-6">
                        Деньги и любовь к себе. Практика расширения внутреннего
                        изобилия
                    </div>
                </div>

                <div className="flex flex-row justify-between items-start p-2 shadow-[0px_0px_20px_5px_#D68C5624] rounded-lg">
                    <div className="md:w-[45px] md:h-[45px] w-[40px] h-[40px] rounded-full bg-[#45251A] flex justify-center items-center text-[#fff] font-bold md:mr-0 mr-4">
                        5
                    </div>
                    <div className="w-[85%] md:text-[20px] text-[17px] leading-6">
                        Любовь к себе. Эгоизм и альтруизм. Внутренняя красота.
                        Практика «Я люблю мир, мир любит меня»
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MaraphoneProgram;
