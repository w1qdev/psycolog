import SectionTitle from "../SectionTitle/SectionTitle";
import Text from "../Text/text";
import Key from "../Icons/key";

const WomanHappiness = () => {
    return (
        <div className="container mx-auto px-4 max-w-[1000px]">
            <SectionTitle>
                <div>
                    Счастье <b className="font-black">женщины</b>
                </div>
            </SectionTitle>

            <div className="w-full flex flex-col gap-4 px-10">
                <div className="w-full flex flex-row justify-between items-start">
                    <Key className="w-6 h-6 mt-1 mr-6" />
                    <div className="w-[93%] md:text-[20px] text-[18px] text-left leading-7 font-light">
                        В гармоничных
                        <Text bgColor="blue">отношениях с мужчиной</Text>, где
                        есть <Text bgColor="blue">любовь</Text>, забота,
                        понимание, искренность,
                        <Text bgColor="blue">верность</Text>, уважение.
                    </div>
                </div>

                <div className="w-full flex flex-row justify-between items-start">
                    <Key className="w-6 h-6 mt-1 mr-6" />
                    <div className="w-[93%] md:text-[20px] text-[18px] text-left leading-7 font-light">
                        <Text bgColor="purple">
                            В доверительных отношениях с детьми
                        </Text>
                        и близкими людьми.
                    </div>
                </div>

                <div className="w-full flex flex-row justify-between items-start">
                    <Key className="w-6 h-6 mt-1 mr-6" />
                    <div className="w-[93%] md:text-[20px] text-[18px] text-left leading-7 font-light">
                        В <Text bgColor="yellow">любимом деле</Text>, где есть
                        <Text bgColor="yellow">удовольствие</Text>, желание
                        творить, <Text bgColor="yellow">быть ценной </Text> и
                        полезной и взамен получать
                        <Text bgColor="yellow">достойное вознаграждение.</Text>
                    </div>
                </div>

                <div className="w-full flex flex-row justify-between items-start">
                    <Key className="w-6 h-6 mt-1 mr-6" />
                    <div className="w-[93%] md:text-[20px] text-[18px] text-left leading-7 font-light">
                        В <Text bgColor="green">исполнении желаний</Text>, когда
                        всё задуманное
                        <Text bgColor="green">реализуется быстро</Text> и есть
                        внутреннее состояние
                        <Text bgColor="green">
                            удовлетворения и благодарности
                        </Text>
                        .
                    </div>
                </div>

                <div className="w-full flex flex-row justify-between items-start">
                    <Key className="w-6 h-6 mt-1 mr-6" />
                    <div className="w-[93%] md:text-[20px] text-[18px] text-left leading-7 font-light">
                        В красивом <Text bgColor="blue">здоровом теле.</Text>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WomanHappiness;
