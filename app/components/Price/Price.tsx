import SectionTitle from "../SectionTitle/SectionTitle";
import MarkIcon from "../Icons/mark";
import CrossMarkIcon from "../Icons/crossMark";

const Price = () => {
    return (
        <div
            id="courses"
            className="container mx-auto md:max-w-[1000px] max-w-[800px] px-4 mb-10 text-[#45251A]"
        >
            <SectionTitle>
                <b className="font-black">Стоимость</b> участия
            </SectionTitle>

            <div className="w-full flex justify-evenly items-center md:flex-row flex-col">
                <div className="flex flex-col justify-start md:mb-0 mb-6 items-start md:w-[40%] w-full h-[100%] rounded-md border-[1px] border-[#45251A]">
                    <div className="w-[100%] h-[14%] p-4 flex justify-center items-center text-[20px] border-b-[1px] border-b-[#45251A]">
                        Пакет <b className="font-black ml-1">«Я любимая»</b>
                    </div>

                    <div className="w-[100%] h-[80%] flex flex-col gap-3 justify-start items-start text-[18px] py-[20px] px-[15px]">
                        <div className="flex flex-row gap-4 justify-start items-center">
                            <MarkIcon className="w-[55px] h-[55px]" />

                            <div className="text-[18px] leading-5 w-[90%]">
                                Доступ ко всем материалам марафона
                            </div>
                        </div>

                        <div className="flex flex-row gap-4 justify-start items-center">
                            <MarkIcon className="w-[55px] h-[55px]" />

                            <div className="text-[16px] leading-5 w-[90%]">
                                Добавление в закрытый Telegram чат, где проходит
                                совместная групповая работа, поддержка и
                                мотивация
                            </div>
                        </div>

                        <div className="flex flex-row gap-4 justify-start items-center">
                            <MarkIcon className="w-[55px] h-[55px]" />

                            <div className="text-[18px] leading-5 w-[90%]">
                                Экспресс расшифровка рисунка
                            </div>
                        </div>

                        <div className="flex flex-row gap-4 justify-start items-center">
                            <CrossMarkIcon className="w-[55px] h-[55px]" />

                            <div className="text-[18px] leading-5 w-[90%]">
                                3 индивидуальных консультации, длительностью 60
                                минут
                            </div>
                        </div>

                        <div className="flex flex-row gap-4 justify-start items-center">
                            <CrossMarkIcon className="w-[55px] h-[55px]" />

                            <div className="text-[18px] leading-5 w-[90%]">
                                В подарок марафон{" "}
                                <b className="font-bold">«Идеальное утро»</b>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center w-[100%] h-[20%] text-[#45251A]">
                        <div className="">
                            <b className="font-black text-[35px] leading-3">
                                6 900
                            </b>{" "}
                            рублей
                        </div>
                        <div className="text-[13px] leading-4">
                            Возможна рассрочка через банк
                        </div>

                        <a
                            href="https://payform.ru/ns5krwq/"
                            className="border-[#45251A] border-[1px] w-[80%] h-[50px] mt-2 mb-4 rounded-md transition-colors hover:bg-[#45251A] hover:text-[#fff] flex justify-center items-center"
                        >
                            Принять участие
                        </a>
                    </div>
                </div>

                <div className="flex flex-col justify-start items-start md:w-[40%] w-full h-[100%] rounded-md border-[1px] border-[#45251A] text-[#fff] bg-[#45251A]">
                    <div className="w-[100%] h-[14%] p-4 flex justify-center items-center text-[20px] border-b-[1px] border-b-[#fff]">
                        Пакет <b className="font-black ml-1">«Я счастливая»</b>
                    </div>

                    <div className="w-[100%] h-[80%] flex flex-col gap-3 justify-start items-start text-[18px] py-[20px] px-[15px]">
                        <div className="flex flex-row gap-4 justify-start items-center">
                            <MarkIcon
                                className="w-[55px] h-[55px]"
                                fill="transparent"
                                strokeFill="#fff"
                            />

                            <div className="text-[18px] leading-5 w-[90%]">
                                Доступ ко всем материалам марафона
                            </div>
                        </div>

                        <div className="flex flex-row gap-4 justify-start items-center">
                            <MarkIcon
                                className="w-[55px] h-[55px]"
                                fill="transparent"
                                strokeFill="#fff"
                            />

                            <div className="text-[16px] leading-5 w-[90%]">
                                Добавление в закрытый Telegram чат, где проходит
                                совместная групповая работа, поддержка и
                                мотивация
                            </div>
                        </div>

                        <div className="flex flex-row gap-4 justify-start items-center">
                            <MarkIcon
                                className="w-[55px] h-[55px]"
                                fill="transparent"
                                strokeFill="#fff"
                            />

                            <div className="text-[18px] leading-5 w-[90%]">
                                Экспресс расшифровка рисунка
                            </div>
                        </div>

                        <div className="flex flex-row gap-4 justify-start items-center">
                            <MarkIcon
                                className="w-[55px] h-[55px]"
                                fill="transparent"
                                strokeFill="#fff"
                            />

                            <div className="text-[18px] leading-5 w-[90%]">
                                3 индивидуальных консультации, длительностью 60
                                минут
                            </div>
                        </div>

                        <div className="flex flex-row gap-4 justify-start items-center">
                            <MarkIcon
                                className="w-[55px] h-[55px]"
                                fill="transparent"
                                strokeFill="#fff"
                            />

                            <div className="text-[18px] leading-5 w-[90%]">
                                В подарок марафон{" "}
                                <b className="font-bold">«Идеальное утро»</b>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center w-[100%] h-[20%] text-[#fff]">
                        <div className="">
                            <b className="font-black text-[35px] leading-3">
                                12 900
                            </b>{" "}
                            рублей
                        </div>
                        <div className="text-[13px] leading-4">
                            Возможна рассрочка через банк
                        </div>

                        <a
                            href="https://payform.ru/3t5krxS/"
                            className="border-[#fff] border-[1px] w-[80%] h-[50px] mt-2 mb-4 rounded-md transition-colors hover:bg-[#fff] hover:text-[#45251A] flex justify-center items-center"
                        >
                            Принять участие
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Price;
