import SectionTitle from "../SectionTitle/SectionTitle";
import MarkIcon from "../Icons/mark";

const AfterMaraphone = () => {
    return (
        <div className="container mx-auto px-4 max-w-[1000px] text-[#45251A]">
            <SectionTitle subtitle="Теперь ты...">
                <div className="w-full text-center">
                    После прохождения марафона{" "}
                    <b className="font-black">
                        ты станешь самодостаточной, целеустремленной и полна
                        энергии для улучшения своей жизни
                    </b>
                </div>
            </SectionTitle>

            <div className="w-full flex flex-col gap-5">
                <div className="w-full flex flex-row justify-start items-center gap-6">
                    <MarkIcon width="50" height="50" className="w-[auto]" />
                    <div className="md:text-[20px] text-[19px]">
                        <b className="font-bold">
                            Любишь и чувствуешь себя уверенно
                        </b>
                    </div>
                </div>

                <div className="w-full flex flex-row justify-start items-center gap-6">
                    <MarkIcon width="50" height="50" fill="#EEB7F7" />
                    <div className="md:text-[20px] text-[19px] w-[90%]">
                        Понимаешь, чего хочешь от жизни и как этого добиться,
                        <b className="font-black">
                            перестала бояться критики и общественного мнения
                        </b>
                        , потому что{" "}
                        <b className="font-black">
                            {" "}
                            научилась прислушиваться к себе{" "}
                        </b>
                    </div>
                </div>

                <div className="w-full flex flex-row justify-start items-center gap-6">
                    <MarkIcon width="50" height="50" fill="#00C7FF" />
                    <div className="md:text-[20px] text-[19px] w-[90%]">
                        По-настоящему{" "}
                        <b className="font-black">
                            ценишь себя и чувствуешь, что люди вокруг ценят тебя
                            еще больше.
                        </b>
                    </div>
                </div>

                <div className="w-full flex flex-row justify-start items-center gap-6">
                    <MarkIcon width="50" height="50" fill="#FFDA00" />
                    <div className="md:text-[20px] text-[19px] w-[90%]">
                        <b className="font-black">Видишь в зеркале красавицу</b>
                        , которая светится радостью, здоровьем и{" "}
                        <b className="font-black">
                            с удовольствием встречаешь новый день
                        </b>
                    </div>
                </div>

                <div className="w-full flex flex-row justify-start items-center gap-6">
                    <MarkIcon width="50" height="50" />
                    <div className="md:text-[20px] text-[19px] w-[90%]">
                        Ощущаешь, что теперь{" "}
                        <b className="font-black">
                            есть время, деньги и другие ресурсы для себя{" "}
                        </b>
                    </div>
                </div>

                <div className="w-full flex flex-row justify-start items-center gap-6">
                    <MarkIcon width="50" height="50" fill="#EEB7F7" />
                    <div className="md:text-[20px] text-[19px] w-[90%]">
                        <b className="font-black">Стала музой для мужа</b> - он
                        чаще хочет проводить с тобой время,{" "}
                        <b className="font-black">
                            делать приятные сюрпризы и дарить подарки
                        </b>
                    </div>
                </div>

                <div className="w-full flex flex-row justify-start items-center gap-6">
                    <MarkIcon width="50" height="50" fill="#00C7FF" />
                    <div className="md:text-[20px] text-[19px] w-[90%]">
                        <b className="font-black">
                            Твоё сознание полностью перевернётся,
                        </b>{" "}
                        и жизнь заиграет новыми{" "}
                        <b className="font-black">яркими красками</b>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AfterMaraphone;
