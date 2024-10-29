const LoveToMyself = () => {
    return (
        <div
            className="h-[600px] bg-cover bg-center mt-[100px] bg-black/60 bg-blend-overlay"
            style={{ backgroundImage: "url(/images/selflove.png)" }}
        >
            <div className="container mx-auto h-full flex items-center justify-center text-center px-4">
                <div className="text-white max-w-2xl">
                    <h1 className="text-4xl md:text-5xl mb-[60px]">
                        <b>5</b> - недельный марафон <b>«ЛЮБОВЬ К СЕБЕ»</b>
                    </h1>

                    <p className="p-5 rounded-md mb-[60px] bg-[#FFF1FF]/10 backdrop-blur-md">
                        ЛЮБОВЬ К СЕБЕ - ЭТО ГЛАВНАЯ ОПОРА, НА КОТОРОЙ СТРОИТСЯ
                        СЧАСТЛИВАЯ ЖИЗНЬ
                    </p>

                    <p className="text-lg md:text-xl">
                        Дорогая, приветствую тебя! Что чувствуешь прямо сейчас?
                        Чувствуешь предвкушение и заинтересованность? Я очень
                        рада!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoveToMyself;
