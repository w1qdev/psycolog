import SectionTitle from "../SectionTitle/SectionTitle";
import Carousel from "./Carousel";

const FeedBack = () => {
    return (
        <div id="feedback" className="container mx-auto px-4 max-w-[1000px]">
            <SectionTitle>
                <div>
                    <b className="font-black">Отзывы</b> клиентов
                </div>
            </SectionTitle>

            <div>
                <Carousel />
            </div>
        </div>
    );
};

export default FeedBack;
