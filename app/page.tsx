import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/about-me";
import FeedBack from "./components/FeedBack/feedback";
import WomanHappiness from "./components/WomanHappiness/woman-happiness";
import IfYou from "./components/IfYou/IfYou";
import MaraphoneProgram from "./components/MaraphoneProgram/MaraphoneProgram";
import AfterMaraphone from "./components/AfterMaraphone/AfterMaraphone";
import HowMaraphoneHappens from "./components/HowMaraphoneHappens/HowMaraphoneHappens";
import Price from "./components/Price/Price";
import LoveToMySelf from "./components/LoveToMyself/LoveToMyself";
import PaintYourLove from "./components/PaintYourLove/PaintYourLove";

export default function Home() {
    return (
        <main className="w-100% h-auto overflow-x-hidden bg-[#FFE8D8]">
            <Hero />
            <AboutMe />
            {/* <FeedBack /> */}
            <LoveToMySelf />
            <WomanHappiness />
            <IfYou />
            <MaraphoneProgram />
            <PaintYourLove />
            <AfterMaraphone />
            <HowMaraphoneHappens />
            <Price />
        </main>
    );
}
