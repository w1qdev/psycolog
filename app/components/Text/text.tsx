import { ReactNode } from "react";

type TextType = {
    children: ReactNode;
    bgColor?: "blue" | "purple" | "yellow" | "green";
};

const Text = ({ children, bgColor = "green" }: TextType) => {
    const backgroundColorClass = {
        blue: "bg-[#BCEAF7]",
        green: "bg-[#C5FAB4]",
        purple: "bg-[#EEB7F7]",
        yellow: "bg-[#FFF4B4]",
    }[bgColor];

    return (
        <span className={`px-[3px] rounded-md ${backgroundColorClass}`}>
            {children}
        </span>
    );
};

export default Text;
