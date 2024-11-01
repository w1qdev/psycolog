import { defaultIconType } from "@/app/types/icons";

type BrainIconProps = defaultIconType;

const BrainIcon = ({
    width = "57",
    height = "57",
    fill = "#45251A",
    className,
}: BrainIconProps) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 57 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M22.6052 52.25C21.4415 48.4555 19.686 45.6265 17.3387 43.7629C13.8177 40.9688 8.22342 42.7061 6.15717 39.8228C4.09092 36.9396 7.60473 31.6386 8.83736 28.5107C10.07 25.3828 4.1111 24.2772 4.80698 23.389C5.2701 22.7968 8.282 21.0884 13.8427 18.2638C15.422 9.25458 21.257 4.75 31.3476 4.75C46.4835 4.75 52.25 17.5821 52.25 25.745C52.25 33.9055 45.2675 42.6978 35.321 44.5942C34.4319 45.8894 35.7144 48.4413 39.1685 52.25"
                stroke={fill}
                strokeWidth="3.11133"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.1563 17.2185C22.3796 20.2277 22.6104 22.341 23.8486 23.5586C25.0859 24.7754 27.1949 25.571 30.1756 25.9455C29.4987 29.827 30.3232 31.6479 32.6491 31.408C34.9743 31.1689 36.3715 30.2031 36.841 28.5105C40.4748 29.5317 42.4444 28.6767 42.75 25.9455C43.2072 21.8486 40.9984 18.5818 40.0924 18.5818C39.1863 18.5818 36.841 18.4714 36.841 17.2185C36.841 15.9657 34.1003 15.2592 31.6267 15.2592C29.1531 15.2592 30.6411 13.5907 27.2448 14.2498C24.9806 14.6892 23.6178 15.6787 23.1563 17.2185Z"
                fill={fill}
                stroke={fill}
                strokeWidth="2.66667"
                strokeLinejoin="round"
            />
            <path
                d="M36.2187 30.2812C35.011 31.0306 33.3545 32.2763 32.6562 33.25C30.9118 35.6844 29.4975 37.1664 29.1887 38.722"
                stroke={fill}
                strokeWidth="2.66667"
                strokeLinecap="round"
            />
        </svg>
    );
};

export default BrainIcon;
