import SectionTitle from "../SectionTitle/SectionTitle";
import LaptopIcon from "../Icons/laptop";
import TelegramIcon from "../Icons/telegram";
import MicrophoneIcon from "../Icons/microphone";
import BooksIcon from "../Icons/books";
import Image from "next/image";

const HowMaraphoneHappens = () => {
    return (
        <div className="container mx-auto px-4 max-w-[1000px] text-[#45251A]">
            <SectionTitle>
                <div className="text-center">
                    Как будет <b className="font-black">проходить</b> марафон
                </div>
            </SectionTitle>

            <div className="w-full flex flex-col gap-5 items-start">
                <div className="w-full flex flex-row items-center gap-4">
                    <LaptopIcon className="w-[10%]" />
                    <div className="text-[20px] font-light w-[95%]">
                        <b className="font-bold">
                            Продолжительность марафона 35 дней (5 недель).
                        </b>{" "}
                        Участвовать можно из любой точки мира, нужен только
                        работающий интернет
                    </div>
                </div>

                <div className="w-full flex flex-row justify-start items-center gap-4">
                    <TelegramIcon className="w-[10%]" />
                    <div className="text-[20px] font-light text-left w-[95%]">
                        <b className="font-bold">
                            Марафон будет проходить в закрытом telegram канале с
                            заданиями .
                        </b>{" "}
                        Общий чат для общения
                    </div>
                </div>

                <div className="w-full flex flex-row justify-start items-center gap-4">
                    <MicrophoneIcon
                        width="43"
                        height="43"
                        className="w-[10%]"
                    />
                    <div className="text-[20px] font-light w-[95%]">
                        <b className="font-bold">
                            {" "}
                            Задания выдаются с понедельника по пятницу.
                        </b>{" "}
                        Один раз в неделю прямой эфир. Всего 5 эфиров
                    </div>
                </div>

                <div className="w-full flex flex-row justify-start items-center gap-4">
                    <div className="w-[10%] h-[10%] flex justify-center items-center">
                        <Image
                            alt="psycolog"
                            src="/images/psycolog.png"
                            width={50}
                            height={50}
                        />
                    </div>
                    <div className="text-[20px] font-light w-[95%]">
                        <b className="font-bold">
                            Индивидуальная обратная связь от психолога
                        </b>
                    </div>
                </div>

                <div className="w-full flex flex-row justify-start items-center gap-4">
                    <BooksIcon className="w-[10%]" />
                    <div className="text-[20px] font-light w-[95%]">
                        <b className="font-bold">
                            Доступ ко всем материалам остается навсегда
                        </b>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowMaraphoneHappens;
