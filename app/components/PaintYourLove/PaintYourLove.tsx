const PaintYourLove = () => {
    return (
        <div
            className="h-[600px] bg-cover bg-center mt-[100px] bg-black/65 bg-blend-overlay"
            style={{ backgroundImage: "url(/images/paintlove.png)" }}
        >
            <div className="container mx-auto h-full flex items-center justify-center text-center px-4">
                <div className="text-white max-w-2xl">
                    <h1 className="text-2xl md:text-2xl mb-[60px] font-light">
                        Когда мы сформируем внутреннюю опору любви к себе,
                        перейдём к закреплению наработанного состояния в
                        потоковом рисунке на холсте
                    </h1>

                    <p className="p-5 md:text-2xl text-[20px] rounded-md mb-[60px] bg-[#FFF1FF]/10 backdrop-blur-md">
                        Создадим ИЗОБИЛИЕ ЛЮБВИ ВО ВСЕХ СФЕРАХ ЖИЗНИ на холсте
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PaintYourLove;
