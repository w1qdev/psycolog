import dynamic from "next/dynamic";

import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/about-me";

const LoveToMySelf = dynamic(
    () => import("./components/LoveToMyself/LoveToMyself")
);
const WomanHappiness = dynamic(
    () => import("./components/WomanHappiness/woman-happiness")
);
const IfYou = dynamic(() => import("./components/IfYou/IfYou"));
const MaraphoneProgram = dynamic(
    () => import("./components/MaraphoneProgram/MaraphoneProgram")
);
const PaintYourLove = dynamic(
    () => import("./components/PaintYourLove/PaintYourLove")
);
const Price = dynamic(() => import("./components/Price/Price"));
const HowMaraphoneHappens = dynamic(
    () => import("./components/HowMaraphoneHappens/HowMaraphoneHappens")
);
const AfterMaraphone = dynamic(
    () => import("./components/AfterMaraphone/AfterMaraphone")
);

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
