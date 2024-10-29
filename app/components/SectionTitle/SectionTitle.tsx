import { ReactNode } from "react";
import Angle from "../Icons/angle";

type SectionTitleType = {
    children: ReactNode;
    subtitle?: string;
    hasArrow?: boolean;
};

const SectionTitle = ({
    children,
    subtitle,
    hasArrow = true,
}: SectionTitleType) => {
    return (
        <div className="w-full flex flex-col justify-center items-center mt-[100px] mb-7">
            <div className="text-3xl mb-3 text-[#45251A] font-light">
                {children}
            </div>
            {subtitle && (
                <div className="text-2xl font-light mt-3 mb-3">{subtitle}</div>
            )}
            {hasArrow && <Angle />}
        </div>
    );
};

export default SectionTitle;
