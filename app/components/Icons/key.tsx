import { defaultIconType } from "@/app/types/icons";

type KeyIconProps = defaultIconType & {
    className: string;
};

const Key = ({
    width = "20",
    height = "20",
    fill = "#343434",
    className,
}: KeyIconProps) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M1.06667 30.9333L18.1333 13.8667M5.33333 26.6667L9.6 30.9333M9.6 22.4L13.8667 26.6667M23.4667 16C21.4864 16 19.5872 15.2133 18.1869 13.813C16.7867 12.4128 16 10.5136 16 8.53332C16 6.55303 16.7867 4.65386 18.1869 3.25359C19.5872 1.85331 21.4864 1.06665 23.4667 1.06665C25.447 1.06665 27.3461 1.85331 28.7464 3.25359C30.1467 4.65386 30.9333 6.55303 30.9333 8.53332C30.9333 10.5136 30.1467 12.4128 28.7464 13.813C27.3461 15.2133 25.447 16 23.4667 16Z"
                stroke={fill}
                strokeWidth="2.13333"
            />
        </svg>
    );
};

export default Key;
